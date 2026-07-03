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
      "
    >
      <div className="text-center">
        {/* Logo */}
        <h1
          className="
            text-5xl
            font-bold
            text-cyan-400
            mb-8
            drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
          "
        >
          {"<Praveen.Dev.QA.AI/>"}
        </h1>

        {/* Text */}
        <p
          className="
            text-slate-400
            text-xl
            mb-8
          "
        >
          Initializing Portfolio...
        </p>

        {/* Progress Bar */}
        <div
          className="
            w-80
            h-3
            bg-slate-800
            rounded-full
            overflow-hidden
            mx-auto
          "
        >
          <div
            className="
              h-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
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
          "
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}

export default Loader;