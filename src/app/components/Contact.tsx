import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useState } from "react";
import { Send, Linkedin, Github, Mail, MapPin, CheckCircle } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs mb-3 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}
          >
            04 / Contact
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
<<<<<<< HEAD
              color: "#e8eaf6",
=======
              color: "var(--foreground)",
>>>>>>> main
            }}
          >
            Let's Build Something{" "}
            <span style={{ background: "linear-gradient(135deg, #2979ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Together
            </span>
          </h2>
<<<<<<< HEAD
          <p className="max-w-xl mx-auto text-sm" style={{ color: "#8892b0", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
=======
          <p className="max-w-xl mx-auto text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
>>>>>>> main
            Open to project coordination, data analyst, and AI-powered product operations opportunities all over India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="p-8 rounded-2xl border h-full"
              style={{
                background: "var(--glass)",
                borderColor: "var(--glass-border)",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3
                className="mb-6"
<<<<<<< HEAD
                style={{ fontFamily: "var(--font-display)", color: "#e8eaf6", fontWeight: 700, fontSize: "1.25rem" }}
=======
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 700, fontSize: "1.25rem" }}
>>>>>>> main
              >
                Get in Touch
              </h3>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Mail, label: "Email", value: "mehwishshahzad9958@gmail.com", href: "mailto:mehwishshahzad9958@gmail.com", color: "#2979ff" },
                  { icon: Linkedin, label: "LinkedIn", value: "mehwish-shahzad-engineer", href: "https://www.linkedin.com/in/mehwish-shahzad-engineer/", color: "#0a66c2" },
                  { icon: Github, label: "GitHub", value: "mehwishshahzad9958-debug", href: "https://github.com/mehwishshahzad9958-debug", color: "#7c3aed" },
                  { icon: MapPin, label: "Location", value: "Open to work all over India", href: null, color: "#00e5ff" },
                ].map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
<<<<<<< HEAD
                      <p className="text-xs mb-0.5" style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}>
=======
                      <p className="text-xs mb-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}>
>>>>>>> main
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          className="text-sm hover:underline"
<<<<<<< HEAD
                          style={{ fontFamily: "var(--font-body)", color: "#ccd6f6" }}
=======
                          style={{ fontFamily: "var(--font-body)", color: "var(--foreground)" }}
>>>>>>> main
                        >
                          {value}
                        </a>
                      ) : (
<<<<<<< HEAD
                        <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#ccd6f6" }}>
=======
                        <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--foreground)" }}>
>>>>>>> main
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="p-4 rounded-xl border"
                style={{ background: "rgba(41, 121, 255, 0.05)", borderColor: "rgba(41, 121, 255, 0.2)" }}
              >
                <p className="text-xs mb-1" style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}>
                  Availability
                </p>
<<<<<<< HEAD
                <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#8892b0" }}>
=======
                <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--muted-foreground)" }}>
>>>>>>> main
                  Open to project coordination, data analyst, and AI-powered product operations roles all over India. Response within{" "}
                  <span style={{ color: "#4f9aff" }}>24 hours</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <div
                className="p-8 rounded-2xl border h-full flex flex-col items-center justify-center text-center"
                style={{ background: "var(--glass)", borderColor: "rgba(41, 121, 255, 0.3)", backdropFilter: "blur(16px)" }}
              >
                <CheckCircle size={48} className="mb-4" style={{ color: "#22c55e" }} />
                <h3
                  className="mb-2"
<<<<<<< HEAD
                  style={{ fontFamily: "var(--font-display)", color: "#e8eaf6", fontWeight: 700, fontSize: "1.25rem" }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "#8892b0", fontFamily: "var(--font-body)" }}>
=======
                  style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 700, fontSize: "1.25rem" }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
>>>>>>> main
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border h-full"
                style={{ background: "var(--glass)", borderColor: "var(--glass-border)", backdropFilter: "blur(16px)" }}
              >
                <div className="space-y-5">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Mehwish Shahzad" },
                    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label
                        className="block text-xs mb-2"
<<<<<<< HEAD
                        style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}
=======
                        style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}
>>>>>>> main
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={(form as Record<string, string>)[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-primary"
                        style={{
<<<<<<< HEAD
                          background: "#111633",
                          borderColor: "var(--glass-border)",
                          color: "#e8eaf6",
=======
                          background: "var(--input)",
                          borderColor: "var(--glass-border)",
                          color: "var(--foreground)",
>>>>>>> main
                          fontFamily: "var(--font-body)",
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      className="block text-xs mb-2"
<<<<<<< HEAD
                      style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}
=======
                      style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}
>>>>>>> main
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-primary resize-none"
                      style={{
<<<<<<< HEAD
                        background: "#111633",
                        borderColor: "var(--glass-border)",
                        color: "#e8eaf6",
=======
                        background: "var(--input)",
                        borderColor: "var(--glass-border)",
                        color: "var(--foreground)",
>>>>>>> main
                        fontFamily: "var(--font-body)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: "var(--font-body)",
                      background: "linear-gradient(135deg, #2979ff, #7c3aed)",
                      color: "#fff",
                      boxShadow: "0 0 30px rgba(41, 121, 255, 0.3)",
                    }}
                  >
                    <Send size={15} />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}