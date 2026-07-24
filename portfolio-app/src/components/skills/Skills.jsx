import SkillsHeader from "./SkillsHeader";
import MandalaSkills from "./MandalaSkills";
import SkillsMobile from "./SkillsMobile";
import StatsBar from "./StatsBar";

function Skills() {
  return (
    <section
      id="skills"
      className="
        py-20
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}

        <SkillsHeader />

        {/* Desktop Skills */}

        <div className="hidden lg:block">
          <MandalaSkills />
        </div>

        {/* Mobile Skills */}

        <div className="lg:hidden">
          <SkillsMobile />
        </div>

        {/* Statistics */}

        <div className="mt-14">
          <StatsBar />
        </div>
      </div>
    </section>
  );
}

export default Skills;