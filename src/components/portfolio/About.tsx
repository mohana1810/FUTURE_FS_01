import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, GraduationCap, Sparkles, Code2, Brain } from "lucide-react";
import { Section } from "./Section";
import avatar from "../../assets/mohana-avatar.jpg";
export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Learning by <span className="gradient-text">building</span>. Growing by creating.</>}
      subtitle="Exploring AI, web development, and design while building projects that challenge me to learn something new every day."
    >
      {/* Bento grid */}
      <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-5 md:grid-cols-6">
        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl glass-card md:col-span-2 md:row-span-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-3/20 via-transparent to-purple-4/30 opacity-80" />
          <img
            src={avatar}
            alt="Portrait of Mohana Jarajapu"
            loading="lazy"
            className="relative h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-1/95 via-purple-1/70 to-transparent p-5">
            <p className="font-display text-lg font-semibold">Mohana Jarajapu</p>
            <p className="text-xs text-muted-foreground">AI-ML undergrad · Builder · Designer</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="https://github.com/mohana1810" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full glass p-2 transition hover:scale-110 hover:text-foreground hover:rotate-[360deg] duration-500">
                <Github className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.linkedin.com/in/mohanajarajapu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full glass p-2 transition hover:scale-110 hover:text-foreground hover:rotate-[360deg] duration-500">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="mailto:anier6180811@gmail.com" aria-label="Email" className="rounded-full glass p-2 transition hover:scale-110 hover:text-foreground hover:rotate-[360deg] duration-500">
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Intro card — wide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl glass-card glow-ring p-7 md:col-span-4"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-purple-4 to-teal-3 opacity-30 blur-3xl transition group-hover:opacity-60" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-glass px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-4">
              <Sparkles className="h-3 w-3" /> Hi, I'm Mohana 👋
            </span>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug md:text-[1.65rem]">
              An <span className="gradient-text">AIML undergraduate</span> who enjoys learning through building.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Whether it's an AI model, a web application, or a new design idea, I like exploring how things work and turning concepts into real projects.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Currently, I'm focused on AI, full-stack development, and UI/UX design. I enjoy solving problems, experimenting with new technologies, and creating experiences that are both useful and enjoyable to use.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              My goal is simple: keep learning, keep building, and create things that make a meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Focus card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl glass-card p-6 md:col-span-2"
        >
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-teal-3/40 opacity-40 blur-2xl transition group-hover:opacity-70" />
          <div className="relative">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-3 to-purple-4 text-white">
              <Brain className="h-5 w-5" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-teal-4">Currently</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Sharpening <span className="text-foreground">full-stack</span>, <span className="text-foreground">AI/ML</span>, and modern frontend — while shipping real projects.
            </p>
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl glass-card p-6 md:col-span-2"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-4/40 opacity-40 blur-2xl transition group-hover:opacity-70" />
          <div className="relative">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-4 to-lavender-1 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-teal-4">Education</p>
            <p className="mt-1 text-sm font-medium">B.Tech CSE (AI-ML)</p>
            <p className="text-xs text-muted-foreground">GVP College of Engineering for Women</p>
          </div>
        </motion.div>

        {/* Location card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.28 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl glass-card p-6 md:col-span-2"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-lavender-2/40 opacity-40 blur-2xl transition group-hover:opacity-70" />
          <div className="relative">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-lavender-1 to-teal-3 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-teal-4">Based in</p>
            <p className="mt-1 text-sm font-medium">Visakhapatnam, India</p>
            <p className="text-xs text-muted-foreground">Open to internships worldwide</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
