/**
 *  Github, Jira, Management, markdown
 *  HTML, CSS, React, typescript, javascrupt
 *  Mongodb, mysql, node.js
 *  AWS GCP,
 *  speaking, writing, googling, prompt engineering
 */

interface Props {
  header: string;
  icon: any;
  description: string;
}

export default function SkillsList(props: Props) {
  return (
    <div className="w-full max-w-sm mx-auto p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-indigo-200/100">
      <div className="flex flex-wrap justify-center sm:justify-evenly gap-4 mb-4 sm:mb-6">
        {props.icon?.map((element: any, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16"
          >
            {element}
          </div>
        ))}
      </div>
      <h5 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-cyan-400 text-center sm:text-left">
        {props.header}
      </h5>
      <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400 text-center sm:text-left">
        {props.description}
      </p>
    </div>
  );
}
