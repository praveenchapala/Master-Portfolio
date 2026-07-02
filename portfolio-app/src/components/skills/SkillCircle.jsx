function SkillCircle({
  title,
  description,
  icon,
  color,
  className,
}) {
  return (
    <div
      className={`
        w-60
        h-60
        rounded-full
        border
        bg-slate-950/95
        backdrop-blur-xl
        flex
        flex-col
        items-center
        justify-center
        text-center
        p-8
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
      <div className="text-5xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          text-2xl
          font-bold
          text-white
          mb-4
          leading-tight
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-slate-300
          text-sm
          leading-7
          max-w-[180px]
        "
      >
        {description}
      </p>
    </div>
  );
}

export default SkillCircle;