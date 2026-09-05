import type { ReactNode } from "react";

// Fades and lifts its children in as they scroll into view, using a
// CSS scroll-driven animation (see .reveal in styles/globals.css). There is
// no JavaScript involved: browsers without support, and users who prefer
// reduced motion, simply see the content immediately.
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
