"use client";

import { motion } from "framer-motion";
import { Lens } from "./ui/lens";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const DIVISIONS = [
  {
    eyebrow: "Divisi 01",
    name: "Remix",
    tagline: "Suara baru dari lagu lama",
    description:
      "Ngolah ulang track jadi versi yang lebih segar — dari mashup, bootleg, sampai remix full produksi.",
    tags: ["Mashup", "Bootleg Remix", "Sound Design"],
    accent: "from-remix-from to-remix-to",
    accentSolidFrom: "#B026FF",
    accentSolidTo: "#FF2E92",
    members: [
      { id: 1, name: "Raka A.", designation: "Lead Remixer", image: "https://i.pravatar.cc/150?img=13" },
      { id: 2, name: "Dio P.", designation: "Sound Designer", image: "https://i.pravatar.cc/150?img=14" },
      { id: 3, name: "Fajar N.", designation: "Mix Engineer", image: "https://i.pravatar.cc/150?img=15" },
    ],
  },
  {
    eyebrow: "Divisi 02",
    name: "Creator",
    tagline: "Footage jadi cerita",
    description:
      "Nyusun potongan gambar jadi konten yang enak ditonton — editing rapi, transisi presisi, color grading konsisten.",
    tags: ["Video Editing", "Color Grading", "Motion Graphic"],
    accent: "from-creator-from to-creator-to",
    accentSolidFrom: "#00E5FF",
    accentSolidTo: "#3D5AFE",
    members: [
      { id: 1, name: "Bagas W.", designation: "Video Editor", image: "https://i.pravatar.cc/150?img=33" },
      { id: 2, name: "Yoga S.", designation: "Colorist", image: "https://i.pravatar.cc/150?img=51" },
      { id: 3, name: "Rian K.", designation: "Motion Designer", image: "https://i.pravatar.cc/150?img=52" },
    ],
  },
  {
    eyebrow: "Divisi 03",
    name: "Leadis",
    tagline: "Panggung buat kreator perempuan",
    description:
      "Wadah khusus kreator perempuan buat tampil, bikin konten, dan berkembang bareng dalam satu keluarga SOPAN TEAM.",
    tags: ["Content Creation", "Live & Showcase", "Personal Branding"],
    accent: "from-leadis-from to-leadis-to",
    accentSolidFrom: "#FFD166",
    accentSolidTo: "#FF6FB5",
    members: [
      { id: 1, name: "Sasa M.", designation: "Content Creator", image: "https://i.pravatar.cc/150?img=47" },
      { id: 2, name: "Nadia R.", designation: "Host & Showcase", image: "https://i.pravatar.cc/150?img=45" },
      { id: 3, name: "Vira L.", designation: "Personal Brand", image: "https://i.pravatar.cc/150?img=44" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function DivisionVisual({ division }) {
  return (
    <div
      className="relative h-60 w-full overflow-hidden rounded-lg"
      style={{
        background: `linear-gradient(135deg, ${division.accentSolidFrom}33, ${division.accentSolidTo}22), #0D0D14`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-50"
        style={{ background: division.accentSolidTo }}
      />
      <div
        className="absolute -top-10 -left-10 h-32 w-32 rounded-full blur-3xl opacity-40"
        style={{ background: division.accentSolidFrom }}
      />
      <span
        className={`absolute bottom-4 right-5 font-display text-6xl bg-gradient-to-r ${division.accent} bg-clip-text text-transparent select-none`}
      >
        {division.eyebrow.replace("Divisi ", "0")}
      </span>
    </div>
  );
}

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

        <div className="flex flex-wrap justify-center gap-6">
          {DIVISIONS.map((division, i) => (
            <motion.div
              key={division.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="max-w-md w-[22rem] shadow-none overflow-hidden">
                <CardHeader>
                  <Lens isStatic position={{ x: 150, y: 90 }}>
                    <DivisionVisual division={division} />
                  </Lens>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl">{division.name}</CardTitle>
                  <CardDescription>{division.description}</CardDescription>
                </CardContent>
                <CardFooter className="space-x-4">
                  <Button>Gabung Sekarang</Button>
                  <Button variant="secondary">Lihat Karya</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
