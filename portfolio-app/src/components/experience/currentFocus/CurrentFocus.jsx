import FocusHeader from "./FocusHeader";
import FocusContent from "./FocusContent";
import TechStack from "./TechStack";
import FloatingGlow from "./FloatingGlow";

import { ArrowUpRight } from "lucide-react";

function CurrentFocus() {
  return (
    <section className="mt-28 md:mt-40">

      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-cyan-500/20
          bg-slate-900/60
          backdrop-blur-xl
          p-6
          md:p-12
          shadow-[0_0_60px_rgba(34,211,238,0.08)]
        "
      >
        <FloatingGlow />

        <div className="relative z-10">

          <FocusHeader />

          <div
            className="
              grid
              lg:grid-cols-2
              gap-14
              items-center
            "
          >

            {/* Left */}
            <div>

              <FocusContent />

              <div className="mt-10">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    px-5
                    py-3
                    bg-green-500/10
                    border
                    border-green-500/30
                    text-green-400
                    font-medium
                  "
                >
                  🟢 Available for Software Engineering Roles
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <TechStack />

              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-950/70
                  p-6
                "
              >

                <p className="text-cyan-400 font-semibold mb-4">
                  Current Mission
                </p>

                <p className="text-slate-300 leading-8">
                  Build scalable enterprise software,
                  AI automation platforms, and intelligent
                  systems that solve real-world business
                  problems while continuously improving
                  engineering skills.
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    text-cyan-400
                    font-medium
                  "
                >
                  Building Every Day

                  <ArrowUpRight
                    size={18}
                    className="ml-2"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CurrentFocus;