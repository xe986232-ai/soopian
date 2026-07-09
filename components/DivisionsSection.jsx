"use client";

import { motion } from "framer-motion";
import DivisionCard from "./DivisionCard";

const DIVISIONS = [
  {
    eyebrow: "Divisi 01",
    name: "Remix",
    tagline: "Suara baru dari lagu lama",
    description:
      "Ngolah ulang track jadi versi yang lebih segar — dari mashup, bootleg, sampai remix full produksi. Fokus di rasa musik, bukan cuma efek.",
    tags: ["Mashup", "Bootleg Remix", "Sound Design"],
    pattern: "equalizer",
    gradientFrom: "#B026FF",
    gradientTo: "#FF2E92",
  },
  {
    eyebrow: "Divisi 02",
    name: "Creator",
    tagline: "Footage jadi cerita",
    description:
      "Nyusun potongan gambar jadi konten yang enak ditonton — editing rapi, transisi presisi, dan color grading yang konsisten sama identitas tim.",
    tags: ["Video Editing", "Color Grading", "Motion Graphic"],
    pattern: "scanline",
    gradientFrom: "#00E5FF",
    gradientTo: "#3D5AFE",
  },
  {
    eyebrow: "Divisi 03",
    name: "Leadis",
    tagline: "Panggung buat kreator perempuan",
    description:
      "Wadah khusus kreator perempuan buat tampil, bikin konten, dan berkembang bareng — dengan identitas visual sendiri yang tetap satu keluarga sama SOPAN TEAM.",
    tags: ["Content Creation", "Live & Showcase", "Personal Branding"],
    pattern: "spotlight",
    gradientFrom: "#FFD166",
    gradientTo: "#FF6FB5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function DivisionsSection() {
  return (
    <section id="divisi" className="relative px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl mb-14"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-ink-muted">
            Tiga Divisi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-ink leading-tight">
            Satu tim, tiga cara berkarya
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((division, i) => (
            <motion.div
              key={division.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <DivisionCard {...division} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
