import { SiteNavbar } from "@/components/ui/site-navbar";
import { AnnouncementBar } from "@/components/ui/announcement-bar";
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
    <main id="top" className="relative bg-base">
      <AnnouncementBar href="#divisi">
        ✨ SOPAN TEAM buka rekrutmen member baru — gabung sekarang
      </AnnouncementBar>
      <SiteNavbar navItems={navItems} />
      <Hero />
      <AboutSection />
      <DivisionsSection />
      <ShowcaseSection />
      <Footer />
    </main>
  );
}
