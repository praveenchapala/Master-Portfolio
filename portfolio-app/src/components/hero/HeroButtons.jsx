import { ArrowRight, Download } from "lucide-react";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      {/* Projects Button */}
      <a
        href="#projects"
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          px-7
          py-4
          text-white
          font-semibold
          shadow-[0_10px_30px_rgba(34,211,238,0.35)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
        "
      >
        View Projects

        <ArrowRight
          size={20}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/13s1c5Tr_4mx1slQ6VYMGfB4BzvafhKpT/view?usp=sharing"
        download
        className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/60
          backdrop-blur-xl
          px-7
          py-4
          text-white
          font-semibold
          transition-all
          duration-300
          hover:border-cyan-400
          hover:text-cyan-400
          hover:-translate-y-1
        "
      >
        <Download size={20} />

        Download Resume
      </a>

    </div>
  );
}

export default HeroButtons;