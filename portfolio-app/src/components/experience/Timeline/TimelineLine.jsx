import { motion } from "framer-motion";

function TimelineLine({ isLast = false }) {
  return (
    <div className="flex flex-col items-center py-6">

      {/* Top Node */}
      <motion.div
        className="
          w-5
          h-5
          rounded-full
          bg-cyan-400
          shadow-[0_0_25px_rgba(34,211,238,1)]
          z-10
        "
        animate={{
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {!isLast && (
        <div className="relative flex flex-col items-center">

          {/* Vertical Line */}
          <div
            className="
              w-[3px]
              h-28
              bg-gradient-to-b
              from-cyan-400
              via-cyan-500
              to-slate-700
            "
          />

          {/* Moving Particle */}
          <motion.div
            className="
              absolute
              w-3
              h-3
              rounded-full
              bg-cyan-300
              shadow-[0_0_15px_rgba(34,211,238,1)]
            "
            animate={{
              y: [0, 110, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </div>
      )}

    </div>
  );
}

export default TimelineLine;