import Head from "next/head";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

// Per-page title, description, canonical URL, and the Open Graph / Twitter
// tags that give the link a preview card on LinkedIn, Slack, iMessage, etc.
export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const image = `${SITE_URL}${OG_IMAGE_PATH}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Colin Zhou, software engineer in San Mateo, California"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ColinZhouUSA" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
