import { Html, Head, Main, NextScript } from "next/document";
import { withPrefix } from "@/lib/prefix";

// Cloudflare Web Analytics: cookie-free page-view counts. The beacon is only
// emitted when a site token is present at build time, so local builds and
// forks without one send nothing. See .env.example. Quotes are stripped in
// case the repository variable was saved with them.
const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN?.trim().replace(
  /^["']+|["']+$/g,
  ""
);

// Content Security Policy. GitHub Pages cannot send response headers, so it
// is delivered as a meta tag, which supports everything here except
// frame-ancestors. The static export contains no inline JavaScript (the two
// inline scripts are JSON data, which CSP does not block), so scripts are
// limited to this site and the analytics beacon. Inline styles stay allowed
// for next/image placeholders and the global font rule in _app.tsx.
// Development is excluded because Next's dev server relies on eval.
const CSP = [
  "default-src 'self'",
  "script-src 'self' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "frame-src https://www.youtube-nocookie.com",
  "connect-src 'self' https://cloudflareinsights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");
const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Structured data for search engines, describing the site's owner.
const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Colin Zhou",
  jobTitle: "Software Engineer",
  url: "https://czhou578.github.io/v3",
  email: "colizu2020@gmail.com",
  sameAs: [
    "https://github.com/czhou578",
    "https://www.linkedin.com/in/colin-z-84a1a0137/",
    "https://x.com/ColinZhouUSA",
    "https://www.instagram.com/colin.pianist/",
    "https://www.tiktok.com/@colin.pianist",
    "https://medium.com/@colizu2020",
    "https://www.quora.com/profile/Colin-Zhou-6",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Mateo",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Illinois Urbana-Champaign",
      sameAs: "https://illinois.edu/",
      startDate: "2022",
      endDate: "2023",
      degree: "Master of Science in Computer Science",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Bellevue College",
      startDate: "2019",
      endDate: "2022",
      degree: "Bachelor of Science in Computer Science",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Kaliber Labs",
    sameAs: "https://kaliber.ai/",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    description:
      "Full-stack engineer focused on AI integration and production systems",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "PyTorch",
    "HuggingFace",
    "Prompt Engineering",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "WebSockets",
    "RESTful API",
    "Linux",
    "Git",
    "Figma",
    "Electron.js",
    "Kafka",
    "Redis",
    "GCP",
  ],
};

// JSON.stringify does not escape "<", so a value containing "</script>" would
// end the script element early. Escaping every "<" makes that impossible.
const jsonForScriptTag = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Before every script and stylesheet: the policy only governs what
            is loaded after it. */}
        {IS_PRODUCTION ? (
          <meta httpEquiv="Content-Security-Policy" content={CSP} />
        ) : null}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {CF_BEACON_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
          />
        ) : null}
        {/* The site is served under a path prefix, so the icon must be linked
            explicitly; browsers only look for /favicon.ico at the domain root. */}
        <link
          rel="icon"
          href={withPrefix("/favicon.ico")}
          sizes="16x16 32x32 48x48"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={withPrefix("/favicon-32.png")}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={withPrefix("/apple-touch-icon.png")}
        />
        <meta name="theme-color" content="#111827" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonForScriptTag(PERSON_LD) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
