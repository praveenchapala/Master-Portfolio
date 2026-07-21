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

        <div className="text-center mb-12">

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-xs">
            Tech Stack
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-white
            "
          >
            Building Intelligent
            <br />
            Software Solutions
          </h2>

          <p
            className="
              mt-5
              text-slate-400
              text-sm
              leading-7
              max-w-sm
              mx-auto
            "
          >
            My engineering toolkit for building
            scalable applications, enterprise software,
            AI systems and workflow automation.
          </p>

        </div>

        {/* Cards */}

        <div className="space-y-6">

          {categories.map((category) => (

            <SkillCategoryCard
              key={category.title}
              {...category}
            />

          ))}

        </div>

        {/* Bottom Statistics */}

        <div
          className="
            grid
            grid-cols-3
            gap-4
            mt-12
          "
        >

          <div
            className="
              rounded-2xl
              bg-slate-900/70
              border
              border-slate-800
              p-4
              text-center
            "
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              40+
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              Technologies
            </p>

          </div>

          <div
            className="
              rounded-2xl
              bg-slate-900/70
              border
              border-slate-800
              p-4
              text-center
            "
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              50+
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              Projects
            </p>

          </div>

          <div
            className="
              rounded-2xl
              bg-slate-900/70
              border
              border-slate-800
              p-4
              text-center
            "
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              AI
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              Focused
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SkillsMobile;