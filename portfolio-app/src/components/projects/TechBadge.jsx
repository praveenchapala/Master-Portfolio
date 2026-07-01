function TechBadge({ tech }) {
  return (
    <span
      className="
        px-3
        py-1
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-500/20
        text-cyan-400
        text-sm
        font-medium
      "
    >
      {tech}
    </span>
  );
}

export default TechBadge;