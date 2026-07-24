import TerminalAbout from "./TerminalAbout";

function About() {
  return (
    <section
  id="about"
  className="
    bg-slate-950
    text-white
    py-16
md:py-20
  "
>
      <div
  className="
    max-w-6xl
    mx-auto
    px-5
    sm:px-6
    lg:px-8
  "
>
        <div
  className="
    text-center
    mb-10
  "
>
  <p
  className="
    text-cyan-400
    uppercase
    tracking-[0.25em]
    text-xs
    sm:text-sm
  "
>
    About Me
  </p>

  <h2
  className="
    mt-4
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-bold
  "
>
    The Human Behind The Code
  </h2>
</div>

        <TerminalAbout />
      </div>
    </section>
  );
}

export default About;