import LearningCard from "./LearningCard";

function Certifications() {
  return (
    <section
      id="certifications"
      className="
        py-32
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.4em]
              mb-4
            "
          >
            Certifications
          </p>

          <h2
            className="
              text-5xl
              font-bold
              text-white
            "
          >
            Continuous Learning Journey
          </h2>

          <p
            className="
              text-slate-400
              text-xl
              mt-6
              max-w-3xl
              mx-auto
            "
          >
            Always learning, experimenting, and
            building new skills through courses,
            projects, and hands-on practice.
          </p>
        </div>

        <LearningCard />
      </div>
    </section>
  );
}

export default Certifications;