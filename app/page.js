import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import Footer from "@/components/Footer";

const navItems = [
  { name: "Tentang", link: "#tentang" },
  { name: "Divisi", link: "#divisi" },
];

export default function Home() {
  return (
    <main className="relative bg-base">
      <FloatingNav navItems={navItems} />
      <Hero />
      <AboutSection />
      <DivisionsSection />
      <ShowcaseSection />
      <Footer />
    </main>
  );
}
