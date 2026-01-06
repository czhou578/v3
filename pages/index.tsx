import Introduction from "./Introduction";
import HeaderBar from "./Headerbar";
import Education from "./Education";
import UIUCLogo from "../public/images/UIUC-Logo.jpg";
import BCLogo from "../public/images/BellevueCollegeLogo.png";
import NuclearnLogo from "../public/images/NuclearnLogo.png";
import Designs from "./Designs";
import Hobbies from "./Hobbies";
import Footer from "./Footer";
import Experience from "./Experience";
import IOIntel from "../public/images/IO_Intelligence.jpg";
import BellevueCollegeLogo from "../public/images/BellevueCollegeLogo.png";
import CHSLogo from "../public/images/CupertinoHighLogo.jpg";
import PencilLogo from "../public/images/pencil.jpg";
import QuoraLogo from "../public/images/QuoraLogo.png";
import PolicyEngineLogo from "../public/images/thepolicyengine_logo.jpg";
import DemocracyLabLogo from "../public/images/democracyLab.jpg";
import EcoLogicalLogo from "../public/images/ecological.jpg";
import Projects from "./Projects";
import Image from "next/image";
import LazyLoad from "./LazyLoad";
import Classwork from "./Classwork";
import Kaliber from "../public/images/kaliber.png";

const prefix = "/v3";

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <Introduction />
      <div className="mx-auto flex justify-center mb-10">
        <Image
          src={prefix + "/images/IMG-0197.jpg"}
          width={200}
          height={100}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-md mb-10 px-4 text-center">
        <span className="text-sm sm:text-base">
          <em>*Me at Snoqualmie Falls, Washington State in April 2022</em>
        </span>
      </div>
      <div
        className="mx-auto md:w-5/12 lg:w-5/12 mb-10 sm:w-5/12 w-8/12 border-4 border-indigo-500/100 p-5 rounded-lg"
        id="intro"
      >
        <p className="text-lg">
          I graduated from UIUC with a Masters in Computer Science, and obtained
          my bachelor's degree in Computer Science from Bellevue College. I was
          born in Canada, but grew up in the Bay Area and now live near Seattle,
          Washington.
          <br />
          <br />
          I am a software developer with experience in full stack web
          development and cloud services. Previously, I worked at Nuclearn.ai
          (nuclear power startup) as a full stack engineer, and did multiple
          internships in the civics, telecom, environmental, and educational
          sectors. I am broadly interested in integrating the latest AI into
          useful products.
          <br />
          <br />
          When I'm not sitting at the computer, you can find me solving Rubik's
          Cubes of various sizes, practicing a difficult piano piece and posting
          it on my Instagram, doing 1000 piece jigsaw puzzles with my sister, or
          taking long walks around my neighborhood.
        </p>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="education"
      >
        Education
      </h2>
      <div className="mx-auto md:w-6/12 w-8/12 mb-10">
        <LazyLoad>
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
        </LazyLoad>
        <LazyLoad>
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
        </LazyLoad>
        <LazyLoad>
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
              "AP Computer Science A,",
              "AP Statistics,",
              "AP Physics C: Mechanics,",
              "AP Chemistry,",
              "AP United States History",
              "AP Calculus AB",
            ]}
          />
        </LazyLoad>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="experience"
      >
        Experience
      </h2>
      <LazyLoad>
        <Experience
          companyLogo={Kaliber}
          companyName="Kaliber Labs Inc."
          position="Software Engineer"
          date="01/2026 - present"
          location="San Mateo, CA, United States (Onsite)"
          description={[`Coming soon!`]}
        />{" "}
      </LazyLoad>
      <LazyLoad>
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
enabling dynamic updates via a React frontend, eliminating the need for Nuclearn’s developers to restart the web
backend during development if such configurations were changed.`,
            `Optimized markdown processing for artifacts displayed across 10+ tool calls in AtomAssist, Nuclearn’s proprietary
AI chatbot. Implemented role-based access control with error handling for consumer, admin, and contributor roles,
ensuring secure access to 10+ unique web app features on the frontend like Cap AI, AtomAssist, Capitalizer, and
Cluster Analytics`,
          ]}
        />{" "}
      </LazyLoad>
      <LazyLoad>
        <Experience
          companyLogo={PolicyEngineLogo}
          companyName="PolicyEngine"
          position="Open Source Software Engineer"
          date="03/2024 - present"
          location="Issaquah, Washington, United States (Remote)"
          description={[
            `Worked with 3 contributors on PolicyEngine’s web app project on GitHub (over 600 visits monthly).`,
            `Assisted in migrating the front end component library to the newest version of Ant Design. Streamlined 
            150 Jest unit tests by refactoring 5 metadata API calls to occur in the beginning of testing runs.`,
          ]}
        />{" "}
      </LazyLoad>
      <LazyLoad>
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
      </LazyLoad>
      <LazyLoad>
        <Experience
          companyLogo={IOIntel}
          companyName="IOIntelligence"
          position="Software Engineer Intern"
          date="07/2022 - 09/2022"
          location="Bellevue, Washington, United States"
          description={[
            ` Developed a 5 page application dashboard that displays networking analytics
              from company's wireless devices worldwide. `,
            `Used Chakra UI, React for frontend and Express.js and MySQL for the backend.`,
          ]}
        />
      </LazyLoad>
      <LazyLoad>
        <Experience
          companyLogo={PencilLogo}
          companyName="Molloy Moreno LLC"
          position="Software Engineer Intern"
          date="06/2021 - 09/2021"
          location="Issaquah, Washington, United States"
          description={[
            `Developed a serverless web app for New York school \n 
                    teachers to track the academic progress of at-risk students.`,

            `Made final design choices for UI components.`,

            `Used React to implement UI components on the frontend and AWS for storing media 
                    on the backend.`,
          ]}
        />
      </LazyLoad>
      <LazyLoad>
        <Experience
          companyLogo={BellevueCollegeLogo}
          companyName="Bellevue College"
          position="CS Student Advisory Board Member"
          date="08/2021 - 06/2022"
          location="Bellevue, Washington, United States"
          description={[
            `Met with 3 members of faculty to discuss how to grow Bellevue College CS (currently at 150 students).`,

            `Helped facilitate constructive communication between faculty and students with regards to curriculum.`,

            `Planned out $1000 budget for CS department use in 2023. Tracked all expenses using Microsoft Excel.`,
          ]}
        />
      </LazyLoad>
      <LazyLoad>
        <Experience
          companyLogo={DemocracyLabLogo}
          companyName="DemocracyLab"
          position="Open Source Web Developer"
          date="05/2021 - 08/2021"
          location="Issaquah, Washington, United States"
          description={[
            `Used Figma to design 3 wireframes for the CodePDX project, which is a web app that develops applications to improve the lives of people living in Portland, Oregon.`,
            `Used React to redesign 5 components for the Accessibility Ratings Project, which aims to help users submit accessibility feedback to big tech companies
              regarding their app offerings.`,
            `Designed 3 wireframes for the iSeaTree mobile app project, which aims to help young kids explore the indigenous tree species of the Pacific Northwest.`,
          ]}
        />
      </LazyLoad>
      <LazyLoad>
        <Experience
          companyLogo={QuoraLogo}
          companyName="Quora"
          position="Freelance Writer"
          date="08/2017 - 03/2020"
          location="Issaquah, Washington, United States"
          description={[
            `Writing about history, and other topics, with over 30 million answer views since 2017.`,

            `Managing own blog about futuristic technology, over 30k followers.`,

            `Admin and moderator of multiple blogs about finance and interesting information.`,
          ]}
        />
      </LazyLoad>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="projects"
      >
        Projects
      </h2>
      <div className="mx-auto md:w-6/12 lg:w-6/12 mb-10">
        <LazyLoad>
          <div id="llm">
            <Projects
              header="LLM God"
              img={["/videos/llm.mp4"]}
              list={["HTML", "CSS", "JavaScript", "Node.js", "Electron.js"]}
              description={`A desktop application that allows you to query 4 LLM's at once for a single input. Supports
                Claude, ChatGPT, and Gemini and more! As someone who uses LLM's a lot in my day to day life, I wanted
                an easy and convenient way to ask multiple LLM's at once, and it resulted in this project.`}
              githubLink="https://github.com/czhou578/llm-god"
              isVideo
            />
          </div>
        </LazyLoad>
        <LazyLoad>
          <div id="img-classify">
            <Projects
              header="Caption Image Classifier"
              img={["/videos/imgclassify.mp4"]}
              list={[
                "React",
                "PyTorch",
                "FastAPI",
                "HuggingFace",
                "WebSockets",
              ]}
              description={`A full stack web application that classifies images and generates captions; using my own pretrained PyTorch model based
                on the CIFAR-100 dataset and leveraging HuggingFace's API to do image captioning using WebSockets.`}
              githubLink="https://github.com/czhou578/cifar"
              isVideo
            />
          </div>
        </LazyLoad>
        <LazyLoad>
          <Projects
            header="StreetFoodLove"
            img={["/images/Sapp.png"]}
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
        </LazyLoad>
        <LazyLoad>
          <Projects
            header="Project Elpis App"
            img={["/images/PE1.png"]}
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
        </LazyLoad>
        <LazyLoad>
          <Projects
            header="React Backend-Benchmarks"
            img={["/images/benchmark2.png"]}
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
        </LazyLoad>
        <LazyLoad>
          <Projects
            header="Job Screener Extension"
            img={["/images/job-screener.png"]}
            list={[
              "HTML/CSS",
              "JavaScript",
              "Google Chrome API",
              "Google Sheets API",
            ]}
            description={`I created a Google Chrome Extension leveraging the Google Sheets API that allows me to quickly
              identify the specific companies that I have already submitted job applications for. This was a response to a 
              problem I had where after submitting 1000+ job applications, I would often apply mistakenly to companies twice.
              This extension highlights companies that I have applied to in orange, which helps me streamline my job search
              and become more efficient.`}
            githubLink="https://github.com/czhou578/jobname-screener"
          />
        </LazyLoad>
        <LazyLoad>
          <Projects
            header="Wordament / Wordle"
            img={["/images/W1.png"]}
            list={["HTML/CSS", "TypeScript", "React.js", "Express", "MySQL"]}
            description={`I created my own version of the popular Microsoft game Wordament. Users are to 
                swipe with a mouse to create words using the provided alphabet letters, and are awarded a 
                specific amount of points depending on whether a guess results in a word.`}
            githubLink="https://github.com/czhou578/Wordament-v2"
          />
        </LazyLoad>
      </div>
      <div className="text-center mt-6">
        <a
          href="/FullProjectArchive"
          className="text-white-500 underline hover:text-blue-700"
        >
          Show Full Project Archive
        </a>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center mt-10"
        id="skills"
      >
        Skills
      </h2>
      <div className="mx-auto p-8 w-7/12 md:w-8/12">
        <LazyLoad>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-indigo-200/100 p-6">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-cyan-400 text-center mb-4">
                Frontend
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "TypeScript",
                  "React",
                  "GraphQL",
                  "Figma",
                  "AdobeXD",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-indigo-200/100 p-6">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-cyan-400 text-center mb-4">
                Backend
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "MongoDB",
                  "MySQL",
                  "PostgreSQL",
                  "Python",
                  "FastAPI",
                  "MapReduce",
                  "Docker",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-indigo-200/100 p-6">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-cyan-400 text-center mb-4">
                Tools
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
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
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center">
        Classwork
      </h2>
      <div className="mx-auto p-8 w-7/12 md:w-8/12">
        <LazyLoad>
          <div className="grid lg:grid-cols-3 gap-3.5">
            <Classwork
              header="Distributed System (Fall 2023)"
              githubLink="https://github.com/czhou578/CS425"
              description="Work done for UIUC's Distributed Systems class, where I built my own distributed system from scratch."
              techUsed={["Python", "Linux", "Shell Scripting", "Hadoop"]}
            />
            <Classwork
              header="Web Programming (Winter 2022)"
              githubLink="https://github.com/czhou578/CS-380-Work"
              description="Work done for Bellevue College's Web Programming class."
              techUsed={["HTML/CSS", "JS", "React"]}
            />
            <Classwork
              header="Internet of Things (Winter 2022)"
              githubLink="https://github.com/czhou578/IoT-work"
              description="Code for Bellevue College's IOT class. The class used Arduino."
              techUsed={["C++", "C"]}
            />
            <Classwork
              header="Operating Systems (Fall 2021)"
              githubLink="https://github.com/czhou578/CS360-Work"
              description="Code that I wrote for Bellevue College's Operating Systems class using Linux OS and C. "
              techUsed={["C"]}
            />
            <Classwork
              header="Data Structures / Databases (Fall 2020)"
              githubLink="https://github.com/czhou578/Fall-2020-Work"
              description="Data Structures and databases work from Bellevue College"
              techUsed={["Java", "C++"]}
            />
            <Classwork
              header="Programming Lang. (Winter 2021)"
              githubLink="https://github.com/czhou578/Winter-2021-Quarter-Work"
              description="Learned regular expressions, and parsing."
              techUsed={["Java", "Python"]}
            />
            <Classwork
              header="Fundamentals of CS II (Winter 2020)"
              githubLink="https://github.com/czhou578/CS-211-Work"
              description="Work from my second ever CS class at Bellevue College"
              techUsed={["Java"]}
            />
            <Classwork
              header="Artificial Intelligence (Spring 2023)"
              githubLink="https://github.com/czhou578/AI-Class-Work"
              description="Work from my artificial intelligence class at UIUC"
              techUsed={["Python"]}
            />
            <Classwork
              header="Cloud Computing (Spring 2022)"
              githubLink="https://github.com/czhou578/Cloud-Computing-Work"
              description="Work from my cloud computing class at Bellevue College, involving AWS services"
              techUsed={["C#"]}
            />
            <Classwork
              header="Artificial Intelligence (Spring 2023)"
              githubLink="https://github.com/czhou578/AI-Class-Work"
              description="Work from my artificial intelligence class at UIUC, involving Python"
              techUsed={["Python"]}
            />
            <Classwork
              header="Spring 2021 Bellevue College Work"
              githubLink="https://github.com/czhou578/Spring-Quarter-2021"
              description="Work from my Fall 2021 quarter at Bellevue College, involving Java"
              techUsed={["Java"]}
            />
          </div>
        </LazyLoad>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="designs"
      >
        Designs
      </h2>
      <div className="mx-auto p-8 w-fit">
        <h4 className="text-cyan-100 font-medium text-base mb-10 ml-10">
          *These are several futuristic looking UI designs that I created for
          fun, in early 2020, along with some UI wireframes from my various
          internships.
        </h4>
        <LazyLoad>
          <Designs />
        </LazyLoad>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="hobbies"
      >
        Hobbies
      </h2>
      <LazyLoad>
        <Hobbies />
      </LazyLoad>
      <Footer />
    </div>
  );
}
