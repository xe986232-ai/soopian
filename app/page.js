import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-base">
      <FloatingNavbar />
      <Hero />
      <AboutSection />
      <DivisionsSection />
      <Footer />
    </main>
  );
}
