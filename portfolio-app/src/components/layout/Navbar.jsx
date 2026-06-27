import navigation from "../../data/navigation";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Praveen.dev
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-cyan-400 transition-colors"
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