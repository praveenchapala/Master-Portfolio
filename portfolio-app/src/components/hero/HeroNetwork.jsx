import HeroImage from "./HeroImage";
import NetworkNode from "./NetworkNode";

function HeroNetwork() {
  return (
    <div className="relative w-[650px] h-[650px]">

      {/* SVG Branches */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 700 700"
      >
        {/* Top */}
        <path
          d="M350 330 L350 120"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
        />

        {/* Top Left */}
        <path
          d="M300 310 Q220 220 140 170"
          stroke="#38bdf8"
          strokeWidth="4"
          fill="none"
        />

        {/* Top Right */}
        <path
          d="M400 310 Q480 220 560 170"
          stroke="#a855f7"
          strokeWidth="4"
          fill="none"
        />

        {/* Middle Left */}
        <path
          d="M280 360 Q210 370 130 400"
          stroke="#f59e0b"
          strokeWidth="4"
          fill="none"
        />

        {/* Middle Right */}
        <path
          d="M420 360 Q490 370 570 400"
          stroke="#ec4899"
          strokeWidth="4"
          fill="none"
        />

        {/* Bottom Left */}
        <path
          d="M310 430 Q260 520 210 610"
          stroke="#22d3ee"
          strokeWidth="4"
          fill="none"
        />

        {/* Bottom Right */}
        <path
          d="M390 430 Q440 520 490 610"
          stroke="#fde047"
          strokeWidth="4"
          fill="none"
        />

        {/* Glow Dots */}
        <circle cx="350" cy="120" r="8" fill="#22c55e" />
        <circle cx="140" cy="170" r="8" fill="#38bdf8" />
        <circle cx="560" cy="170" r="8" fill="#a855f7" />
        <circle cx="130" cy="400" r="8" fill="#f59e0b" />
        <circle cx="570" cy="400" r="8" fill="#ec4899" />
        <circle cx="210" cy="610" r="8" fill="#22d3ee" />
        <circle cx="490" cy="610" r="8" fill="#fde047" />
      </svg>

      {/* Center Profile Image */}
      <div
        className="
          absolute
          top-[48%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <HeroImage />
      </div>

      {/* Nodes */}

      {/* Nodes */}
<NetworkNode
  title="🟢 Open to Work"
  className="top-[-15px] left-1/2 -translate-x-1/2"
/>

<NetworkNode
  title="🚀 Open Source Contributor"
  className="top-28 left-[-20px]"
/>

<NetworkNode
  title="🤖 Building Agentic AI Systems"
  className="top-28 right-[-20px]"
/>
<NetworkNode
  title="🧠 AI-Powered Applications"
  className="top-[310px] left-[-90px]"
/>

<NetworkNode
  title="💻 Building in Public"
  className="top-[310px] right-[-90px]"
/>

<NetworkNode
  title="⚡ Built 50+ Workflows"
  className="bottom-20 left-12"
/>

<NetworkNode
  title="🌍 Solving Real-World Problems"
  className="bottom-20 right-12"
/>
    </div>
  );
}

export default HeroNetwork;