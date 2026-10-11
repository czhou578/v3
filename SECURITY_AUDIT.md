# Security Audit: czhou578/v3

- **Date:** 2026-10-10
- **Scope:** Next.js portfolio site (GitHub Pages), Cloudflare MCP worker (`my-portfolio-mcp`), CLI (`bin/cli.js`), build scripts, CI workflow, git history, and the two live public endpoints.
- **Audited revision:** `8122918` on `main` (working tree identical for all audited files).
- **Method:** Full read of all first-party source and configuration; sink grep; dependency audit; lockfile provenance check; git history scan across all branches; comparison of built `out/` with the deployed `gh-pages` branch; read-only HTTP probes of the live site and worker.
- **Result:** No Critical or High findings. One Medium, six Low, four Info.

---

## Remediation status (updated 2026-10-11)

| ID         | Status                                                               | What was done                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | What remains                                                                                                                                                                             |
| ---------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F1         | Fixed and live (commit `f737477`, CI run green)                      | `build` job has `contents: read`, `persist-credentials: false`, and `npm ci --ignore-scripts`. Only the `deploy` job can write, and it runs no npm code. Dependabot entries have a 7-day cooldown.                                                                                                                                                                                                                                                                                                                                                                                                                 | Add rulesets in the GitHub UI: `main` (require the `build` check, block force pushes) and `gh-pages` (Actions only). The cooldown does not apply to Dependabot security updates.         |
| F2         | CI deploy live; production not yet redeployed                        | `deploy-mcp` job deploys the worker on every push to `main` and smoke-tests the MCP handshake. It currently skips with a warning because the secrets are not set; the live worker still answers `initialize` with `Method not implemented`.                                                                                                                                                                                                                                                                                                                                                                        | Add secrets `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID`, or run `npx wrangler login && npm run mcp:deploy` once.                                          |
| F3         | Procedure rehearsed; not applied                                     | History rewrite tested on a throwaway copy; see the F3 section for commands.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Force push (changes every commit ID) plus a GitHub Support request for the read-only `refs/pull/*` refs.                                                                                 |
| F4         | Fixed in working tree                                                | `pages/_document.tsx` emits a CSP meta tag in production builds, before every script and stylesheet. Scripts are limited to this origin and the analytics beacon, with no `'unsafe-inline'` (the export has no inline JavaScript). Also adds `Referrer-Policy` via meta. `public/_headers` now says GitHub Pages ignores it and carries `nosniff`, `Referrer-Policy`, `Permissions-Policy`, and `frame-ancestors 'none'` for Cloudflare hosting. Verified in headless Chrome: no violations on any page, hydration works, injected external and inline scripts are blocked, the YouTube embed loads after a click. | `X-Content-Type-Options` and `frame-ancestors` cannot be set on GitHub Pages; they take effect only on a host that honours `_headers`.                                                   |
| F5         | Fixed in working tree                                                | Every action pinned to a full commit SHA with its version as a comment (`checkout` v7.0.1, `setup-node` v7.1.0, `upload-artifact` v7.0.2, `download-artifact` v8.0.2, `github-pages-deploy-action` v4.9.0). Node 22 was already in place. The existing `github-actions` Dependabot entry keeps the SHAs current.                                                                                                                                                                                                                                                                                                   | None.                                                                                                                                                                                    |
| F6         | Fixed in working tree; takes effect when the worker is deployed (F2) | `job_description` capped at 20,000 characters; request bodies capped at 64 KB (SDK default was 4 MB); upstream fetches time out after 5 s and are edge-cached for 300 s; per-IP rate limit of 30 MCP calls per minute via a Workers rate-limit binding; `[observability]` enabled; tool failures and rate-limit hits are logged. Verified locally with `wrangler dev`: 25k-character input is rejected, a 100 KB body gets 413, the 31st call in a minute gets 429 with `Retry-After`.                                                                                                                             | Confirm the rate-limit binding is accepted on the account's plan at first deploy.                                                                                                        |
| F7         | Partly fixed in working tree                                         | `fast-uri` updated to 3.1.8. `postcss-selector-parser` overridden to 7.1.6, which also clears `postcss-nested`; the generated CSS is byte-identical. CI now runs `npm audit --audit-level=high --omit=dev` (runtime tree: 0 vulnerabilities).                                                                                                                                                                                                                                                                                                                                                                      | 7 high advisories remain, all from `braces` (GHSA-vfj7-8cjw-p6xm), which has no fixed release; they clear with a Tailwind 4 migration and a newer `eslint-config-next`. Build-time only. |
| F8         | Fixed in working tree                                                | Phone number removed from `public/resume/colin_zhou_resume.pdf`. The rest of the contact line was redrawn from the original vector glyphs and re-centred; link underlines and the link target moved with it. Extracted text is identical apart from the removed number, every other character keeps its font and position, page 2 is pixel-identical, and the number appears in no stream in the file.                                                                                                                                                                                                             | Remove the number from the LaTeX source too, or the next export brings it back. Earlier versions of the PDF remain in git history and on `gh-pages`.                                     |
| F9         | Fixed in working tree                                                | JSON-LD built from a `PERSON_LD` constant and serialised with every `<` escaped as `\u003c`. Verified it still parses in the browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | None.                                                                                                                                                                                    |
| F10        | Fixed in working tree                                                | `scripts/render-icons.mjs` runs Chrome sandboxed by default, binds DevTools to 127.0.0.1 on an OS-chosen port read from `DevToolsActivePort`, uses a private `mkdtemp` profile, and deletes it after Chrome exits. `CHROME_NO_SANDBOX=1` opts out where the sandbox cannot start (as on this audit machine). Output icons are byte-identical.                                                                                                                                                                                                                                                                      | None.                                                                                                                                                                                    |
| F11        | Partly fixed in working tree                                         | YouTube thumbnail self-hosted (`public/images/rubiks-cube-video.jpg`, served as WebP variants), so no request goes to Google before the visitor clicks play. The beacon is now covered by the CSP. The beacon token is stripped of stray quotes at build time.                                                                                                                                                                                                                                                                                                                                                     | Fix the `CF_BEACON_TOKEN` repository variable itself (remove the quotes). The shared `czhou578.github.io` origin needs a custom domain.                                                  |
| Systemic 3 | Fixed in working tree                                                | `public/faq.md` now says the site is on GitHub Pages and the MCP server on Cloudflare Workers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None.                                                                                                                                                                                    |
| Hardening  | Partly done                                                          | CI checks that every lockfile entry resolves from registry.npmjs.org with a sha512 hash (`scripts/check-lockfile.mjs`), and audits runtime dependencies.                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Settings-level items: read-only default workflow token, secret scanning with push protection, CodeQL, OSSF Scorecard, custom domain.                                                     |

---

## 1. Executive summary

This is a static Next.js portfolio on GitHub Pages plus a small public Cloudflare Worker exposing three read-only MCP tools. There is no authentication, no database, no user data, and no secret in the repository or its history. The application attack surface is small.

The real exposure is the delivery pipeline. The CI build job hands a write-capable GitHub token to third-party npm install scripts, Dependabot pull requests now merge and deploy themselves, and neither the `main` branch nor the `gh-pages` branch is protected. Whoever controls `main` controls the live site and the text every recruiter's AI agent receives from the MCP server.

Secondary issues: the worker in production is an older build than the source, GitHub Pages cannot set the security headers the repo tries to configure, and developer metadata was left in public git history.

### Top 5 risks

| Rank | ID  | Risk                                                                                                     |
| ---- | --- | -------------------------------------------------------------------------------------------------------- |
| 1    | F1  | Write token reachable by npm install scripts; Dependabot auto-merge and deploy with no branch protection |
| 2    | F2  | Live MCP worker runs an older build with no input validation and raw error reflection                    |
| 3    | F6  | Public worker has no rate limit, input size cap, timeout, or logs                                        |
| 4    | F4  | No CSP or other security headers on the live site; `_headers` file is silently ignored                   |
| 5    | F3  | Developer ISP, postal code, and geo coordinates in public git history                                    |

---

## 2. Recon and threat model

### Stack

| Layer   | Detail                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| Site    | Next.js 15.5.27, Pages Router, `output: "export"`, React 18.2.0, Tailwind 3.4.19                                    |
| Hosting | GitHub Pages at `https://czhou578.github.io/v3`, deployed to `gh-pages` branch by GitHub Actions                    |
| Worker  | Cloudflare Worker, `@modelcontextprotocol/sdk` 1.32.1, stateless Streamable HTTP; deployed manually with `wrangler` |
| CLI     | `bin/cli.js`, reads `public/resume.md` and `public/projects.json` locally                                           |
| Build   | npm with lockfile (all packages from registry.npmjs.org); Node 22 locally, Node 20 in CI                            |
| Unused  | `wrangler.jsonc` / `open-next.config.ts` for a Cloudflare OpenNext deploy of the site; not referenced by CI         |

### Entry points for untrusted data

| Entry point                                                                     | Reaches                                                                      |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| HTTP POST JSON-RPC to the worker (`/`, `/mcp`)                                  | Tool name, `job_description` string, any JSON shape up to the SDK's 4 MB cap |
| Upstream fetch from `raw.githubusercontent.com` (`main` branch)                 | Worker tool output, consumed by AI agents                                    |
| npm registry and GitHub Actions marketplace at CI time                          | Runner with a write-capable `GITHUB_TOKEN`                                   |
| Build-time inputs (`NEXT_PUBLIC_CF_BEACON_TOKEN`, `data/*.json`, `public/*.md`) | Static HTML; all repo-controlled                                             |
| HTTP GET to the static site                                                     | No server code, no query handling, no forms                                  |
| CLI argv / file path                                                            | Local user's own files only                                                  |

### Trust boundaries

| Principal                                              | Reach                                              |
| ------------------------------------------------------ | -------------------------------------------------- |
| Anonymous internet                                     | Static site; worker tools                          |
| Repo write (owner, Dependabot via CI token)            | Site content, worker data, deploy                  |
| CI runner (third-party actions, npm lifecycle scripts) | Holds `contents: write` token                      |
| Cloudflare account                                     | Worker deploy; not referenced anywhere in the repo |

### Crown jewels

1. Integrity of `main`: AI agents ingest `resume.md` and `projects.json` from it via the worker.
2. The CI `GITHUB_TOKEN` with `contents: write`.
3. The Cloudflare account and any API token (none in repo).
4. Owner PII beyond what is intentionally published.

### Likely attackers

- Opportunistic npm supply-chain actors riding a Dependabot bump.
- Bots scraping PII (phone, email).
- Anyone wanting to tamper with what recruiters' AI agents read about the owner.
- Pranksters burning the worker's free-tier quota.

---

## 3. Findings

| ID  | Severity | Status    | Title                                                                       | Location                                                                           |
| --- | -------- | --------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| F1  | Medium   | CONFIRMED | CI write token exposed to install scripts; unreviewed auto-merge and deploy | `.github/workflows/node.js.yml:27-41`, `:69-114`                                   |
| F2  | Low      | CONFIRMED | Deployed worker is an older, weaker build than the audited source           | live endpoint vs `git show 8d52bc8:my-portfolio-mcp/src/index.ts`                  |
| F3  | Low      | CONFIRMED | Developer connection metadata committed to public history                   | commit `81b4515`, `my-portfolio-mcp/.wrangler/cache/cf.json`                       |
| F4  | Low      | CONFIRMED | No security headers; `_headers` ignored by GitHub Pages                     | `public/_headers:3-12`, live response                                              |
| F5  | Low      | CONFIRMED | Actions pinned to mutable tags, outdated majors, EOL Node                   | `.github/workflows/node.js.yml:32-37`, `:61`                                       |
| F6  | Low      | SUSPECTED | Worker: no rate limit, no input length cap, no timeout, no logs             | `my-portfolio-mcp/src/index.ts:33-37`, `:90-101`, `my-portfolio-mcp/wrangler.toml` |
| F7  | Low      | CONFIRMED | Dependency advisories, all in build tooling                                 | `package.json:49-52`                                                               |
| F8  | Info     | CONFIRMED | Phone number in the public resume PDF                                       | `public/resume/colin_zhou_resume.pdf`                                              |
| F9  | Info     | CONFIRMED | JSON-LD via `dangerouslySetInnerHTML`, safe today                           | `pages/_document.tsx:39-123`                                                       |
| F10 | Info     | CONFIRMED | Dev renderer: no sandbox, fixed debug port, predictable profile dir         | `scripts/render-icons.mjs:49-61`                                                   |
| F11 | Info     | CONFIRMED | Third-party embeds without CSP; shared github.io origin                     | `pages/_document.tsx:13-19`, `components/YouTubeFacade.tsx:33-40`                  |

---

### F1. CI write token exposed to install scripts; Dependabot PRs auto-merge and deploy with no branch protection

**Severity:** Medium | **Status:** CONFIRMED

**Location**

- `.github/workflows/node.js.yml:27-29` (build job permissions)
- `.github/workflows/node.js.yml:35` (`actions/checkout@v3`, `persist-credentials` defaults to `true`)
- `.github/workflows/node.js.yml:41` (`npm ci`)
- `.github/workflows/node.js.yml:69-114` (`dependabot-merge` job)
- GitHub API: `GET /repos/czhou578/v3/branches/main` returns `"protected": false`; same for `gh-pages`

```yaml
# .github/workflows/node.js.yml:27-41
permissions:
  contents: write
  pages: write
...
- uses: actions/checkout@v3 # persist-credentials defaults to true
- run: npm ci # runs postinstall of every package
```

```yaml
# .github/workflows/node.js.yml:103,111
gh pr merge "$PR" --merge
...
gh workflow run node.js.yml --ref main
```

**Description**

The `build` job runs on every pull request with `contents: write`. `actions/checkout` stores the token in `.git/config` by default, and `npm ci` executes lifecycle scripts of every package in the tree. The lockfile currently contains five packages with install scripts (`esbuild` x2, `workerd`, `unrs-resolver`, `fsevents`), and any package can add one in a new version.

The `dependabot-merge` job (pushed to `origin/main` in commit `39aba85` during this audit) merges Dependabot PRs once checks pass and dispatches a deploy. Because `main` has no branch protection, the `BLOCKED` branch of the script never fires; every mergeable Dependabot PR is merged without human review.

**Exploit scenario**

1. An attacker compromises a maintainer account of a package in the dependency tree and publishes a version that Dependabot picks up as a security fix.
2. Dependabot opens a PR. The `build` job checks out with the token on disk and runs `npm ci`.
3. The malicious `postinstall` reads `.git/config`, extracts the token, and pushes to `main` or `gh-pages` directly. The lint/typecheck/build gates never run against that push.
4. Even without stealing the token: the PR passes all checks, merges itself, and the dispatched run publishes the new bundle to every visitor.

**Impact**

- Arbitrary JavaScript served to all site visitors.
- Arbitrary edits to `public/resume.md` and `public/projects.json`. The worker fetches these from `main`, so every AI agent calling `get_experiences` or `get_projects` ingests attacker-controlled text: prompt injection into third parties' agents under the owner's name.
- Repo-wide write with the stolen token (any branch, any file).

**Recommended fix**

Split build from deploy, remove the token from the build job, and skip install scripts:

```yaml
jobs:
  build:
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@<sha> # v5
        with:
          persist-credentials: false
      - uses: actions/setup-node@<sha>
        with: { node-version: 22, cache: npm }
      - run: npm ci --ignore-scripts
      - run: node scripts/generate-agent-files.mjs --check
      - run: npm run lint
      - run: npm run mcp:typecheck
      - run: npm run format:check
      - run: npm run build
        env:
          NEXT_PUBLIC_CF_BEACON_TOKEN: ${{ vars.CF_BEACON_TOKEN }}
      - uses: actions/upload-artifact@<sha>
        with: { name: site, path: out }

  deploy:
    needs: build
    if: github.event_name != 'pull_request' && github.ref == 'refs/heads/main'
    permissions:
      contents: write
    steps:
      - uses: actions/download-artifact@<sha>
        with: { name: site, path: out }
      - uses: JamesIves/github-pages-deploy-action@<sha>
        with: { branch: gh-pages, folder: out }
```

Add repository rulesets:

- `main`: require the `build` status check, require a PR, block force pushes. (Do not require reviews if you want Dependabot patch bumps to still auto-merge.)
- `gh-pages`: allow pushes only from the GitHub Actions app.

Add a Dependabot config with a cooldown so a freshly published malicious version has time to be yanked before it is pulled in:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule: { interval: weekly }
    cooldown: { default-days: 7 }
  - package-ecosystem: github-actions
    directory: /
    schedule: { interval: weekly }
```

**How to verify**

- Open a test PR with a step that prints `.git/config`; confirm no `extraheader` token is present.
- Confirm `npm ci --ignore-scripts && npm run build` succeeds locally and in CI. `esbuild`, `workerd`, `unrs-resolver`, and `fsevents` ship platform binaries as optional dependencies, so this should pass, but check.
- Confirm `GET https://api.github.com/repos/czhou578/v3/branches/main` returns `"protected": true`.

---

### F2. The deployed worker is an older build than the source

**Severity:** Low | **Status:** CONFIRMED

**Location**

- Live: `https://my-portfolio-mcp.colinzhou.workers.dev`
- Deployed source: `git show 8d52bc8:my-portfolio-mcp/src/index.ts` (lines 170-182 banner, 226-227 tool dispatch, 236-239 catch-all)
- Current source: `my-portfolio-mcp/src/index.ts` (commit `446011d` onward)

**Evidence from read-only probes of the live endpoint**

| Request                                               | Live response                                                                | Current source behaviour                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------- |
| `GET /`                                               | Banner text matching the pre-`446011d` version                               | Different banner (`index.ts:213-220`)               |
| `POST initialize`                                     | `Method not implemented` (HTTP 501)                                          | Handled by SDK transport                            |
| `POST` malformed JSON                                 | HTTP 500, body `Expected property name or '}' in JSON at position 1`         | HTTP 400 JSON-RPC parse error                       |
| `tools/call` unknown tool `<script>alert(1)</script>` | `Tool not found: <script>alert(1)</script>` reflected verbatim, `text/plain` | JSON-RPC `InvalidParams` error (`index.ts:184-188`) |
| `match_job` with object argument                      | `jobText.toLowerCase is not a function` (HTTP 500)                           | Validated (`index.ts:155-164`)                      |
| `PUT /anything`, `GET /.env`                          | HTTP 200 banner                                                              | 404 / 405 (`index.ts:298-300`, `:321-323`)          |
| `OPTIONS /`                                           | HTTP 200 banner, no CORS headers                                             | 204 with CORS headers (`index.ts:286-288`)          |

**Impact**

No XSS: responses are `text/plain`, and the endpoint is POST-only for the reflected path. Internal error strings leak, the MCP `initialize` handshake fails for spec-compliant clients, browser-based clients cannot preflight, and none of the hardening in the current source is in production.

**Recommended fix**

1. Run `npm run mcp:deploy`.
2. Add a CI job on push to `main` that runs `wrangler deploy -c my-portfolio-mcp/wrangler.toml` using a Cloudflare API token scoped to _Workers Scripts: Edit_, stored as a repository secret.
3. Follow it with a smoke test (below).

**How to verify**

Expect a `result.serverInfo` object, not `Method not implemented`:

```bash
curl -s -X POST https://my-portfolio-mcp.colinzhou.workers.dev \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"t","version":"0"}}}'
```

---

### F3. Developer connection metadata committed to public history

**Severity:** Low | **Status:** CONFIRMED

**Location**

- Added in commit `81b4515`, removed in commit `446011d`:
  - `my-portfolio-mcp/.wrangler/cache/cf.json`
  - `my-portfolio-mcp/.wrangler/tmp/dev-Lh71tA/index.js` and `.map`
  - `my-portfolio-mcp/.wrangler/tmp/bundle-BTwlGR/*`
- Repository is public, so these blobs remain fetchable.

**What leaked** (`cf.json`)

ISP ASN 7922 (Comcast), city San Mateo, region CA, postal code 94401, geo-IP latitude/longitude, TLS client fingerprints (`tlsClientCiphersSha1`, `tlsClientExtensionsSha1`, exported authenticators). No credentials, account IDs, or API tokens.

**Impact**

Approximate home location and ISP of the developer. The city is already public on the site; the postal code and coordinates are a modest step beyond that.

**Recommended fix**

- `.gitignore:41` (`.wrangler`) already prevents recurrence.
- A force push alone does not remove the data. The leaked commit is reachable from at least 20 `refs/pull/*/head` refs, which are read-only, so GitHub Support must purge them and cached views after the rewrite.
- Rewriting changes every commit ID on `main`. Open Dependabot PRs will be recreated, and any other clone must be reset.

Commands, run from a fresh clone after committing or stashing all local work:

```bash
git clone https://github.com/czhou578/v3.git v3-rewrite && cd v3-rewrite
git checkout -q -b mcp origin/mcp && git checkout -q -b qwen-changes origin/qwen-changes && git checkout -q main
FILTER_BRANCH_SQUELCH_WARNING=1 git filter-branch -f --prune-empty \
  --index-filter 'git rm -r -q --cached --ignore-unmatch my-portfolio-mcp/.wrangler' \
  -- main mcp qwen-changes
git log --all --oneline -- my-portfolio-mcp/.wrangler   # expect no output
git push --force origin main mcp qwen-changes
```

Then, in the original working copy, move onto the rewritten history while keeping uncommitted changes:

```bash
git fetch origin && git reset --keep origin/main
```

Finally, ask GitHub Support to remove cached views and pull-request refs for commit `81b4515` (GitHub Docs: "Removing sensitive data from a repository").

**How to verify**

`git log --all --name-only --pretty=format: | grep -c '\.wrangler/'` returns `0` after a rewrite.

---

### F4. No browser security headers; `_headers` file is silently ignored

**Severity:** Low | **Status:** CONFIRMED

**Location**

- `public/_headers:3-12` (only sets `Cache-Control`; Cloudflare/Netlify convention)
- Live `GET https://czhou578.github.io/v3/`

**Evidence**

Live response headers: `strict-transport-security: max-age=31556952`, `access-control-allow-origin: *`, `cache-control: max-age=600`. No `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options` / `frame-ancestors`, `Referrer-Policy`, or `Permissions-Policy`.

`GET /v3/_headers` returns the file itself (`application/octet-stream`, HTTP 200), and `/_next/static/chunks/*.js` gets the same `max-age=600` as every other file. GitHub Pages does not support custom headers.

**Impact**

Limited on a static site with no auth or state (clickjacking is moot). A CSP is the one layer that would blunt an F1-style injected script, so it matters more than usual here.

**Recommended fix**

Add a meta CSP in `pages/_document.tsx`. Static export requires `'unsafe-inline'` for Next's hydration script, so the value mainly restricts external script origins:

```tsx
<meta
  httpEquiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.ytimg.com; frame-src https://www.youtube-nocookie.com; connect-src 'self' https://cloudflareinsights.com; object-src 'none'; base-uri 'self'; form-action 'none'"
/>
<meta name="referrer" content="strict-origin-when-cross-origin" />
```

Alternatively, host on Cloudflare (where `_headers` is honoured) and add the full header set there.

**How to verify**

Load the site with DevTools open and confirm no CSP violations. In a local build, inject `<script src="https://example.com/x.js">` and confirm it is blocked.

---

### F5. Actions pinned to mutable tags, outdated majors, EOL runtime

**Severity:** Low | **Status:** CONFIRMED

**Location**

- `.github/workflows/node.js.yml:32` `node-version: [20.x]` (Node 20 reached end of life April 2026)
- `.github/workflows/node.js.yml:35` `actions/checkout@v3`
- `.github/workflows/node.js.yml:37` `actions/setup-node@v3`
- `.github/workflows/node.js.yml:61` `JamesIves/github-pages-deploy-action@v4`

**Impact**

A compromised or force-moved tag executes with the job's permissions (`contents: write`). `v3` of `checkout`/`setup-node` run on the deprecated Node 16 action runtime.

**Recommended fix**

Pin each action to a full commit SHA with a version comment, move to current majors, use Node 22, and let the `github-actions` Dependabot ecosystem (see F1) keep the SHAs fresh.

```yaml
- uses: actions/checkout@<full-sha> # v5.x.y
- uses: actions/setup-node@<full-sha> # v5.x.y
  with: { node-version: 22, cache: npm }
```

**How to verify**

`grep -E 'uses: .*@v[0-9]' .github/workflows/*.yml` returns nothing.

---

### F6. Worker has no rate limit, input cap, timeout, or logs

**Severity:** Low | **Status:** SUSPECTED (cost/availability impact not load-tested)

**Location**

- `my-portfolio-mcp/src/index.ts:33-37` (`fetchText`, no timeout, no explicit caching)
- `my-portfolio-mcp/src/index.ts:95-101` (per-skill regex over the whole input)
- `node_modules/@modelcontextprotocol/sdk/dist/esm/server/requestBody.js:2` (`DEFAULT_MAX_REQUEST_BODY_SIZE = 4 MB`)
- `my-portfolio-mcp/wrangler.toml` (no `[observability]` block)

```ts
// my-portfolio-mcp/src/index.ts:33-37
async function fetchText(url: string, what: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${what} (HTTP ${res.status})`);
  return res.text();
}
```

**Description**

Every `tools/call` triggers an upstream fetch and, for `match_job`, roughly forty linear regex scans over up to 4 MB of attacker-supplied text. The regex pattern `(^|[^a-z0-9])<skill>([^a-z0-9]|$)` is linear, so no ReDoS, but CPU per request is unbounded up to the Workers limit. Nothing is logged.

Mitigations already in place: Workers CPU-time limits bound each request; Cloudflare caches the upstream response (`cache-control: max-age=300` observed from raw.githubusercontent.com).

**Impact**

Free plan: 100k requests/day quota exhaustion takes the MCP server offline for the day. Paid plan: cost. No way to tell after the fact that abuse occurred.

**Recommended fix**

```ts
const MAX_JOB_DESCRIPTION = 20_000;
if (jobDescription.length > MAX_JOB_DESCRIPTION)
  throw new McpError(ErrorCode.InvalidParams, "job_description too long");

const res = await fetch(url, {
  cf: { cacheTtl: 300, cacheEverything: true },
  signal: AbortSignal.timeout(5_000),
});
```

```toml
# my-portfolio-mcp/wrangler.toml
[observability]
enabled = true
```

Add a Cloudflare rate-limiting rule for the worker hostname (available on the free plan).

**How to verify**

Send a 30 KB `job_description` and confirm an `InvalidParams` error. Confirm requests appear in the Workers logs. Confirm the rate-limit rule returns 429 after the threshold.

---

### F7. Dependency advisories, all in build tooling

**Severity:** Low | **Status:** CONFIRMED (build-time only)

**Location**

- `package.json:49` `eslint-config-next ^15.5.25`
- `package.json:52` `tailwindcss 3.4.19`
- `npm audit` at commit `8122918`

| Severity | Count | Chains                                                                                                                                                              |
| -------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High     | 7     | `tailwindcss` 3.4.19 via `chokidar` -> `braces` (GHSA-vfj7-8cjw-p6xm, no upstream fix, range `*`); `eslint-config-next` via `fast-glob` -> `micromatch` -> `braces` |
| Moderate | 3     | `postcss-selector-parser` (GHSA-rj75-hqrm-r3gf), `postcss-nested`, `fast-uri`                                                                                       |

**Impact**

None at runtime. The shipped site is static HTML/JS; the worker bundle contains only the MCP SDK and zod. The `braces` advisory has no fix in any version, and 3.4.19 is still inside the flagged range, so commit `8122918` ("pin tailwindcss 3.4.19") does not clear the audit.

**Recommended fix**

- `npm audit fix` clears `fast-uri` and `postcss-nested`.
- The remainder wait for a Tailwind 4 migration.
- Add to CI so runtime advisories fail the build while build-only ones do not:

```yaml
- run: npm audit --audit-level=high --omit=dev
```

**How to verify**

`npm audit --omit=dev` reports zero vulnerabilities.

---

### F8. Phone number in the public resume PDF

**Severity:** Info | **Status:** CONFIRMED

**Location**

- `public/resume/colin_zhou_resume.pdf` (first text line: `425-428-8168 | colizu2020@gmail.com | ...`)
- Linked from `components/HeaderBar.tsx:13` and `public/llms.txt:17`

**Description**

`resume.md`, `llms.txt`, and `faq.md` deliberately omit the phone number, yet `llms.txt` points agents straight at the PDF. The number is trivially scrapable by bots and LLM agents.

**Recommended fix**

Remove the phone number from the published PDF; email already works as the contact channel. If it must stay, serve the PDF on request rather than from a crawlable URL.

**How to verify**

`pdftotext public/resume/colin_zhou_resume.pdf - | grep -E '[0-9]{3}-[0-9]{3}-[0-9]{4}'` returns nothing.

---

### F9. JSON-LD via `dangerouslySetInnerHTML`, safe today

**Severity:** Info | **Status:** CONFIRMED

**Location:** `pages/_document.tsx:39-123`

**Description**

The payload is a static literal, so there is no injection path today. `JSON.stringify` does not escape `</script>`; if the object is ever built from `data/*.json`, a string containing `</script>` would break out of the tag.

**Recommended fix (preventive)**

```ts
__html: JSON.stringify(ld).replace(/</g, "\\u003c");
```

---

### F10. Dev-only icon renderer runs Chrome without sandbox on a fixed debug port

**Severity:** Info | **Status:** CONFIRMED

**Location:** `scripts/render-icons.mjs:17` (`PORT = 9444`), `:49-61` (`--no-sandbox`, `--remote-debugging-port`, `--user-data-dir` in the shared temp dir)

**Description**

Local-only. On a shared machine, another local process could attach to the DevTools port during the run and drive a browser that has `file://` access. The profile directory name is predictable.

**Recommended fix**

Use a random free port, bind to `127.0.0.1` explicitly, and create the profile with `fs.mkdtemp`.

---

### F11. Third-party embeds without CSP; shared github.io origin

**Severity:** Info | **Status:** CONFIRMED

**Location**

- `pages/_document.tsx:13-19` (Cloudflare beacon script)
- `components/YouTubeFacade.tsx:33-40` (thumbnail from `i.ytimg.com` loads on page view)
- Hosting: `czhou578.github.io/v3` shares an origin with `/blog/`, `/v2/`, and every other project page

**Description**

- The beacon script loads without a CSP (see F4). The token is public by design.
- The YouTube thumbnail sends visitor IPs to Google before any click.
- An XSS in any sibling project page affects this site's `localStorage`, service workers, and cookies.

**Recommended fix**

CSP from F4; consider a custom domain to escape the shared origin.

**Non-security bug noticed:** the live `data-cf-beacon` attribute is `{"token":"\"c038...\""}`. The `CF_BEACON_TOKEN` repository variable was saved with literal quote characters, so Cloudflare Web Analytics is probably not recording.

---

## 4. Categories checked with no finding

| Category                         | What was checked                                                                                                                                                                                                  | Result                                                                                                                                          |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication & sessions        | Every route and tool; cookies; client storage                                                                                                                                                                     | None exist; public data only                                                                                                                    |
| Authorization                    | Worker tools, CLI                                                                                                                                                                                                 | No privileged operation to escalate to                                                                                                          |
| Injection                        | Grep of every sink (`eval`, `innerHTML`, `dangerouslySetInnerHTML`, `href`, `src`, `new RegExp`, `fetch`); both `new RegExp` sites in the worker; sitemap XML builder in `scripts/generate-agent-files.mjs:37-45` | Only `match_job` takes input and it never reaches a sink; skills regex is built from the resume and is linear; sitemap input is repo-controlled |
| Secrets & configuration          | Repo, every branch and commit (regex scan for key/token patterns), `.env*`, `.dev.vars`, built `out/`, lockfile registry URLs                                                                                     | None; `.env.example` is empty; beacon token is public by design; all packages from registry.npmjs.org                                           |
| Cryptography                     | None used                                                                                                                                                                                                         | Not applicable                                                                                                                                  |
| Data protection                  | All public text files and the PDF                                                                                                                                                                                 | Phone in PDF (F8); email published by design                                                                                                    |
| Input validation & file handling | Worker args (validated in HEAD, not in deployed build); CLI argv; `sharp` on repo images at build time                                                                                                            | F2, F6                                                                                                                                          |
| Denial of service                | Regex patterns, upstream fetch, body cap, rate limiting                                                                                                                                                           | F6; no ReDoS                                                                                                                                    |
| Memory safety                    | No native code owned; `sharp`/libvips only at build on repo-controlled images                                                                                                                                     | Not applicable                                                                                                                                  |
| Concurrency & business logic     | CI concurrency groups; merge-then-deploy ordering                                                                                                                                                                 | Deploy run re-executes all checks, so no exploitable TOCTOU                                                                                     |
| Supply chain                     | Lockfile provenance, install-script inventory, `npm audit`, action pinning                                                                                                                                        | F1, F5, F7                                                                                                                                      |
| API & web layer                  | CORS, headers, HTTP methods, open redirects (all `href`s static), CSRF (no state-changing requests)                                                                                                               | F4; worker CORS `*` acceptable for public data                                                                                                  |
| Infrastructure & CI/CD           | Workflow permissions, branch protection (public API), Pages config                                                                                                                                                | F1, F5                                                                                                                                          |
| Logging & detection              | GitHub Pages (none); worker (no observability)                                                                                                                                                                    | F6                                                                                                                                              |
| AI/LLM                           | Tool input/output paths; `llms.txt` instructions; prompt-injection surface                                                                                                                                        | Output never echoes input; integrity rests entirely on `main` (F1); `llms.txt` instructs agents to clone a repo and send email (benign)         |

---

## 5. Systemic weaknesses

1. **All trust concentrates in an unprotected `main` branch.** The site, the worker's data, and the deploy token all derive from it. F1, F2, and F6 are three faces of this.
2. **Manual, unverified deploys.** The worker is deployed by hand and was left behind by two commits. Nothing checks that production matches source.
3. **Platform limits are unacknowledged.** `public/_headers` suggests control GitHub Pages does not provide, and `public/faq.md:51` tells agents the site runs on Cloudflare Pages when it runs on GitHub Pages.

---

## 6. Hardening recommendations

- Set the repository default workflow token to **read-only** (Settings -> Actions -> General -> Workflow permissions) so a future workflow cannot regain write by omission.
- Enable **secret scanning with push protection** and **CodeQL default setup**; both are free for public repositories.
- Add **`lockfile-lint`** to CI to pin the registry host and protocol.
- Run **`npm audit --audit-level=high --omit=dev`** in CI (F7).
- Deploy the worker from CI with a scoped Cloudflare token, followed by the F2 smoke test.
- Add the **OSSF Scorecard** action for ongoing supply-chain posture checks.
- Consider a **custom domain**, which removes the shared github.io origin and allows a host that honours response headers.
- Keep `.wrangler`, `.dev.vars*`, and `.env*.local` ignored (already done); consider a pre-commit hook running `gitleaks`.

---

## 7. Coverage statement

**Examined**

- All first-party source: `components/`, `pages/`, `lib/`, `scripts/`, `bin/cli.js`, `my-portfolio-mcp/src/`, every config file, the CI workflow, and the public text files (`llms.txt`, `faq.md`, `resume.md`, `projects.json`, `sitemap.xml`, `robots.txt`, `_headers`).
- Lockfile provenance and install-script inventory; `npm audit` before and after commit `8122918`.
- Git history across every branch (`main`, `gh-pages`, `mcp`, `qwen-changes`, dependabot branches), including deleted files.
- Built `out/` tree compared with the deployed `gh-pages` branch.
- Live response headers and protocol behaviour of `https://czhou578.github.io/v3/` and `https://my-portfolio-mcp.colinzhou.workers.dev` using read-only GET and JSON-RPC calls only.
- MCP SDK transport source (`webStandardStreamableHttp.js`, `requestBody.js`) for body limits and header validation.

**Not examined**

- Third-party code beyond the MCP SDK transport.
- The OpenNext Cloudflare config for the site (`wrangler.jsonc`, `open-next.config.ts`), which appears unused by any deploy path.
- Cloudflare account settings (WAF, rate limits, plan, API tokens).
- GitHub settings invisible to the unauthenticated API: rulesets, collaborator list, default workflow token permissions, secret-scanning status. The `gh` CLI is not installed on the audit machine.
- Image and video binaries beyond text extraction of the PDF.

**Needs runtime or human testing**

- Load and cost behaviour of the worker (F6).
- Confirming the build passes with `npm ci --ignore-scripts` (F1).
- Confirming branch protection and token settings in the GitHub UI after the F1 changes.
- Confirming Cloudflare Web Analytics starts recording after the beacon token variable is fixed (F11 note).
