function StatsBar() {
  return (
    <div
      className="
        mt-24
        grid
        md:grid-cols-4
        gap-8
        bg-slate-900/60
        border
        border-slate-800
        rounded-3xl
        p-8
      "
    >
      <div>
        <h3 className="text-5xl text-purple-400">
          25+
        </h3>

        <p className="text-slate-400">
          Technologies Learned
        </p>
      </div>

      <div>
        <h3 className="text-5xl text-cyan-400">
          15+
        </h3>

        <p className="text-slate-400">
          Projects Built
        </p>
      </div>

      <div>
        <h3 className="text-5xl text-yellow-400">
          50+
        </h3>

        <p className="text-slate-400">
          Automations Created
        </p>
      </div>

      <div>
        <h3 className="text-5xl text-green-400">
          3+
        </h3>

        <p className="text-slate-400">
          Internships Completed
        </p>
      </div>
    </div>
  );
}

export default StatsBar;