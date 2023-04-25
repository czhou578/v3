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
    <div className="max-w-sm lg:max-w-fit lg:flex justify-center mb-10">
      <div
        className="lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
      >
        {img
          ? img.map((element, idx) => {
              return (
                <>
                  <img src={element} alt="text" className="object-fill" />
                </>
              );
            })
          : null}
        {/* <Image
          src={img}
          height={200}
          width={200}
          alt="project"
          className="object-fill"
        /> */}
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-6/12">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{header}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            {/* <p className="text-gray-900 leading-none">Jonathan Reinink</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
