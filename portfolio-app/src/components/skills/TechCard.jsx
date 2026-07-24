import React from "react";

function TechCard({ icon, name }) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-lg
        transition-all
        duration-300
        hover:border-cyan-400
        hover:-translate-y-1
        hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]
      "
    >
      <div
        className="
          text-2xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <span
        className="
          text-slate-200
          font-medium
          text-sm
        "
      >
        {name}
      </span>
    </div>
  );
}

export default TechCard;