import { motion } from "framer-motion";

function NetworkNode({
  number,
  icon,
  title,
  description,
  color,
  className,
  delay = 0,
}) {
  return (
    <div
      className={`
        absolute
        ${className}
      `}
    >
      <motion.div
        animate={{
          y: [0, -28, 0],
          rotate: [-3, 3, -3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="
          relative
          w-[140px]
          h-[145px]
          md:w-[160px]
          md:h-[165px]
          bg-slate-900/80
          backdrop-blur-md
          border
          border-slate-800
          rounded-[30px]
          p-4
          shadow-xl
          flex
          flex-col
          justify-start
          items-start
          transition-all
          duration-300
          hover:scale-105
          hover:border-slate-700
          hover:shadow-cyan-500/20
        "
      >
        {/* Number Badge */}
        <div
          className={`
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            w-8
            h-8
            md:w-9
            md:h-9
            rounded-full
            bg-slate-950
            border
            border-slate-700
            flex
            items-center
            justify-center
            font-bold
            text-sm
            md:text-base
            ${color}
          `}
        >
          {number}
        </div>

        {/* Icon */}
        <div
          className={`
            text-2xl
            md:text-3xl
            mb-2
            ${color}
          `}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`
            text-sm
            md:text-base
            font-bold
            leading-5
            md:leading-6
            mb-2
            ${color}
          `}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-slate-300
            text-[10px]
            md:text-xs
            leading-4
            md:leading-5
          "
        >
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default NetworkNode;