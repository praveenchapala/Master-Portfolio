import SkillChip from "./SkillChip";

function SkillCategoryCard({
  title,
  icon,
  color,
  skills,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      "
    >
      {/* Animated Gradient */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-blue-500/5
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-slate-800
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-3xl
            "
          >
            {icon}
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>

            <p className="text-slate-400 text-sm">
              {skills.length} Technologies
            </p>
          </div>
        </div>

        {/* Glow Dot */}
        <div
          className={`
            w-3
            h-3
            rounded-full
            animate-pulse
            ${color}
          `}
        />
      </div>

      {/* Skills */}
      <div className="relative z-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip
            key={skill}
            label={skill}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCategoryCard;