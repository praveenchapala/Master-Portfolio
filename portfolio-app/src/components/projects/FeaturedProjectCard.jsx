import TechBadge from "./TechBadge";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function FeaturedProjectCard({
  index,
  title,
  description,
  problem,
  features,
  tech,
  github,
  demo,
  image,
  status,
}) {
  const reverse = index % 2 !== 0;

  return (
    <section
      className={`
        grid
        lg:grid-cols-2
        gap-12
        items-center
        py-12
      `}
    >
      {/* CONTENT */}
      <div
        className={`
          ${reverse ? "lg:order-2" : ""}
        `}
      >
        {/* Project Number */}

        <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-3">
          const projectNumber = String((index ?? 0) + 1).padStart(2, "0");
        </p>

        {/* Status */}

        <span
          className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-300
            text-sm
            mb-6
          "
        >
          ● {status}
        </span>

        {/* Title */}

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            mb-6
          "
        >
          {title}
        </h2>

        {/* Description */}

        <p
          className="
            text-slate-400
            leading-8
            mb-8
          "
        >
          {description}
        </p>

        {/* Problem */}

        <div className="mb-8">
          <h4 className="text-white font-semibold mb-3">
            Problem Solved
          </h4>

          <p className="text-slate-400 leading-8">
            {problem}
          </p>
        </div>

        {/* Features */}

        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4">
            Key Highlights
          </h4>

          <div className="space-y-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />

                <p className="text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mb-10">
          {tech.map((item, i) => (
            <TechBadge
              key={i}
              tech={item}
            />
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-slate-950
              font-semibold
              hover:bg-cyan-400
              transition
            "
          >
            <FaGithub />
            Source Code
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              border
              border-slate-700
              hover:border-cyan-400
              hover:text-cyan-400
              transition
            "
          >
            <FiExternalLink />
            Live Demo
          </a>

        </div>
      </div>

      {/* IMAGE */}

      <div
        className={`
          ${reverse ? "lg:order-1" : ""}
        `}
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-slate-800
            bg-slate-900/50
            backdrop-blur-xl
            group
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-500/10
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition
            "
          />

          {image ? (
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-[300px]
                md:h-[420px]
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          ) : (
            <div
              className="
                h-[320px]
                flex
                items-center
                justify-center
                text-slate-500
              "
            >
              Project Preview
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectCard;