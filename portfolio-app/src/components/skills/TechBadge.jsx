function TechBadge({
  icon,
  label,
  className,
}) {
  return (
    <div
      className={`
        absolute
        flex
        items-center
        gap-3
        px-5
        py-3
        rounded-2xl
        bg-slate-900/90
        border
        border-slate-700
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
        ${className}
      `}
    >
      <span className="text-xl">
        {icon}
      </span>

      <span className="text-sm font-medium text-slate-200">
        {label}
      </span>
    </div>
  );
}

export default TechBadge;