import Image from "next/image";
import { StaticImageData } from "next/image";
// import styles from "../styles/education.module.css";

const Education: React.FC<{
  logo: StaticImageData;
  school: string;
  degreeLevel: string;
  date: string;
  activities?: string[];
  relevantClasses: string[];
}> = ({ school, degreeLevel, date, activities, relevantClasses, logo }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <Image src={logo} width="100" height="100" alt="pic" />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{school}</div>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{degreeLevel}</p>
            <p className="text-gray-600">{date}</p>
          </div>
          <p className="text-gray-700 text-base">
            <p>Activies: {activities}</p>
            <p>Relevant Classes: {relevantClasses}</p>
          </p>
        </div>
        <div className="flex items-center">
          {/* <Image
            className="w-10 h-10 rounded-full mr-4"
            src="/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
// const Education: React.FC<{
//   logo: StaticImageData;
//   school: string;
//   degreeLevel: string;
//   date: string;
//   activities?: string[];
//   relevantClasses: string[];
// }> = ({ school, degreeLevel, date, activities, relevantClasses, logo }) => {
//   return (
// <div className={styles.globalwrapper}>
//   <div className={styles.degreedatewrapper}>
//     <div>
//       <div className={styles.school}>
//         <Image
//           src={logo}
//           width="100px"
//           height="100px"
//           objectFit="contain"
//         />
//         <h2>{school}</h2>
//       </div>
//       <div className={styles.degree}>
//         <h3>{degreeLevel}</h3>
//       </div>
//     </div>
//     <div className={styles.date}>
//       <h3>{date}</h3>
//     </div>
//   </div>
//   <div className={styles.activities}>
//     <h4>Activities</h4>
//     <ul>
//       {activities
//         ? activities.map((element, idx) => {
//             return <li key={idx}>{element}</li>;
//           })
//         : null}
//     </ul>
//   </div>
//   <div className={styles.classes}>
//     <h4>Relevant Classes</h4>
//     <ul>
//       {relevantClasses
//         ? relevantClasses.map((element, idx) => {
//             return <li key={idx}>{element}</li>;
//           })
//         : null}
//     </ul>
//   </div>
// </div>
//   );
// };

// export default Education;
