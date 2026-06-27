import navigation from "../../data/navigation";
import site from "../../data/site";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
  href="#home"
  className="text-2xl font-bold text-cyan-400 font-mono"
>
  {site.logo}
</a>

        {/* Navigation Links */}
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
      </div>
    </nav>
  );
}

export default Navbar;