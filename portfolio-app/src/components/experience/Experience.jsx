import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import JourneyPipeline from "./JourneyPipeline";

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

        <JourneyPipeline />

        {/* Closing Quote */}
        <div className="text-center mt-32">
          <div
            className="
              w-32
              h-px
              bg-slate-700
              mx-auto
              mb-12
            "
          />

          <p
            className="
              text-3xl
              text-slate-300
              italic
            "
          >
            Quality is not an activity.
          </p>

          <p
            className="
              text-xl
              text-slate-500
              mt-4
            "
          >
            It is engineered into every system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;