"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
      >
        <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-ink-muted mb-2">
          Komunitas Kreator &middot; Est. Sekarang
        </p>
        <div className="font-display font-black uppercase text-5xl md:text-8xl text-ink text-center leading-[0.95]">
          Sopan Team
        </div>
        <div className="font-body font-light text-base md:text-2xl text-ink-muted py-4 max-w-xl">
          Tiga divisi, satu identitas. Kami meremix suara, mengedit gambar
          jadi cerita, dan memberi panggung buat kreator perempuan.
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="#divisi"
            className="bg-ink rounded-full w-fit text-base px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Lihat Divisi
          </a>
          <a
            href="#tentang"
            className="border border-white/15 rounded-full w-fit text-ink px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Tentang Kami
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
