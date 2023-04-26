import Link from "next/link";

//each card has to be clickable and have an animation

const Classwork: React.FC<{
  header: string;
  githubLink: string;
  description: string;
  techUsed: string[];
}> = ({ header, githubLink, techUsed, description }) => {
  return (
    <>
      <Link href={githubLink}>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{header}</div>
            <p className="text-gray-300 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {techUsed
              ? techUsed.map((element, idx) => {
                  return (
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      key={idx}
                    >
                      {element}
                    </span>
                  );
                })
              : null}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Classwork;
