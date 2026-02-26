import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
