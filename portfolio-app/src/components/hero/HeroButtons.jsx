import socials from "../../data/socials";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <a
        href="#projects"
        className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-xl hover:bg-cyan-400 transition"
      >
        View Projects
      </a>

      <a
        href={socials.resume}
        className="px-6 py-3 border border-slate-700 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
      >
        Download Resume
      </a>
    </div>
  );
}

export default HeroButtons;