import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";
import VisitStoreSection from "@/components/VisitStoreSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <AboutSection />
      <CustomerExperienceSection />
      <GallerySection />
      <VisitStoreSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
