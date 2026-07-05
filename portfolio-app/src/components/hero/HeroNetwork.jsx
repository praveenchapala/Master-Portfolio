import HeroImage from "./HeroImage";
import NetworkNode from "./NetworkNode";

function HeroNetwork() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[340px]
        h-[340px]
        md:w-[600px]
        md:max-w-[600px]
        md:h-[600px]
        mx-auto
      "
    >
      {/* Desktop Version */}
      <div className="hidden md:block">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 560 560"
        >
          {/* Paths */}
          <path
            id="path1"
            d="M280 260 L280 90"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
          />

          <path
            id="path2"
            d="M250 250 Q180 180 90 120"
            stroke="#38bdf8"
            strokeWidth="4"
            fill="none"
          />

          <path
            id="path3"
            d="M310 250 Q380 180 470 120"
            stroke="#a855f7"
            strokeWidth="4"
            fill="none"
          />

          <path
            id="path4"
            d="M230 290 Q150 300 70 320"
            stroke="#f59e0b"
            strokeWidth="4"
            fill="none"
          />

          <path
            id="path5"
            d="M330 290 Q410 300 490 320"
            stroke="#ec4899"
            strokeWidth="4"
            fill="none"
          />

          <path
            id="path6"
            d="M250 330 Q190 420 130 500"
            stroke="#22d3ee"
            strokeWidth="4"
            fill="none"
          />

          <path
            id="path7"
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

          {/* Moving Data Flow */}
          <circle
            r="5"
            fill="#22c55e"
            style={{
              filter:
                "drop-shadow(0 0 10px #22c55e)",
            }}
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
            >
              <mpath href="#path1" />
            </animateMotion>
          </circle>

          <circle
            r="5"
            fill="#38bdf8"
            style={{
              filter:
                "drop-shadow(0 0 10px #38bdf8)",
            }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
            >
              <mpath href="#path2" />
            </animateMotion>
          </circle>

          <circle
            r="5"
            fill="#a855f7"
            style={{
              filter:
                "drop-shadow(0 0 10px #a855f7)",
            }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
            >
              <mpath href="#path3" />
            </animateMotion>
          </circle>

          <circle
            r="5"
            fill="#f59e0b"
            style={{
              filter:
                "drop-shadow(0 0 10px #f59e0b)",
            }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
            >
              <mpath href="#path4" />
            </animateMotion>
          </circle>

          <circle
            r="5"
            fill="#ec4899"
            style={{
              filter:
                "drop-shadow(0 0 10px #ec4899)",
            }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
            >
              <mpath href="#path5" />
            </animateMotion>
          </circle>

          <circle
            r="5"
            fill="#22d3ee"
            style={{
              filter:
                "drop-shadow(0 0 10px #22d3ee)",
            }}
          >
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
            >
              <mpath href="#path6" />
            </animateMotion>
          </circle>

          <circle
            r="5"
            fill="#fde047"
            style={{
              filter:
                "drop-shadow(0 0 10px #fde047)",
            }}
          >
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
            >
              <mpath href="#path7" />
            </animateMotion>
          </circle>
        </svg>

        {/* Profile */}
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

        {/* Network Cards */}
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
          description="Developing autonomous AI solutions"
          color="text-purple-400"
          className="top-20 right-[-20px]"
        />

        <NetworkNode
          number="4"
          delay={0.9}
          icon="🧠"
          title="AI Applications"
          description="Building smart AI products"
          color="text-orange-400"
          className="top-[250px] left-[-70px]"
        />

        <NetworkNode
          number="5"
          delay={1.2}
          icon="💻"
          title="Building in Public"
          description="Sharing my learning journey"
          color="text-pink-400"
          className="top-[250px] right-[-70px]"
        />

        <NetworkNode
          number="6"
          delay={1.5}
          icon="⚡"
          title="50+ Automations"
          description="n8n & AI Workflow Builder"
          color="text-cyan-300"
          className="bottom-[-10px] left-6"
        />

        <NetworkNode
          number="7"
          delay={1.8}
          icon="🌍"
          title="Real-World Problems"
          description="Building practical solutions"
          color="text-yellow-300"
          className="bottom-[-10px] right-6"
        />
      </div>

      {/* Mobile Version */}
      <div
        className="
          md:hidden
          flex
          flex-col
          items-center
          justify-center
          gap-6
          pt-6
          px-4
          text-center
          w-full
        "
      >
        <HeroImage />

        {/* Mobile Version */}
<div
  className="
    md:hidden
    relative
    w-[340px]
    h-[550px]
    mx-auto
  "
>
  {/* Top */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 scale-75">
    <NetworkNode
      number="1"
      delay={0}
      icon="💼"
      title="Open to Work"
      description=""
      color="text-green-400"
      className=""
    />
  </div>

  {/* Top Left */}
  <div className="absolute top-16 left-[-10px] scale-[0.65]">
    <NetworkNode
      number="2"
      delay={0.3}
      icon="🚀"
      title="Open Source"
      description=""
      color="text-cyan-400"
      className=""
    />
  </div>

  {/* Top Right */}
  <div className="absolute top-16 right-[-10px] scale-[0.65]">
    <NetworkNode
      number="3"
      delay={0.6}
      icon="🤖"
      title="AI Systems"
      description=""
      color="text-purple-400"
      className=""
    />
  </div>

  {/* Profile */}
  <div className="absolute top-[150px] left-1/2 -translate-x-1/2">
    <HeroImage />
  </div>

  {/* Bottom Left */}
  <div className="absolute bottom-20 left-[-10px] scale-[0.65]">
    <NetworkNode
      number="4"
      delay={0.9}
      icon="🧠"
      title="AI Apps"
      description=""
      color="text-orange-400"
      className=""
    />
  </div>

  {/* Bottom Right */}
  <div className="absolute bottom-20 right-[-10px] scale-[0.65]">
    <NetworkNode
      number="5"
      delay={1.2}
      icon="💻"
      title="Public"
      description=""
      color="text-pink-400"
      className=""
    />
  </div>

  {/* Bottom Center Left */}
  <div className="absolute bottom-0 left-[55px] scale-[0.65]">
    <NetworkNode
      number="6"
      delay={1.5}
      icon="⚡"
      title="Automations"
      description=""
      color="text-cyan-300"
      className=""
    />
  </div>

  {/* Bottom Center Right */}
  <div className="absolute bottom-0 right-[55px] scale-[0.65]">
    <NetworkNode
      number="7"
      delay={1.8}
      icon="🌍"
      title="Problems"
      description=""
      color="text-yellow-300"
      className=""
    />
  </div>
</div>
      </div>
    </div>
  );
}

export default HeroNetwork;