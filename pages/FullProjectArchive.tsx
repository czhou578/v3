import React from "react";
import NoteWorthyProjects from "./NoteWorthyProjects";

const FullProjectArchive = () => {
  return (
    <div className="mx-auto p-8 w-7/12 md:w-8/12">
      <div className="grid lg:grid-cols-3 skill-gap">
        <NoteWorthyProjects
          header="iPhone Image-Classifier"
          githubLink="https://github.com/czhou578/iphone-img-classify"
          description="A full stack web application that utilizes PyTorch and the NLTK natural language processing framework
              to classify and accept user prompts to search for images with a specific characteristic. Users will be able to query
              for a label in images on the frontend and retrieve results."
          techUsed={[
            "PyTorch",
            "Python",
            "TypeScript",
            "Sqlite 3",
            "Next.js",
            "Tailwind CSS",
          ]}
        />
        <NoteWorthyProjects
          header="Distance Calc"
          githubLink="https://github.com/czhou578/DistanceCalc"
          description="A simple web app that calculates the distance between two points on a map and logs it to a MUI form."
          techUsed={[
            "HTML",
            "CSS",
            "JS",
            "React.js",
            "Material UI",
            "React Router",
            "Firebase",
          ]}
        />
        <NoteWorthyProjects
          header="PostureCam"
          githubLink="https://github.com/czhou578/PostureCam"
          description="A Python and OpenCV application that detects and tracks your posture using your webcam."
          techUsed={["Python", "OpenCV"]}
        />
        <NoteWorthyProjects
          header="Morsecode Binary Tree"
          githubLink="https://github.com/czhou578/MorseCodeBinaryTree"
          description="Decoding morse code using binary trees, written in Java. This was for a class project."
          techUsed={["Java"]}
        />
        <NoteWorthyProjects
          header="Whitehouse.gov 2025"
          githubLink="https://github.com/czhou578/AmericanScorecard"
          description="Whitehouse.gov website if Andrew Yang got elected as the US President in 2024."
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
          description="A mockup of a cryptocurrency website, which helped me practice CSS animations."
          techUsed={["HTML", "CSS", "JS", "Figma"]}
        />
        <NoteWorthyProjects
          header="YouTubeBlocker"
          githubLink="https://github.com/czhou578/YouTubeBlocker"
          description="A Google Chrome extension to block distractions on YouTube. Using this blocker, users will be able to cover up the recommended videos section, allowing for less distractions and greater concentration on tasks."
          techUsed={["Google Chrome API", "CSS"]}
        />
      </div>
    </div>
  );
};

export default FullProjectArchive;
