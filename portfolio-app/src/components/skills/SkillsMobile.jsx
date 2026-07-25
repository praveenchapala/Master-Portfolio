import SkillCategoryCard from "./SkillCategoryCard";
import skills from "../../data/skills";

function SkillsMobile() {
  const categories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "bg-fuchsia-400",
      skills: skills.frontend,
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "bg-cyan-400",
      skills: skills.backend,
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      color: "bg-yellow-400",
      skills: skills.ai,
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "bg-green-400",
      skills: skills.tools,
    },
  ];

  return (
    <section className="relative mt-14">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-72
            h-72
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Heading */}

        {/* Cards */}

        <div className="space-y-6">

          {categories.map((category) => (

            <SkillCategoryCard
              key={category.title}
              {...category}
            />

          ))}

        </div>
      </div>

    </section>
  );
}

export default SkillsMobile;