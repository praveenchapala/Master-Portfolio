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
        gap-2
        px-4
        py-2
        rounded-full
        bg-slate-900/90
        border
        border-slate-700
        backdrop-blur-xl
        text-sm
        font-medium
        text-slate-200
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:border-cyan-400
        hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
        ${className}
      `}
    >
      {icon}

      <span>{label}</span>
    </div>
  );
}

export default TechBadge;