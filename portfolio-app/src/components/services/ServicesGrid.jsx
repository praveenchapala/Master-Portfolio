import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function ServicesGrid() {
  return (
    <div className="space-y-8">

      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
        />
      ))}

    </div>
  );
}

export default ServicesGrid;