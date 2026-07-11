import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    quote: "I had the pleasure of mentoring Mehwish in soft skills development... What stood out the most was her ability to apply these skills in real-life scenarios.",
    name: "Nupur Mehta Kapoor",
    role: "Image Consultant & Soft Skills Trainer | IPN Foundation"
  },
  {
    quote: "Mehwish brings a rare blend of technical expertise, research acumen, and leadership... I confidently recommend her for any opportunity.",
    name: "Priyanka Rahi Bhalla",
    role: "Professor & Researcher | Lloyd Institute of Engineering and Technology"
  }
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="testimonials" ref={ref} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-[var(--foreground)]">Words from my Mentors</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-[var(--glass)] border border-[var(--glass-border)]"
            >
              <p className="text-lg italic mb-8 text-[var(--foreground)]">"{t.quote}"</p>
              <div>
                <p className="font-bold text-[var(--foreground)]">{t.name}</p>
                <p className="text-sm text-[var(--muted-foreground)]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}