import Introduction from "./Introduction";
import HeaderBar from "./Headerbar";
import Education from "./Education";
import UIUCLogo from "../public/images/UIUC-Logo.jpg";
import BCLogo from "../public/images/BellevueCollegeLogo.png";
import SkillsList from "./SkillsList";
import Designs from "./Designs";
import NoteWorthyProjects from "./NoteWorthyProjects";
import Classwork from "./Classwork";
import Footer from "./Footer";
import Experience from "./Experience";
import IOIntel from "../public/images/IO_Intelligence.jpg";
import BellevueCollegeLogo from "../public/images/BellevueCollegeLogo.png";
import CHSLogo from "../public/images/CupertinoHighLogo.jpg";
import EndevreLogo from "../public/images/endevreLogo.jpg";
import PencilLogo from "../public/images/pencil.jpg";
import QuoraLogo from "../public/images/QuoraLogo.png";
import SelfEmployedLogo from "../public/images/SelfEmployedLogo.jpg";
import PolicyEngineLogo from "../public/images/thepolicyengine_logo.jpg";
import DemocracyLabLogo from "../public/images/democracyLab.jpg";
import EcoLogicalLogo from "../public/images/ecological.jpg";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import {
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiGraphql,
  SiGit,
  SiMarkdown,
  SiMessenger,
  SiGoogle,
  SiPython,
  SiApachehadoop,
  SiFirebase,
  SiOpenai,
  SiJira,
  SiLatex,
  SiAdobexd,
  SiFigma,
  SiShell,
  SiLinux,
  SiReact,
} from "react-icons/si";
import Projects from "./Projects";
import Image from "next/image";
import LazyLoad from "./LazyLoad";

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
      <div
        className="mx-auto md:w-5/12 lg:w-5/12 mb-10 sm:w-5/12 border-4 border-indigo-500/100 p-5 rounded-lg"
        id="intro"
      >
        <p className="text-lg">
          I am an aspiring software developer with experience in full stack web
          development and cloud services. Previously, I graduated from UIUC with
          a Masters in Computer Science, and obtained my bachelor's degree in
          Computer Science from Bellevue College.
          <br />
          <br />
          When I'm not sitting at the computer, you can find me solving Rubik's
          Cubes of various sizes, practicing a difficult piano piece, or taking
          long walks around my neighborhood.
        </p>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="education"
      >
        Education
      </h2>
      <div className="mx-auto md:w-6/12 lg:w-6/12 mb-10">
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
          companyLogo={EndevreLogo}
          companyName="Endevre Technologies"
          position="Head of Marketing / Designer"
          date="06/2017 - 05/2018"
          location="Cupertino, California. United States"
          description={[
            `Promoted company products through emails, and by giving presentations at events.`,

            `Secured sponsorships with multiple hackathon events at high schools throughout the Bay Area.`,

            `Designed company websites and page layouts for products.`,
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
          companyLogo={SelfEmployedLogo}
          companyName="My House"
          position="Hobbyist Designer / Web Developer"
          date="08/2020 - present"
          location="Issaquah, Washington, United States"
          description={[
            `Created websites / designs using technologies like React,
                    UI frameworks like Semantic UI, and Typescript.`,

            `Used the Google Chrome API to create a Google Chrome extension to block YouTube recommendations.`,

            `Developed a replica of the popular Microsoft Wordament game using Typescript, and React.`,
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
      <div className="mx-auto p-8 w-3/12 md:w-11/12">
        <LazyLoad>
          <Projects
            header="DistanceCalc"
            img={["/images/distancecalc1.png"]}
            list={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Material UI",
              "React Router",
              "Firebase",
            ]}
            description={`Using the React.js framework, I created a distance tracker that uses an external API to take two cities 
            in the United States, and calculate their distance and the travel time in minutes. After each request,
            the data will be logged in an external form, which I took from Material UI.`}
            githubLink="https://github.com/czhou578/DistanceCalc"
          />
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
            ]}
            description={`For my senior year capstone project, I helped to create a Yelp-like app
              that will empower and enable food truck vendors to more easily attract customers and run their business.
              I worked with mostly Typescript and React.js on the front end for developing the UI and used Adobe XD for
              the initial mockups. `}
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
            description={`I helped create an educational web app that helps at risk high school 
                students track their future career goals. I utilized various front end technologies like React.js 
                along with backend tools like AWS for hosting. After the internship was completed, this app is now in
                beta testing in a high school of a couple hundred students in New York City.`}
            githubLink="https://github.com/czhou578/Code-Samples-Project-Elpis"
          />
        </LazyLoad>
        {/* <LazyLoad>
          <Projects
            header="LLM God"
            img={["/images/llm.png"]}
            list={["JavaScript", "Node.js", "Electron.js"]}
            description={`A desktop application that allows you to query 4 LLM's at once for a single input. Supports
              Claude, Llama 3.1, ChatGPT, and Gemini. As someone who uses LLM's a lot in my day to day life, I wanted
              an easy and convenient way to ask multiple LLM's at once, and it spawned this project.`}
            githubLink="https://github.com/czhou578/React-Backend-Benchmarks"
          />
        </LazyLoad> */}
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
            header="Wordament / Wordle"
            img={["/images/W1.png"]}
            list={["HTML/CSS", "TypeScript", "React.js", "Express", "MySQL"]}
            description={`I created my own version of the popular Microsoft game Wordament. Users are to 
                swipe with a mouse to create words using the provided alphabet letters, and are awarded a 
                specific amount of points depending on whether a guess results in a word.`}
            githubLink="https://github.com/czhou578/Wordament-v2"
          />
        </LazyLoad>
        <LazyLoad>
          <Projects
            header="YouTubeBlocker"
            img={["/images/YT.png"]}
            list={["Google Chrome API", "CSS"]}
            description={`A way to block distractions on YouTube. Using this blocker,
            users will be able to cover up the recommended videos section,
            allowing for less distractions and greater concentration on tasks.`}
            githubLink="https://github.com/czhou578/YouTubeBlocker"
          />
        </LazyLoad>
      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center"
        id="skills"
      >
        Skills
      </h2>
      <div className="mx-auto p-8 w-7/12 md:w-8/12">
        <LazyLoad>
          <div className="grid lg:grid-cols-3 skill-gap">
            <SkillsList
              header="HTML, CSS, TypeScript"
              icon={[
                <ImHtmlFive key="first" size="4em" />,
                <ImCss3 key="second" size="4em" />,
                <SiTypescript key="third" size="4em" />,
              ]}
            />
            <SkillsList
              header="React, Node.js, GraphQL"
              icon={[
                <SiReact key="first" size="4em" />,
                <SiNodedotjs key="second" size="4em" />,
                <SiGraphql key="second" size="4em" />,
              ]}
            />
            <SkillsList
              header="MongoDB, MySQL"
              icon={[
                <SiMongodb key="first" size="4em" />,
                <SiMysql key="second" size="4em" />,
              ]}
            />
            <SkillsList
              header="AWS, GCP, Firebase"
              icon={[
                <SiAmazonaws key="first" size="4em" />,
                <SiGooglecloud key="second" size="4em" />,
                <SiFirebase key="third" size="4em" />,
              ]}
            />
            <SkillsList
              header="Python, MapReduce"
              icon={[
                <SiPython key="first" size="4em" />,
                <SiApachehadoop key="second" size="4em" />,
              ]}
            />
            <SkillsList
              header="Git, Jira"
              icon={[
                <SiGit key="first" size="4em" />,
                <SiJira key="second" size="4em" />,
              ]}
            />
            <SkillsList
              header="Figma, AdobeXD"
              icon={[
                <SiAdobexd key="first" size="4em" />,
                <SiFigma key="second" size="4em" />,
              ]}
            />
            <SkillsList
              header="LaTeX, Markdown, Linux"
              icon={[
                <SiLatex key="first" size="4em" />,
                <SiMarkdown key="second" size="4em" />,
                <SiLinux key="third" size="4em" />,
              ]}
            />
            <SkillsList
              header="Communication, Googling"
              icon={[
                <SiMessenger key="first" size="4em" />,
                <SiGoogle key="second" size="4em" />,
              ]}
            />
            <SkillsList
              header="Prompt Engineering"
              icon={[<SiOpenai key="first" size="4em" />]}
            />
          </div>
        </LazyLoad>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center">
        Archive
      </h2>
      <div className="mx-auto p-8 w-7/12 md:w-8/12">
        <LazyLoad>
          <div className="grid lg:grid-cols-3 skill-gap">
            <NoteWorthyProjects
              header="Morsecode Binary Tree"
              githubLink="https://github.com/czhou578/MorseCodeBinaryTree"
              description="Decoding morse code using binary trees, written in Java. This was for a class project."
              techUsed={["Java"]}
            />
            <NoteWorthyProjects
              header="Whitehouse.gov 2025"
              githubLink="https://github.com/czhou578/AmericanScorecard"
              description="Whitehouse.gov website if Andrew Yang got elected as the
              US President in 2024."
              techUsed={[
                "HTML",
                "CSS",
                "JS",
                "React.js",
                "Firebase",
                "FEC / Google Civics API",
              ]}
            />
            <NoteWorthyProjects
              header="Personal Website V1"
              githubLink="https://github.com/czhou578/Personal-Website"
              description="This is the very first version of my personal website, using basic front end technologies."
              techUsed={["HTML", "CSS", "JS"]}
            />
            <NoteWorthyProjects
              header="Personal Website V2"
              githubLink="https://github.com/czhou578/v2"
              description="The second version of my personal website, built with React, TypeScript, and Next.js."
              techUsed={["React", "TypeScript", "Next.js", "CSS Modules"]}
            />
            <NoteWorthyProjects
              header="Wordament V1"
              githubLink="https://github.com/czhou578/Wordament"
              description="This is the very first version of Wordament, using basic web technologies."
              techUsed={["HTML", "CSS", "JS"]}
            />
            <NoteWorthyProjects
              header="Doctors Orders"
              githubLink="https://github.com/deekshacheruku/DoctorsOrders"
              description="An Android app to help doctors and family track the medicine schedules of elderly patients."
              techUsed={["Java", "Android Studio"]}
            />
            <NoteWorthyProjects
              header="Country Database"
              githubLink="https://github.com/cs411-alawini/fa22-cs411-Q-team044-OurSQL"
              description="A web app that allows for querying various data about all the countries of the world."
              techUsed={["JS", "React", "MySQL", "Node.js"]}
            />
            <NoteWorthyProjects
              header="Crypto Website"
              githubLink="https://github.com/czhou578/CryptoWebsiteMockup"
              description="A mockup of a cryptocurrency website, which helped me practice
              CSS animations."
              techUsed={["HTML", "CSS", "JS", "Figma"]}
            />
          </div>
        </LazyLoad>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-blue-300 mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-9/12 xl:w-6/12 mb-6 sm:mb-8 md:mb-10 text-center">
        Classwork
      </h2>
      <div className="mx-auto p-8 w-4/12 md:w-8/12">
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
      <Footer />
    </div>
  );
}
