"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, CreditCard, Building, Info } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const pricingData = {
  monthlyPlans: [
    {
      name: "✨ Starter",
      description: "Perfect for individuals starting their AI career journey.",
      features: [
        "Monthly AI Career Masterclass → learn the exact tools that make you faster at work",
        "Weekly AI Hacks → save hours on reports, emails, and job applications",
        "Career Resource Library → templates, guides, and examples you can plug in immediately",
        "Future-proof your skills → never feel left behind when colleagues mention new AI tools",
        "Boost confidence at work → walk into meetings knowing how to use AI smarter"
      ],
      price: 39,
      currency: "$39/mo",
      stripePriceId: "price_starter_monthly",
      variant: "outline",
    },
    {
      name: "🚀 Career Accelerator",
      description: "For professionals ready to accelerate their career growth with AI.",
      features: [
        "Everything in Starter, plus:",
        "AI-Powered Resume & Job Applications → land more interviews with standout CVs and cover letters",
        "AI for Presentations & Communication → create slides, reports, and emails in half the time",
        "Quarterly AMA with Experts → get direct answers to your career and AI questions",
        "Networking Community → learn from peers applying AI across industries",
        "Career Edge → position yourself as the 'AI-smart' person in your workplace"
      ],
      price: 177,
      currency: "$177/mo",
      stripePriceId: "price_accelerator_monthly",
      variant: "default",
      popular: true,
    },
    {
      name: "🌟 Pro Growth Pack",
      description: "For ambitious professionals targeting leadership roles.",
      features: [
        "Everything in Career Accelerator, plus:",
        "Exclusive Promotion Toolkit → strategies & templates to show measurable impact at work",
        "'AI for Leadership' Sessions → learn to make data-driven decisions and lead AI-enabled teams",
        "Personal Growth Roadmap → track your progress toward promotions and leadership",
        "Executive-Level Skills → delegate smarter, present insights with authority, and inspire teams with AI",
        "Stay Irreplaceable → move from 'doer' to 'strategic leader' in your organization"
      ],
      price: 297,
      currency: "$297/mo",
      stripePriceId: "price_pro_monthly",
      variant: "outline",
    },
  ],
  annualPlans: [
    {
      name: "✨ Starter Annual",
      description: "Perfect for individuals - Save 25% with annual billing",
      features: [
        "Monthly AI Career Masterclass → learn the exact tools that make you faster at work",
        "Weekly AI Hacks → save hours on reports, emails, and job applications",
        "Career Resource Library → templates, guides, and examples you can plug in immediately",
        "Future-proof your skills → never feel left behind when colleagues mention new AI tools",
        "Boost confidence at work → walk into meetings knowing how to use AI smarter",
        "25% annual discount + zero processing fees"
      ],
      price: 351,
      originalPrice: 468,
      currency: "$351/year",
      savings: "Save $117",
      paymentMethod: "bank_transfer",
      variant: "outline",
    },
    {
      name: "🚀 Career Accelerator Annual",
      description: "Accelerate your growth - Save 25% with annual billing",
      features: [
        "Everything in Starter Annual, plus:",
        "AI-Powered Resume & Job Applications → land more interviews with standout CVs and cover letters",
        "AI for Presentations & Communication → create slides, reports, and emails in half the time",
        "Quarterly AMA with Experts → get direct answers to your career and AI questions",
        "Networking Community → learn from peers applying AI across industries",
        "Career Edge → position yourself as the 'AI-smart' person in your workplace",
        "25% annual discount + zero processing fees"
      ],
      price: 1593,
      originalPrice: 2124,
      currency: "$1,593/year",
      savings: "Save $531",
      paymentMethod: "bank_transfer",
      variant: "default",
      popular: true,
    },
    {
      name: "🌟 Pro Growth Annual",
      description: "Leadership development - Save 25% with annual billing",
      features: [
        "Everything in Career Accelerator Annual, plus:",
        "Exclusive Promotion Toolkit → strategies & templates to show measurable impact at work",
        "'AI for Leadership' Sessions → learn to make data-driven decisions and lead AI-enabled teams",
        "Personal Growth Roadmap → track your progress toward promotions and leadership",
        "Executive-Level Skills → delegate smarter, present insights with authority, and inspire teams with AI",
        "Stay Irreplaceable → move from 'doer' to 'strategic leader' in your organization",
        "25% annual discount + zero processing fees"
      ],
      price: 2673,
      originalPrice: 3564,
      currency: "$2,673/year",
      savings: "Save $891",
      paymentMethod: "bank_transfer",
      variant: "outline",
    },
  ],
};

export function HybridPricingSection() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleStripeCheckout = async (plan: any) => {
    setLoading(plan.name);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          planName: plan.name,
          planType: 'individual'
        })
      });
      
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment error. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  const handleBankTransfer = (plan: any) => {
    // Redirect to bank transfer instructions
    window.location.href = `/bank-transfer?plan=${encodeURIComponent(plan.name)}&amount=${plan.price}`;
  };

  return (
    <section className="bg-secondary section-padding-y border-b" id="pricing">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl">
            <Tagline>Pricing Plans</Tagline>
            <h2 className="heading-lg text-foreground">
              Choose Your AI Learning Journey
            </h2>
            <p className="text-muted-foreground">
              Start with monthly flexibility or save 25% with annual billing via bank transfer
            </p>
          </div>

          {/* Pricing Tabs */}
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                <TabsTrigger value="monthly" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annual" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Annual (25% Off)
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Monthly Plans */}
            <TabsContent value="monthly" className="space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Monthly Plans - Instant Access</h3>
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Pay with Stripe • 7-day free trial • Cancel anytime
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pricingData.monthlyPlans.map((plan) => (
                  <Card 
                    key={plan.name}
                    className={`relative p-6 rounded-xl animate-fade-in-up ${
                      plan.popular 
                        ? 'ring-2 ring-primary shadow-lg' 
                        : 'border hover:shadow-md transition-shadow'
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    
                    <CardContent className="p-0 space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p className="text-muted-foreground text-sm">{plan.description}</p>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-semibold">${plan.price}</span>
                          <span className="text-muted-foreground text-sm">/month</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          7-day free trial, then {plan.currency}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full hover:scale-105 transition-transform duration-200"
                        variant={plan.variant as any}
                        onClick={() => handleStripeCheckout(plan)}
                        disabled={loading === plan.name}
                      >
                        {loading === plan.name ? 'Processing...' : '🚀 Start Free Trial'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Annual Plans */}
            <TabsContent value="annual" className="space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Annual Plans - Save 25% with Zero Fees</h3>
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <Building className="w-4 h-4" />
                  Pay via bank transfer • No processing fees • Professional invoicing
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pricingData.annualPlans.map((plan) => (
                  <Card 
                    key={plan.name}
                    className={`relative p-6 rounded-xl animate-fade-in-up ${
                      plan.popular 
                        ? 'ring-2 ring-primary shadow-lg' 
                        : 'border hover:shadow-md transition-shadow'
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                        Best Value
                      </Badge>
                    )}
                    
                    <CardContent className="p-0 space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p className="text-muted-foreground text-sm">{plan.description}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-semibold">${plan.price}</span>
                          <span className="text-muted-foreground text-sm">/year</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm line-through text-muted-foreground">
                            ${plan.originalPrice}/year
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {plan.savings}
                          </Badge>
                        </div>
                        <p className="text-xs text-green-600 font-medium">
                          💰 Zero processing fees with bank transfer
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full hover:scale-105 transition-transform duration-200"
                        variant={plan.variant as any}
                        onClick={() => handleBankTransfer(plan)}
                      >
                        💳 Get Invoice & Bank Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-900">How Annual Payment Works</h4>
                    <div className="text-sm text-blue-800 space-y-1">
                      <p>1. Click "Get Invoice & Bank Details" above</p>
                      <p>2. Receive professional invoice with bank transfer instructions</p>
                      <p>3. Transfer payment to our business account (0% fees)</p>
                      <p>4. Get instant access within 24 hours of payment confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
