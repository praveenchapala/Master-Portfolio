import CertificationsHeader from "./CertificationsHeader";
import SkillTree from "./SkillTree";

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
        <CertificationsHeader />

        <SkillTree />
      </div>
    </section>
  );
}

export default Certifications;