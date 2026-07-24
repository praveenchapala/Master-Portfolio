import CertificationHeader from "./CertificationHeader";
import CertificationGrid from "./CertificationGrid";

function Certifications() {
  return (
    <section
      id="certifications"
      className="
        py-20
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}

        <CertificationHeader />

        {/* Certificates */}

        <div className="mt-8">
          <CertificationGrid />
        </div>
      </div>
    </section>
  );
}

export default Certifications;