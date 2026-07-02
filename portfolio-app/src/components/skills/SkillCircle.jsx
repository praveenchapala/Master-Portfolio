function SkillCircle({
  title,
  description,
  icon,
  color,
  className,
  size = "normal",
}) {
  return (
    <div
      className={`
        ${size === "large" ? "w-72 h-72" : "w-60 h-60"}
        rounded-full
        border
        bg-slate-950/95
        backdrop-blur-xl
        flex
        flex-col
        items-center
        justify-center
        text-center
        ${size === "large" ? "p-10" : "p-8"}
        transition-all
        duration-500
        hover:scale-105
        hover:-translate-y-2
        hover:shadow-2xl
        ${color}
        ${className}
      `}
    >
      {/* Icon */}
      <div
        className={`
          ${size === "large" ? "text-6xl mb-5" : "text-5xl mb-4"}
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`
          ${
            size === "large"
              ? "text-3xl max-w-[220px]"
              : "text-2xl max-w-[180px]"
          }
          font-bold
          text-white
          mb-4
          leading-tight
        `}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`
          ${
            size === "large"
              ? "text-base max-w-[220px]"
              : "text-sm max-w-[180px]"
          }
          text-slate-300
          leading-7
        `}
      >
        {description}
      </p>
    </div>
  );
}

export default SkillCircle;