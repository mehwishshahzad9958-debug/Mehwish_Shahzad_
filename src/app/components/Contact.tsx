"use client";

import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useState } from "react";
import { Send, Linkedin, Github, Mail, MapPin, CheckCircle } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));

    try {
      const response = await fetch("https://formsubmit.co/ajax/mehwishshahzad9958@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Message could not be sent. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block text-xs mb-3 tracking-widest uppercase" style={{ color: "#2979ff" }}>04 / Contact</span>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Let's Build Something <span style={{ background: "linear-gradient(135deg, #2979ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Together</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>
            Open to opportunities all over India.
          </p>
        </motion.div>

        {/* items-start prevents the form card from stretching to match the height of the info card */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="p-8 rounded-2xl border" style={{ background: "var(--glass)", borderColor: "var(--glass-border)", backdropFilter: "blur(16px)" }}>
              <h3 className="mb-8 font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>Get in Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "mehwishshahzad9958@gmail.com", href: "mailto:mehwishshahzad9958@gmail.com", color: "#2979ff" },
                  { icon: Linkedin, label: "LinkedIn", value: "mehwish-shahzad-engineer", href: "https://www.linkedin.com/in/mehwish-shahzad-engineer/", color: "#0a66c2" },
                  { icon: Github, label: "GitHub", value: "mehwishshahzad9958-debug", href: "https://github.com/mehwishshahzad9958-debug", color: "#7c3aed" },
                  { icon: MapPin, label: "Location", value: "Open to work all over India", href: null, color: "#00e5ff" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ background: `${item.color}10`, borderColor: `${item.color}30` }}>
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</p>
                      {item.href ? <a href={item.href} className="text-sm hover:underline">{item.value}</a> : <p className="text-sm">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            {submitted ? (
              <div className="p-8 rounded-2xl border flex flex-col items-center justify-center text-center" style={{ background: "var(--glass)", borderColor: "rgba(41, 121, 255, 0.3)" }}>
                <CheckCircle size={48} className="mb-4" style={{ color: "#22c55e" }} />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">Thanks for reaching out.</p>
              </div>
            ) : (
              // p-7 and rows={4} make the card feel more compact and balanced
              <form onSubmit={handleSubmit} className="p-7 rounded-2xl border" style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}>
                <div className="space-y-4">
                  <input name="name" required placeholder="e.g. Mehwish Shahzad" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" />
                  <input name="email" type="email" required placeholder="e.g. you@example.com" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" />
                  <textarea name="message" required placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border bg-transparent resize-none" />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button type="submit" disabled={sending} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-white transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #2979ff, #7c3aed)" }}>
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