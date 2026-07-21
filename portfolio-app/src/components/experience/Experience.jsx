import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import JourneyTimeline from "./Timeline/JourneyTimeline";
import FutureRoadmap from "./FutureRoadmap";
import CurrentFocus from "./currentFocus/CurrentFocus";

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

<CurrentFocus />

<FutureRoadmap />

        {/* Closing Quote */}
        <div className="mt-32 flex justify-center">
  <div
    className="
      max-w-4xl
      w-full
      rounded-[2rem]
      border
      border-slate-800
      bg-slate-900/50
      backdrop-blur-xl
      p-12
      text-center
      shadow-[0_0_50px_rgba(15,23,42,0.5)]
    "
  >
    <div
      className="
        w-20
        h-1
        bg-cyan-400
        mx-auto
        rounded-full
        mb-8
      "
    />

    <p
      className="
        text-4xl
        font-light
        text-slate-200
        italic
        leading-relaxed
      "
    >
      Quality is not an activity.
    </p>

    <p
      className="
        text-2xl
        text-slate-500
        mt-6
      "
    >
      It is engineered into every system.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}

export default Experience;