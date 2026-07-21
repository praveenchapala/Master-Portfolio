import skills from "../../data/skills";

function SkillsMobile() {
  const categories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "border-fuchsia-500/30 text-fuchsia-300",
      items: skills.frontend,
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "border-cyan-500/30 text-cyan-300",
      items: skills.backend,
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      color: "border-yellow-500/30 text-yellow-300",
      items: skills.ai,
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "border-green-500/30 text-green-300",
      items: skills.tools,
    },
  ];

  return (
    <div className="space-y-8 mt-12">
      {categories.map((category) => (
        <div
          key={category.title}
          className="
            bg-slate-900/60
            border
            border-slate-800
            rounded-3xl
            p-6
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">
              {category.icon}
            </span>

            <h3
              className={`
                text-xl
                font-bold
                ${category.color.split(" ")[1]}
              `}
            >
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.items.map((skill) => (
              <span
                key={skill}
                className={`
                  px-4
                  py-2
                  rounded-full
                  border
                  text-sm
                  font-medium
                  ${category.color}
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsMobile;