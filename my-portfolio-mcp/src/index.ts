import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import openapiYaml from "../openapi.yaml";

const SERVER_INFO = { name: "my-portfolio-mcp", version: "1.1.0" };

// Both files are published from the main branch of the portfolio repo.
const RESUME_URL =
  "https://raw.githubusercontent.com/czhou578/v3/main/public/resume.md";
const PROJECTS_URL =
  "https://raw.githubusercontent.com/czhou578/v3/main/public/projects.json";

// Bindings declared in wrangler.toml. The rate limiter is optional so the
// worker still runs if the binding is removed or unavailable.
type Env = { RATE_LIMITER?: RateLimit };

// Limits on what one caller can make the worker do. A real job description is
// a few thousand characters; the request cap leaves room for the JSON-RPC
// envelope around one.
const MAX_JOB_DESCRIPTION_CHARS = 20_000;
const MAX_REQUEST_BODY_BYTES = 64 * 1024;
const UPSTREAM_TIMEOUT_MS = 5_000;
// raw.githubusercontent.com itself serves these files with max-age=300.
const UPSTREAM_CACHE_SECONDS = 300;

// Shape of public/projects.json, written by scripts/generate-agent-files.mjs.
type AgentProject = {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
};

// ---------------------------------------------------------------------------
// Data access
// ---------------------------------------------------------------------------

// Every tool call reads from GitHub, so cache the response at the edge and
// give up quickly if GitHub is slow rather than holding the request open.
async function fetchUpstream(url: string, what: string): Promise<Response> {
  const res = await fetch(url, {
    cf: { cacheTtl: UPSTREAM_CACHE_SECONDS, cacheEverything: true },
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Failed to fetch ${what} (HTTP ${res.status})`);
  return res;
}

async function fetchText(url: string, what: string): Promise<string> {
  return (await fetchUpstream(url, what)).text();
}

/** Body of a `## Heading` section of a Markdown document, up to the next `## `. */
function markdownSection(markdown: string, heading: string): string {
  const pattern = new RegExp(
    `## ${heading}\\r?\\n([\\s\\S]*?)(?=\\r?\\n## |$)`
  );
  const body = markdown.match(pattern)?.[1]?.trim();
  if (!body)
    throw new Error(`Could not find the ${heading} section in resume.`);
  return body;
}

async function getExperiences(): Promise<string> {
  const resume = await fetchText(RESUME_URL, "resume");
  return "=== Experiences ===\n" + markdownSection(resume, "Experience");
}

async function getProjects(): Promise<string> {
  const res = await fetchUpstream(PROJECTS_URL, "projects");
  const { projects } = (await res.json()) as { projects: AgentProject[] };
  let result = "=== Projects ===\n";
  for (const p of projects) {
    result += `- ${p.name} (${p.date})\n`;
    result += `  Description: ${p.description}\n`;
    result += `  Tech: ${p.technologies.join(", ")}\n`;
    if (p.github) result += `  GitHub: ${p.github}\n`;
    if (p.live) result += `  Live: ${p.live}\n`;
    result += "\n";
  }
  return result;
}

// The resume's Skills section is a list of lines shaped like
// "- **Frontend:** HTML5/CSS3, TypeScript, Cloud (AWS, GCP)". Each line is
// split on commas, parentheses, and slashes into individual lowercase skills.
function extractSkills(skillsSection: string): Set<string> {
  const skills = new Set<string>();
  for (const line of skillsSection.split(/\r?\n/)) {
    const cleanLine = line.replace(/^- \*\*.*?\*\*/, "").trim();
    if (!cleanLine) continue;
    for (const item of cleanLine.replace(/[()]/g, ",").split(",")) {
      for (const part of item.split("/")) {
        const skill = part.trim().toLowerCase();
        // "es6" and "cloud" are qualifiers in the resume, not skills.
        if (skill && skill !== "es6" && skill !== "cloud") skills.add(skill);
      }
    }
  }
  return skills;
}

async function matchJob(jobText: string): Promise<string> {
  const resume = await fetchText(RESUME_URL, "resume");
  const skills = extractSkills(markdownSection(resume, "Skills"));
  const jobTextLower = jobText.toLowerCase();

  const matched = [...skills].filter((skill) => {
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Word-boundary-ish match that still works for "c++" and "node.js".
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(
      jobTextLower
    );
  });

  let output = "=== Job Match Results ===\n";
  if (matched.length > 0) {
    output += `Found ${matched.length} matching skills from your resume:\n`;
    for (const s of matched) output += `- ${s}\n`;
  } else {
    output += "No explicit keyword matches found from your skills section.\n";
  }
  return output;
}

// ---------------------------------------------------------------------------
// Tools: one table drives both tools/list and tools/call
// ---------------------------------------------------------------------------

type ToolSpec = {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
  run: (args: Record<string, unknown>) => Promise<string>;
};

const TOOLS: ToolSpec[] = [
  {
    name: "get_experiences",
    description: "Gets the professional experiences from Colin's resume.",
    inputSchema: { type: "object", properties: {} },
    run: getExperiences,
  },
  {
    name: "get_projects",
    description: "Gets the list of Colin's past projects.",
    inputSchema: { type: "object", properties: {} },
    run: getProjects,
  },
  {
    name: "match_job",
    description:
      "Reads a job description string and outputs matching technical skills from Colin's resume.",
    inputSchema: {
      type: "object",
      properties: {
        job_description: {
          type: "string",
          description: "The full text of the job description.",
        },
      },
      required: ["job_description"],
    },
    run: async (args) => {
      const jobDescription = args.job_description;
      if (typeof jobDescription !== "string" || !jobDescription.trim()) {
        throw new McpError(
          ErrorCode.InvalidParams,
          "job_description must be a non-empty string"
        );
      }
      if (jobDescription.length > MAX_JOB_DESCRIPTION_CHARS) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `job_description must be at most ${MAX_JOB_DESCRIPTION_CHARS} characters`
        );
      }
      return matchJob(jobDescription);
    },
  },
];

// A Server can be bound to only one transport, and the transport below is
// per-request, so a fresh Server is created for every request. Construction
// is cheap: it only registers the two handlers.
function createServer(): Server {
  const server = new Server(SERVER_INFO, { capabilities: { tools: {} } });

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: TOOLS.map(({ name, description, inputSchema }) => ({
      name,
      description,
      inputSchema,
    })),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const tool = TOOLS.find((t) => t.name === request.params.name);
    if (!tool) {
      throw new McpError(
        ErrorCode.InvalidParams,
        `Unknown tool: ${request.params.name}`
      );
    }
    try {
      const text = await tool.run(request.params.arguments ?? {});
      return { content: [{ type: "text", text }] };
    } catch (err) {
      if (err instanceof McpError) throw err;
      // Failures inside a tool (for example GitHub being unreachable) are
      // reported as a tool result rather than a protocol error, so the
      // calling model sees what went wrong and can respond to it.
      const message = err instanceof Error ? err.message : String(err);
      console.error(`tool ${tool.name} failed: ${message}`);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true,
      };
    }
  });

  return server;
}

// ---------------------------------------------------------------------------
// HTTP
// ---------------------------------------------------------------------------

const INFO_TEXT = [
  "Colin Zhou Portfolio MCP Server",
  "POST / — MCP over Streamable HTTP (JSON-RPC 2.0: initialize, tools/list, tools/call)",
  "GET /openapi.yaml — OpenAPI 3.0 specification",
  "",
  "Tools: get_experiences | get_projects | match_job",
  "Docs: https://czhou578.github.io/v3",
].join("\n");

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Accept, Authorization, Mcp-Session-Id, MCP-Protocol-Version",
  "Access-Control-Expose-Headers": "Mcp-Session-Id, MCP-Protocol-Version",
};

function withCors(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(CORS_HEADERS)) {
    headers.set(name, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// The Streamable HTTP spec requires clients to accept both JSON and SSE, and
// the SDK transport enforces that with a 406. Real MCP clients send the header;
// this fills it in for plain JSON-RPC callers such as curl and the examples in
// llms.txt, which would otherwise be rejected.
function withDefaultAccept(request: Request): Request {
  const accept = request.headers.get("accept") ?? "";
  if (
    accept.includes("text/event-stream") &&
    accept.includes("application/json")
  ) {
    return request;
  }
  const headers = new Headers(request.headers);
  headers.set("accept", "application/json, text/event-stream");
  return new Request(request, { headers });
}

function tooManyRequests(): Response {
  return Response.json(
    {
      jsonrpc: "2.0",
      error: { code: -32000, message: "Too many requests; try again shortly." },
      id: null,
    },
    { status: 429, headers: { "Retry-After": "60" } }
  );
}

// Per-IP limit on MCP calls (see [[ratelimits]] in wrangler.toml). Each call
// fetches from GitHub and, for match_job, scans the caller's text, so this
// keeps one client from using up the account's daily request allowance.
async function isRateLimited(request: Request, env: Env): Promise<boolean> {
  if (!env.RATE_LIMITER) return false;
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const { success } = await env.RATE_LIMITER.limit({ key: ip });
  if (!success) console.warn(`rate limited ${ip}`);
  return !success;
}

function methodNotAllowed(): Response {
  return Response.json(
    {
      jsonrpc: "2.0",
      error: { code: -32000, message: "Method not allowed." },
      id: null,
    },
    { status: 405, headers: { Allow: "POST, OPTIONS" } }
  );
}

async function handleMcp(request: Request): Promise<Response> {
  const server = createServer();
  const transport = new WebStandardStreamableHTTPServerTransport({
    // Stateless: no session ids, every request carries everything it needs.
    sessionIdGenerator: undefined,
    // Plain JSON bodies instead of SSE streams; nothing here streams.
    enableJsonResponse: true,
    // The SDK default is 4 MB; nothing legitimate here comes close.
    maxRequestBodySize: MAX_REQUEST_BODY_BYTES,
  });
  await server.connect(transport);
  return transport.handleRequest(withDefaultAccept(request));
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (url.pathname === "/openapi.yaml") {
      return withCors(
        new Response(openapiYaml, {
          headers: { "Content-Type": "application/yaml" },
        })
      );
    }

    if (url.pathname !== "/" && url.pathname !== "/mcp") {
      return withCors(new Response("Not found", { status: 404 }));
    }

    // People and crawlers get a short description. MCP clients that open the
    // optional server-to-client stream send Accept: text/event-stream and go
    // to the transport, which correctly answers 405 in stateless mode.
    const wantsEventStream = (request.headers.get("accept") ?? "").includes(
      "text/event-stream"
    );
    if (request.method === "GET" && !wantsEventStream) {
      return withCors(
        new Response(INFO_TEXT, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
      );
    }

    // A stateless server has no server-to-client stream to open and no
    // session to end, so the GET and DELETE halves of Streamable HTTP are
    // declined here, as in the SDK's own stateless example. Handing a GET to
    // the transport would open an SSE stream that never carries anything,
    // which the Workers runtime cancels as a hung request.
    if (request.method === "GET" || request.method === "DELETE") {
      return withCors(methodNotAllowed());
    }

    if (await isRateLimited(request, env)) {
      return withCors(tooManyRequests());
    }

    return withCors(await handleMcp(request));
  },
} satisfies ExportedHandler<Env>;

export default worker;
