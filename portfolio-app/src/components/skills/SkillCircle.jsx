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
        ${size === "large" ? "w-72 h-72 p-10" : "w-60 h-60 p-8"}
        rounded-full
        border
        bg-slate-950/95
        backdrop-blur-xl
        flex
        flex-col
        items-center
        justify-center
        text-center
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
      <div className="mb-3">
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`
          ${
            size === "large"
              ? "text-4xl max-w-[230px]"
              : "text-2xl max-w-[180px]"
          }
          font-bold
          text-white
          mb-2
          leading-tight
          whitespace-pre-line
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
          mt-4
        `}
      >
        {description}
      </p>
    </div>
  );
}

export default SkillCircle;