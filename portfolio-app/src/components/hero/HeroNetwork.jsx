import HeroImage from "./HeroImage";
import NetworkNode from "./NetworkNode";
import { motion } from "framer-motion";

function FlowDot({
  cx,
  cy,
  duration = 3,
  delay = 0,
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="6"
      fill="#22d3ee"
      style={{
        filter:
          "drop-shadow(0 0 12px #22d3ee)",
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.2, 1.2, 0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}

function HeroNetwork() {
  return (
    <div className="relative w-[600px] h-[600px]">
      {/* SVG Branches */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 560 560"
      >
        {/* Top */}
        <path
          d="M280 260 L280 90"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
        />

        {/* Top Left */}
        <path
          d="M250 250 Q180 180 90 120"
          stroke="#38bdf8"
          strokeWidth="4"
          fill="none"
        />

        {/* Top Right */}
        <path
          d="M310 250 Q380 180 470 120"
          stroke="#a855f7"
          strokeWidth="4"
          fill="none"
        />

        {/* Middle Left */}
        <path
          d="M230 290 Q150 300 70 320"
          stroke="#f59e0b"
          strokeWidth="4"
          fill="none"
        />

        {/* Middle Right */}
        <path
          d="M330 290 Q410 300 490 320"
          stroke="#ec4899"
          strokeWidth="4"
          fill="none"
        />

        {/* Bottom Left */}
        <path
          d="M250 330 Q190 420 130 500"
          stroke="#22d3ee"
          strokeWidth="4"
          fill="none"
        />

        {/* Bottom Right */}
        <path
          d="M310 330 Q370 420 430 500"
          stroke="#fde047"
          strokeWidth="4"
          fill="none"
        />

        {/* End Dots */}
        <circle cx="280" cy="90" r="8" fill="#22c55e" />
        <circle cx="90" cy="120" r="8" fill="#38bdf8" />
        <circle cx="470" cy="120" r="8" fill="#a855f7" />
        <circle cx="70" cy="320" r="8" fill="#f59e0b" />
        <circle cx="490" cy="320" r="8" fill="#ec4899" />
        <circle cx="130" cy="500" r="8" fill="#22d3ee" />
        <circle cx="430" cy="500" r="8" fill="#fde047" />

        {/* Animated Flow Dots */}
        <FlowDot
          cx="280"
          cy="170"
          duration={2.5}
          delay={0}
        />

        <FlowDot
          cx="170"
          cy="180"
          duration={3}
          delay={0.5}
        />

        <FlowDot
          cx="390"
          cy="180"
          duration={3}
          delay={1}
        />

        <FlowDot
          cx="150"
          cy="300"
          duration={3}
          delay={1.5}
        />

        <FlowDot
          cx="410"
          cy="300"
          duration={3}
          delay={2}
        />

        <FlowDot
          cx="190"
          cy="420"
          duration={3}
          delay={2.5}
        />

        <FlowDot
          cx="370"
          cy="420"
          duration={3}
          delay={3}
        />
      </svg>

      {/* Center Profile Image */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <HeroImage />
      </div>

      {/* Nodes */}
      <NetworkNode
        number="1"
        delay={0}
        icon="💼"
        title="Open to Work"
        description="Actively seeking new opportunities"
        color="text-green-400"
        className="top-8 left-1/2 -translate-x-1/2"
      />

      <NetworkNode
        number="2"
        delay={0.3}
        icon="🚀"
        title="Open Source Contributor"
        description="Contributing to open source projects"
        color="text-cyan-400"
        className="top-20 left-[-20px]"
      />

      <NetworkNode
        number="3"
        delay={0.6}
        icon="🤖"
        title="Building Agentic AI Systems"
        color="text-purple-400"
        className="top-20 right-[-20px]"
      />

      <NetworkNode
        number="4"
        delay={0.9}
        icon="🧠"
        title="AI-Powered Applications"
        description="Building smart applications with AI"
        color="text-orange-400"
        className="top-[250px] left-[-70px]"
      />

      <NetworkNode
        number="5"
        delay={1.2}
        icon="💻"
        title="Building in Public"
        description="Sharing my journey and learnings"
        color="text-pink-400"
        className="top-[250px] right-[-70px]"
      />

      <NetworkNode
        number="6"
        delay={1.5}
        icon="⚡"
        title="Built 50+ Workflow Automations"
        description="Automating processes with n8n & AI"
        color="text-cyan-300"
        className="bottom-[-10px] left-6"
      />

      <NetworkNode
        number="7"
        delay={1.8}
        icon="🌍"
        title="Solving Real-World Problems"
        description="Working on industry bottlenecks"
        color="text-yellow-300"
        className="bottom-[-10px] right-6"
      />
    </div>
  );
}

export default HeroNetwork;