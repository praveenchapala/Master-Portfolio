function FloatingTech() {
  const tech = [
    "React",
    "Spring Boot",
    "Gemini",
    "n8n",
    "Docker",
    "PostgreSQL",
  ];

  return (
    <div className="mt-16 flex flex-wrap justify-center gap-4">
      {tech.map((item) => (
        <span
          key={item}
          className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default FloatingTech;