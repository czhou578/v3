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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex flex-col sm:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="w-full sm:w-48 flex justify-center items-center p-4 bg-gray-700">
          <Image
            src={companyLogo}
            width={120}
            height={120}
            alt={`${companyName} logo`}
            className="object-contain"
          />
        </div>
        <div className="flex-1 p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2">
            {position}
          </h3>
          <div className="text-base sm:text-lg text-gray-200 mb-3">
            <p>{companyName}</p>
            <p className="mt-1">
              {date} • {location}
            </p>
          </div>
          <div className="space-y-2">
            {description
              ? description.map((item, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-cyan-100">
                    • {item}
                  </p>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
