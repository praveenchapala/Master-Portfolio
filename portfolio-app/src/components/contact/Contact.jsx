import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import SocialIcons from "./SocialIcons";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        py-32
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
        {/* Heading */}

        <ContactHeader />

        {/* Contact Form */}

        <ContactForm />

        {/* Social Icons */}

        <SocialIcons />

        {/* Bottom Quote */}

        <div className="mt-24 text-center">

          <div
            className="
              w-24
              h-px
              bg-slate-700
              mx-auto
              mb-10
            "
          />

          <p
            className="
              text-3xl
              md:text-4xl
              italic
              text-slate-300
            "
          >
            Great software begins with
            <span className="text-cyan-400">
              {" "}great conversations.
            </span>
          </p>

          <p
            className="
              mt-5
              text-slate-500
              text-lg
            "
          >
            Let's build something impactful together.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;