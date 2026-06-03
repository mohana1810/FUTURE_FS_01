import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "AI Insights Dashboard",
    tag: "AI · Data Viz",
    description:
      "Interactive Streamlit dashboard for monitoring metrics and surfacing data insights with real-time charts.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    accent: "from-teal-3 to-purple-4",
    repo: "https://github.com/mohana1810/ai_data_analysis_dashboard.git",
  },
  {
    title: "Online Shopping Website",
    tag: "Full Stack · DevOps",
    description:
      "Responsive e-commerce site with full CI/CD pipeline, containerized via Docker and deployed through Jenkins.",
    stack: ["HTML", "CSS", "JavaScript", "Docker", "Jenkins", "GitHub"],
    accent: "from-purple-4 to-teal-2",
    repo: "https://github.com/mohana1810/E-commerce.git",
  },
  {
    title: "Waste Management App",
    tag: "Full Stack · Impact",
    description:
      "Urban waste tracking & recycling platform with role-based dashboards and MongoDB-backed APIs.",
    stack: ["Node.js", "Express", "MongoDB", "JavaScript"],
    accent: "from-purple-3 to-lavender-1",
    repo: "https://github.com/mohana1810/cleancity.git",
  },
  {
    title: "Movie Review Sentiment Analysis",
    tag: "ML · NLP",
    description:
      "Naive Bayes classifier that scores movie reviews as positive/negative with a clean preprocessing pipeline.",
    stack: ["Python", "NLP", "Scikit-learn"],
    accent: "from-lavender-1 to-purple-4",
    repo: "https://github.com/mohana1810/movie-review-sentiment-classifier.git",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="gradient-text">designed & built</span>.</>}
      subtitle="Selected work spanning AI, full-stack web, and DevOps."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group glass-card glow-ring relative overflow-hidden rounded-2xl p-7 transition"
          >
            <div
              className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-3xl transition group-hover:opacity-50`}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-glass px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-4">
                  {p.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-glass px-2 py-0.5 text-[11px] font-medium text-lavender-3"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full btn-primary px-4 py-2 text-xs font-semibold"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
