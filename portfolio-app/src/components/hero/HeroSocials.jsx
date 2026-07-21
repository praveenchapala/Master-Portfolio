import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function HeroSocials() {
  const socials = [
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/praveenchapala",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      link: "https://linkedin.com/in/chapala-praveen",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope size={20} />,
      link: "mailto:praveenpraveensimhadri@gmail.com",
      label: "Email",
    },
    {
      icon: <SiLeetcode size={20} />,
      link: "https://leetcode.com/",
      label: "LeetCode",
    },
  ];

  return (
    <div className="mt-10">
      <p
        className="
          text-slate-500
          text-sm
          uppercase
          tracking-[0.25em]
          mb-5
        "
      >
        Connect With Me
      </p>

      <div className="flex flex-wrap gap-4">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/60
              backdrop-blur-xl
              px-5
              py-3
              transition-all
              duration-300
              hover:border-cyan-400
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
            "
          >
            <span className="text-cyan-400">
              {item.icon}
            </span>

            <span className="text-slate-300 group-hover:text-white">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeroSocials;