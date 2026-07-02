function SkillBadge({ skill }) {
  return (
    <span
      className="
        px-3
        py-2
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        text-slate-300
        text-sm
        transition
        hover:border-cyan-400
        hover:text-cyan-400
      "
    >
      {skill}
    </span>
  );
}

export default SkillBadge;