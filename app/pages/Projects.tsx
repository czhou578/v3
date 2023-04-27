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
    <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img[0]} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
    // <div classNameName="max-w-sm lg:max-w-fit lg:flex justify-center mb-10">
    //   <div
    //     classNameName="lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden h-2/6"
    //     title="Woman holding a mug"
    //   >
    //     {img
    //       ? img.map((element, idx) => {
    //           return (
    //             <>
    //               <img
    //                 src={element}
    //                 height={300}
    //                 width={400}
    //                 alt="text"
    //                 classNameName="object-fill hover:scale-150 transition-all duration-500 cursor-pointer"
    //               />
    //             </>
    //           );
    //         })
    //       : null}
    //   </div>
    //   <div classNameName="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-6/12">
    //     <div classNameName="mb-8">
    //       <p classNameName="text-sm text-gray-600 flex items-center">
    //         <svg
    //           classNameName="fill-current text-gray-500 w-3 h-3 mr-2"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
    //         </svg>
    //       </p>
    //       <div classNameName="text-gray-900 font-bold text-xl mb-2">{header}</div>
    //       <p classNameName="text-gray-700 text-base">{description}</p>
    //     </div>
    //     <div classNameName="flex items-center">
    //       <div classNameName="text-sm">
    //         {/* <p classNameName="text-gray-900 leading-none">Jonathan Reinink</p> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
