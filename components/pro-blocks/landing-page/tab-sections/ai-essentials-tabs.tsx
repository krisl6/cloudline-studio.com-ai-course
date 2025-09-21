"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Users, Building, TrendingUp, Clock, Bot, Rocket, BarChart3, Shield, Award } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function AIEssentialsTabs() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <Tabs defaultValue="individuals" className="w-full">
          {/* Tab Switcher */}
          <div className="flex flex-col items-center gap-8 mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger value="individuals" className="text-sm font-medium">
                For Individuals
              </TabsTrigger>
              <TabsTrigger value="companies" className="text-sm font-medium">
                For Companies
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content for Individuals */}
          <TabsContent value="individuals" className="space-y-16">
            {/* Pain Point Section - Individuals */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Tagline>The Challenge</Tagline>
                <h2 className="heading-lg text-foreground">
                  The Career Challenge: Falling Behind in the AI Era
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      📉 Professionals risk losing out on promotions by not knowing how to leverage AI.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      ⏳ Job seekers spend hours applying — without using AI tools to stand out.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      🤖 Most people use AI casually, not strategically — missing out on efficiency and better results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      🚀 Those who master AI become the top candidates for growth and leadership roles.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We help you get hired, get promoted, and get ahead — by using AI effectively in your work and personal life.
              </p>
            </div>

            {/* How It Works - Individuals */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Tagline>How It Works</Tagline>
                <h2 className="heading-lg text-foreground">
                  Your Path to AI-Powered Career Success
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Monthly Career Masterclass</h3>
                    <p className="text-muted-foreground">
                      AI for resumes, job search, workflows, and productivity.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Weekly AI Hacks</h3>
                    <p className="text-muted-foreground">
                      Practical tools for faster reports, better presentations, smarter communication.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Career Library + Community</h3>
                    <p className="text-muted-foreground">
                      Templates, guides, and a peer group to support your growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Proof - Individuals */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-8">What Our Members Say</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <CardContent className="space-y-4 p-0">
                    <p className="text-foreground font-medium">
                      "I landed 3 interviews in one week by using AI to upgrade my CV."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6">
                  <CardContent className="space-y-4 p-0">
                    <p className="text-foreground font-medium">
                      "My manager noticed I deliver reports twice as fast — I got promoted this quarter."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6">
                  <CardContent className="space-y-4 p-0">
                    <p className="text-foreground font-medium">
                      "Finally a practical way to use AI at work, not just gimmicks."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA - Individuals */}
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-4">
                🚀 Join the Career Growth Club Today
              </Button>
            </div>
          </TabsContent>

          {/* Tab Content for Companies */}
          <TabsContent value="companies" className="space-y-16">
            {/* Pain Point Section - Companies */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Tagline>The Challenge</Tagline>
                <h2 className="heading-lg text-foreground">
                  The Leadership Challenge: Growing Employees to Stay Ahead
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      🏢 Companies risk falling behind when employees don't know how to use AI effectively.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      📉 AI tools are purchased, but adoption is poor — ROI remains low.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      🚨 Untrained staff expose companies to phishing, scams, and AI-related risks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground">
                      🚀 To be seen as thought leaders, companies need future-ready teams with ongoing AI skills.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We help your employees grow with AI, so your company stays ahead — productive, safe, and respected as an industry leader.
              </p>
            </div>

            {/* How It Works - Companies */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Tagline>How It Works</Tagline>
                <h2 className="heading-lg text-foreground">
                  Transform Your Workforce with AI
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Monthly Corporate Masterclass</h3>
                    <p className="text-muted-foreground">
                      AI for productivity, reporting, presentations, and workflows.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Weekly Staff Toolkits</h3>
                    <p className="text-muted-foreground">
                      Bite-size video guides and scam-prevention updates.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Corporate Portal + Analytics</h3>
                    <p className="text-muted-foreground">
                      Resource library + engagement reports for HR and managers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Company Packages */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Tagline>For Companies</Tagline>
                <h2 className="heading-lg text-foreground">
                  Choose Your Corporate Plan
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="p-6 rounded-xl border">
                  <CardContent className="space-y-6 p-0">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Team Essentials</h3>
                      <p className="text-muted-foreground text-sm">Up to 20 staff</p>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-3xl font-semibold">$499</span>
                      <span className="text-muted-foreground text-sm">/month</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Monthly AI productivity & safety masterclass</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Weekly toolkits for staff</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Corporate library + reporting</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
                
                <Card className="p-6 rounded-xl ring-2 ring-primary shadow-lg">
                  <CardContent className="space-y-6 p-0">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Enterprise Growth</h3>
                      <p className="text-muted-foreground text-sm">Up to 100 staff</p>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-3xl font-semibold">$1,499</span>
                      <span className="text-muted-foreground text-sm">/month</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Everything in Team Essentials</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Custom workshops by department</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Staff certification: AI Productivity & Safety 101</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Quarterly leadership Q&A sessions</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
                
                <Card className="p-6 rounded-xl border">
                  <CardContent className="space-y-6 p-0">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Custom Program</h3>
                      <p className="text-muted-foreground text-sm">Enterprise solution</p>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-3xl font-semibold">Quote</span>
                      <span className="text-muted-foreground text-sm">Custom pricing</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Industry-specific AI adoption</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">White-labeled training portal</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm">Strategy workshops with leadership team</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Proof - Companies */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-8">What Companies Say</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <CardContent className="space-y-4 p-0">
                    <p className="text-foreground font-medium">
                      "Our staff saved 10 hours per week by applying AI to reports."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6">
                  <CardContent className="space-y-4 p-0">
                    <p className="text-foreground font-medium">
                      "We now train every new hire with the AI portal — adoption is 90%."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6">
                  <CardContent className="space-y-4 p-0">
                    <p className="text-foreground font-medium">
                      "Clients see us as innovators because we're ahead on AI."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA - Companies */}
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-4">
                🚀 Upgrade Your Workforce Today
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
