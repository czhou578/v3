import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
    {
        name: "my-portfolio-mcp",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

const RESUME_URL = "https://raw.githubusercontent.com/czhou578/v3/main/public/resume.md";
const PROJECTS_URL = "https://raw.githubusercontent.com/czhou578/v3/main/public/projects.json";

server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "get_experiences",
                description: "Gets the professional experiences from Colin's resume.",
                inputSchema: { type: "object", properties: {} },
            },
            {
                name: "get_projects",
                description: "Gets the list of Colin's past projects.",
                inputSchema: { type: "object", properties: {} },
            },
            {
                name: "match_job",
                description: "Reads a job description string and outputs matching technical skills from Colin's resume.",
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
            },
        ],
    };
});

async function getExperiences() {
    const res = await fetch(RESUME_URL);
    if (!res.ok) throw new Error("Failed to fetch resume");
    const text = await res.text();
    const match = text.match(/## Experience\r?\n([\s\S]*?)(?=\r?\n## |$)/);
    if (match && match[1]) {
        return "=== Experiences ===\n" + match[1].trim();
    }
    return "Could not find the Experience section in resume.";
}

async function getProjects() {
    const res = await fetch(PROJECTS_URL);
    if (!res.ok) throw new Error("Failed to fetch projects");
    const data: any = await res.json();
    let result = "=== Projects ===\n";
    for (const p of data.projects) {
        result += `- ${p.name} (${p.date})\n`;
        result += `  Description: ${p.description}\n`;
        result += `  Tech: ${p.technologies.join(', ')}\n`;
        if (p.github) result += `  GitHub: ${p.github}\n`;
        if (p.live) result += `  Live: ${p.live}\n`;
        result += "\n";
    }
    return result;
}

async function matchJob(jobText: string) {
    const res = await fetch(RESUME_URL);
    if (!res.ok) throw new Error("Failed to fetch resume");
    const text = await res.text();
    const match = text.match(/## Skills\r?\n([\s\S]*?)(?=\r?\n## |$)/);
    if (!match || !match[1]) {
        throw new Error("Could not find the Skills section in resume.");
    }

    const skillsText = match[1];
    const skillLines = skillsText.split(/\r?\n/).filter((l: string) => l.trim().length > 0);
    const resumeSkills = new Set<string>();

    skillLines.forEach((line: string) => {
        const cleanLine = line.replace(/^- \*\*.*?\*\*/, '').trim();
        if (cleanLine) {
            const formattedLine = cleanLine.replace(/[()]/g, ',');
            const items = formattedLine.split(',').map((s: string) => s.trim().toLowerCase());
            items.forEach((item: string) => {
                const subItems = item.split('/');
                subItems.forEach((si: string) => {
                    const finalWord = si.trim();
                    if (finalWord && finalWord !== 'es6' && finalWord !== 'cloud') {
                        resumeSkills.add(finalWord);
                    }
                });
            });
        }
    });

    const jobTextLower = jobText.toLowerCase();
    const matchedSkills: string[] = [];
    resumeSkills.forEach((skill: string) => {
        const escapedSkill = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(^|[^a-z0-9])${escapedSkill}([^a-z0-9]|$)`, 'i');

        if (regex.test(jobTextLower)) {
            matchedSkills.push(skill);
        }
    });

    let output = "=== Job Match Results ===\n";
    if (matchedSkills.length > 0) {
        output += `Found ${matchedSkills.length} matching skills from your resume:\n`;
        matchedSkills.forEach(s => output += `- ${s}\n`);
    } else {
        output += "No explicit keyword matches found from your skills section.\n";
    }
    return output;
}

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "get_experiences") {
        const exp = await getExperiences();
        return { content: [{ type: "text", text: exp }] };
    } else if (request.params.name === "get_projects") {
        const proj = await getProjects();
        return { content: [{ type: "text", text: proj }] };
    } else if (request.params.name === "match_job") {
        const args = request.params.arguments as { job_description: string };
        const match = await matchJob(args.job_description);
        return { content: [{ type: "text", text: match }] };
    }
    throw new Error(`Tool not found: ${request.params.name}`);
});

// Since the MCP sdk doesn't officially expose a synchronous HTTP router for Workers,
// we map the JSON-RPC specifically
export default {
    async fetch(request: Request, env: any, ctx: any): Promise<Response> {
        if (request.method !== 'POST') {
            return new Response("Portfolio MCP server is running. POST requests required.", { status: 200 });
        }

        try {
            const body: any = await request.json();

            // Basic JSON-RPC handler mapping
            if (body.method === "tools/list") {
                const result = await server.request({ method: "tools/list" }, ListToolsRequestSchema);
                return Response.json({
                    jsonrpc: "2.0",
                    id: body.id,
                    result
                });
            } else if (body.method === "tools/call") {
                const params = body.params;
                const req = {
                    method: "tools/call",
                    params: params
                };
                const result = await server.request(req, CallToolRequestSchema);
                return Response.json({
                    jsonrpc: "2.0",
                    id: body.id,
                    result
                });
            }

            return new Response("Method not implemented", { status: 501 });
        } catch (e: any) {
            return new Response(e.message, { status: 500 });
        }
    }
}
