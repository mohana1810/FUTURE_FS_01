import { motion } from "framer-motion";
import { Code2, Globe, Brain, Wrench, Database } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "C++", "C", "JavaScript"],
  },
  {
    title: "Web",
    icon: Globe,
    items: ["React.js", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Jenkins"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The toolkit I use to <span className="gradient-text">build & ship</span>.</>}
      subtitle="Constantly learning, constantly leveling up."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: gi * 0.07 }}
            whileHover={{ y: -4 }}
            className="group glass-card glow-ring rounded-2xl p-6 transition"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-3 to-purple-4 text-white shadow-lg transition group-hover:scale-110">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                  whileHover={{ y: -3, scale: 1.06 }}
                  className="cursor-default rounded-full border border-border bg-glass px-3.5 py-1.5 text-xs font-medium text-lavender-3 transition hover:border-teal-4/60 hover:text-foreground hover:shadow-[0_0_20px_-4px_oklch(var(--teal-4)/0.5)]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
