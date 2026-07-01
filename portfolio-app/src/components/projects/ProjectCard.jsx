import TechBadge from "./TechBadge";

function ProjectCard({
  title,
  description,
  tech,
  github,
}) {
  return (
    <div
      className="
        bg-slate-900/60
        border
        border-slate-800
        rounded-3xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:-translate-y-2
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      {/* Project Icon */}
      <div className="text-3xl mb-4">
        📦
      </div>

      {/* Title */}
      <h3
        className="
          text-xl
          font-bold
          text-white
          mb-3
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-slate-400
          leading-7
          mb-6
        "
      >
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <TechBadge
            key={index}
            tech={item}
          />
        ))}
      </div>

      {/* GitHub Button */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          text-cyan-400
          font-semibold
          hover:text-cyan-300
          transition
        "
      >
        🔗 View Repository
      </a>
    </div>
  );
}

export default ProjectCard;