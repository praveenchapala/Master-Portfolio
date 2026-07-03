import experience from "../../data/experience";
import JourneyCard from "./JourneyCard";

function JourneyPipeline() {
  return (
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
          {/* Card */}
          <div
  className={`
    w-full
    flex
    ${index % 2 === 0
      ? "justify-start"
      : "justify-end"}
  `}
>
  <div className="w-full lg:w-[48%]">
    <JourneyCard {...item} />
  </div>
</div>

          {/* Pipeline Arrow */}
          {index !== experience.length - 1 && (
            <div
  className="
    relative
    flex
    flex-col
    items-center
    py-12
  "
>
  {/* Top Node */}
  <div
    className="
      w-5
      h-5
      rounded-full
      bg-cyan-400
      shadow-[0_0_20px_rgba(34,211,238,1)]
      animate-pulse
      z-10
    "
  />

  {/* Pipeline */}
  <div
    className="
      h-24
      w-1
      bg-gradient-to-b
      from-cyan-400
      via-cyan-500
      to-slate-700
    "
  />

  {/* Moving Data Particle */}
  <div
    className="
      absolute
      top-10
      w-3
      h-3
      rounded-full
      bg-cyan-300
      shadow-[0_0_15px_rgba(103,232,249,1)]
      animate-ping
    "
  />

  {/* Bottom Node */}
  <div
    className="
      w-5
      h-5
      rounded-full
      bg-cyan-400
      shadow-[0_0_20px_rgba(34,211,238,1)]
      animate-pulse
      z-10
    "
  />
</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default JourneyPipeline;