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
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex ">
        {props.icon
          ? props.icon.map((element: any, idx: any) => {
              return (
                <div key={idx} className="ml-3 mb-5">
                  {element}
                </div>
              );
            })
          : null}
      </div>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.header}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {props.description}
      </p>
    </div>
  );
}
