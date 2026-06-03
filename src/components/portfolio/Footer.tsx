import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        {/* Left side */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-3 to-purple-4 text-sm font-bold text-white shadow-lg">
              MJ
            </div>
            <h3 className="text-xl font-semibold">Mohana Jarajapu</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-ML Student · Full Stack Enthusiast · Problem Solver
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
            <a
              href="https://www.linkedin.com/in/mohanajarajapu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <span className="text-muted-foreground/40">·</span>
            <a
              href="https://github.com/mohana1810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <span className="text-muted-foreground/40">·</span>
            <a
              href="mailto:anier6180811@gmail.com"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Visakhapatnam, India
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mohana Jarajapu.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
