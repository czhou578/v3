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

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <Introduction />
      <Education
        logo={UIUCLogo}
        school="University of Illinois Urbana-Champaign"
        degreeLevel="Masters"
        date="2022-2023"
        activities={["None"]}
        relevantClasses={["CS 411"]}
      />
      <Education
        logo={BCLogo}
        school="Bellevue College"
        degreeLevel="Bachelor of Science"
        date="2022-2023"
        activities={["None"]}
        relevantClasses={["CS 411"]}
      />
      <Education
        logo={CHSLogo}
        school="Cupertino High School"
        degreeLevel="High school Diploma"
        date="2022-2023"
        activities={["None"]}
        relevantClasses={["CS 411"]}
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
      <SkillsList header="HTML, CSS, JavaScript" icon={<div></div>} />
      <SkillsList header="AWS, GCP" />
      <SkillsList header="Node.js" />
      <SkillsList header="MongoDB, MySQL" />
      {/* <NoteWorthyProjects /> */}
      {/* <Classwork /> */}
      <Designs />
      <Footer />
    </div>
  );
}
