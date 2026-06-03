import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const skills = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "MongoDB Atlas",
  "Git & GitHub",
  "UI Development",
];

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A responsive shopping website with product browsing, cart flow, and modern UI patterns.",
    link: "https://github.com/mohana1810/E-commerce.git",
    tags: ["Frontend", "Shopping UI", "Responsive"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built to showcase projects, skills, and contact details with a clean presentation.",
    link: "https://github.com/mohana1810/FUTURE_FS_01.git",
    tags: ["Portfolio", "TanStack Start", "MongoDB"],
  },
];

const achievements = [
  "Built and deployed a full portfolio site from a generated project",
  "Connected the contact form to MongoDB Atlas",
  "Configured GitHub push and Vercel deployment flow",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Mohana Jarajapu — AIML Student & Full Stack Developer",
    meta: [
      {
        name: "description",
        content:
          "Portfolio of Mohana Jarajapu — Computer Science (AI-ML) student from Visakhapatnam building intelligent full-stack products.",
      },
      { property: "og:title", content: "Mohana Jarajapu — AIML & Full Stack Developer" },
      {
        property: "og:description",
        content: "Projects, skills, and journey of an AI-ML undergrad shipping real products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
});

function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/public/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-cyan-400"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-sm font-semibold tracking-wide text-white">
            Mohana Jarajapu
          </a>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                AIML Student • Full Stack Developer
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building clean, practical, and modern web experiences.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                I am Mohana Jarajapu, a Computer Science (AI-ML) student from Visakhapatnam.
                I like turning ideas into fast, responsive, and polished web apps with a strong
                focus on structure and usability.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Quick Profile</p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p><span className="text-slate-400">Name:</span> Mohana Jarajapu</p>
                  <p><span className="text-slate-400">Focus:</span> AI-ML + Full Stack</p>
                  <p><span className="text-slate-400">Location:</span> Visakhapatnam, India</p>
                  <p><span className="text-slate-400">Goal:</span> Build useful products people enjoy using</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">About</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            I enjoy building straightforward, well-structured interfaces and learning how the
            pieces fit together across design, frontend, and backend. This portfolio is my
            space to present the work I have built and the skills I am developing.
          </p>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm font-medium text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Open GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Achievements</h2>
          <div className="mt-8 grid gap-4">
            {achievements.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Send a message if you want to connect about projects, opportunities, or anything
                portfolio-related.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10"
            >
              <div className="grid gap-4">
                <input
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  required
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  type="email"
                  placeholder="Your email"
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  required
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Your message"
                  rows={5}
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-emerald-400">
                    Message sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Mohana Jarajapu. All rights reserved.
      </footer>
    </div>
  );
}