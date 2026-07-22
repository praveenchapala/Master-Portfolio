import { Send } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration comes next
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        max-w-4xl
        mx-auto
        rounded-[32px]
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-8
        md:p-10
        shadow-[0_0_40px_rgba(15,23,42,0.4)]
      "
    >
      {/* Name + Email */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block text-slate-300 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="
              w-full
              rounded-xl
              bg-slate-950
              border
              border-slate-700
              px-5
              py-4
              text-white
              outline-none
              transition
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
            "
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="
              w-full
              rounded-xl
              bg-slate-950
              border
              border-slate-700
              px-5
              py-4
              text-white
              outline-none
              transition
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
            "
          />
        </div>

      </div>

      {/* Subject */}

      <div className="mt-6">

        <label className="block text-slate-300 mb-2">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="Project, Opportunity, Collaboration..."
          className="
            w-full
            rounded-xl
            bg-slate-950
            border
            border-slate-700
            px-5
            py-4
            text-white
            outline-none
            transition
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />

      </div>

      {/* Message */}

      <div className="mt-6">

        <label className="block text-slate-300 mb-2">
          Message
        </label>

        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Write your message..."
          className="
            w-full
            rounded-xl
            bg-slate-950
            border
            border-slate-700
            px-5
            py-4
            text-white
            resize-none
            outline-none
            transition
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />

      </div>

      {/* Button */}

      <div className="mt-10 flex justify-center">

        <button
          type="submit"
          className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-cyan-500
            text-slate-950
            font-semibold
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:scale-105
            shadow-[0_0_30px_rgba(34,211,238,0.35)]
          "
        >
          Send Message

          <Send size={20} />

        </button>

      </div>

    </form>
  );
}

export default ContactForm;