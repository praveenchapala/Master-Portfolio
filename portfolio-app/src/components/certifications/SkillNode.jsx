function SkillNode({
  title,
  last,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
      "
    >
      {/* Node */}
      <div
        className="
          px-10
          py-5
          rounded-3xl
          bg-slate-900/70
          border
          border-cyan-500/20
          backdrop-blur-xl
          text-white
          text-2xl
          font-semibold
          transition-all
          duration-500
          hover:scale-105
          hover:border-cyan-400
          hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
        "
      >
        {title}
      </div>

      {/* Connector */}
      {!last && (
        <div
          className="
            flex
            flex-col
            items-center
            py-6
          "
        >
          <div
            className="
              w-5
              h-5
              rounded-full
              bg-cyan-400
              animate-pulse
              shadow-[0_0_20px_rgba(34,211,238,1)]
            "
          />

          <div
            className="
              h-20
              w-1
              bg-gradient-to-b
              from-cyan-400
              to-slate-700
            "
          />

          <div
            className="
              w-5
              h-5
              rounded-full
              bg-cyan-400
              animate-pulse
              shadow-[0_0_20px_rgba(34,211,238,1)]
            "
          />
        </div>
      )}
    </div>
  );
}

export default SkillNode;