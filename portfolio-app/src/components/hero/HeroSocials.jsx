import socials from "../../data/socials";

function HeroSocials() {
  return (
    <div className="flex gap-6 mt-8 text-slate-400">
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-cyan-400 transition"
      >
        GitHub
      </a>

      <a
        href={socials.linkedin}
        target="_blank"
        rel="noreferrer"
        className="hover:text-cyan-400 transition"
      >
        LinkedIn
      </a>

      <a
        href={socials.email}
        className="hover:text-cyan-400 transition"
      >
        Email
      </a>
    </div>
  );
}

export default HeroSocials;