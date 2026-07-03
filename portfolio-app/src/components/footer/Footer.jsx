import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-800
        bg-slate-950
        text-white
        py-16
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}
        <h2
          className="
            text-4xl
            font-bold
            text-cyan-400
            mb-4
            drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
          "
        >
          {"<Praveen.Dev.QA.AI/>"}
        </h2>

        {/* Tagline */}
        <p
          className="
            text-xl
            text-slate-300
            mb-10
          "
        >
          Code. Automate. Innovate.
        </p>

        {/* Social Icons */}
        <div
          className="
            flex
            justify-center
            items-center
            gap-8
            mb-12
          "
        >
          <a
            href="https://github.com/praveenchapala"
            target="_blank"
            rel="noreferrer"
            className="
              text-slate-400
              text-3xl
              transition-all
              duration-300
              hover:text-cyan-400
              hover:scale-125
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/chapala-praveen/"
            target="_blank"
            rel="noreferrer"
            className="
              text-slate-400
              text-3xl
              transition-all
              duration-300
              hover:text-cyan-400
              hover:scale-125
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:praveenpraveensimhadri@gmail.com"
            className="
              text-slate-400
              text-3xl
              transition-all
              duration-300
              hover:text-cyan-400
              hover:scale-125
            "
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Currently Exploring */}
        <div className="mb-12">
          <p className="text-slate-400 mb-5">
            Currently Exploring
          </p>

          <div
            className="
              flex
              justify-center
              gap-4
              flex-wrap
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
                text-cyan-300
              "
            >
              Agentic AI
            </span>

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-300
              "
            >
              Automation
            </span>

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-300
              "
            >
              Quality Engineering
            </span>
          </div>
        </div>

        {/* Closing Quote */}
        <p
          className="
            text-slate-400
            italic
            mb-10
          "
        >
          Building intelligent systems, one idea at a time.
        </p>

        {/* Copyright */}
        <div
          className="
            border-t
            border-slate-800
            pt-8
          "
        >
          <p className="text-slate-500">
            © 2026 Praveen Chapala
          </p>

          <p className="text-slate-600 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;