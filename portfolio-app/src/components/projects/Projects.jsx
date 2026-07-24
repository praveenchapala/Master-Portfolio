import ProjectsHeader from "./ProjectsHeader";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

function Projects() {
  return (
      <section
        id="projects"
        className="
          py-20
          bg-slate-950
          text-white
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}

          <ProjectsHeader />

          {/* Featured Projects */}

          <div className="mt-8">
            <FeaturedProjects />
          </div>

          {/* Other Projects */}

          <div className="mt-20">
            <OtherProjects />
          </div>
        </div>
      </section>
  );
}

export default Projects;