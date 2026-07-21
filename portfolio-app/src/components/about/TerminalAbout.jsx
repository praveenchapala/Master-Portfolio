import aboutTerminal from "../../data/aboutTerminal";
import { TypeAnimation } from "react-type-animation";

function TerminalAbout() {
  return (
    <div
      className="
        bg-[#0D1117]
        border
        border-slate-800
        rounded-2xl
        md:rounded-3xl
        overflow-hidden
        shadow-2xl
      "
    >
      {/* Header */}
      <div
        className="
          bg-slate-900
          px-4
          sm:px-6
          py-3
          sm:py-4
          border-b
          border-slate-800
          flex
          items-center
          gap-3
        "
      >
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <p
          className="
            text-slate-400
            text-xs
            sm:text-sm
            ml-2
            sm:ml-4
            truncate
          "
        >
          about-me.sh
        </p>
      </div>

      {/* Terminal Body */}
      <div
        className="
          p-4
          sm:p-6
          md:p-8
          font-mono
        "
      >
        {/* ASCII Art - Desktop Only */}
        <pre
          className="
            hidden
            md:block
            text-cyan-400
            text-[10px]
            leading-tight
            mb-10
            overflow-hidden
          "
        >
{`
██████╗ ██████╗  █████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
██╔══██╗██╔══██╗██╔══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
██████╔╝██████╔╝███████║██║   ██║█████╗  █████╗  ██╔██╗ ██║
██╔═══╝ ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║╚██╗██║
██║     ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═══╝
`}
        </pre>

        {/* Commands */}
        {aboutTerminal.map((item, index) => (
          <div
            key={index}
            className="
              mb-5
              md:mb-8
              p-3
              md:p-4
              rounded-xl
              border
              border-transparent
              transition-all
              duration-300
              hover:bg-slate-900/70
              hover:border-cyan-500/20
              hover:shadow-lg
              hover:shadow-cyan-500/10
            "
          >
            {/* Command */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-1
                text-sm
                md:text-base
                break-all
              "
            >
              <span className="text-green-400">
                praveen
              </span>

              <span className="text-cyan-400">
                @portfolio
              </span>

              <span className="text-slate-300">
                :~$
              </span>

              <span className="text-white ml-2">
                {item.command}
              </span>
            </div>

            {/* Output */}
            <div
              className="
                ml-4
                md:ml-6
                mt-3
                text-slate-300
                text-sm
                md:text-base
                leading-7
                break-words
              "
            >
              <TypeAnimation
                sequence={[
                  item.output,
                  1000,
                ]}
                speed={60}
                cursor={false}
              />
            </div>
          </div>
        ))}

        {/* Cursor */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-1
            mt-6
            md:mt-10
            text-sm
            md:text-base
          "
        >
          <span className="text-green-400">
            praveen
          </span>

          <span className="text-cyan-400">
            @portfolio
          </span>

          <span className="text-slate-300">
            :~$
          </span>

          <span className="text-green-400 animate-pulse ml-2">
            █
          </span>
        </div>
      </div>
    </div>
  );
}

export default TerminalAbout;