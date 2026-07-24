import CertificationHeader from "./CertificationHeader";
import CertificationGrid from "./CertificationGrid";

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
        <CertificationHeader />

        <CertificationGrid />
      </div>
    </section>
  );
}

export default Certifications;