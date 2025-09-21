import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FinalCTASection() {
  return (
    <section className="bg-primary/5 section-padding-y">
      <div className="container-padding-x container mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Tagline>Get Started</Tagline>
          <h2 className="heading-lg text-foreground">
            Stay Ahead With AI — Individually and as a Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're building your career or leading an industry, our AI Essentials Club gives you the tools, training, and confidence to succeed.
          </p>
        </div>
        
        <Button size="lg" className="text-lg px-8 py-4">
          👉 Get Started — Pick Your Plan
        </Button>
      </div>
    </section>
  );
}
