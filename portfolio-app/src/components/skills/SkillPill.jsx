function SkillPill({ skill }) {
  return (
    <div
      className="
        px-4
        py-2
        rounded-full
        border
        border-cyan-500/30
        bg-slate-900
        text-sm
      "
    >
      {skill}
    </div>
  );
}

export default SkillPill;