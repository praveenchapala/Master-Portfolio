import SkillBadge from "./SkillBadge";

function SkillCard({
  title,
  icon,
  technologies,
}) {
  return (
    <div
      className="
        bg-slate-900/60
        border
        border-slate-800
        rounded-3xl
        p-8
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:-translate-y-2
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      <div className="text-4xl mb-5">
        {icon}
      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {technologies.map((skill, index) => (
          <SkillBadge
            key={index}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCard;