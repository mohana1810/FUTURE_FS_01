export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-3 opacity-40 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-teal-2 opacity-30 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-purple-4 opacity-30 blur-3xl animate-blob [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
    </div>
  );
}
