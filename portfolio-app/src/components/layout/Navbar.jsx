import { useState } from "react";
import { Menu, X } from "lucide-react";

import navigation from "../../data/navigation";
import site from "../../data/site";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className="
          sticky
          top-0
          z-50
          backdrop-blur-xl
          border-b
        "
        style={{
          background: "color-mix(in srgb, var(--surface) 80%, transparent)",
          borderColor: "var(--border)",
        }}
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
              font-mono
            "
            style={{
              color: "var(--accent)",
            }}
          >
            {site.logo}
          </a>

          {/* Desktop Navigation */}

          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="transition duration-300"
                style={{
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--muted)";
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden transition"
            style={{
              color: "var(--accent)",
            }}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          fixed
          inset-0
          z-[999]
          transition-all
          duration-300
          overflow-y-auto
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
        style={{
          background: "var(--bg)",
        }}
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
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <h2
            className="
              text-2xl
              font-bold
              font-mono
            "
            style={{
              color: "var(--accent)",
            }}
          >
            {site.logo}
          </h2>

          <button
            onClick={closeMenu}
            style={{
              color: "var(--accent)",
            }}
          >
            <X size={34} />
          </button>
        </div>

        {/* Mobile Navigation */}

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
                transition
              "
              style={{
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--muted)";
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Footer */}

        <div
          className="
            mt-10
            px-6
            py-8
            text-center
            border-t
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <p
            className="mb-6"
            style={{
              color: "var(--muted)",
            }}
          >
            Open to Software Engineering Opportunities
          </p>

          <div className="flex justify-center gap-8">

            <a
              href="https://github.com/praveenchapala"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{
                color: "var(--accent)",
              }}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/chapala-praveen"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{
                color: "var(--accent)",
              }}
            >
              LinkedIn
            </a>

            <a
              href="mailto:praveenpraveensimhadri@gmail.com"
              className="transition"
              style={{
                color: "var(--accent)",
              }}
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