function JourneyCard({
  stage,
  icon,
  status,
  role,
  company,
  duration,
  achievements,
  technologies,
  color,
}) {
  return (
    <div
      className={`
        bg-slate-900/60
        border
        ${color}
        rounded-3xl
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      `}
    >
      {/* Stage + Icon */}
      <div
        className="
          flex
          items-center
          gap-3
          mb-4
        "
      >
        <span className="text-3xl">
          {icon}
        </span>

        <p
          className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            text-sm
          "
        >
          {stage}
        </p>
      </div>

      {/* Role */}
      <h3
        className="
          text-2xl
          font-bold
          text-white
          mb-2
        "
      >
        {role}
      </h3>

      {/* Company */}
      <p className="text-slate-400 mb-2">
        {company}
      </p>

      {/* Duration */}
      <p className="text-slate-500 text-sm mb-4">
        {duration}
      </p>

      {/* Status Badge */}
      <div className="mb-6">
        <span
          className={`
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            ${
              status === "Completed"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : status === "Current Focus"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30"
            }
          `}
        >
          {status}
        </span>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">
          Achievements
        </h4>

        <div className="space-y-2">
          {achievements.map((item, index) => (
            <p
              key={index}
              className="text-slate-300"
            >
              ✓ {item}
            </p>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-white font-semibold mb-3">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-2
                rounded-full
                bg-slate-950
                border
                border-slate-700
                text-sm
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-500
                hover:text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JourneyCard;