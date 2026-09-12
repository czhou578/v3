import Seo from "@/components/Seo";
import HeaderBar from "@/components/Headerbar";
import Footer from "@/components/Footer";
import { withPrefix } from "@/lib/prefix";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Colin Zhou" path="/404" />
      <HeaderBar />
      <main className="section-container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          That page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-base text-gray-300 sm:text-lg">
          The link may be out of date, or the page may have moved. Everything on
          this site is reachable from the home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={withPrefix("/")}
            className="inline-flex min-h-[44px] items-center rounded-lg bg-indigo-500 px-5 font-medium text-white transition-colors hover:bg-indigo-400"
          >
            Back to home
          </a>
          <a
            href={withPrefix("/FullProjectArchive")}
            className="inline-flex min-h-[44px] items-center rounded-lg bg-indigo-500/15 px-5 font-medium text-indigo-200 ring-1 ring-indigo-400/30 transition-colors hover:bg-indigo-500/25 hover:text-white"
          >
            Project archive
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
