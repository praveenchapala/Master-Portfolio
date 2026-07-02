import SkillsHeader from "./SkillsHeader";
import MandalaSkills from "./MandalaSkills";
import StatsBar from "./StatsBar";

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

        <MandalaSkills />

        <StatsBar />
      </div>
    </section>
  );
}

export default Skills;