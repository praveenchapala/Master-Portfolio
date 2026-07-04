import { useEffect, useState } from "react";
import {
  FaPhone,
  FaPhoneSlash,
  FaPhoneAlt,
} from "react-icons/fa";

function CallCard() {
  const [connected, setConnected] =
    useState(false);

  const [seconds, setSeconds] =
    useState(0);

  // Ringing before connecting
  useEffect(() => {
    const timer = setTimeout(() => {
      setConnected(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Call duration timer
  useEffect(() => {
    if (!connected) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [connected]);

  return (
    <div
      className="
        mt-12
        rounded-[2rem]
        border
        border-cyan-500/30
        bg-slate-900/70
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(34,211,238,0.08)]
        p-10
        max-w-xl
        mx-auto
      "
    >
      {!connected ? (
        <>
          {/* Incoming Call */}
          <div className="text-center">
            <p
              className="
                text-cyan-400
                tracking-widest
                text-lg
              "
            >
              Incoming Call...
            </p>

            <p className="text-slate-500 mt-2">
              Ringing...
            </p>
          </div>

          {/* Caller */}
          <div className="text-center mt-8">
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-cyan-500/10
                mx-auto
                flex
                items-center
                justify-center
                text-cyan-400
                text-4xl
                animate-bounce
                shadow-[0_0_40px_rgba(34,211,238,0.5)]
              "
            >
              <FaPhone />
            </div>

            <h3
              className="
                text-3xl
                font-bold
                text-white
                mt-8
              "
            >
              Praveen Chapala
            </h3>

            <p
              className="
                text-slate-400
                text-xl
                mt-2
              "
            >
              +91 9014939196
            </p>
          </div>

          {/* Call Buttons */}
          <div
            className="
              flex
              justify-center
              gap-16
              mt-10
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-full
                bg-red-500
                flex
                items-center
                justify-center
                text-white
                shadow-lg
              "
            >
              <FaPhoneSlash />
            </div>

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-green-500
                flex
                items-center
                justify-center
                text-white
                animate-bounce
                shadow-lg
              "
            >
              <FaPhoneAlt />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Connected Screen */}
          <div className="text-center">
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-green-500/20
                mx-auto
                flex
                items-center
                justify-center
                text-green-400
                text-4xl
                animate-pulse
                shadow-[0_0_40px_rgba(34,197,94,0.5)]
              "
            >
              <FaPhoneAlt />
            </div>

            <p
              className="
                text-green-400
                text-2xl
                mt-6
                font-semibold
              "
            >
              Connected
            </p>

            <p
              className="
                text-slate-400
                mt-2
              "
            >
              00:
              {String(seconds).padStart(
                2,
                "0"
              )}
            </p>

            <p
              className="
                text-green-400
                text-sm
                mt-3
                animate-pulse
              "
            >
              ● Online
            </p>

            <a
              href="tel:+919014939196"
              className="
                text-5xl
                font-bold
                text-white
                mt-6
                block
                hover:text-cyan-400
                transition-all
                duration-300
              "
            >
              +91 9014939196
            </a>

            <p
              className="
                text-slate-400
                mt-6
              "
            >
              Currently Open to Opportunities
            </p>

            <div
              className="
                flex
                justify-center
                gap-3
                flex-wrap
                mt-6
              "
            >
              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                "
              >
                Software Engineer
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                "
              >
                QA Engineer
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                "
              >
                AI Automation
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CallCard;