import navigation from "../../data/navigation";
import site from "../../data/site";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {site.logo}
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;