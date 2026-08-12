import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";
import VisitStoreSection from "@/components/VisitStoreSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <CollectionsSection />
      <AboutSection />
      <CustomerExperienceSection />
      <VisitStoreSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
