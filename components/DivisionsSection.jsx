"use client";

import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const DIVISIONS = [
  {
    eyebrow: "Divisi 01",
    name: "Remix",
    tagline: "Suara baru dari lagu lama",
    description:
      "Ngolah ulang track jadi versi yang lebih segar — dari mashup, bootleg, sampai remix full produksi.",
    tags: ["Mashup", "Bootleg Remix", "Sound Design"],
    accent: "from-remix-from to-remix-to",
  },
  {
    eyebrow: "Divisi 02",
    name: "Creator",
    tagline: "Footage jadi cerita",
    description:
      "Nyusun potongan gambar jadi konten yang enak ditonton — editing rapi, transisi presisi, color grading konsisten.",
    tags: ["Video Editing", "Color Grading", "Motion Graphic"],
    accent: "from-creator-from to-creator-to",
  },
  {
    eyebrow: "Divisi 03",
    name: "Leadis",
    tagline: "Panggung buat kreator perempuan",
    description:
      "Wadah khusus kreator perempuan buat tampil, bikin konten, dan berkembang bareng dalam satu keluarga SOPAN TEAM.",
    tags: ["Content Creation", "Live & Showcase", "Personal Branding"],
    accent: "from-leadis-from to-leadis-to",
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
          className="max-w-2xl mb-4"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-ink-muted">
            Tiga Divisi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-ink leading-tight">
            Satu tim, tiga cara berkarya
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center">
          {DIVISIONS.map((division, i) => (
            <motion.div
              key={division.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-base-elevated relative group/card border border-white/10 w-auto sm:w-[22rem] h-auto rounded-xl p-6">
                  <CardItem
                    translateZ="50"
                    className={`text-xs tracking-[0.3em] uppercase font-medium bg-gradient-to-r ${division.accent} bg-clip-text text-transparent`}
                  >
                    {division.eyebrow}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    as="h3"
                    className="font-display text-4xl mt-3 text-ink"
                  >
                    {division.name}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    as="p"
                    className={`mt-1 text-sm font-medium bg-gradient-to-r ${division.accent} bg-clip-text text-transparent`}
                  >
                    {division.tagline}
                  </CardItem>
                  <CardItem translateZ="80" as="p" className="mt-4 text-ink-muted text-sm max-w-sm">
                    {division.description}
                  </CardItem>
                  <CardItem translateZ="40" className="flex flex-wrap gap-2 mt-5 w-full">
                    {division.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-ink-muted bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
