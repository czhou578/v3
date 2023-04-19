//montreal - kitchener - bay area - washington - uiuc
//get the time from my current location
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
    <div className="bg-gray-800 p-8 flex justify-center h-full">
      <div className="m-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Hi! I am Colin Zhou.....
        </h1>
        <p className="text-lg text-white">
          A software engineer currently studying at UIUC!
        </p>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Montreal -> Kitchener -> Cupertino -> Seattle -> Champaign"
              )
              .start();
          }}
        />
        <div>
          <h1 suppressHydrationWarning>{time.toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
}
