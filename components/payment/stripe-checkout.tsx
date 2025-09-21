"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Loader2 } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  stripePriceId: string;
  popular?: boolean;
}

const individualPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals starting their AI career journey.',
    price: 39,
    currency: 'USD',
    interval: 'month',
    stripePriceId: 'price_starter_monthly', // Replace with actual Stripe Price ID
    features: [
      'Monthly AI career masterclass',
      'Weekly AI hacks',
      'Access to career resource library'
    ]
  },
  {
    id: 'accelerator',
    name: 'Career Accelerator',
    description: 'For professionals ready to accelerate their career growth.',
    price: 59,
    currency: 'USD',
    interval: 'month',
    stripePriceId: 'price_accelerator_monthly', // Replace with actual Stripe Price ID
    popular: true,
    features: [
      'All Starter features',
      'Resume + job application with AI',
      'Presentation & communication with AI',
      'Community + quarterly AMA'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Growth Pack',
    description: 'For ambitious professionals targeting leadership roles.',
    price: 99,
    currency: 'USD',
    interval: 'month',
    stripePriceId: 'price_pro_monthly', // Replace with actual Stripe Price ID
    features: [
      'All Accelerator features',
      'Exclusive promotion toolkit',
      'Access to "AI for Leadership" sessions'
    ]
  }
];

const companyPlans: PricingPlan[] = [
  {
    id: 'team',
    name: 'Team Essentials',
    description: 'Up to 20 staff',
    price: 499,
    currency: 'USD',
    interval: 'month',
    stripePriceId: 'price_team_monthly', // Replace with actual Stripe Price ID
    features: [
      'Monthly AI productivity & safety masterclass',
      'Weekly toolkits for staff',
      'Corporate library + reporting'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Growth',
    description: 'Up to 100 staff',
    price: 1499,
    currency: 'USD',
    interval: 'month',
    stripePriceId: 'price_enterprise_monthly', // Replace with actual Stripe Price ID
    popular: true,
    features: [
      'Everything in Team Essentials',
      'Custom workshops by department',
      'Staff certification: AI Productivity & Safety 101',
      'Quarterly leadership Q&A sessions'
    ]
  }
];

interface StripeCheckoutProps {
  planType: 'individual' | 'company';
}

export function StripeCheckout({ planType }: StripeCheckoutProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const plans = planType === 'individual' ? individualPlans : companyPlans;

  const handleCheckout = async (plan: PricingPlan) => {
    setLoading(plan.id);
    
    try {
      // In a real implementation, you would:
      // 1. Call your backend API to create a Stripe Checkout Session
      // 2. Redirect to Stripe Checkout
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          planName: plan.name,
          planType: planType
        }),
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <Card 
          key={plan.id} 
          className={`relative p-6 rounded-xl ${
            plan.popular 
              ? 'ring-2 ring-primary shadow-lg' 
              : 'border'
          }`}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
          )}
          
          <CardHeader className="p-0 space-y-4">
            <div className="space-y-2">
              <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold">${plan.price}</span>
                <span className="text-muted-foreground text-sm">/{plan.interval}</span>
              </div>
              {planType === 'individual' && (
                <p className="text-xs text-muted-foreground">
                  {plan.price === 39 && '(RM99 / S$59)'}
                  {plan.price === 59 && '(RM149 / S$89)'}
                  {plan.price === 99 && '(RM249 / S$149)'}
                </p>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="p-0 space-y-6">
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full" 
              variant={plan.popular ? 'default' : 'outline'}
              onClick={() => handleCheckout(plan)}
              disabled={loading === plan.id}
            >
              {loading === plan.id ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Get Started'
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
