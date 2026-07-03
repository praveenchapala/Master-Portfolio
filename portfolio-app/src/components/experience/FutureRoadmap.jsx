import { ArrowDown, Rocket, Workflow, BrainCircuit } from "lucide-react";

function FutureRoadmap() {
  const roadmap = [
    {
      icon: <Rocket size={32} />,
      title: "Senior Software Engineer",
      focus: "Building scalable software systems and enterprise applications.",
      status: "Next Milestone",
      color:
        "border-cyan-500/30 text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.15)]",
      badge: "bg-cyan-500/20 text-cyan-300",
    },
    {
      icon: <Workflow size={32} />,
      title: "Automation Architect",
      focus:
        "Designing enterprise automation platforms and intelligent workflows.",
      status: "Future Goal",
      color:
        "border-yellow-500/30 text-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.15)]",
      badge: "bg-yellow-500/20 text-yellow-300",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "AI Systems Engineer",
      focus:
        "Engineering autonomous systems that think, learn and scale.",
      status: "Long-Term Vision",
      color:
        "border-fuchsia-500/30 text-fuchsia-300 shadow-[0_0_40px_rgba(217,70,239,0.15)]",
      badge: "bg-fuchsia-500/20 text-fuchsia-300",
    },
  ];

  return (
    <section className="mt-40">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
          What's Next
        </p>

        <h2 className="text-5xl font-bold text-white">
          Future Roadmap
        </h2>

        <p className="text-slate-400 text-xl mt-6">
          The next milestones in my journey toward
          building intelligent software systems.
        </p>
      </div>

      {/* Roadmap */}
      <div className="max-w-4xl mx-auto">
        {roadmap.map((item, index) => (
          <div
            key={item.title}
            className="
              flex
              flex-col
              items-center
            "
          >
            {/* Glowing Node */}
            <div
              className="
                w-6
                h-6
                rounded-full
                bg-cyan-400
                shadow-[0_0_30px_rgba(34,211,238,1)]
                animate-pulse
                z-10
              "
            />

            {/* Card */}
            <div
              className={`
                mt-8
                mb-8
                w-full
                rounded-[2rem]
                border
                bg-slate-900/60
                backdrop-blur-xl
                p-10
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.02]
                ${item.color}
              `}
            >
              <div className="flex items-center gap-5 mb-6">
                <div>{item.icon}</div>

                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-300 text-lg leading-8 mb-8">
                {item.focus}
              </p>

              <span
                className={`
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-medium
                  ${item.badge}
                `}
              >
                {item.status}
              </span>
            </div>

            {/* Connector */}
            {index !== roadmap.length - 1 && (
              <div
                className="
                  flex
                  flex-col
                  items-center
                  mb-6
                "
              >
                <div
                  className="
                    h-20
                    w-1
                    bg-gradient-to-b
                    from-cyan-400
                    to-slate-700
                  "
                />

                <ArrowDown
                  size={28}
                  className="
                    text-cyan-400
                    animate-bounce
                  "
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Closing Line */}
      <div className="text-center mt-20">
        <p className="text-slate-500 text-lg">
          Continuously learning, building and engineering
          systems that create meaningful impact.
        </p>
      </div>
    </section>
  );
}

export default FutureRoadmap;