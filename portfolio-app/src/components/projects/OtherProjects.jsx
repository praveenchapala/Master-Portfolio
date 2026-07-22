import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function OtherProjects() {
  return (
    <section className="mt-32">
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-3">
          📦 Other Projects
        </h3>

        <p className="text-slate-400">
          Smaller projects, experiments, and
          learning journeys that helped me grow
          as a developer.
        </p>
      </div>

      <div
        className="
          grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-8
        "
      >
        {projects.others.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default OtherProjects;