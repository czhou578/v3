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
import UpworkLogo from "../public/images/upworkLogo.png";
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
  SiJira,
  SiGit,
  SiMarkdown,
  SiMessenger,
  SiGoogle,
} from "react-icons/si";
import Projects from "./Projects";
import Image from "next/image";

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
        className="mx-auto md:w-7/12 lg:w-7/12 mb-10 sm:w-5/12 border-4 border-indigo-500/100 p-5 rounded-lg"
        id="intro"
      >
        <p className="text-lg">
          I am a UIUC CS Masters student. My passion is in web development,
          using my knowledge of front end technologies to architect websites for
          various for-good causes. As someone with experience in designing logos
          and simple designs, I strive to bring some elements of the future into
          my creations. In addition, I have many years of experience writing
          online, allowing me to share my ideas and thinking to millions around
          the world. My dream is to be able to help design and architect
          platforms that would help problem solvers communicate their solutions
          to a pressing problem to the world.
        </p>
      </div>
      <h2
        className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-6/12 mb-10"
        id="education"
      >
        Education
      </h2>
      <div className="mx-auto md:w-6/12 lg:w-6/12 mb-10">
        <Education
          logo={UIUCLogo}
          school="University of Illinois Urbana-Champaign"
          degreeLevel="Masters in Computer Science"
          date="2022-2023"
          activities={["CS 411 Database Project Team Lead"]}
          relevantClasses={[
            "User-Interface Design, ",
            "Databases, ",
            "Advanced Data Management, ",
            "Human-Computer Interaction, ",
            "Artificial Intelligence ",
            "Distributed Systems (in progress) ",
            "ML + Data Systems (in progress",
          ]}
        />
        <Education
          logo={BCLogo}
          school="Bellevue College"
          degreeLevel="B.S. in Computer Science"
          date="2019-2022"
          activities={["CS Student Advisory Board Treasurer"]}
          relevantClasses={[
            "Data Structures, ",
            "Algorithms, ",
            "Cloud Computing, ",
            "Operating Systems, ",
            "Software Engineering, ",
            "Computer Networks, ",
            "Linear Algebra, ",
            "Discrete Math, ",
            "Calculus III",
          ]}
        />
        <Education
          logo={CHSLogo}
          school="Cupertino High School"
          degreeLevel="High School Diploma"
          date="2015-2019"
          activities={[
            "Speech and Debate Club Member, ",
            "Sophomore English Tutor",
          ]}
          relevantClasses={[
            "AP Computer Science A, ",
            "AP Statistics, ",
            "AP Physics C: Mechanics, ",
            "AP Chemistry, ",
            "AP United States History",
          ]}
        />
      </div>
      <h2
        className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-6/12 mb-10"
        id="experience"
      >
        Experience
      </h2>
      <Experience
        companyLogo={EcoLogicalLogo}
        companyName="EcoLogical"
        position="Software Engineer Intern"
        date="09/2023 - present"
        location="Champaign, Illinois, United States (Remote)"
        description={[
          `Using Ant Design components to improve the front-end experience of the flagship web app.`,
        ]}
      />
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
      <Experience
        companyLogo={QuoraLogo}
        companyName="Quora"
        position="Freelance Writer"
        date="08/2017 - 03/2020"
        location="Issaquah, Washington, United States"
        description={[
          `Writing about history, and other topics, with over 25 million answer views since 2017.`,

          `Managing own blog about futuristic technology, over 30k followers.`,

          `Admin and moderator of multiple blogs about finance and interesting information.`,
        ]}
      />
      <Experience
        companyLogo={UpworkLogo}
        companyName="Upwork"
        position="Freelance Writer"
        date="06/2019 - 08/2019"
        location="Issaquah, Washington, United States"
        description={[
          `Assisted clients with publishing articles on Quora.`,

          `Utilized communication skills to deliver clients work on time.`,

          `Used outreach abilities on Quora to drive traffic to client's websites.`,
        ]}
      />
      <Experience
        companyLogo={CHSLogo}
        companyName="Cupertino High School"
        position="Writing Tutor"
        date="08/2017 - 02/2018"
        location="Cupertino, California, United States"
        description={[
          `Helped tutor Cupertino High School sophomores with improving their writing.`,
          `Coordinated with high school/college teachers with tutoring progress.`,
        ]}
      />
      <h2
        className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-6/12 mb-10"
        id="projects"
      >
        Projects
      </h2>
      <div className="mx-auto p-8 w-3/12 md:w-11/12">
        <div className="grid lg:grid-cols-2 skill-gap">
          <Projects
            header="DistanceCalc"
            img={["/images/distancecalc1.png", "/images/distancecalc2.png"]}
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
          <Projects
            header="StreetFoodLove"
            img={["/images/Sapp.png", "/images/Sapp2.png"]}
            list={[
              "HTML/CSS Modules",
              "TypeScript",
              "React.js",
              "Semantic UI",
              "AWS",
              "Redux",
            ]}
            // description={"hello there"}
            description={`For my senior year capstone project, I helped to create a Yelp-like app
            that will empower and enable food truck vendors to more easily attract customers and run their business.
            I worked with mostly Typescript and React.js on the front end for developing the UI and used Adobe XD for
            the initial mockups. `}
            githubLink="https://github.com/bcfoodapp/streetfoodlove"
          />
          <Projects
            header="Project Elpis App"
            img={["/images/PE1.png", "/images/PE2.png"]}
            list={[
              "HTML/CSS Modules",
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
          <Projects
            header="React Backend-Benchmarks"
            img={["/images/benchmark1.png", "/images/benchmark2.png"]}
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
          <Projects
            header="Wordament / Wordle"
            img={["/images/W1.png", "/images/W2.png"]}
            list={[
              "HTML/CSS Modules",
              "TypeScript",
              "React.js",
              "Express",
              "MySQL",
            ]}
            description={`I created my own version of the popular Microsoft game Wordament. Users are to 
              swipe with a mouse to create words using the provided alphabet letters, and are awarded a 
              specific amount of points depending on whether a guess results in a word.`}
            githubLink="https://github.com/czhou578/Wordament-v2"
          />
          <Projects
            header="Whitehouse.gov 2025"
            img={["/images/whitehouse1.png", "/images/whitehouse2.png"]}
            list={[
              "HTML/CSS",
              "JavaScript",
              "React.js",
              "Firebase",
              "FEC / Google Civics API",
            ]}
            description={`This project was a playground for me to practice my designing skills while imagining
          what a future of the whitehouse.gov website would look like if Andrew Yang got elected as the
          US President in 2024.`}
            githubLink="https://github.com/czhou578/AmericanScorecard"
          />
          <Projects
            header="YouTubeBlocker"
            img={["/images/YT.png", "/images/YT2.png"]}
            list={["Google Chrome API", "CSS"]}
            description={`A way to block distractions on YouTube. Using this blocker,
          users will be able to cover up the recommended videos section,
          allowing for less distractions and greater concentration on tasks.`}
            githubLink="https://github.com/czhou578/YouTubeBlocker"
          />
          <Projects
            header="Personal Website V2."
            img={["/images/PWV2-1.png", "/images/PWV2-2.png"]}
            list={["React", "TypeScript", "Next.js", "CSS Modules"]}
            description={`The second version of my personal website, built with React, TypeScript, and Next.js`}
            githubLink="https://github.com/czhou578/v2"
          />
        </div>
      </div>
      <h2
        className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-6/12"
        id="skills"
      >
        Skills
      </h2>
      <div className="mx-auto p-8 w-7/12 md:w-8/12">
        <div className="grid lg:grid-cols-3 skill-gap">
          <SkillsList
            header="HTML, CSS, TypeScript"
            icon={[
              <ImHtmlFive key="first" size="4em" />,
              // <ImCss3 key="second" size="4em" />,
              <SiTypescript key="third" size="4em" />,
            ]}
            description="Familiar with front-end technologies to build responsive/dynamic websites."
          />
          <SkillsList
            header="AWS, GCP"
            icon={[
              <SiAmazonaws key="first" size="4em" />,
              <SiGooglecloud key="second" size="4em" />,
            ]}
            description="Used AWS and GCP to host personal and university projects in undergrad and grad."
          />
          <SkillsList
            header="Node.js, GraphQL"
            icon={[
              <SiNodedotjs key="first" size="4em" />,
              <SiGraphql key="second" size="4em" />,
            ]}
            description="Used Node.js to connect to various databases and used GraphQL in my 2021 internship. "
          />
          <SkillsList
            header="MongoDB, MySQL"
            icon={[
              <SiMongodb key="first" size="4em" />,
              <SiMysql key="second" size="4em" />,
            ]}
            description="Learned about and interacted with databases throughout school classes."
          />
          <SkillsList
            header="Git, Jira, Markdown"
            icon={[
              <SiGit key="first" size="4em" />,
              <SiMarkdown key="third" size="4em" />,
            ]}
            description="Experienced with Jira in my 2021 internship as well as Github services."
          />
          <SkillsList
            header="Communication, Googling"
            icon={[
              <SiMessenger key="first" size="4em" />,
              <SiGoogle key="second" size="4em" />,
            ]}
            description="Familiar with skills that a 2020's programmer needs in order to gather more information more effectively."
          />
        </div>
      </div>
      <h2 className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-6/12 mb-10">
        Other Projects
      </h2>
      <div className="mx-auto p-8 w-7/12 md:w-8/12">
        <div className="grid lg:grid-cols-3 skill-gap">
          <NoteWorthyProjects
            header="Morsecode Binary Tree"
            githubLink="https://github.com/czhou578/MorseCodeBinaryTree"
            description="Decoding morse code using binary trees, written in Java. This was for a class project."
            techUsed={["Java"]}
          />
          <NoteWorthyProjects
            header="Personal Website V1"
            githubLink="https://github.com/czhou578/Personal-Website"
            description="This is the very first version of my personal website, using basic front end technologies."
            techUsed={["HTML", "CSS", "JS"]}
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
      </div>
      <h2 className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-6/12 mb-10">
        Classwork
      </h2>
      <div className="mx-auto p-8 w-4/12 md:w-8/12">
        <div className="grid lg:grid-cols-3 gap-3.5">
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
      </div>
      <h2
        className="text-4xl font-extrabold dark:text-blue-300 mx-auto lg:w-7/12 mb-10"
        id="designs"
      >
        Designs
      </h2>
      <div className="mx-auto p-8 w-fit">
        <Designs />
      </div>
      <Footer />
    </div>
  );
}
