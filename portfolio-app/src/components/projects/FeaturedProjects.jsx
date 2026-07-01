import projects from "../../data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";

function FeaturedProjects() {
  return (
    <section className="space-y-10">
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-3">
          🚀 Featured Projects
        </h3>

        <p className="text-slate-400">
          Some of the projects that represent my
          problem-solving skills and engineering
          journey.
        </p>
      </div>

      <div className="space-y-12">
        {projects.featured.map((project) => (
          <FeaturedProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;