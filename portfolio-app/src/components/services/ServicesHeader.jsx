function ServicesHeader() {
  return (
    <div className="mb-24 text-center">

      <span
        className="
        inline-flex
        items-center
        rounded-full
        border
        border-cyan-500/30
        bg-cyan-500/10
        px-5
        py-2
        text-sm
        font-semibold
        text-cyan-400
        "
      >
        💼 SERVICES
      </span>

      <h2
        className="
        mt-6
        text-5xl
        md:text-6xl
        font-extrabold
        "
      >
        Building Intelligent
        <span className="text-cyan-400">
          {" "}
          Software Solutions
        </span>
      </h2>

      <p
        className="
        mt-6
        max-w-3xl
        mx-auto
        text-slate-400
        text-lg
        leading-8
        "
      >
        I help startups, businesses, and founders build AI-powered
        applications, automate workflows, integrate APIs, and develop
        scalable full-stack software that solves real business problems.
      </p>

    </div>
  );
}

export default ServicesHeader;