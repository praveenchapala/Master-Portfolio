function ProjectsHeader() {
  return (
    <div className="text-center mb-20">
      {/* Small Heading */}
      <p
        className="
          text-cyan-400
          uppercase
          tracking-[0.35em]
          text-sm
          mb-4
          font-semibold
        "
      >
        Projects
      </p>

      {/* Main Heading */}
      <h2
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          text-white
        "
      >
        Building Solutions,
        <br />

        <span className="text-slate-400">
          One Project at a Time
        </span>
      </h2>

      {/* Divider */}
      <div
        className="
          w-28
          h-1
          bg-cyan-400
          rounded-full
          mx-auto
          mt-8
        "
      />
    </div>
  );
}

export default ProjectsHeader;