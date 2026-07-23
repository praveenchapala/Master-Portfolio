import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";

function FooterBrand() {
  return (
    <div>
      {/* Logo */}

      <h2
        className="
          text-4xl
          font-bold
          text-cyan-400
          mb-6
          hover:tracking-wide
          transition-all
          duration-300
        "
      >
        {"<Praveen.Dev.QA.AI/>"}
      </h2>

      {/* Description */}

      <p
        className="
          text-slate-400
          leading-8
          text-lg
          max-w-md
          mb-10
        "
      >
        Building intelligent software,
        scalable web applications,
        AI-powered automation and
        enterprise solutions that solve
        real-world engineering problems.
      </p>

      {/* Tech Stack */}

      <div className="space-y-4">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-cyan-400
          "
        >
          Built With
        </p>

        <div className="flex flex-wrap gap-4">

          <TechIcon
            icon={<SiReact />}
            text="React"
          />

          <TechIcon
            icon={<SiVite />}
            text="Vite"
          />

          <TechIcon
            icon={<SiTailwindcss />}
            text="Tailwind"
          />

          <TechIcon
            icon={<RiRobot2Line />}
            text="EmailJS"
          />

          <TechIcon
            icon={<SiVercel />}
            text="Vercel"
          />

        </div>

      </div>
    </div>
  );
}

function TechIcon({ icon, text }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-slate-900
        border
        border-slate-800
        hover:border-cyan-400
        hover:text-cyan-400
        transition-all
        duration-300
      "
    >
      <span className="text-lg">
        {icon}
      </span>

      <span className="text-sm">
        {text}
      </span>
    </div>
  );
}

export default FooterBrand;