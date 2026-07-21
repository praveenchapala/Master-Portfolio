import experience from "../../../data/experience";
import TimelineItem from "./TimelineItem";
import TimelineLine from "./TimelineLine";

function JourneyTimeline() {
  return (
    <section className="relative mt-24">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[150px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-cyan-400
              text-sm
            "
          >
            Career Journey
          </p>

          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Building My Career
            <br />
            One Milestone At A Time
          </h2>

          <p
            className="
              mt-6
              text-slate-400
              max-w-2xl
              mx-auto
              leading-8
            "
          >
            Every milestone represents a step toward
            becoming an engineer focused on building
            scalable software, enterprise automation,
            and intelligent AI systems.
          </p>

        </div>

        {/* Timeline */}

        <div className="max-w-5xl mx-auto">

          {experience.map((item, index) => (

            <div
              key={item.id}
              className="
                flex
                flex-col
                items-center
              "
            >

              <TimelineItem {...item} />

              <TimelineLine
                isLast={index === experience.length - 1}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default JourneyTimeline;