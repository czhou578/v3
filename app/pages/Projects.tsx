import Image from "next/image";

const Projects: React.FC<{
  header: string;
  img: string[];
  list: string[];
  description: string;
  chromeBlocker?: boolean;
  projectElpis?: boolean;
  reactBenchmarks?: boolean;
  githubLink: string;
  hostingLink?: string;
}> = ({
  header,
  img,
  list,
  description,
  chromeBlocker,
  projectElpis,
  reactBenchmarks,
  githubLink,
  hostingLink,
}) => {
  return (
    <div>
      <h1 className="mb-5 text-2xl text-indigo-300/100">{header}</h1>
      <div className="flex flex-col justify-center gap-6 mb-5">
        {img
          ? img.map((element, idx) => {
              return (
                <div key={idx} className="max-w-full">
                  <img
                    className="h-auto max-w-full rounded-lg transition-all duration-500 cursor-pointer"
                    src={element}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div className="mb-5">
        <p>{description}</p>
      </div>
    </div>
    // <a
    //   href="#"
    //   classNameName="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:max-w-auto md:max-w-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    // >
    //   <img classNameName="rounded-t-lg" src={img[1]} alt="" />
    //   <div classNameName="flex flex-col justify-between p-4 leading-normal">
    //     <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       {header}
    //     </h5>
    //     <p classNameName="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {description}
    //     </p>
    //     <ul classNameName="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white">
    //       {list
    //         ? list.map((element, idx) => {
    //             return (
    //               <li key={idx}>
    //                 <a href="#" classNameName="mr-4 hover:underline md:mr-6 ">
    //                   {element}
    //                 </a>
    //               </li>
    //             );
    //           })
    //         : null}
    //     </ul>
    //   </div>
    // </a>
  );
};

export default Projects;
