import profile from "../../data/profile";

function HeroContent() {
  return (
    <div className="space-y-6">
      <p className="text-cyan-400 code-font text-lg">
  Welcome to my digital playground 👋
</p>

      <div>
        <h1 className="code-font inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Hi, I'm
        </h1>

        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mt-2">
         <span className="gradient-text code-font">
  {profile.name}
</span>
        </h1>
      </div>

      <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold">
        {profile.role}
      </h2>

      <p className="text-lg text-slate-400 max-w-3xl leading-8">
        {profile.tagline}
      </p>

      <p className="text-slate-500">
        📍 {profile.location}
      </p>
    </div>
  );
}

export default HeroContent;