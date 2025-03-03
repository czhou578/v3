import React from "react";

export default function Extras() {
  const items = [
    {
      title: "Quora Contributions",
      description: `I used to actively write answers on the website Quora. My answers have
      to date accumulated over 33 million total views. I wrote about various
      topics, not limited to life experiences, technology, history, etc. In
      addition, I also had my own Quora space / blog about futuristic
      technology, which had 30k followers. My profile can be found`,
      link: {
        href: "https://www.quora.com/profile/Colin-Zhou-6",
        text: "here",
      },
    },
    {
      title: "Piano Lessons",
      description: `I took private piano lessons for 10 years, starting in elementary
      school, and went to numerous competitions and performed annually at
      recitals. After an extended pause, I began to play regularly as a
      hobby in grad school, and started posting videos of my playing to my
      Instagram, which can be found`,
      link: {
        href: "https://www.instagram.com/colin.pianist/",
        text: "here",
      },
    },
    {
      title: "Rubik's Cubes",
      description: `I first started getting interested in solving Rubik's Cubes in 5th
      grade. After getting my average time to around 20 seconds, I began to
      attend competitions around the Bay Area, until high school demanded
      more of my attention. My best time official time in competition was
      12.92 seconds; my full profile can be found`,
      link: {
        href: "https://www.worldcubeassociation.org/persons/2014ZHOU16",
        text: "here",
      },
    },
    {
      title: "Website Creation",
      description: `This website was created using the Next.js framework and TypeScript
      along with Tailwind CSS`,
      link: null,
    },
  ];

  return (
    <div className="mt-8 mx-auto w-full px-4 sm:px-6 md:px-8 max-w-4xl z-0 relative">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {item.title}
            </h3>
            <p className="mb-4 text-gray-800">
              {item.description}{" "}
              {item.link && (
                <a
                  href={item.link.href}
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  {item.link.text}
                </a>
              )}
              {item.link && "."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
