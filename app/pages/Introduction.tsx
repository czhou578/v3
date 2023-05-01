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
        <h1 className="text-6xl font-bold mb-10 text-white">
          Hi! I am Colin Zhou.....
        </h1>
        <p className="text-white text-3xl">
          A software engineer currently studying at UIUC
        </p>
        <div className="mt-10">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<strong style="font-size: 20px"> Montreal | Kitchener | Cupertino | Seattle | Champaign </strong'
                )
                .start();
            }}
          />
        </div>
        <div className="flex justify-center mt-10">
          <h1 suppressHydrationWarning>Local Time: {time.toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
}
