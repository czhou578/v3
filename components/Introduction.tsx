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
    <p className="mt-4 min-h-[1.75em] text-sm text-gray-400 sm:text-base md:text-lg">
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
    <div className="relative overflow-hidden px-4 py-14 text-center sm:py-20">
      {/* Soft indigo glow behind the heading so the hero reads as its own band. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(99,102,241,0.22),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Hi! I am Colin Zhou.....
        </h1>
        <p className="mt-6 text-sm font-semibold text-indigo-200 sm:mt-8 sm:text-base md:text-lg">
          <span className="sr-only">{PLACES}</span>
          <span aria-hidden="true">{typed}</span>
          <span
            aria-hidden="true"
            className="print-hidden animate-pulse motion-reduce:animate-none"
          >
            |
          </span>
        </p>
        <Clock />
      </div>
    </div>
  );
}
