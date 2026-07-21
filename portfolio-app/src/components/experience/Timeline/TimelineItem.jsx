import { motion } from "framer-motion";

import TimelineDot from "./TimelineDot";
import TimelineLine from "./TimelineLine";
import TechPill from "./TechPill";
import DateBadge from "./DateBadge";

function TimelineItem({
  item,
  index,
  isLast,
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">

      {/* Desktop */}

      <div className="hidden lg:grid grid-cols-[1fr_80px_1fr]">

        {/* LEFT */}

        <div
          className={`flex ${
            isLeft ? "justify-end pr-10" : ""
          }`}
        >
          {isLeft && (
            <Card item={item} />
          )}
        </div>

        {/* CENTER */}

        <div className="flex flex-col items-center">

          <TimelineDot />

          {!isLast && (
            <TimelineLine />
          )}

        </div>

        {/* RIGHT */}

        <div
          className={`flex ${
            !isLeft ? "justify-start pl-10" : ""
          }`}
        >
          {!isLeft && (
            <Card item={item} />
          )}
        </div>

      </div>

      {/* MOBILE */}

      <div className="lg:hidden flex gap-5">

        <div className="flex flex-col items-center">

          <TimelineDot />

          {!isLast && (
            <TimelineLine />
          )}

        </div>

        <div className="flex-1 pb-12">

          <Card item={item} />

        </div>

      </div>

    </div>
  );
}

function Card({ item }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        w-full
        max-w-md
        rounded-3xl
        border
        ${item.color}
        bg-slate-900/70
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      `}
    >

      {/* Header */}

      <div className="flex justify-between items-start gap-4">

        <div>

          <div className="text-3xl">
            {item.icon}
          </div>

          <h3 className="mt-3 text-xl font-bold text-white">
            {item.role}
          </h3>

          <p className="mt-1 text-slate-400">
            {item.company}
          </p>

        </div>

        <DateBadge
          date={item.duration}
        />

      </div>

      {/* Status */}

      <div className="mt-5">

        <span
          className="
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-300
          "
        >
          {item.status}
        </span>

      </div>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">

        {item.technologies.map((tech) => (
          <TechPill
            key={tech}
            tech={tech}
          />
        ))}

      </div>

      {/* Achievements */}

      <div className="mt-6 space-y-3">

        {item.achievements.map((achievement) => (

          <div
            key={achievement}
            className="flex gap-3"
          >

            <span className="text-cyan-400">
              ✓
            </span>

            <p className="text-slate-300 text-sm leading-7">
              {achievement}
            </p>

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default TimelineItem;