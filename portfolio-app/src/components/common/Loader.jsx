import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        fixed
        inset-0
        bg-slate-950
        flex
        items-center
        justify-center
        z-[9999]
        px-6
      "
    >
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-5xl
            font-bold
            text-cyan-400
            drop-shadow-[0_0_20px_rgba(34,211,238,0.45)]
            break-words
          "
        >
          {"<Praveen.Dev.QA.AI/>"}
        </h1>

        {/* Icon */}
        <div
          className="
            mt-6
            text-3xl
            md:text-5xl
            animate-pulse
          "
        >
          ⚡
        </div>

        {/* Loading Text */}
        <p
          className="
            mt-6
            text-slate-400
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          Initializing Portfolio...
        </p>

        {/* Progress Bar */}
        <div
          className="
            mt-8
            w-full
            h-2.5
            bg-slate-800
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-sky-500
              to-blue-600
              transition-all
              duration-300
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Percentage */}
        <p
          className="
            mt-4
            text-cyan-400
            font-semibold
            text-sm
            md:text-base
          "
        >
          {progress}%
        </p>

      </div>
    </div>
  );
}

export default Loader;