import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Send, Loader2 } from "lucide-react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Validation
    if (form.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (form.subject.trim().length < 5) {
      toast.error("Subject must be at least 5 characters.");
      return;
    }

    if (form.message.trim().length < 20) {
      toast.error("Message must be at least 20 characters.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        "Message sent successfully! I'll get back to you soon."
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-[32px]
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-8
        md:p-10
        space-y-6
      "
    >
      {/* Name */}

      <div>
        <label className="block text-slate-300 mb-2">
          Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
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
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Email */}

      <div>
        <label className="block text-slate-300 mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
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
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Subject */}

      <div>
        <label className="block text-slate-300 mb-2">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project, Job Opportunity..."
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
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Message */}

      <div>
        <label className="block text-slate-300 mb-2">
          Message
        </label>

        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
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
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Submit Button */}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          py-4
          rounded-full
          bg-cyan-500
          text-slate-950
          font-semibold
          flex
          justify-center
          items-center
          gap-3
          transition-all
          duration-300
          hover:bg-cyan-400
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      >
        {loading ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;