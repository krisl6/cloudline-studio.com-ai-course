"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";

const pricingData = {
  plans: [
    {
      name: "Starter",
      description:
        "Perfect for individuals starting their AI career journey.",
      features: [
        { name: "Monthly AI career masterclass", tooltip: "AI for resumes, job search, workflows" },
        {
          name: "Weekly AI hacks",
          tooltip: "Practical tools for work + personal productivity",
        },
        { name: "Access to career resource library", tooltip: "Templates and guides" },
      ],
      price: 39,
      period: "/month",
      variant: "outline",
      currency: "$39/mo (RM99 / S$59)",
    },
    {
      name: "Career Accelerator",
      description:
        "For professionals ready to accelerate their career growth with AI.",
      features: [
        { name: "All Starter features", tooltip: "Everything from the Starter plan" },
        { name: "Resume + job application with AI", tooltip: "Stand out in applications" },
        { name: "Presentation & communication with AI", tooltip: "Professional communication skills" },
        { name: "Community + quarterly AMA", tooltip: "Peer support and expert sessions" },
      ],
      price: 59,
      period: "/month",
      variant: "default",
      highlighted: true,
      currency: "$59/mo (RM149 / S$89)",
    },
    {
      name: "Pro Growth Pack",
      description:
        "For ambitious professionals targeting leadership roles.",
      features: [
        { name: "All Accelerator features", tooltip: "Everything from Career Accelerator" },
        { name: "Exclusive promotion toolkit", tooltip: "Strategy guides + case study templates" },
        { name: "Access to 'AI for Leadership' sessions", tooltip: "Leadership-focused AI training" },
      ],
      price: 99,
      period: "/month",
      variant: "outline",
      currency: "$99/mo (RM249 / S$149)",
    },
  ],
};

export function PricingSection3() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <Tagline>For Individuals</Tagline>
            {/* Main Title */}
            <h2
              id="pricing-section-title-3"
              className="heading-lg text-foreground"
            >
              Choose Your Career Growth Plan
            </h2>
          </div>

          {/* Three-Column Pricing Cards - Stacks on mobile */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:max-w-6xl">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-6 shadow-none sm:p-8 rounded-xl ${
                  plan.highlighted
                    ? "ring-2 ring-primary shadow-lg"
                    : "border"
                }`}
              >
                {/* Card Content Container */}
                <CardContent className="flex flex-col gap-8 p-0">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description Block */}
                    <div className="relative flex flex-col gap-3">
                      <h3
                        className={`text-lg font-semibold ${
                          plan.highlighted ? "text-primary" : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex flex-col gap-1">
                      <span className="text-4xl font-semibold">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.currency || `$${plan.price}${plan.period}`}
                      </span>
                    </div>

                    {/* Call-to-Action Button */}
                    <Button
                      variant={
                        plan.variant as VariantProps<
                          typeof buttonVariants
                        >["variant"]
                      }
                      className="w-full hover:scale-105 transition-transform duration-200"
                      onClick={() => {
                        // Create Stripe checkout session
                        fetch('/api/create-checkout-session', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            priceId: plan.name === 'Starter' ? 'price_starter_monthly' : 
                                    plan.name === 'Career Accelerator' ? 'price_accelerator_monthly' : 
                                    'price_pro_monthly',
                            planName: plan.name,
                            planType: 'individual'
                          })
                        })
                        .then(res => res.json())
                        .then(data => {
                          if (data.url) window.location.href = data.url;
                        })
                        .catch(err => console.error('Payment error:', err));
                      }}
                    >
                      🚀 Start Free Trial
                    </Button>
                  </div>

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header with Plan Inheritance */}
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${
                            pricingData.plans[index - 1].name
                          }, plus:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="text-primary h-5 w-5" />
                          <span className="text-muted-foreground flex-1 text-sm">
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="text-muted-foreground h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
