import { motion } from "framer-motion";
import { Trophy, Shield, Award, Atom, Eye, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import certDevfest from "../../assets/cert-devfest.jpeg";
import certWiser from "../../assets/cert-wiser.jpeg";
import certQuantum from "../../assets/cert-quantum.jpeg";
import certQuantumMerit from "../../assets/cert-quantum-merit.jpeg";
type Item = {
  icon: typeof Trophy;
  title: string;
  period: string;
  desc: string;
  cert?: string;
  certUrl?: string;
};

const items: Item[] = [
  {
    icon: Trophy,
    title: "Amaravati Quantum Valley Hackathon — Semi-final Winner",
    period: "GVPCE · 2025",
    desc: "Awarded the Certificate of Merit for winning the problem statement \"Quantum Path Planning for Delivery Vehicles\" at the regional semi-final.",
    cert: certQuantumMerit,
  },
  {
    icon: Atom,
    title: "Amaravati Quantum Valley Hackathon 2025 — Grand Finale",
    period: "Dhanekula IET · Feb 2026",
    desc: "Selected for the Grand Finale conducted by the AP State Council of Higher Education in Mangalagiri.",
    cert: certQuantum,
  },
  {
    icon: Award,
    title: "Quantum Fundamentals Program",
    period: "WISER · Qubitech · 2025-26",
    desc: "Completed the 4-week Quantum Fundamentals Program jointly run by Amaravati Quantum Valley, Qubitech & WISER — equivalent to 1 academic credit.",
    cert: certWiser,
  },
  {
    icon: Trophy,
    title: "Google DevFest Vizag 2025",
    period: "GDG Vizag · Nov 2025",
    desc: "Attended Google Developer Groups' flagship DevFest at GITAM University — sessions on AI, cloud and the latest Google developer tools.",
    cert: certDevfest,
  },
  {
    icon: Shield,
    title: "Cybersecurity Industrial Bootcamp",
    period: "DevTown",
    desc: "Hands-on training across network security, ethical hacking, and threat modeling — certified by DevTown.",
    certUrl: "https://cert.devtown.in/verify/ZvgCax",
  },
];

export function Achievements() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preview]);

  return (
    <Section
      id="achievements"
      eyebrow="Journey"
      title={<>Wins, <span className="gradient-text">milestones</span> & learning.</>}
      subtitle="A timeline of moments that have shaped my engineering path."
    >
      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-teal-4/60 via-purple-4/60 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className="ml-12 glass-card glow-ring rounded-2xl p-6 transition md:ml-0">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-3 to-purple-4 text-white">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-teal-4">{it.period}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                {it.cert && (
                  <button
                    onClick={() => setPreview({ src: it.cert!, title: it.title })}
                    className="mt-4 inline-flex items-center gap-2 rounded-full btn-ghost px-4 py-2 text-xs font-semibold"
                  >
                    <Eye className="h-3.5 w-3.5" /> View certificate
                  </button>
                )}
                {it.certUrl && (
                  <a
                    href={it.certUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full btn-ghost px-4 py-2 text-xs font-semibold"
                  >
                    <Eye className="h-3.5 w-3.5" /> Verify certificate
                  </a>
                )}
              </div>
              <div className="absolute left-5 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-teal-4 ring-4 ring-background md:left-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-background/85 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <button
              onClick={() => setPreview(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal-3 to-purple-4 text-white shadow-lg transition hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="glass-card rounded-2xl p-3">
              <img
                src={preview.src}
                alt={preview.title}
                className="h-auto max-h-[80vh] w-full rounded-xl object-contain"
              />
              <p className="px-2 py-3 text-center text-sm font-medium">{preview.title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
}
