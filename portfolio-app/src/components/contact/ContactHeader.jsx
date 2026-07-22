import contactData from "../../data/contactData";

function ContactHeader() {
  return (
    <div className="text-center mb-20">

      {/* Small Heading */}

      <p
        className="
          text-cyan-400
          uppercase
          tracking-[0.4em]
          text-sm
          font-semibold
          mb-4
        "
      >
        Contact
      </p>

      {/* Main Heading */}

      <h2
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-white
          leading-tight
        "
      >
        {contactData.title}
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-3xl
          mx-auto
          text-lg
          leading-8
          text-slate-400
        "
      >
        {contactData.subtitle}
      </p>

      {/* Divider */}

      <div
        className="
          w-28
          h-1
          bg-cyan-400
          rounded-full
          mx-auto
          mt-10
        "
      />
    </div>
  );
}

export default ContactHeader;