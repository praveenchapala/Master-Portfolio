function TimelineDot({ color = "bg-cyan-400" }) {
  return (
    <div className="relative flex justify-center">
      {/* Outer Glow */}
      <div
        className={`
          absolute
          w-8
          h-8
          rounded-full
          blur-md
          opacity-40
          animate-pulse
          ${color}
        `}
      />

      {/* Main Dot */}
      <div
        className={`
          relative
          w-5
          h-5
          rounded-full
          border-4
          border-slate-950
          shadow-[0_0_20px_rgba(34,211,238,0.7)]
          ${color}
        `}
      />
    </div>
  );
}

export default TimelineDot;