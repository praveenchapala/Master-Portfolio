import TerminalAbout from "./TerminalAbout";

function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-slate-950
        text-white
        py-32
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
  <p className="text-cyan-400 uppercase tracking-[0.3em]">
    About Me
  </p>

  <h2 className="text-5xl font-bold mt-4">
    The Human Behind The Code
  </h2>
</div>

        <TerminalAbout />
      </div>
    </section>
  );
}

export default About;