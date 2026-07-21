function SkillChip({ label, color }) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        cursor-default
        backdrop-blur-xl
        ${color}
      `}
    >
      <div
        className="
          absolute
          inset-0
          bg-white/5
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      <span className="relative z-10">
        {label}
      </span>
    </div>
  );
}

export default SkillChip;