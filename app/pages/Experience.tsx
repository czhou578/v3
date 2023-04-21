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
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <Image src={companyLogo} width="100" height="100" alt="pic" />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{position}</div>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{companyName}</p>
            <p className="text-gray-600">
              {date}. {location}
            </p>
          </div>
          <p className="text-gray-700 text-base">
            {description
              ? description.map((element, idx) => {
                  return <p key={idx}>{element}</p>;
                })
              : null}
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

export default Experience;
