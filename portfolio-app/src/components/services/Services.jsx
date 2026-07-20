import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

function Services() {
  return (
    <section
      id="services"
      className="
      bg-slate-950
      py-32
      text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <ServicesHeader />

        <ServicesGrid />

      </div>
    </section>
  );
}

export default Services;