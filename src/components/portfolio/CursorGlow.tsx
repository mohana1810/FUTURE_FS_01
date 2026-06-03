import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setShown(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!shown) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed -z-0 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl transition-transform duration-200 ease-out"
      style={{
        transform: `translate3d(${pos.x - 200}px, ${pos.y - 200}px, 0)`,
        background: "radial-gradient(circle, color-mix(in oklab, var(--color-teal-4) 35%, transparent), transparent 60%)",
      }}
    />
  );
}
