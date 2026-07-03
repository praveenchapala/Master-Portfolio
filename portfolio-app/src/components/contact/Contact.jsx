import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <ContactHeader />

        <ContactCard />
      </div>
    </section>
  );
}

export default Contact;