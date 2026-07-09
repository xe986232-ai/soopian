import { SiteNavbar } from "@/components/ui/site-navbar";
import { AnnouncementBar } from "@/components/ui/announcement-bar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
<<<<<<< HEAD
import TestimonialSection from "@/components/TestimonialSection";
=======
>>>>>>> 4bae373ba614738f430cb8f815451e30ba5136aa
import Footer from "@/components/Footer";

const navItems = [
  { name: "Tentang", link: "#tentang" },
  { name: "Divisi", link: "#divisi" },
];

const mobileGroups = [
  {
    label: "Menu",
    items: [
      { name: "Beranda", link: "#top" },
      { name: "Tentang", link: "#tentang" },
      { name: "Divisi", link: "#divisi" },
      { name: "Karya", link: "#karya" },
    ],
  },
  {
    label: "Divisi Kami",
    items: [
      { name: "Remix", link: "#divisi" },
      { name: "Creator", link: "#divisi" },
      { name: "Leadis", link: "#divisi" },
    ],
  },
];

export default function Home() {
  return (
    <main id="top" className="relative bg-base">
      <AnnouncementBar href="#divisi">
        ✨ SOPAN TEAM buka rekrutmen member baru — gabung sekarang
      </AnnouncementBar>
      <SiteNavbar navItems={navItems} mobileGroups={mobileGroups} />
      <Hero />
      <AboutSection />
      <DivisionsSection />
      <ShowcaseSection />
<<<<<<< HEAD
      <TestimonialSection />
      <Footer />
    </main>
  );
}
=======
      <Footer />
    </main>
  );
}
>>>>>>> 4bae373ba614738f430cb8f815451e30ba5136aa
