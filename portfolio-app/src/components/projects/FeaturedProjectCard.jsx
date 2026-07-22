import TechBadge from "./TechBadge";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function FeaturedProjectCard({
  index = 0,
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

  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <section
      className="
        py-14
      "
    >
      <div
        className={`
          grid
          lg:grid-cols-2
          gap-12
          items-center
        `}
      >
        {/* CONTENT */}

        <div
          className={`
            ${reverse ? "lg:order-2" : ""}
          `}
        >
          {/* Project Number */}

          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.35em]
              text-sm
              mb-4
            "
          >
            PROJECT {projectNumber}
          </p>

          {/* Status */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
              text-sm
              mb-8
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
              text-white
              mb-6
            "
          >
            {title}
          </h2>

          {/* Description */}

          <p
            className="
              text-lg
              text-slate-400
              leading-8
              mb-8
            "
          >
            {description}
          </p>

          {/* Problem */}

          <div className="mb-8">

            <h4
              className="
                text-white
                font-semibold
                mb-3
              "
            >
              Problem Solved
            </h4>

            <p
              className="
                text-slate-400
                leading-8
              "
            >
              {problem}
            </p>

          </div>

          {/* Features */}

          <div className="mb-8">

            <h4
              className="
                text-white
                font-semibold
                mb-4
              "
            >
              Key Highlights
            </h4>

            <div className="space-y-3">

              {features.map((item, i) => (

                <div
                  key={i}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-cyan-400
                      mt-2
                    "
                  />

                  <p className="text-slate-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Tech */}

          <div
            className="
              flex
              flex-wrap
              gap-3
              mb-10
            "
          >
            {tech.map((item, i) => (
              <TechBadge
                key={i}
                tech={item}
              />
            ))}
          </div>

          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >
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
                transition-all
              "
            >
              <FaGithub />

              Source Code

            </a>

            {demo && (
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
                  transition-all
                "
              >
                <FiExternalLink />

                Live Demo

              </a>
            )}
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
              rounded-[30px]
              border
              border-slate-800
              bg-slate-900/60
              backdrop-blur-xl
              group
              shadow-xl
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-purple-500/10
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
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
                  lg:h-[480px]
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              />
            ) : (
              <div
                className="
                  h-[420px]
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
      </div>
    </section>
  );
}

export default FeaturedProjectCard;