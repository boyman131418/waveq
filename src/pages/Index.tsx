import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LivingWaterSection from "@/components/LivingWaterSection";
import TechnologySection from "@/components/TechnologySection";
import HealthDataSection from "@/components/HealthDataSection";
import BenefitsSection from "@/components/BenefitsSection";
import SkinCareSection from "@/components/SkinCareSection";
import HowToUseSection from "@/components/HowToUseSection";
import SpecsSection from "@/components/SpecsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LivingWaterSection />
      <TechnologySection />
      <HealthDataSection />
      <BenefitsSection />
      <SkinCareSection />
      <HowToUseSection />
      <SpecsSection />
      <CertificationsSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
