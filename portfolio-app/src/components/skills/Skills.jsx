import SkillsHeader from "./SkillsHeader";
import MandalaSkills from "./MandalaSkills";
import StatsBar from "./StatsBar";
import SkillsMobile from "./SkillsMobile";

function Skills() {
  return (
    <section
      id="skills"
      className="
        py-32
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <SkillsHeader />

        <div className="hidden lg:block">
    <MandalaSkills />
</div>

<div className="lg:hidden">
    <SkillsMobile />
</div>

        {/* Divider */}
        <div
          className="
            w-32
            h-px
            bg-slate-700
            mx-auto
            mt-24
            mb-12
          "
        />

        {/* Closing Quote */}
        <div className="text-center">
          <p
            className="
              text-3xl
              md:text-4xl
              text-slate-300
              italic
              leading-relaxed
            "
          >
            Technology is not a collection of tools.
          </p>

          <p
            className="
              text-xl
              text-slate-500
              mt-4
            "
          >
            It is a connected ecosystem of ideas.
          </p>
        </div>
    <div className="mt-10 flex justify-center">
  <p
    className="
      text-cyan-400
      text-2xl
      md:text-3xl
      font-semibold
      tracking-[0.3em]
      text-center
    "
  >
    Code. Automate. Innovate.
  </p>
</div>
        <StatsBar />
      </div>
    </section>
  );
}

export default Skills;