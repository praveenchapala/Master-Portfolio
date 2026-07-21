function FocusHeader() {
  return (
    <div className="mb-10">

      <span
        className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-500/20
          text-cyan-400
          text-sm
          tracking-widest
        "
      >
        CURRENT FOCUS
      </span>

      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          font-bold
          text-white
        "
      >
        Building Enterprise
        <br />
        AI Systems
      </h2>

    </div>
  );
}

export default FocusHeader;