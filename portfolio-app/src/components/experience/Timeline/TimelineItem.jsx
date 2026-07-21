import { motion } from "framer-motion";
import {
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";

function TimelineItem({
  stage,
  icon,
  role,
  company,
  duration,
  achievements,
  technologies,
  status,
  color,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        group
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-cyan-500/10
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />

      {/* Card */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-3xl
          border
          ${color}
          bg-slate-900/70
          backdrop-blur-xl
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
        `}
      >
        {/* Top */}

        <div className="flex justify-between items-start gap-5">

          <div className="flex items-center gap-5">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-slate-800
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              {icon}
            </div>

            <div>

              <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs">
                {stage}
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                {role}
              </h3>

            </div>

          </div>

          <span
            className={`
              px-4
              py-2
              rounded-full
              text-xs
              font-semibold

              ${
                status === "Completed"
                  ? "bg-green-500/20 text-green-300"
                  : status === "Current Focus"
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-fuchsia-500/20 text-fuchsia-300"
              }
            `}
          >
            {status}
          </span>

        </div>

        {/* Company */}

        <div className="mt-8 flex flex-wrap gap-6 text-slate-400">

          <div className="flex items-center gap-2">

            <Building2 size={18} />

            {company}

          </div>

          <div className="flex items-center gap-2">

            <Calendar size={18} />

            {duration}

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-slate-800 my-8" />

        {/* Achievements */}

        <h4 className="text-white font-semibold mb-5">
          Key Contributions
        </h4>

        <div className="space-y-4">

          {achievements.map((item) => (

            <div
              key={item}
              className="flex items-start gap-3"
            >

              <CheckCircle2
                size={18}
                className="text-cyan-400 mt-1 flex-shrink-0"
              />

              <p className="text-slate-300 leading-7">
                {item}
              </p>

            </div>

          ))}

        </div>

        {/* Divider */}

        <div className="h-px bg-slate-800 my-8" />

        {/* Technologies */}

        <h4 className="text-white font-semibold mb-5">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-3">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-slate-950
                border
                border-slate-700
                text-sm
                text-slate-300
                transition
                duration-300
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

    </motion.div>
  );
}

export default TimelineItem;