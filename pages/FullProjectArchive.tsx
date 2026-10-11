import Seo from "@/components/Seo";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import ArchiveProjectCard from "@/components/ArchiveProjectCard";
import { archiveProjects, projectLiveUrl } from "@/lib/projects";

export default function FullProjectArchive() {
  return (
    <>
      <Seo
        title="Project Archive | Colin Zhou"
        description="Every side project, class project, and experiment Colin Zhou has published on GitHub."
        path="/FullProjectArchive"
      />
      <HeaderBar />
      <main className="section-container mt-10">
        <h1 className="section-heading">Full Project Archive</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archiveProjects.map((project) => (
            <ArchiveProjectCard
              key={project.name}
              title={project.name}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.github ?? undefined}
              liveUrl={projectLiveUrl(project)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
