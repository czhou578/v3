import Image from "next/image";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

const Education: React.FC<{
  logo: StaticImageData;
  school: string;
  degreeLevel: string;
  date: string;
  activities?: string[];
  relevantClasses?: string[];
}> = ({ school, degreeLevel, date, activities, relevantClasses, logo }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [yellowHeight, setYellowHeight] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;
    let start: number | null = null;
    const duration = 5000; // 5 seconds
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setYellowHeight(progress * 100);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [animate]);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="relative">
        {/* Animated yellow line overlay */}
        <div
          className="absolute left-0 top-0 w-0.5 bg-yellow-400 z-10 rounded"
          style={{
            height: `${yellowHeight}%`,
            transition: "height 0.1s linear",
          }}
        />
        {/* Timeline */}
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="absolute -left-6 top-0 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 z-20">
              <Image
                src={logo}
                alt={school}
                width={48}
                height={48}
                className="rounded-full"
              />
            </span>
            <div className="ml-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-semibold dark:text-cyan-400">
                  {school}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mt-2 sm:mt-0">
                  {degreeLevel}
                </span>
              </div>
              <time className="block mb-2 text-sm sm:text-base text-gray-400 dark:text-gray-500">
                {date}
              </time>
              <p className="mb-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Activities: {activities ? activities.join(", ") : "None"}
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Relevant classes:{" "}
                {relevantClasses ? relevantClasses.join(", ") : "None"}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
