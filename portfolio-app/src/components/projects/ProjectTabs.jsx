function ProjectTabs({
  activeTab,
  setActiveTab,
  counts,
}) {
  const tabs = [
    {
      id: "all",
      label: "All",
      count: counts.all,
    },
    {
      id: "automation",
      label: "Automation",
      count: counts.automation,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: counts.fullstack,
    },
    {
      id: "opensource",
      label: "Open Source",
      count: counts.opensource,
    },
    {
      id: "aiengineering",
      label: "AI Engineering",
      count: counts.aiengineering,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-14">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            px-5
            py-2.5
            rounded-full
            transition-all
            duration-300
            font-medium
            ${
              activeTab === tab.id
                ? "bg-cyan-500 text-slate-950"
                : "border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            }
          `}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}

export default ProjectTabs;