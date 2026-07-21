import ExperienceStatCard from "./ExperienceStatCard";

function ExperienceStats() {
  const stats = [
    {
      icon: "🚀",
      value: 3,
      suffix: "+",
      label: "Internships",
      description: "Industry experience across QA, Backend and AI.",
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      icon: "💻",
      value: 15,
      suffix: "+",
      label: "Projects",
      description: "Full Stack, AI and enterprise software projects.",
      color: "bg-fuchsia-500/20 text-fuchsia-400",
    },
    {
      icon: "⚙️",
      value: 50,
      suffix: "+",
      label: "Automations",
      description: "AI workflows built using n8n and Gemini.",
      color: "bg-yellow-500/20 text-yellow-400",
    },
    {
      icon: "🧠",
      value: 3,
      suffix: " Months",
      label: "QA Experience",
      description: "Hands-on enterprise quality engineering experience.",
      color: "bg-green-500/20 text-green-400",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-24
      "
    >
      {stats.map((item) => (
        <ExperienceStatCard
          key={item.label}
          {...item}
        />
      ))}
    </div>
  );
}

export default ExperienceStats;