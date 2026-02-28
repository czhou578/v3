import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Introduction() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="bg-gray-800 p-4 sm:p-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 text-white">
          Hi! I am Colin Zhou.....
        </h1>
        <div className="mt-6 sm:mt-10">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<strong class="text-sm sm:text-base md:text-lg lg:text-xl"> Montreal | Kitchener | Cupertino | Seattle | Champaign | San Mateo |? </strong>',
                )
                .start();
            }}
          />
        </div>
        <div className="mt-6 sm:mt-10">
          <h1
            suppressHydrationWarning
            className="text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Local Time: {time.toLocaleString()}
          </h1>
        </div>
      </div>
    </div>
  );
}
