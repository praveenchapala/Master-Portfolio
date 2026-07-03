import { Award, BookOpen, ExternalLink } from "lucide-react";

function LearningCard() {
  const handleViewCertificates = () => {
    window.open(
      "/certificates/Certificates.pdf",
      "_blank"
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="
          rounded-[2rem]
          border
          border-slate-800
          bg-slate-900/60
          backdrop-blur-xl
          p-12
          text-center
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
        "
      >
        <p
          className="
            text-cyan-400
            uppercase
            tracking-[0.4em]
            mb-6
          "
        >
          Continuous Learning
        </p>

        <h2
          className="
            text-5xl
            font-bold
            text-white
            mb-8
          "
        >
          Always Learning & Building
        </h2>

        <p
          className="
            text-slate-400
            text-xl
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Certifications are milestones in my
          learning journey. I continuously explore
          new technologies and strengthen my
          engineering skills through courses,
          projects and hands-on practice.
        </p>

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
            mt-16
            mb-16
          "
        >
          <div
            className="
              rounded-3xl
              bg-slate-950
              border
              border-slate-800
              p-8
            "
          >
            <Award
              className="
                text-cyan-400
                mx-auto
                mb-4
              "
              size={40}
            />

            <h3
              className="
                text-5xl
                font-bold
                text-white
              "
            >
              5+
            </h3>

            <p className="text-slate-400 mt-3">
              Certifications
            </p>
          </div>

          <div
            className="
              rounded-3xl
              bg-slate-950
              border
              border-slate-800
              p-8
            "
          >
            <BookOpen
              className="
                text-cyan-400
                mx-auto
                mb-4
              "
              size={40}
            />

            <h3
              className="
                text-5xl
                font-bold
                text-white
              "
            >
              5+
            </h3>

            <p className="text-slate-400 mt-3">
              Learning Platforms
            </p>
          </div>
        </div>

        <button
          onClick={handleViewCertificates}
          className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-cyan-500/20
            border
            border-cyan-500/30
            text-cyan-300
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-500/30
          "
        >
          View Certificates
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  );
}

export default LearningCard;