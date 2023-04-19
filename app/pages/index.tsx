import Image from "next/image";
import { Inter } from "next/font/google";
import Introduction from "./Introduction";
import HeaderBar from "./Headerbar";
import Education from "./Education";
import UIUCLogo from "../public/images/UIUC-Logo.jpg";
import BCLogo from "../public/images/BellevueCollegeLogo.png";
import CHSLogo from "../public/images/CupertinoHighLogo.jpg";
import SkillsList from "./SkillsList";

const inter = Inter({ subsets: ["latin"] });

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
      <SkillsList />
    </div>
  );
}
