#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];

const getResumeText = () => {
    // The cli will be placed in v3/bin/cli.js, so the root is one directory up
    const resumePath = path.join(__dirname, '..', 'public', 'resume.md');
    try {
        return fs.readFileSync(resumePath, 'utf8');
    } catch (e) {
        console.error("Error reading resume.md:", e.message);
        process.exit(1);
    }
};

const getProjects = () => {
    // Relative path to get to public/projects.json
    const projectsPath = path.join(__dirname, '..', 'public', 'projects.json');
    try {
        const data = fs.readFileSync(projectsPath, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error("Error reading projects.json:", e.message);
        process.exit(1);
    }
};

if (command === 'get-experiences') {
    const text = getResumeText();
    // Extract everything between ## Experience and the next ## heading
    const match = text.match(/## Experience\r?\n([\s\S]*?)(?=\r?\n## |$)/);
    if (match && match[1]) {
        console.log("=== Experiences ===");
        console.log(match[1].trim());
    } else {
        console.log("Could not find the Experience section in resume.");
    }
} else if (command === 'get-projects') {
    const projectsData = getProjects();
    console.log("=== Projects ===");
    projectsData.projects.forEach(p => {
        console.log(`- ${p.name} (${p.date})`);
        console.log(`  Description: ${p.description}`);
        console.log(`  Tech: ${p.technologies.join(', ')}`);
        if (p.github) console.log(`  GitHub: ${p.github}`);
        if (p.live) console.log(`  Live: ${p.live}`);
        console.log();
    });
} else if (command === 'match-job') {
    const jobFile = process.argv[3];
    if (!jobFile) {
        console.error("Please provide a path to a job description file. \nExample: agent-cli match-job ./job.txt");
        process.exit(1);
    }

    let jobText = "";
    try {
        // Resolve jobFile relative to wherever the user ran the command from
        jobText = fs.readFileSync(path.resolve(process.cwd(), jobFile), 'utf8');
    } catch (e) {
        console.error(`Error reading job desc file ${jobFile}:`, e.message);
        process.exit(1);
    }

    const text = getResumeText();
    // Extract everything between ## Skills and the next ## heading
    const match = text.match(/## Skills\r?\n([\s\S]*?)(?=\r?\n## |$)/);
    if (!match || !match[1]) {
        console.error("Could not find the Skills section in resume.");
        process.exit(1);
    }

    const skillsText = match[1];

    // Extract skills keywords from skillsText
    // We handle the format found in resume.md:
    // "- **Frontend:** HTML5/CSS3, TypeScript, JavaScript(ES6), React, Next.js, Tailwind CSS, Chakra UI, Ant Design, Figma, Adobe XD"
    const skillLines = skillsText.split(/\r?\n/).filter(l => l.trim().length > 0);
    const resumeSkills = new Set();

    skillLines.forEach(line => {
        const cleanLine = line.replace(/^- \*\*.*?\*\*/, '').trim();
        if (cleanLine) {
            // Replace parentheses with commas so things like "Cloud (AWS, GCP)" become "Cloud , AWS, GCP,"
            const formattedLine = cleanLine.replace(/[()]/g, ',');
            const items = formattedLine.split(',').map(s => s.trim().toLowerCase());
            items.forEach(item => {
                const subItems = item.split('/');
                subItems.forEach(si => {
                    const finalWord = si.trim();
                    if (finalWord && finalWord !== 'es6' && finalWord !== 'cloud') {
                        resumeSkills.add(finalWord);
                    }
                });
            });
        }
    });

    const jobTextLower = jobText.toLowerCase();

    const matchedSkills = [];
    resumeSkills.forEach(skill => {
        // Use a simple indexOf or regex to find mentions of the skill
        // using basic word boundaries if possible, but includes() is simpler and covers multi-word skills like "tailwind css"
        // Let's use word boundary regex to avoid partial matches (e.g. matching 'c' in 'react')
        // Escape special chars for regex (e.g., C++, Node.js)
        const escapedSkill = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Since many skills might just be words, use word boundaries. 
        // For C++ or .js, \b might be tricky at the end, but let's try a relaxed boundary
        const regex = new RegExp(`(^|[^a-z0-9])${escapedSkill}([^a-z0-9]|$)`, 'i');

        if (regex.test(jobTextLower)) {
            matchedSkills.push(skill);
        }
    });

    console.log("=== Job Match Results ===");
    if (matchedSkills.length > 0) {
        console.log(`Found ${matchedSkills.length} matching skills from your resume:`);
        matchedSkills.forEach(s => console.log(`- ${s}`));
    } else {
        console.log("No explicit keyword matches found from your skills section.");
    }

} else {
    console.log(`
Usage:
  agent-cli <command> [args]

Commands:
  get-experiences        Outputs the professional experiences from the resume.
  get-projects           Outputs the projects list.
  match-job <file.txt>   Reads a job description file and outputs matching technical skills from your resume.
    `);
}
