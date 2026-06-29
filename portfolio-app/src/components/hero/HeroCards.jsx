function HeroCards() {
  return (
    <>
      <div className="absolute top-10 -left-10 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <p className="text-green-400 font-semibold">
          🟢 Open to Work
        </p>
      </div>

      <div className="absolute bottom-24 -left-20 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <p className="text-cyan-400 font-semibold">
          🤖 Building Agentic AI Systems
        </p>
      </div>

      <div className="absolute top-52 -right-10 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <p className="text-purple-400 font-semibold">
          🚀 15+ Projects Built
        </p>
      </div>
    </>
  );
}

export default HeroCards;