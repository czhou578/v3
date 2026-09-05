import { useEffect, useState } from "react";

const PLACES =
  "Montreal | Kitchener | Cupertino | Seattle | Champaign | San Mateo | ?";

// Types `text` out one character at a time after mount. The server renders
// the full string so the content is present without JavaScript and for
// crawlers; users who prefer reduced motion also get the full string at once.
function useTypewriter(text: string, speedMs = 55) {
  const [typed, setTyped] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    setTyped("");
    const id = window.setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, speedMs]);

  return typed;
}

function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="mt-4 min-h-[1.75em] text-sm text-gray-200 sm:text-base md:text-lg lg:text-xl">
      Local Time:{" "}
      {time ? (
        <time dateTime={time.toISOString()}>{time.toLocaleString()}</time>
      ) : null}
    </p>
  );
}

export default function Introduction() {
  const typed = useTypewriter(PLACES);

  return (
    <div className="bg-gray-800 px-4 py-10 text-center sm:py-14">
      <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Hi! I am Colin Zhou.....
      </h1>
      <p className="mt-6 text-sm font-bold text-white sm:mt-8 sm:text-base md:text-lg lg:text-xl">
        <span className="sr-only">{PLACES}</span>
        <span aria-hidden="true">{typed}</span>
        <span
          aria-hidden="true"
          className="animate-pulse motion-reduce:animate-none"
        >
          |
        </span>
      </p>
      <Clock />
    </div>
  );
}
