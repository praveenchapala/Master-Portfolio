function CertificationHeader() {
  return (
    <div className="text-center mb-20">
      {/* Small Heading */}

      <p
        className="
          text-cyan-400
          uppercase
          tracking-[0.4em]
          text-sm
          font-semibold
          mb-4
        "
      >
        Continuous Learning
      </p>

      {/* Main Heading */}

      <h2
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-white
          leading-tight
        "
      >
        Professional
        <br />

        <span className="text-slate-400">
          Certifications
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-3xl
          mx-auto
          text-slate-400
          text-lg
          leading-8
        "
      >
        Continuous learning is an important part of my engineering journey.
        These certifications reflect my commitment to strengthening my
        knowledge in software development, backend engineering, automation,
        data analytics, and modern technologies through hands-on learning.
      </p>

      {/* Divider */}

      <div
        className="
          w-28
          h-1
          bg-cyan-400
          rounded-full
          mx-auto
          mt-10
        "
      />
    </div>
  );
}

export default CertificationHeader;