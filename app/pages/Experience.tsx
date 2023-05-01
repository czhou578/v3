import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

const Experience: React.FC<{
  companyLogo: StaticImageData;
  companyName: string;
  position: string;
  date: string;
  location: string;
  description: string[];
}> = ({ companyLogo, companyName, position, date, location, description }) => {
  return (
    <div className="w-full lg:max-w-full lg:flex flex justify-center">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mt-3">
        <Image src={companyLogo} width="120" height="120" alt="pic" />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 dark:border-indigo-500/100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-3/6 mb-10">
        <div className="mb-8">
          <div className="dark:text-cyan-400 font-bold text-xl mb-2">
            {position}
          </div>
          <div className="text-lg">
            <p className="text-gray-200 leading-none">{companyName}</p>
            <p className="text-gray-200 mt-3">
              {date}. {location}
            </p>
          </div>
          {description
            ? description.map((element, idx) => {
                return (
                  <p className="text-gray-200 text-base mt-3" key={idx}>
                    {element}
                  </p>
                );
              })
            : null}
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

export default Experience;
