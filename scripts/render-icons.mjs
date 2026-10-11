// Renders media-src/og-image.html and media-src/icon.html with headless
// Chrome and writes public/og-image.png, public/favicon.ico, public/favicon-32.png
// and public/apple-touch-icon.png. Run once after changing a template, then
// commit the outputs. Needs Chrome or Chromium; set CHROME_BIN to point at
// the binary if it is not found automatically.
//
// The browser runs sandboxed, with a fresh private profile directory and a
// DevTools port chosen by the OS, so other local users cannot predict or
// attach to it. If Chrome cannot start its sandbox on this machine (common in
// containers), set CHROME_NO_SANDBOX=1 to run it without one.
import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  ".."
);
const LAUNCH_TIMEOUT_MS = 10_000;
const NO_SANDBOX = process.env.CHROME_NO_SANDBOX === "1";

const CANDIDATES = [
  process.env.CHROME_BIN,
  "google-chrome",
  "chromium",
  "chromium-browser",
  path.join(
    os.homedir(),
    ".cache/ms-playwright/chromium_headless_shell-1208/chrome-linux/headless_shell"
  ),
].filter(Boolean);

const getJSON = (url) =>
  new Promise((res, rej) =>
    http
      .get(url, (r) => {
        let d = "";
        r.on("data", (c) => (d += c));
        r.on("end", () => res(JSON.parse(d)));
      })
      .on("error", rej)
  );
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Kills the browser and waits for it to exit, so its profile directory can be
// deleted without Chrome writing new files into it on the way down.
async function stop(proc) {
  if (proc.exitCode === null && proc.signalCode === null) {
    const exited = new Promise((r) => proc.once("exit", r));
    proc.kill();
    await Promise.race([exited, sleep(5_000)]);
  }
}

// Chrome writes the DevTools port it was given (with port 0, a random free
// one) to this file in its profile directory once it is listening.
async function readDevToolsPort(profileDir) {
  try {
    const text = await fs.readFile(
      path.join(profileDir, "DevToolsActivePort"),
      "utf8"
    );
    const port = Number(text.split("\n")[0]);
    return Number.isInteger(port) && port > 0 ? port : null;
  } catch {
    return null;
  }
}

// Starts the first candidate browser whose DevTools endpoint answers. Each
// failed candidate is recorded with its actual cause (binary missing, process
// exited, or port never answered) so the final error says what went wrong.
async function launch() {
  const attempts = [];
  for (const bin of CANDIDATES) {
    // mkdtemp creates the directory with a random name and owner-only access.
    const profileDir = await fs.mkdtemp(
      path.join(os.tmpdir(), "render-icons-")
    );
    const proc = spawn(
      bin,
      [
        "--headless",
        "--remote-debugging-address=127.0.0.1",
        "--remote-debugging-port=0",
        ...(NO_SANDBOX ? ["--no-sandbox"] : []),
        "--disable-gpu",
        "--hide-scrollbars",
        `--user-data-dir=${profileDir}`,
        "about:blank",
      ],
      { stdio: "ignore" }
    );
    let failure = null;
    proc.on("error", (err) => {
      failure ??= err.code === "ENOENT" ? "binary not found" : err.message;
    });
    proc.on("exit", (code, signal) => {
      failure ??= signal
        ? `exited on signal ${signal}`
        : `exited with code ${code}`;
    });

    const deadline = Date.now() + LAUNCH_TIMEOUT_MS;
    while (!failure && Date.now() < deadline) {
      const port = await readDevToolsPort(profileDir);
      if (port) {
        try {
          await getJSON(`http://127.0.0.1:${port}/json/version`);
          return { proc, port, profileDir };
        } catch {
          // Port file written but not answering yet; keep polling.
        }
      }
      await sleep(250);
    }
    await stop(proc);
    await fs.rm(profileDir, { recursive: true, force: true });
    const hint =
      !NO_SANDBOX && failure?.startsWith("exited")
        ? " (if the sandbox cannot start here, retry with CHROME_NO_SANDBOX=1)"
        : "";
    attempts.push(
      `${bin}: ${failure ?? `started, but DevTools did not answer within ${LAUNCH_TIMEOUT_MS / 1000}s`}${hint}`
    );
  }
  throw new Error(
    "Could not start a browser. Set CHROME_BIN to a Chrome or Chromium binary.\n  " +
      attempts.join("\n  ")
  );
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.p = new Map();
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      const h = this.p.get(m.id);
      if (h) {
        this.p.delete(m.id);
        m.error ? h.rej(new Error(m.error.message)) : h.res(m.result);
      }
    };
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((res, rej) => {
      this.p.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async eval(expression) {
    const r = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    return r.result.value;
  }
}

async function render(cdp, file, width, height, transparent) {
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
  });
  if (transparent)
    await cdp.send("Emulation.setDefaultBackgroundColorOverride", {
      color: { r: 0, g: 0, b: 0, a: 0 },
    });
  await cdp.send("Page.navigate", {
    url: `file://${path.join(ROOT, "media-src", file)}`,
  });
  for (let i = 0; i < 100; i++) {
    if ((await cdp.eval("document.readyState")) === "complete") break;
    await sleep(100);
  }
  await cdp.eval("document.fonts.ready.then(() => true)");
  await sleep(500);
  const shot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    clip: { x: 0, y: 0, width, height, scale: 1 },
  });
  return Buffer.from(shot.data, "base64");
}

// Minimal ICO writer: a directory of PNG-encoded entries, which every modern
// browser and Windows (since Vista) accept.
function toIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length);
  let offset = 6 + dir.length;
  pngs.forEach(({ size, data }, i) => {
    const o = 16 * i;
    dir.writeUInt8(size === 256 ? 0 : size, o);
    dir.writeUInt8(size === 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += data.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)]);
}

const chrome = await launch();
try {
  const target = (await getJSON(`http://127.0.0.1:${chrome.port}/json`)).find(
    (t) => t.type === "page"
  );
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  const cdp = new CDP(ws);
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");

  const og = await render(cdp, "og-image.html", 1200, 630, false);
  await fs.writeFile(
    path.join(ROOT, "public/og-image.png"),
    await sharp(og).png({ compressionLevel: 9 }).toBuffer()
  );

  const icon = await render(cdp, "icon.html", 512, 512, true);
  const at = (size) => sharp(icon).resize(size, size).png().toBuffer();
  await fs.writeFile(
    path.join(ROOT, "public/apple-touch-icon.png"),
    await at(180)
  );
  await fs.writeFile(path.join(ROOT, "public/favicon-32.png"), await at(32));
  const entries = await Promise.all(
    [16, 32, 48].map(async (size) => ({ size, data: await at(size) }))
  );
  await fs.writeFile(path.join(ROOT, "public/favicon.ico"), toIco(entries));

  ws.close();
  console.log(
    "wrote public/og-image.png, favicon.ico, favicon-32.png, apple-touch-icon.png"
  );
} finally {
  await stop(chrome.proc);
  await fs.rm(chrome.profileDir, { recursive: true, force: true });
}
