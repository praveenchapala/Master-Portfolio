import { useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../../data/navigation";
import site from "../../data/site";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          sticky
          top-0
          z-50
          bg-slate-900/80
          backdrop-blur-xl
          border-b
          border-slate-800
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-5
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

          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
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
            "
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-slate-950
          transition-all
          duration-300
          overflow-y-auto
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            px-6
            py-6
            border-b
            border-slate-800
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-cyan-400
              font-mono
            "
          >
            {site.logo}
          </h2>

          <button
            onClick={closeMenu}
            className="
              text-cyan-400
            "
          >
            <X size={34} />
          </button>
        </div>

        {/* Navigation */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-8
            py-14
          "
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className="
                text-3xl
                font-bold
                text-slate-300
                hover:text-cyan-400
                transition
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Footer */}

        <div
          className="
            border-t
            border-slate-800
            mt-10
            px-6
            py-8
            text-center
          "
        >
          <p className="text-slate-500 mb-6">
            Open to Software Engineering Opportunities
          </p>

          <div className="flex justify-center gap-8">

            <a
              href="https://github.com/praveenchapala"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-cyan-400
                hover:text-white
                transition
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/chapala-praveen"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-cyan-400
                hover:text-white
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="mailto:praveenpraveensimhadri@gmail.com"
              className="
                text-cyan-400
                hover:text-white
                transition
              "
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