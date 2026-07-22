import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function OtherProjects() {
  return (
    <section className="mt-32">
      {/* Header */}
      <div className="text-center mb-16">
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-cyan-400
            text-sm
            mb-3
          "
        >
          More Work
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Other Projects
        </h2>

        <p
          className="
            mt-5
            text-slate-400
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Smaller applications, experiments, and learning
          projects that strengthened my software engineering
          and problem-solving skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {projects.others.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default OtherProjects;