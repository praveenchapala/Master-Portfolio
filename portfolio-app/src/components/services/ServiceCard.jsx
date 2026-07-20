function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  technologies,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      p-10
      "
    >

      <div className="flex justify-between items-start">

        <div>

          <div className="text-5xl mb-5">
            {icon}
          </div>

          <h3 className="text-3xl font-bold">
            {title}
          </h3>

          <p className="text-cyan-400 mt-2">
            {subtitle}
          </p>

          <p
            className="
            mt-6
            max-w-3xl
            text-slate-400
            leading-8
            "
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                text-cyan-300
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        <button
          className="
          rounded-full
          border
          border-cyan-500/20
          px-6
          py-3
          text-cyan-400
          "
        >
          Learn More →
        </button>

      </div>

    </div>
  );
}

export default ServiceCard;