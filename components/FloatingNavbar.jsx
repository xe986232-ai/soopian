"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#divisi", label: "Divisi" },
  { href: "#gabung", label: "Gabung" },
];

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current;
    if (y < 80) {
      setHidden(false);
    } else if (diff > 4) {
      setHidden(true);
    } else if (diff < -4) {
      setHidden(false);
    }
    lastY.current = y;
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-120%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex items-center gap-1 rounded-full border border-white/10",
          "bg-base-elevated/70 backdrop-blur-xl px-2 py-2 shadow-[0_0_40px_-12px_rgba(176,38,255,0.4)]"
        )}
      >
        <a
          href="#top"
          className="font-display text-sm tracking-wide px-4 py-2 text-ink"
        >
          SOPAN
        </a>
        <div className="hidden sm:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors px-4 py-2 rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#gabung"
          className="ml-1 text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-remix-from to-remix-to text-white shadow-[0_0_20px_-4px_rgba(255,46,146,0.7)]"
        >
          Join
        </a>
      </nav>
    </motion.header>
  );
}
