import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  SiFirebase,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BsDatabaseFill } from "react-icons/bs";
import { Bot } from "lucide-react";

function SkillChip({ label }) {
  const icons = {
    React: <SiReact className="text-sky-400 text-lg" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-lg" />,
    HTML: <SiHtml5 className="text-orange-500 text-lg" />,
    CSS: <SiCss className="text-blue-500 text-lg" />,
    Tailwind: <SiTailwindcss className="text-cyan-400 text-lg" />,
    Vite: <SiVite className="text-violet-400 text-lg" />,

    Java: <FaJava className="text-red-500 text-lg" />,
    "Spring Boot": <SiSpringboot className="text-green-500 text-lg" />,
    "Node.js": <SiNodedotjs className="text-green-500 text-lg" />,
    SQL: <BsDatabaseFill className="text-cyan-400 text-base" />,
    MongoDB: <SiMongodb className="text-green-500 text-lg" />,
    PostgreSQL: <SiPostgresql className="text-blue-500 text-lg" />,
    "REST APIs": <BsDatabaseFill className="text-cyan-400 text-base" />,

    Gemini: <Bot className="text-violet-400" size={18} />,
    "Agentic AI": <Bot className="text-yellow-400" size={18} />,
    n8n: <Bot className="text-orange-400" size={18} />,
    "Prompt Engineering": <Bot className="text-pink-400" size={18} />,
    "Workflow Automation": <Bot className="text-cyan-400" size={18} />,
    "LLM Integration": <Bot className="text-violet-400" size={18} />,
    "AI Agents": <Bot className="text-green-400" size={18} />,

    Git: <SiGit className="text-orange-500 text-lg" />,
    GitHub: <SiGithub className="text-white text-lg" />,
    Docker: <SiDocker className="text-blue-500 text-lg" />,
    Postman: <SiPostman className="text-orange-500 text-lg" />,
    "VS Code": <TbBrandVscode className="text-blue-500 text-lg" />,
    Figma: <SiFigma className="text-pink-500 text-lg" />,
    Firebase: <SiFirebase className="text-yellow-400 text-lg" />,
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-slate-700
        bg-slate-900/60
        px-4
        py-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:-translate-y-1
        hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-cyan-400/5
          opacity-0
          transition
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex items-center justify-center">
          {icons[label]}
        </div>

        <span className="text-slate-200 text-sm font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}

export default SkillChip;