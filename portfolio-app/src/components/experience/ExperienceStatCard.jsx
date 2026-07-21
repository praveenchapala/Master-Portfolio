import { motion } from "framer-motion";
import CountUp from "react-countup";

function ExperienceStatCard({
  icon,
  value,
  suffix = "",
  label,
  description,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        p-7
        group
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
          to-blue-500/10
        "
      />

      {/* Icon */}

      <div
        className={`
          relative
          z-10
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
          ${color}
        `}
      >
        {icon}
      </div>

      {/* Counter */}

      <h3 className="relative z-10 text-5xl font-bold text-white mt-6">
  {value}
  {suffix}
</h3>

      <p className="relative z-10 mt-3 text-xl font-semibold text-white">
        {label}
      </p>

      <p className="relative z-10 mt-2 text-slate-400 text-sm leading-6">
        {description}
      </p>
    </motion.div>
  );
}

export default ExperienceStatCard;