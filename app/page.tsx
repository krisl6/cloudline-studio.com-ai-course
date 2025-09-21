import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import { AIEssentialsTabs } from "@/components/pro-blocks/landing-page/tab-sections/ai-essentials-tabs";
import { HybridPricingSection } from "@/components/pro-blocks/landing-page/pricing-sections/hybrid-pricing-section";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { FinalCTASection } from "@/components/pro-blocks/landing-page/final-sections/final-cta-section";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <AIEssentialsTabs />
      <HybridPricingSection />
      <StatsSection4 />
      <FaqSection2 />
      <FinalCTASection />
      <Footer1 />
    </main>
  );
}
