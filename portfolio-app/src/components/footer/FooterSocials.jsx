import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function FooterSocials() {
  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/praveenchapala",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/chapala-praveen",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:praveenpraveensimhadri@gmail.com",
      label: "Email",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/",
      label: "Instagram",
    },
  ];

  return (
    <div>
      {/* Heading */}

      <h3
        className="
          text-xl
          font-bold
          text-white
          mb-6
        "
      >
        Let's Connect
      </h3>

      {/* Description */}

      <p
        className="
          text-slate-400
          leading-7
          mb-8
        "
      >
        I'm always open to discussing
        software engineering opportunities,
        collaborations, and innovative ideas.
      </p>

      {/* Social Icons */}

      <div className="flex gap-4 flex-wrap">

        {socials.map((item) => (

          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="
              group
              w-14
              h-14
              rounded-full
              border
              border-slate-800
              bg-slate-900
              flex
              items-center
              justify-center
              text-xl
              text-slate-400
              transition-all
              duration-300
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          >
            {item.icon}
          </a>

        ))}

      </div>

      

    </div>
  );
}

export default FooterSocials;