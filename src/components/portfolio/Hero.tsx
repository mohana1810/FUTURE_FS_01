import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowDown, Download, Mail, Sparkles } from "lucide-react";

const roles = [
  "AIML Student",
  "Aspiring Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-teal-4 align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-teal-4" />
          Available for internships · Visakhapatnam, IN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Mohana <span className="gradient-text">Jarajapu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-xl font-medium md:text-2xl"
        >
          <Typer />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          Computer Science (AI-ML) student passionate about building intelligent and impactful digital solutions —
          from full-stack web apps to ML pipelines that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full btn-primary px-6 py-3 text-sm font-semibold">
            View Projects <ArrowDown className="h-4 w-4" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full btn-ghost px-6 py-3 text-sm font-semibold">
            <Download className="h-4 w-4" /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full btn-ghost px-6 py-3 text-sm font-semibold">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-4 text-muted-foreground"
        >
          <a href="https://github.com/mohana1810" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full glass p-2.5 transition duration-500 hover:text-foreground hover:scale-110 hover:rotate-[360deg]">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/mohanajarajapu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full glass p-2.5 transition duration-500 hover:text-foreground hover:scale-110 hover:rotate-[360deg]">
            <Linkedin className="h-4 w-4" />
          </a>
          <span className="text-xs">anier6180811@gmail.com</span>
        </motion.div>
      </div>
    </section>
  );
}
