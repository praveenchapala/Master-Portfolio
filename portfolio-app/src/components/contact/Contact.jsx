import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import SocialIcons from "./SocialIcons";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        py-20
        bg-slate-950
        text-white
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
        "
      >
        {/* Header */}

        <ContactHeader />

        {/* Contact Form */}

        <div className="mt-8">
          <ContactForm />
        </div>

        {/* Social Icons */}

        <div className="mt-10">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}

export default Contact;