import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import JourneyTimeline from "./Timeline/JourneyTimeline";

function Experience() {
  return (
    <section
      id="experience"
      className="
        py-20
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}

        <ExperienceHeader />

        {/* Experience Statistics */}

        <div className="mt-10">
          <ExperienceStats />
        </div>

        {/* Timeline */}

        <div className="mt-12">
          <JourneyTimeline />
        </div>
      </div>
    </section>
  );
}

export default Experience;