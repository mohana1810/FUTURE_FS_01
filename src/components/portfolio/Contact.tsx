import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      toast.error("Could not send your message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="gradient-text">something great</span>.</>}
      subtitle="Internships, collabs, or just a chat about AI — my inbox is open."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your idea..."
              className="w-full resize-none rounded-xl border border-border bg-glass px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-teal-4"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-5 inline-flex items-center gap-2 rounded-full btn-primary px-6 py-3 text-sm font-semibold disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : sent ? (
              <>
                <Check className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send message
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-7"
        >
          <h3 className="font-display text-xl font-semibold">Reach out directly</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Prefer something more direct? Drop me an email or ping me on any of the links below — I'd love to hear from you.
          </p>

          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <a href="mailto:anier6180811@gmail.com" className="flex items-center gap-3 rounded-xl glass p-3 transition hover:text-teal-4">
              <Mail className="h-4 w-4" /> <span>anier6180811@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl glass p-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> <span>Visakhapatnam, Andhra Pradesh</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="https://github.com/mohana1810" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full btn-ghost px-4 py-2 text-xs">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohanajarajapu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full btn-ghost px-4 py-2 text-xs">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-glass px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-teal-4"
      />
    </div>
  );
}
