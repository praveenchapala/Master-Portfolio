import { useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../../data/navigation";
import site from "../../data/site";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          sticky
          top-0
          z-50
          bg-slate-900/80
          backdrop-blur-md
          border-b
          border-slate-800
          text-white
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            md:px-6
            py-4
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <a
            href="#home"
            className="
              text-xl
              md:text-2xl
              font-bold
              text-cyan-400
              font-mono
            "
          >
            {site.logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              md:hidden
              text-cyan-400
              hover:text-white
              transition
            "
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-slate-950/95
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="
            absolute
            top-6
            right-6
            text-cyan-400
            hover:text-white
            transition
          "
        >
          <X size={34} />
        </button>

        {/* Logo */}
        <div className="pt-10 text-center">
          <h2 className="text-2xl font-bold text-cyan-400 font-mono">
            {site.logo}
          </h2>
        </div>

        {/* Navigation */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            h-[70vh]
            gap-8
          "
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className="
                text-3xl
                font-semibold
                text-slate-300
                hover:text-cyan-400
                transition
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="text-slate-500 text-sm">
            Available for Opportunities
          </p>

          <div className="mt-5 flex justify-center gap-6">
            <a
              href="https://github.com/praveenchapala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/chapala-praveen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:praveenpraveensimhadri@gmail.com"
              className="text-cyan-400 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;