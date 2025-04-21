import Header from "@/components/header";
import { HeroSection } from "@/components/sections/home-page/hero-section";
import { FeaturesSection } from "@/components/sections/home-page/features-section";
import { ServicesSection } from "@/components/sections/home-page/services-section";
import { PricingSection } from "@/components/sections/home-page/pricing-section";
import { ContactSection } from "@/components/sections/home-page/contact-section";
import { FooterSection } from "@/components/sections/home-page/footer-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        links={[
          { label: "Features", href: "#features" },
          { label: "Services", href: "#services" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ]}
        showNavbar
      />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
