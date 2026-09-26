import { Html, Head, Main, NextScript } from "next/document";
import { withPrefix } from "@/lib/prefix";

// Cloudflare Web Analytics: cookie-free page-view counts. The beacon is only
// emitted when a site token is present at build time, so local builds and
// forks without one send nothing. See .env.example.
const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
