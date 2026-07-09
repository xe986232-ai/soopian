export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-base" />
      <div
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full blur-[120px] opacity-40 animate-aurora-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(176,38,255,0.55) 0%, rgba(176,38,255,0) 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[60%] h-[60%] rounded-full blur-[120px] opacity-30 animate-aurora-drift"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.5) 0%, rgba(0,229,255,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[55%] h-[55%] rounded-full blur-[120px] opacity-30 animate-aurora-drift"
        style={{
          animationDelay: "-11s",
          background:
            "radial-gradient(circle, rgba(255,209,102,0.4) 0%, rgba(255,209,102,0) 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grain mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
    </div>
  );
}
