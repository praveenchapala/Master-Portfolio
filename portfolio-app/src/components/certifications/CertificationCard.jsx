import { ExternalLink, Calendar } from "lucide-react";

function CertificationCard({
  provider,
  title,
  year,
  skills,
  credential,
  color,
  icon,
}) {
  const colors = {
    cyan: {
      border: "hover:border-cyan-400/40",
      badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]",
    },

    emerald: {
      border: "hover:border-emerald-400/40",
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]",
    },

    violet: {
      border: "hover:border-violet-400/40",
      badge: "bg-violet-500/15 text-violet-300 border-violet-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]",
    },

    yellow: {
      border: "hover:border-yellow-400/40",
      badge: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(234,179,8,0.18)]",
    },

    pink: {
      border: "hover:border-pink-400/40",
      badge: "bg-pink-500/15 text-pink-300 border-pink-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.18)]",
    },

    blue: {
      border: "hover:border-blue-400/40",
      badge: "bg-blue-500/15 text-blue-300 border-blue-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]",
    },

    orange: {
      border: "hover:border-orange-400/40",
      badge: "bg-orange-500/15 text-orange-300 border-orange-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]",
    },
  };

  const theme = colors[color] || colors.cyan;

  return (
    <div
      className={`
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
        ${theme.border}
        ${theme.glow}
      `}
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-white/5
          via-transparent
          to-transparent
        "
      />

      <div className="relative p-8">

        {/* Top */}

        <div className="flex items-start justify-between mb-6">

          <div
            className="
              text-5xl
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            {icon}
          </div>

          <span
            className={`
              px-4
              py-2
              rounded-full
              border
              text-sm
              ${theme.badge}
            `}
          >
            {provider}
          </span>

        </div>

        {/* Title */}

        <h3
          className="
            text-2xl
            font-bold
            text-white
            leading-snug
            mb-4
          "
        >
          {title}
        </h3>

        {/* Year */}

        <div
          className="
            flex
            items-center
            gap-2
            text-slate-400
            mb-6
          "
        >
          <Calendar size={16} />

          <span>{year}</span>

        </div>

        {/* Skills */}

        <div className="flex flex-wrap gap-2 mb-8">

          {skills.map((skill) => (

            <span
              key={skill}
              className="
                px-3
                py-2
                rounded-full
                bg-slate-950
                border
                border-slate-700
                text-sm
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              {skill}
            </span>

          ))}

        </div>

        {/* Button */}

        <a
          href={credential}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-cyan-400
            font-semibold
            transition-all
            duration-300
            group-hover:gap-3
          "
        >
          View Credential

          <ExternalLink size={18} />

        </a>

      </div>
    </div>
  );
}

export default CertificationCard;