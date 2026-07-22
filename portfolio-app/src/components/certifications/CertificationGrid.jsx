import certifications from "../../data/certifications";
import CertificationCard from "./CertificationCard";

function CertificationGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        mt-16
      "
    >
      {certifications.map((certificate) => (
        <CertificationCard
          key={certificate.id}
          {...certificate}
        />
      ))}
    </div>
  );
}

export default CertificationGrid;