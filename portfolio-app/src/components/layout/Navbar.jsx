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
          py-3
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
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="
                text-slate-300
                hover:text-cyan-400
                transition-all
                duration-300
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            md:hidden
            text-cyan-400
          "
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            border-t
            border-slate-800
            bg-slate-900/95
            backdrop-blur-md
          "
        >
          <div
            className="
              flex
              flex-col
              px-5
              py-4
              gap-5
            "
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;