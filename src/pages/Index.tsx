import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import FeaturesSection from "@/components/FeaturesSection";
import LivingWaterSection from "@/components/LivingWaterSection";
import TechnologySection from "@/components/TechnologySection";
import HealthDataSection from "@/components/HealthDataSection";
import CaseStudySection from "@/components/CaseStudySection";
import BenefitsSection from "@/components/BenefitsSection";
import SkinCareSection from "@/components/SkinCareSection";
import HowToUseSection from "@/components/HowToUseSection";
import SpecsSection from "@/components/SpecsSection";
import CertificationsSection from "@/components/CertificationsSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FocusSection />
      <FeaturesSection />
      <HealthDataSection />
      <CaseStudySection />
      <BenefitsSection />
      <LivingWaterSection />
      <TechnologySection />
      <SkinCareSection />
      <HowToUseSection />
      <SpecsSection />
      <CertificationsSection />
      <DisclaimerSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
