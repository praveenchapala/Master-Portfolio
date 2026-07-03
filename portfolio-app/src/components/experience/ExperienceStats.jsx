function ExperienceStats() {
  const stats = [
    {
      value: "3+",
      label: "Internships",
    },
    {
      value: "15+",
      label: "Projects",
    },
    {
      value: "50+",
      label: "Automations",
    },
    {
      value: "3 Months",
      label: "QA Experience",
    },
  ];

  return (
    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        mb-24
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            bg-slate-900/60
            border
            border-slate-800
            rounded-3xl
            p-8
            text-center
          "
        >
          <h3 className="text-4xl font-bold text-cyan-400">
            {item.value}
          </h3>

          <p className="text-slate-400 mt-3">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceStats;