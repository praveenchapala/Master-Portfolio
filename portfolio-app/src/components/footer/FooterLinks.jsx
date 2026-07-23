const links = [
  {
    title: "Quick Links",
    items: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Certifications", href: "#certifications" },
      { name: "Contact", href: "#contact" },
    ],
  },

  {
    title: "Resources",
    items: [
      {
        name: "Resume",
        href: "/resume/Praveen_Chapala_Resume.pdf",
        external: true,
      },
      {
        name: "GitHub",
        href: "https://github.com/praveenchapala",
        external: true,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/praveenchapala",
        external: true,
      },
    ],
  },
];

function FooterLinks() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-12
      "
    >
      {links.map((section) => (
        <div key={section.title}>
          <h3
            className="
              text-xl
              font-bold
              text-white
              mb-6
            "
          >
            {section.title}
          </h3>

          <ul className="space-y-4">
            {section.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={
                    item.external
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : ""
                  }
                  className="
                    text-slate-400
                    transition-all
                    duration-300
                    hover:text-cyan-400
                    hover:translate-x-2
                    inline-block
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;