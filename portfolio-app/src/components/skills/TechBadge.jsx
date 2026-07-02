function TechBadge({
  label,
  className,
}) {
  return (
    <div
      className={`
        absolute
        px-5
        py-3
        rounded-full
        bg-slate-950/95
        border
        backdrop-blur-xl
        text-sm
        font-medium
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:-translate-y-1
        ${className}
      `}
    >
      {label}
    </div>
  );
}

export default TechBadge;