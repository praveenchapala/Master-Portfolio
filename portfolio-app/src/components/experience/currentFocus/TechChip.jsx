function TechChip({ name }) {
  return (
    <div
      className="
        px-4
        py-2
        rounded-full
        bg-slate-900
        border
        border-cyan-500/20
        text-cyan-300
        text-sm
        font-medium
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500/10
        hover:-translate-y-1
      "
    >
      {name}
    </div>
  );
}

export default TechChip;