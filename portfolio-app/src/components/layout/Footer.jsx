function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/praveenchapala",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/praveenchapala",
    },
    {
      name: "Email",
      href: "mailto:praveenpraveensimhadri@gmail.com",
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              &lt;Praveen.Dev.QA.AI/&gt;
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              Software Engineer passionate about AI Engineering,
              Full Stack Development, Workflow Automation,
              Enterprise Applications, and building scalable
              software solutions.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Connect
            </h3>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 Praveen Chapala. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm mt-3 md:mt-0">
            Built with React • Vite • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;