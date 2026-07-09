"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const PATTERNS = {
  equalizer: EqualizerPattern,
  scanline: ScanlinePattern,
  spotlight: SpotlightPattern,
};

export default function DivisionCard({
  eyebrow,
  name,
  tagline,
  description,
  tags,
  pattern,
  gradientFrom,
  gradientTo,
  className,
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  }

  const Pattern = PATTERNS[pattern];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-base-elevated overflow-hidden",
        "p-8 sm:p-10 flex flex-col justify-between min-h-[420px]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-70">
        <Pattern hovered={hovered} x={x} y={y} from={gradientFrom} to={gradientTo} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-base-elevated via-base-elevated/40 to-base-elevated/10" />

      <div className="relative z-10">
        <span
          className="text-xs tracking-[0.3em] uppercase font-medium"
          style={{ color: gradientFrom }}
        >
          {eyebrow}
        </span>
        <h3 className="font-display text-4xl sm:text-5xl mt-3 text-ink">
          {name}
        </h3>
        <p
          className="mt-2 text-sm font-medium bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {tagline}
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <p className="text-ink-muted leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-ink-muted bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function EqualizerPattern({ hovered, from, to }) {
  const bars = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 flex items-end justify-around px-6 pb-6 gap-1">
      {bars.map((_, i) => (
        <span
          key={i}
          className="w-full rounded-full origin-bottom animate-eq-bar"
          style={{
            height: `${20 + ((i * 37) % 60)}%`,
            background: `linear-gradient(180deg, ${from}, ${to})`,
            opacity: hovered ? 0.9 : 0.35,
            animationDuration: `${0.7 + (i % 5) * 0.15}s`,
            animationDelay: `${(i % 7) * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

function ScanlinePattern({ hovered, from, to }) {
  const frames = Array.from({ length: 6 });
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 flex flex-col justify-between py-6">
        {frames.map((_, i) => (
          <div key={i} className="h-px w-full bg-white/10" />
        ))}
      </div>
      <div
        className="absolute inset-x-0 h-1/3 animate-scanline"
        style={{
          background: `linear-gradient(180deg, transparent, ${from}55, transparent)`,
          opacity: hovered ? 1 : 0.5,
        }}
      />
    </div>
  );
}

function SpotlightPattern({ hovered, x, y, from, to }) {
  const left = useTransform(x, (v) => `${v * 100}%`);
  const top = useTransform(y, (v) => `${v * 100}%`);
  return (
    <motion.div
      className="absolute w-[70%] aspect-square rounded-full blur-[70px]"
      style={{
        left,
        top,
        translateX: "-50%",
        translateY: "-50%",
        background: `radial-gradient(circle, ${from}66 0%, ${to}00 70%)`,
        opacity: hovered ? 0.9 : 0.45,
      }}
    />
  );
}
