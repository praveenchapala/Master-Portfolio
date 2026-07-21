function TechPill({ tech }) {
  return (
    <span
      className="
        px-3
        py-1.5
        rounded-full
        bg-slate-900
        border
        border-slate-700
        text-sm
        text-slate-300
        transition-all
        duration-300
        hover:border-cyan-400
        hover:text-cyan-300
      "
    >
      {tech}
    </span>
  );
}

export default TechPill;