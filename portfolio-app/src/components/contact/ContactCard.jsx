function ContactCard() {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "praveenpraveensimhadri@gmail.com",
      link: "mailto:praveenpraveensimhadri@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/chapala-praveen/",
      link: "https://www.linkedin.com/in/chapala-praveen/",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "https://github.com/praveenchapala",
      link: "https://github.com/praveenchapala",
    },
    {
      icon: "📄",
      label: "Resume",
      value: "Download Resume",
      link: "https://drive.google.com/file/d/1X03VDLoWsTI3qqbMImntKgYWSU7lMuw7/view?usp=sharing",
    },
  ];

  return (
    <div
      className="
        rounded-[2rem]
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-12
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        "
      >
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target={
              item.label === "Email"
                ? "_self"
                : "_blank"
            }
            rel="noreferrer"
            className="
              flex
              items-center
              gap-6
              p-8
              rounded-3xl
              bg-slate-950
              border
              border-slate-800
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-500
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
          >
            <div className="text-4xl">
              {item.icon}
            </div>

            <div>
              <p
                className="
                  text-slate-400
                  text-sm
                  mb-1
                "
              >
                {item.label}
              </p>

              <p
                className="
                  text-white
                  font-semibold
                  break-all
                "
              >
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;