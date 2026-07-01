import TechBadge from "./TechBadge";

function FeaturedProjectCard({
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
  return (
    <div
      className="
        bg-slate-900/60
        border
        border-slate-800
        rounded-3xl
        overflow-hidden
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >
      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
          p-8
          items-center
        "
      >
        {/* Left Side */}
        <div>
          <div
            className="
              h-[320px]
              bg-slate-950
              rounded-2xl
              flex
              items-center
              justify-center
              border
              border-slate-800
            "
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-2xl
                "
              />
            ) : (
              <p className="text-slate-500">
                Project Preview
              </p>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Status */}
          <div className="mb-4">
            <span
              className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                text-cyan-400
                border
                border-cyan-500/20
                text-sm
              "
            >
              {status}
            </span>
          </div>

          {/* Title */}
          <h3
            className="
              text-3xl
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
              leading-8
              mb-6
            "
          >
            {description}
          </p>

          {/* Problem */}
          <div className="mb-6">
            <h4
              className="
                text-white
                font-semibold
                mb-2
              "
            >
              Problem Solved
            </h4>

            <p className="text-slate-400">
              {problem}
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4
              className="
                text-white
                font-semibold
                mb-3
              "
            >
              Features
            </h4>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <p
                  key={index}
                  className="text-slate-300"
                >
                  ✓ {feature}
                </p>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div
            className="
              flex
              flex-wrap
              gap-2
              mb-8
            "
          >
            {tech.map((item, index) => (
              <TechBadge
                key={index}
                tech={item}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-3
                bg-cyan-500
                text-slate-950
                rounded-xl
                font-semibold
                hover:bg-cyan-400
                transition
              "
            >
              GitHub
            </a>

            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-3
                border
                border-slate-700
                rounded-xl
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;