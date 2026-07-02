import SkillCircle from "./SkillCircle";

function MandalaSkills() {
  return (
    <div className="relative h-[900px] overflow-hidden">

      {/* Background Mandala Pattern */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,rgba(34,211,238,0.15)_1px,transparent_1px)]
          bg-[length:40px_40px]
          opacity-20
        "
      ></div>

      {/* Center Core */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-40
          h-40
          rounded-full
          border
          border-cyan-500
          bg-slate-950
          shadow-[0_0_80px_rgba(34,211,238,0.5)]
          flex
          items-center
          justify-center
          text-6xl
          text-cyan-400
        "
      >
        &lt;/&gt;
      </div>

      {/* Frontend */}
      <SkillCircle
        title="FRONTEND"
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
        "
      />

      {/* Backend */}
      <SkillCircle
        title="BACKEND"
        className="
          absolute
          top-1/2
          right-20
          -translate-y-1/2
        "
      />

      {/* AI */}
      <SkillCircle
        title="AI & AUTOMATION"
        className="
          absolute
          top-1/2
          left-20
          -translate-y-1/2
        "
      />

      {/* Tools */}
      <SkillCircle
        title="TOOLS"
        className="
          absolute
          bottom-20
          left-1/2
          -translate-x-1/2
        "
      />
    </div>
  );
}

export default MandalaSkills;