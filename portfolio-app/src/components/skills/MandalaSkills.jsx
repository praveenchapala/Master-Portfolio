import SkillCircle from "./SkillCircle";
import TechBadge from "./TechBadge";

function MandalaSkills() {
  return (
    <div className="relative h-[1450px] overflow-hidden">
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

      {/* SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 1450"
      >
        <line
          x1="700"
          y1="700"
          x2="700"
          y2="300"
          stroke="#d946ef"
          strokeWidth="2"
          strokeDasharray="10 10"
        />

        <line
          x1="700"
          y1="700"
          x2="1120"
          y2="700"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeDasharray="10 10"
        />

        <line
          x1="700"
          y1="700"
          x2="280"
          y2="700"
          stroke="#facc15"
          strokeWidth="2"
          strokeDasharray="10 10"
        />

        <line
          x1="700"
          y1="700"
          x2="700"
          y2="1120"
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
          flex-col
          items-center
          justify-center
          text-cyan-400
          animate-pulse
          z-20
        "
      >
        <div className="text-8xl">&lt;/&gt;</div>

        <p className="text-xs text-center mt-2 text-cyan-300">
          Full Stack Developer
          <br />
          Agentic AI Enthusiast
        </p>
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
          top-20
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
          right-28
          -translate-y-1/2
        "
      />

      {/* AI */}
      <SkillCircle
  icon="🤖"
  title={`AI\n+\nAUTOMATION`}
  description="Building intelligent automation systems"
  size="large"
  color="
    border-yellow-500/40
    shadow-[0_0_100px_rgba(250,204,21,0.35)]
  "
  className="
    absolute
    top-1/2
    left-20
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
          bottom-20
          left-1/2
          -translate-x-1/2
        "
      />

      {/* ===== FRONTEND BADGES ===== */}
      <TechBadge label="React" className="top-[220px] left-[320px] border-fuchsia-500/40 text-fuchsia-300" />
      <TechBadge label="JavaScript" className="top-[290px] left-[230px] border-fuchsia-500/40 text-fuchsia-300" />
      <TechBadge label="HTML" className="top-[380px] left-[180px] border-fuchsia-500/40 text-fuchsia-300" />
      <TechBadge label="CSS" className="top-[380px] right-[180px] border-fuchsia-500/40 text-fuchsia-300" />
      <TechBadge label="Tailwind" className="top-[290px] right-[230px] border-fuchsia-500/40 text-fuchsia-300" />
      <TechBadge label="Vite" className="top-[220px] right-[320px] border-fuchsia-500/40 text-fuchsia-300" />

      {/* ===== BACKEND BADGES ===== */}
      <TechBadge label="Java" className="top-[430px] right-[200px] border-cyan-500/40 text-cyan-300" />
      <TechBadge label="Spring Boot" className="top-[520px] right-[110px] border-cyan-500/40 text-cyan-300" />
      <TechBadge label="Node.js" className="top-[620px] right-[80px] border-cyan-500/40 text-cyan-300" />
      <TechBadge label="SQL" className="top-[720px] right-[110px] border-cyan-500/40 text-cyan-300" />
      <TechBadge label="MongoDB" className="top-[810px] right-[190px] border-cyan-500/40 text-cyan-300" />
      <TechBadge label="PostgreSQL" className="top-[900px] right-[280px] border-cyan-500/40 text-cyan-300" />
      <TechBadge label="REST APIs" className="top-[980px] right-[380px] border-cyan-500/40 text-cyan-300" />

      {/* ===== AI BADGES ===== */}
      <TechBadge label="Gemini" className="top-[430px] left-[200px] border-yellow-500/40 text-yellow-300" />
      <TechBadge label="Agentic AI" className="top-[520px] left-[110px] border-yellow-500/40 text-yellow-300" />
      <TechBadge label="n8n" className="top-[620px] left-[80px] border-yellow-500/40 text-yellow-300" />
      <TechBadge
  label="Prompt Engineering"
  className="
    top-[680px]
    left-[10px]
    border-yellow-500/40
    text-yellow-300
  "
/>
      <TechBadge
  label="Workflow Automation"
  className="
    top-[760px]
    left-[20px]
    border-yellow-500/40
    text-yellow-300
  "
/>
      <TechBadge label="LLM Integration" className="top-[900px] left-[200px] border-yellow-500/40 text-yellow-300" />
      <TechBadge label="AI Agents" className="top-[980px] left-[320px] border-yellow-500/40 text-yellow-300" />

      {/* ===== TOOLS BADGES ===== */}
      <TechBadge label="Git" className="bottom-[230px] left-[350px] border-green-500/40 text-green-300" />
      <TechBadge label="GitHub" className="bottom-[150px] left-[250px] border-green-500/40 text-green-300" />
      <TechBadge label="Postman" className="bottom-[150px] left-[470px] border-green-500/40 text-green-300" />
      <TechBadge label="VS Code" className="bottom-[230px] right-[350px] border-green-500/40 text-green-300" />
      <TechBadge label="Docker" className="bottom-[150px] right-[250px] border-green-500/40 text-green-300" />
      <TechBadge label="Jira" className="bottom-[150px] right-[470px] border-green-500/40 text-green-300" />
      <TechBadge label="Figma" className="bottom-[70px] left-[430px] border-green-500/40 text-green-300" />
      <TechBadge label="Firebase" className="bottom-[70px] right-[430px] border-green-500/40 text-green-300" />
    </div>
  );
}

export default MandalaSkills;