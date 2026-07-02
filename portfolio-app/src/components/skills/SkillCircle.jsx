function SkillCircle({
  title,
  children,
  className,
}) {
  return (
    <div
      className={`
        w-64
        h-64
        rounded-full
        border
        border-cyan-500/40
        bg-slate-950/80
        backdrop-blur-md
        flex
        flex-col
        items-center
        justify-center
        text-center
        shadow-[0_0_60px_rgba(34,211,238,0.25)]
        ${className}
      `}
    >
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default SkillCircle;