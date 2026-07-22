import contactData from "../../data/contactData";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function SocialIcons() {
  const socials = [
    {
      icon: <FaGithub size={22} />,
      link: contactData.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={22} />,
      link: contactData.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope size={22} />,
      link: `mailto:${contactData.email}`,
      label: "Email",
    },
    {
      icon: <FaMapMarkerAlt size={22} />,
      link: "#",
      label: contactData.location,
    },
  ];

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-5 flex-wrap justify-center">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            title={item.label}
            className="
              w-14
              h-14
              rounded-full
              border
              border-slate-700
              bg-slate-900/70
              flex
              items-center
              justify-center
              text-slate-400
              transition-all
              duration-300
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
            "
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;