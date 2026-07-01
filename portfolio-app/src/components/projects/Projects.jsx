import ProjectsHeader from "./ProjectsHeader";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-slate-950
        text-white
        py-32
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <ProjectsHeader />

        <FeaturedProjects />

        <OtherProjects />
      </div>
    </section>
  );
}

export default Projects;