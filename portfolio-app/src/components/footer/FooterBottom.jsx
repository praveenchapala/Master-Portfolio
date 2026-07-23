import { ArrowUp } from "lucide-react";

function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Divider */}

      <div className="border-t border-slate-800 pt-10">

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          {/* Left */}

          <div className="text-center lg:text-left">

            <p className="text-slate-300 text-lg">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Praveen Chapala
              </span>
            </p>

            <p className="text-slate-500 mt-2">
              Designed & Developed with{" "}
              <span className="text-red-500 text-lg">
                ❤️
              </span>{" "}
              By Praveen
            </p>

          </div>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              border
              border-slate-700
              bg-slate-900
              text-slate-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
            "
          >
            Back to Top

            <ArrowUp
              size={18}
              className="group-hover:-translate-y-1 transition"
            />
          </button>

        </div>

      </div>
    </>
  );
}

export default FooterBottom;