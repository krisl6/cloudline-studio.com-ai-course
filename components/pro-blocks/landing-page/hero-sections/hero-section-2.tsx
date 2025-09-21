"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";

export function HeroSection2() {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>AI Essentials Club</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl animate-fade-in-up">
              <span className="block md:hidden">💡 Master AI — Advance Your Career</span>
              <span className="hidden md:block">💡 Use AI Effectively — To Advance Your Career and Grow Your Business</span>
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg animate-fade-in-up animation-delay-200">
              <span className="block md:hidden">Get hired, promoted, and ahead with strategic AI training.</span>
              <span className="hidden md:block">Practical training for individuals who want better jobs and promotions — and for companies that want employees who stay ahead as industry leaders.</span>
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3 animate-fade-in-up animation-delay-300">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                <span className="block md:hidden">Career advancement with AI</span>
                <span className="hidden md:block">For Individuals: Career advancement through strategic AI use</span>
              </span>
            </div>

            <div className="flex items-start gap-3 animate-fade-in-up animation-delay-400">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                <span className="block md:hidden">Future-ready teams</span>
                <span className="hidden md:block">For Companies: Future-ready teams that drive industry leadership</span>
              </span>
            </div>

            <div className="flex items-start gap-3 animate-fade-in-up animation-delay-500">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                <span className="block md:hidden">Immediate results</span>
                <span className="hidden md:block">Practical training with immediate workplace application</span>
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up animation-delay-600">
            <Button className="hover:scale-105 transition-transform duration-200">👉 Get Started Today</Button>
            <Button variant="ghost" className="hover:scale-105 transition-transform duration-200">
              View Plans
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/Hero.png"
              alt="Hero visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
