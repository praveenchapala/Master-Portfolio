import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import JourneyTimeline from "./Timeline/JourneyTimeline";

function Experience() {
  return (
    <section
      id="experience"
      className="
        py-32
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <ExperienceHeader />

       <ExperienceStats />

<JourneyTimeline />
      </div>
    </section>
  );
}

export default Experience;