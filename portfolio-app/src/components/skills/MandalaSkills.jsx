import SkillCircle from "./SkillCircle";
import TechBadge from "./TechBadge";

function MandalaSkills() {
  return (
    <div className="relative h-[1200px] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,rgba(34,211,238,0.15)_1px,transparent_1px)]
          bg-[length:40px_40px]
          opacity-20
        "
      />

      {/* Floating Particles */}
      <div className="absolute top-32 left-52 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
      <div className="absolute top-60 right-60 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping" />
      <div className="absolute bottom-60 left-72 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
      <div className="absolute bottom-48 right-72 w-2 h-2 bg-green-400 rounded-full animate-ping" />
      <div className="absolute top-40 left-96 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
      <div className="absolute top-80 right-96 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping" />
      <div className="absolute bottom-80 left-[500px] w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
      <div className="absolute bottom-80 right-[500px] w-2 h-2 bg-green-400 rounded-full animate-ping" />
      <div className="absolute top-[500px] left-[200px] w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
      <div className="absolute top-[500px] right-[200px] w-2 h-2 bg-cyan-400 rounded-full animate-ping" />

      {/* SVG Connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 1200"
      >
        <line
          x1="700"
          y1="600"
          x2="700"
          y2="250"
          stroke="#d946ef"
          strokeWidth="2"
          strokeDasharray="10 10"
        />

        <line
          x1="700"
          y1="600"
          x2="1180"
          y2="600"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeDasharray="10 10"
        />

        <line
          x1="700"
          y1="600"
          x2="220"
          y2="600"
          stroke="#facc15"
          strokeWidth="2"
          strokeDasharray="10 10"
        />

        <line
          x1="700"
          y1="600"
          x2="700"
          y2="940"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="10 10"
        />
      </svg>

      {/* Outer Ring */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[850px]
          h-[850px]
          rounded-full
          border
          border-cyan-500/10
          animate-[spin_40s_linear_infinite]
        "
      />

      {/* Middle Ring */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[650px]
          h-[650px]
          rounded-full
          border
          border-cyan-500/5
        "
      />

      {/* Inner Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-cyan-400/10
          animate-pulse
        "
      />

      {/* Center Core */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-56
          h-56
          rounded-full
          border
          border-cyan-500
          bg-slate-950
          shadow-[0_0_120px_rgba(34,211,238,0.5)]
          flex
          items-center
          justify-center
          text-cyan-400
          animate-pulse
          z-20
        "
      >
        <div className="text-center">
  <div className="text-7xl">&lt;/&gt;</div>

  <p className="text-cyan-300 mt-2 text-sm">
    Full Stack Developer&nbsp;|&nbsp;Agentic AI Enthusiast&nbsp;|&nbsp;Automation Advocate
  </p>
</div>
      </div>

      {/* Frontend */}
      <SkillCircle
        icon="🖥️"
        title="FRONTEND"
        description="Crafting engaging user experiences"
        color="
          border-fuchsia-500/40
          shadow-[0_0_100px_rgba(217,70,239,0.35)]
        "
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
        "
      />

      {/* Backend */}
      <SkillCircle
  icon="🗄️"
  title="BACKEND"
  description="Powering robust applications"
  color="
    border-cyan-500/40
    shadow-[0_0_100px_rgba(34,211,238,0.35)]
  "
  className="
    absolute
    top-1/2
    right-20
    -translate-y-1/2
  "
/>

      {/* AI */}
      <SkillCircle
        icon="🤖"
        title="AI  AUTOMATION"
        description="Building intelligent automation systems"
        color="
          border-yellow-500/40
          shadow-[0_0_100px_rgba(250,204,21,0.35)]
        "
        className="
          absolute
          top-1/2
          left-0
          -translate-y-1/2
        "
      />

      {/* Tools */}
      <SkillCircle
        icon="🛠️"
        title="TOOLS"
        description="Essential tools for development"
        color="
          border-green-500/40
          shadow-[0_0_100px_rgba(34,197,94,0.35)]
        "
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
        "
      />

      {/* Frontend Badges */}
      <TechBadge
        label="React"
        className="top-[230px] left-[430px] border-fuchsia-500/40 text-fuchsia-300"
      />

      <TechBadge
        label="HTML"
        className="top-[340px] left-[340px] border-fuchsia-500/40 text-fuchsia-300"
      />

      <TechBadge
        label="CSS"
        className="top-[340px] right-[340px] border-fuchsia-500/40 text-fuchsia-300"
      />

      <TechBadge
        label="Tailwind"
        className="top-[230px] right-[430px] border-fuchsia-500/40 text-fuchsia-300"
      />

      {/* Backend */}
      <TechBadge
        label="Java"
        className="top-[470px] right-[180px] border-cyan-500/40 text-cyan-300"
      />

      <TechBadge
        label="Spring Boot"
        className="top-[580px] right-[120px] border-cyan-500/40 text-cyan-300"
      />

      <TechBadge
        label="Node.js"
        className="bottom-[390px] right-[160px] border-cyan-500/40 text-cyan-300"
      />

      <TechBadge
        label="SQL"
        className="bottom-[300px] right-[200px] border-cyan-500/40 text-cyan-300"
      />

      {/* AI */}
      <TechBadge
        label="Gemini"
        className="top-[470px] left-[180px] border-yellow-500/40 text-yellow-300"
      />

      <TechBadge
        label="Agentic AI"
        className="top-[580px] left-[100px] border-yellow-500/40 text-yellow-300"
      />

      <TechBadge
        label="n8n"
        className="bottom-[390px] left-[160px] border-yellow-500/40 text-yellow-300"
      />

      <TechBadge
        label="Automation"
        className="bottom-[300px] left-[90px] border-yellow-500/40 text-yellow-300"
      />

      {/* Tools */}
      <TechBadge
        label="Git"
        className="bottom-[190px] left-[430px] border-green-500/40 text-green-300"
      />

      <TechBadge
        label="GitHub"
        className="bottom-[90px] left-[330px] border-green-500/40 text-green-300"
      />

      <TechBadge
        label="Postman"
        className="bottom-[90px] right-[330px] border-green-500/40 text-green-300"
      />

      <TechBadge
        label="VS Code"
        className="bottom-[190px] right-[430px] border-green-500/40 text-green-300"
      />
    </div>
  );
}

export default MandalaSkills;