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
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          {/* <Image
            className="w-10 h-10 rounded-full mr-4"
            src="/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          /> */}
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
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
