import TechCard from "./TechCard";

function SkillSection({
  title,
  icon,
  color,
  technologies,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/40
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-cyan-400/40
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4 mb-8">
        <div
          className={`
            h-14
            w-14
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
            ${color}
          `}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            {technologies.length} Technologies
          </p>
        </div>
      </div>

      {/* Technologies */}

      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech) => (
          <TechCard
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillSection;