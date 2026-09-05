import Head from "next/head";
import Image from "next/image";
import HeaderBar from "@/components/Headerbar";
import Introduction from "@/components/Introduction";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Classwork from "@/components/Classwork";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { withPrefix } from "@/lib/prefix";

import ProfileImg from "../public/images/IMG-0197.jpg";
import UIUCLogo from "../public/images/UIUC-Logo.jpg";
import BCLogo from "../public/images/BellevueCollegeLogo.png";
import CHSLogo from "../public/images/CupertinoHighLogo.jpg";
import Kaliber from "../public/images/kaliber.png";
import NuclearnLogo from "../public/images/NuclearnLogo.png";
import PolicyEngineLogo from "../public/images/thepolicyengine_logo.jpg";
import EcoLogicalLogo from "../public/images/ecological.jpg";
import IOIntel from "../public/images/IO_Intelligence.jpg";
import PencilLogo from "../public/images/pencil.jpg";
import nanoGPTImg from "../public/images/nanoGPT.png";
import sappImg from "../public/images/Sapp.png";
import pe1Img from "../public/images/PE1.png";
import benchmarkImg from "../public/images/benchmark2.png";
import llmPoster from "../public/images/llm-poster.jpg";
import imgClassifyPoster from "../public/images/imgclassify-poster.jpg";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "TypeScript", "React", "GraphQL", "Figma", "AdobeXD"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "MapReduce",
      "Docker",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Jira",
      "VSCode",
      "LaTeX",
      "Markdown",
      "YAML",
      "Linux",
      "Windows",
      "Prompt Engineering",
      "NPM",
      "Yarn",
    ],
  },
];

const CLASSWORK = [
  { header: "Distributed System", date: "Fall 2023", location: "UIUC", githubLink: "https://github.com/czhou578/CS425", techUsed: ["Python", "Linux", "Hadoop"] },
  { header: "Web Programming", date: "Winter 2022", location: "Bellevue", githubLink: "https://github.com/czhou578/CS-380-Work", techUsed: ["HTML/CSS", "JS", "React"] },
  { header: "Internet of Things", date: "Winter 2022", location: "Bellevue", githubLink: "https://github.com/czhou578/IoT-work", techUsed: ["C++", "C"] },
  { header: "Operating Systems", date: "Fall 2021", location: "Bellevue", githubLink: "https://github.com/czhou578/CS360-Work", techUsed: ["C"] },
  { header: "Data Structures / Databases", date: "Fall 2020", location: "Bellevue", githubLink: "https://github.com/czhou578/Fall-2020-Work", techUsed: ["Java", "C++"] },
  { header: "Programming Languages", date: "Winter 2021", location: "Bellevue", githubLink: "https://github.com/czhou578/Winter-2021-Quarter-Work", techUsed: ["Java", "Python"] },
  { header: "Fundamentals of CS II", date: "Winter 2020", location: "Bellevue", githubLink: "https://github.com/czhou578/CS-211-Work", techUsed: ["Java"] },
  { header: "Artificial Intelligence", date: "Spring 2023", location: "UIUC", githubLink: "https://github.com/czhou578/AI-Class-Work", techUsed: ["Python"] },
  { header: "Cloud Computing", date: "Spring 2022", location: "Bellevue", githubLink: "https://github.com/czhou578/Cloud-Computing-Work", techUsed: ["C#"] },
  { header: "Spring 2021 Bellevue Work", date: "Fall 2021", location: "Bellevue", githubLink: "https://github.com/czhou578/Spring-Quarter-2021", techUsed: ["Java"] },
];

const AGENT_FILES = [
  {
    href: withPrefix("/llms.txt"),
    emoji: "📄",
    name: "llms.txt",
    blurb: "Full-site index & instructions for AI agents",
    border: "border-indigo-400/40 hover:border-indigo-400",
    hover: "group-hover:text-indigo-300",
  },
  {
    href: withPrefix("/resume.md"),
    emoji: "📝",
    name: "resume.md",
    blurb: "Full resume in clean Markdown format",
    border: "border-cyan-400/40 hover:border-cyan-400",
    hover: "group-hover:text-cyan-300",
  },
  {
    href: withPrefix("/projects.json"),
    emoji: "🗂️",
    name: "projects.json",
    blurb: "All projects as structured JSON",
    border: "border-green-400/40 hover:border-green-400",
    hover: "group-hover:text-green-300",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Colin Zhou | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Colin Zhou, a software engineer in San Mateo, CA working on AI integration and production systems."
        />
      </Head>
      <HeaderBar />
      <main>
        <section id="about" aria-label="About Colin Zhou" className="scroll-mt-6">
          <Introduction />
          <div className="section-container mt-10">
            <figure className="mx-auto max-w-md text-center">
              <Image
                src={ProfileImg}
                width={200}
                height={267}
                alt="Colin Zhou at Snoqualmie Falls, Washington State, April 2022"
                placeholder="blur"
                priority
                className="mx-auto rounded-lg"
              />
              <figcaption className="mt-4 text-sm italic text-gray-300 sm:text-base">
                *Me at Snoqualmie Falls, Washington State in April 2022
              </figcaption>
            </figure>

            <div
              id="intro"
              className="mx-auto mt-10 max-w-3xl scroll-mt-6 rounded-lg border-4 border-indigo-500 p-5 sm:p-8"
            >
              <p className="text-base leading-relaxed sm:text-lg">
                I graduated from UIUC with a Masters in Computer Science, and
                obtained my bachelor&apos;s degree in Computer Science from
                Bellevue College. I was born in Canada, but grew up in the Bay
                Area, lived near Seattle, Washington for 6 years, and am now in
                San Mateo, California.
              </p>
              <p className="mt-6 text-base leading-relaxed sm:text-lg">
                I am currently a software engineer at Kaliber Labs, helping
                integrate multimodal LLM&apos;s into consumer products in the
                healthcare space. Previously, I worked at Nuclearn.ai (nuclear
                power startup) as a full stack engineer, and did multiple
                internships in the civics, telecom, environmental, and
                educational sectors. I am broadly interested in integrating the
                latest AI into useful products and how state of the art machine
                learning inference systems serve tokens to millions of
                customers.
              </p>
              <p className="mt-6 text-base leading-relaxed sm:text-lg">
                When I&apos;m not sitting at the computer, you can find me
                solving Rubik&apos;s Cubes of various sizes, practicing a
                difficult piano piece and posting it on my Instagram, doing 1000
                piece jigsaw puzzles with my sister, or taking long walks around
                my neighborhood. You can also find me writing technical articles
                at my{" "}
                <a
                  href="https://czhou578.github.io/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline hover:text-indigo-300"
                >
                  blog
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          id="education"
          aria-label="Education"
          className="section-container mt-16 scroll-mt-6"
        >
          <h2 className="section-heading">Education</h2>
          <ol className="mx-auto max-w-3xl">
            <Education
              logo={UIUCLogo}
              school="University of Illinois Urbana-Champaign"
              degreeLevel="Masters in Computer Science"
              date="2022-2023"
              activities={["CS 411 Database Project Team Lead"]}
              relevantClasses={[
                "User-Interface Design",
                "Databases",
                "Advanced Data Management",
                "Human-Computer Interaction",
                "Artificial Intelligence",
                "Distributed Systems",
                "ML + Data Systems",
              ]}
            />
            <Education
              logo={BCLogo}
              school="Bellevue College"
              degreeLevel="B.S. in Computer Science"
              date="2019-2022"
              activities={["CS Student Advisory Board Treasurer"]}
              relevantClasses={[
                "Data Structures",
                "Algorithms",
                "Cloud Computing",
                "Operating Systems",
                "Software Engineering",
                "Computer Architecture",
                "Internet of Things",
                "Computer Networks",
                "Linear Algebra",
                "Senior Capstone I, II, III",
                "Discrete Math",
                "Calculus III",
              ]}
            />
            <Education
              logo={CHSLogo}
              school="Cupertino High School"
              degreeLevel="High School Diploma"
              date="2015-2019"
              activities={[
                "Speech and Debate Club Member",
                "Sophomore English Tutor",
              ]}
              relevantClasses={[
                "AP Computer Science A",
                "AP Statistics",
                "AP Physics C: Mechanics",
                "AP Chemistry",
                "AP United States History",
                "AP Calculus AB",
              ]}
            />
          </ol>
        </section>

        <section
          id="experience"
          aria-label="Work Experience"
          className="section-container mt-16 scroll-mt-6"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <Experience
                companyLogo={Kaliber}
                companyName="Kaliber Labs Inc."
                position="Software Engineer"
                date="01/2026 - present"
                location="San Mateo, CA, United States (Onsite)"
                description={[
                  `Rearchitected the Conversation Pipeline demo to be more modular and extendable to various
                  medical skills, such as Speech Therapy / Patient Intake using FastAPI and React. Successfully
                  orchestrated multiple model operations within one system (Qwen, GPT).`,
                  `Leveraged the Conversation System to create a data platform deployed on AWS for subject matter experts (SME's) situated
                  around the US to verify and collect data on doctor-like responses from the in-house medical AI.`,
                ]}
              />
            </Reveal>
            <Reveal>
              <Experience
                companyLogo={NuclearnLogo}
                companyName="Nuclearn"
                position="Full Stack Software Engineer"
                date="12/2024 - 02/2025"
                location="Phoenix, Arizona, United States (Remote)"
                description={[
                  `Utilized FastAPI/SQLAlchemy to develop backend functionality for retrieving up to 25 most similar records in a
                  dataset using 500+ embeddings generated through natural language techniques. Architected a back-end workflow
                  with new SQLAlchemy datamodels to migrate 100+ YAML configurations across five config files into PostgreSQL,
                  enabling dynamic updates via a React frontend, eliminating the need for Nuclearn's developers to restart the web
                  backend during development if such configurations were changed.`,
                  `Optimized markdown processing for artifacts displayed across 10+ tool calls in AtomAssist, Nuclearn's proprietary
                  AI chatbot. Implemented role-based access control with error handling for consumer, admin, and contributor roles,
                  ensuring secure access to 10+ unique web app features on the frontend like Cap AI, AtomAssist, Capitalizer, and
                  Cluster Analytics`,
                ]}
              />
            </Reveal>
            <Reveal>
              <Experience
                companyLogo={PolicyEngineLogo}
                companyName="PolicyEngine"
                position="Open Source Software Engineer"
                date="03/2024 - present"
                location="Issaquah, Washington, United States (Remote)"
                description={[
                  `Worked with 3 contributors on PolicyEngine's web app project on GitHub (over 600 visits monthly).`,
                  `Assisted in migrating the front end component library to the newest version of Ant Design. Streamlined
                  150 Jest unit tests by refactoring 5 metadata API calls to occur in the beginning of testing runs.`,
                ]}
              />
            </Reveal>
            <Reveal>
              <Experience
                companyLogo={EcoLogicalLogo}
                companyName="EcoLogical"
                position="Software Engineer Intern"
                date="09/2023 - 12/2023"
                location="Champaign, Illinois, United States (Remote)"
                description={[
                  `Using Ant Design components to improve the front-end experience of the flagship web app.`,
                  `Set up 10 mutations and queries to AWS Amplify backend for the user signup workflow.`,
                ]}
              />
            </Reveal>
            <Reveal>
              <Experience
                companyLogo={IOIntel}
                companyName="IOIntelligence"
                position="Software Engineer Intern"
                date="07/2022 - 09/2022"
                location="Bellevue, Washington, United States"
                description={[
                  `Developed a 5 page application dashboard that displays networking analytics
                  from company's wireless devices worldwide.`,
                  `Used Chakra UI, React for frontend and Express.js and MySQL for the backend.`,
                ]}
              />
            </Reveal>
            <Reveal>
              <Experience
                companyLogo={PencilLogo}
                companyName="Molloy Moreno LLC"
                position="Software Engineer Intern"
                date="06/2021 - 09/2021"
                location="Issaquah, Washington, United States"
                description={[
                  `Developed a serverless web app for New York school teachers to track the academic progress of at-risk students.`,
                  `Made final design choices for UI components.`,
                  `Used React to implement UI components on the frontend and AWS for storing media on the backend.`,
                ]}
              />
            </Reveal>
          </div>
        </section>

        <section
          id="projects"
          aria-label="Projects"
          className="section-container mt-16 scroll-mt-6"
        >
          <h2 className="section-heading">Projects</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal className="h-full">
              <Projects
                id="llm"
                header="LLM God"
                video={{ src: withPrefix("/videos/llm.mp4"), poster: llmPoster }}
                list={["HTML", "CSS", "JavaScript", "Node.js", "Electron.js"]}
                description={`A desktop application that allows you to query 4 LLM's at once for a single input. Supports
                  Claude, ChatGPT, and Gemini and more! As someone who uses LLM's a lot in my day to day life, I wanted
                  an easy and convenient way to ask multiple LLM's at once, and it resulted in this project. It achieved over 270 stars
                  on GitHub.`}
                githubLink="https://github.com/czhou578/llm-god"
              />
            </Reveal>
            <Reveal className="h-full">
              <Projects
                id="nanoGPT"
                header="nanoGPT Inference Optimizations"
                image={nanoGPTImg}
                list={["Python", "PyTorch", "FastAPI", "React / Vite"]}
                description={`Implementing 19 industry level ML inference optimizations on Andrej Karpathy's nanoGPT code, including KV Caching, Chunked Prefill,
                  Speculative Decoding, Paged Attention, Continuous batching, etc. Benchmarked all these strategies against a baseline and also created an
                  interactive frontend / backend that demonstrates the main differences and performance gains.`}
                githubLink="https://github.com/czhou578/nanoGPT-inference"
              />
            </Reveal>
            <Reveal className="h-full">
              <Projects
                header="StreetFoodLove"
                image={sappImg}
                list={[
                  "HTML/CSS",
                  "TypeScript",
                  "React.js",
                  "Semantic UI",
                  "AWS",
                  "Redux",
                  "SQL",
                ]}
                description={`For my senior year capstone project in undergraduate, I worked with three others to create a Yelp-like app
                  that will empower and enable food truck vendors to more easily attract customers and run their business.
                  I worked with mostly Typescript and React.js on the front end for developing the UI and used Adobe XD for
                  the initial mockups. On the backend, I helped with writing SQL queries and making sure the AWS services were
                  linked up seamlessly with the frontend.`}
                githubLink="https://github.com/bcfoodapp/streetfoodlove"
              />
            </Reveal>
            <Reveal className="h-full">
              <Projects
                header="Project Elpis App"
                image={pe1Img}
                list={[
                  "HTML/CSS",
                  "TypeScript",
                  "React.js",
                  "Semantic UI",
                  "AWS",
                  "Redux",
                ]}
                description={`In my first internship, I helped create an educational web app that helps at risk high school
                  students track their future career goals. I utilized various front end technologies like React.js
                  along with backend tools like AWS for hosting. After the internship was completed, this app is now in
                  beta testing in a high school of a couple hundred students in New York City.`}
                githubLink="https://github.com/czhou578/Code-Samples-Project-Elpis"
              />
            </Reveal>
            <Reveal className="h-full">
              <Projects
                header="React Backend-Benchmarks"
                image={benchmarkImg}
                list={[
                  "TypeScript",
                  "React.js",
                  "Node.js",
                  "MySQL",
                  "Python / Flask",
                  "Golang",
                ]}
                description={`A web application with a React frontend and three backends written in different
                  languages that are all connected to a common MySQL database. Users will be able to send repetitive queries to any
                  backend that they choose and see how fast the server responds after the completed operation.`}
                githubLink="https://github.com/czhou578/React-Backend-Benchmarks"
              />
            </Reveal>
            <Reveal className="h-full">
              <Projects
                id="img-classify"
                header="Caption Image Classifier"
                video={{
                  src: withPrefix("/videos/imgclassify.mp4"),
                  poster: imgClassifyPoster,
                }}
                list={["React", "PyTorch", "FastAPI", "HuggingFace", "WebSockets"]}
                description={`A full stack web application that classifies images and generates captions; using my own pretrained PyTorch model based
                  on the CIFAR-100 dataset and leveraging HuggingFace's API to do image captioning using WebSockets.`}
                githubLink="https://github.com/czhou578/cifar"
              />
            </Reveal>
          </div>
          <p className="mt-8 text-center">
            <a
              href={withPrefix("/FullProjectArchive")}
              className="inline-block py-2 text-indigo-300 underline hover:text-white"
            >
              Show Full Project Archive
            </a>
          </p>
        </section>

        <section
          id="skills"
          aria-label="Technical Skills"
          className="section-container mt-16 scroll-mt-6"
        >
          <h2 className="section-heading">Skills</h2>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-indigo-200 bg-gray-800 p-6 shadow"
                >
                  <h3 className="mb-4 text-center text-xl font-semibold tracking-tight text-cyan-400">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="classwork"
          aria-label="Classwork"
          className="section-container mt-16 scroll-mt-6"
        >
          <h2 className="section-heading">Classwork</h2>
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-col gap-3">
              {CLASSWORK.map((course) => (
                <Classwork key={course.githubLink} {...course} />
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="hobbies"
          aria-label="Hobbies and Interests"
          className="section-container mt-16 scroll-mt-6"
        >
          <h2 className="section-heading">Hobbies</h2>
          <Reveal>
            <Hobbies />
          </Reveal>
        </section>

        <section
          id="for-agents"
          aria-label="For AI Agents"
          className="section-container mt-16 scroll-mt-6"
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-center text-2xl font-extrabold text-blue-300 sm:text-3xl">
              🤖 For AI Agents
            </h2>
            <p className="mb-6 text-center text-sm text-gray-400">
              This portfolio is agent-optimized. Download machine-readable files
              below.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {AGENT_FILES.map((file) => (
                <a
                  key={file.name}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-2 rounded-xl border bg-gray-800 p-5 transition-all duration-200 hover:bg-gray-700 ${file.border}`}
                >
                  <span className="text-3xl" aria-hidden="true">
                    {file.emoji}
                  </span>
                  <span
                    className={`font-semibold text-white transition-colors ${file.hover}`}
                  >
                    {file.name}
                  </span>
                  <span className="text-center text-xs text-gray-400">
                    {file.blurb}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-purple-400/40 bg-gray-800 p-4 sm:flex-row">
              <span className="text-2xl" aria-hidden="true">
                🔌
              </span>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-white">
                  MCP Server Available
                </p>
                <p className="mt-0.5 text-xs text-gray-400">
                  Query this portfolio programmatically via the Model Context
                  Protocol at{" "}
                  <a
                    href="https://my-portfolio-mcp.colinzhou.workers.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-purple-200"
                  >
                    my-portfolio-mcp.colinzhou.workers.dev
                  </a>
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-gray-400">
              Contact:{" "}
              <a
                href="mailto:colizu2020@gmail.com"
                className="underline hover:text-gray-200"
              >
                colizu2020@gmail.com
              </a>{" "}
              ·{" "}
              <a
                href="https://x.com/ColinZhouUSA"
                className="underline hover:text-gray-200"
              >
                @ColinZhouUSA
              </a>{" "}
              ·{" "}
              <a
                href="https://www.linkedin.com/in/colin-z-84a1a0137/"
                className="underline hover:text-gray-200"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
