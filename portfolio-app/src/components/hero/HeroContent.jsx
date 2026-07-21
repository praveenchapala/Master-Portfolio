import profile from "../../data/profile";

function HeroContent() {
  return (
    <div
      className="
        space-y-4
        md:space-y-6
        text-center
        lg:text-left
      "
    >
      {/* Welcome */}
      <p
        className="
          text-cyan-400
          code-font
          text-sm
          sm:text-base
          md:text-lg
        "
      >
        Welcome to my digital playground 👋
      </p>

      {/* Name */}
      <div>
        <h1
          className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            text-cyan-400
            border
            border-cyan-500/20
            text-sm
            md:text-base
            code-font
          "
        >
          Hi, I'm
        </h1>

        <h1
          className="
            mt-3
            font-bold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          <span className="gradient-text code-font">
            {profile.name}
          </span>
        </h1>
      </div>

      {/* Role */}
      <h2
        className="
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          font-semibold
          text-slate-300
        "
      >
        {profile.role}
      </h2>

      {/* Description */}
      <p
        className="
          text-base
          md:text-lg
          text-slate-400
          leading-7
          md:leading-8
          max-w-xl
          mx-auto
          lg:mx-0
        "
      >
        {profile.tagline}
      </p>

      {/* Location */}
      <p
        className="
          text-sm
          md:text-base
          text-slate-500
        "
      >
        📍 {profile.location}
      </p>
    </div>
  );
}

export default HeroContent;