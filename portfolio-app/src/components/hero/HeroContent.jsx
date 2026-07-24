import { useEffect, useState } from "react";
import profile from "../../data/profile";

function HeroContent() {
  const [currentRole, setCurrentRole] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % profile.roles.length);
        setVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        space-y-5
        text-left
      "
    >
      {/* Welcome */}

      <p
        className="
          text-cyan-400
          code-font
          text-sm
          sm:text-base
          md:text-lg
        "
      >
        Welcome to my digital playground 👋
      </p>

      {/* Name */}

      <div>
        <span
          className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-400
            code-font
            text-sm
          "
        >
          Hi, I'm
        </span>

        <h1
          className="
            mt-4
            font-bold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          <span className="gradient-text code-font">
            {profile.name}
          </span>
        </h1>
      </div>

      {/* Animated Role */}

      <div className="h-10 md:h-12 overflow-hidden">
        <h2
          className={`
            text-xl
            md:text-2xl
            lg:text-3xl
            font-semibold
            text-cyan-300
            transition-all
            duration-300
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }
          `}
        >
          {profile.roles[currentRole]}
        </h2>
      </div>

      {/* Description */}

      <p
        className="
          text-base
          md:text-lg
          text-slate-400
          leading-8
          max-w-xl
        "
      >
        {profile.tagline}
      </p>

      {/* Location */}

      <p
        className="
          text-sm
          md:text-base
          text-slate-500
        "
      >
        📍 {profile.location}
      </p>
    </div>
  );
}

export default HeroContent;