"use client";

import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function RevealWords({ text, className }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span variants={wordVariant} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 pt-32 pb-20"
    >
      <AuroraBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-body text-sm sm:text-base tracking-[0.3em] uppercase text-ink-muted mb-6"
        >
          Komunitas Kreator &middot; Est. Sekarang
        </motion.p>

        <h1 className="font-display font-900 leading-[0.95] text-[13vw] sm:text-[7rem] lg:text-[8rem] uppercase text-ink">
          <RevealWords text="Sopan" className="block" />
          <RevealWords text="Team" className="block" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 max-w-xl text-lg text-ink-muted"
        >
          Tiga divisi, satu identitas. Kami meremix suara, mengedit gambar
          jadi cerita, dan memberi panggung buat kreator perempuan — semuanya
          di bawah satu nama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#divisi"
            className="px-6 py-3 rounded-full bg-ink text-base font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Lihat Divisi
          </a>
          <a
            href="#tentang"
            className="px-6 py-3 rounded-full border border-white/15 text-ink text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Tentang Kami
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim text-xs tracking-[0.3em] uppercase z-10"
      >
        Scroll
      </motion.div>
    </section>
  );
}
