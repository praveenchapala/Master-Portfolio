import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import TechBadge from "./TechBadge";

function ProjectCard({
  title,
  description,
  tech,
  github,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-500/40
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-transparent
        "
      />

      <div className="relative p-7">

        {/* Small Label */}

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            text-cyan-400
            mb-3
          "
        >
          SIDE PROJECT
        </p>

        {/* Title */}

        <h3
          className="
            text-2xl
            font-bold
            text-white
            mb-4
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            text-slate-400
            leading-7
            mb-8
          "
        >
          {description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item, index) => (
            <TechBadge
              key={index}
              tech={item}
            />
          ))}
        </div>

        {/* Button */}

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-cyan-400
            font-semibold
            transition
            group-hover:gap-3
          "
        >
          <FaGithub />

          View Repository

          <ArrowUpRight size={18} />
        </a>

      </div>
    </div>
  );
}

export default ProjectCard;