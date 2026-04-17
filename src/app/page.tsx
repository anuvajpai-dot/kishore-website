import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import InstagramSection from "@/components/sections/InstagramSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioPreview />
      <ServicesSection />
      <ReviewsSection />
      <InstagramSection />
      <CTASection />
    </>
  );
}
