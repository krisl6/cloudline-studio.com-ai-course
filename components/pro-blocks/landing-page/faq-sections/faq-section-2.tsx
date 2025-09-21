"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Frequently Asked Questions About Our AI Workshops
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Everything you need to know about our AI training programs.
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Workshop Information
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Do I need any prior AI experience to join the workshops?
                  </AccordionTrigger>
                  <AccordionContent>
                    No prior AI experience is required! Our workshops are designed
                    for adults of all backgrounds and skill levels. We start with
                    the fundamentals and build up to more advanced concepts.
                    Whether you're a complete beginner or have some tech experience,
                    our expert instructors will guide you through every step.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What age groups do you cater to?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our workshops are designed for adults of all ages, from young
                    professionals in their 20s to seniors in their 70s and beyond.
                    We tailor our teaching approach to accommodate different learning
                    styles and paces. Many of our most successful participants are
                    career changers and lifelong learners looking to stay relevant
                    in the AI era.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How long are the workshop programs?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer two main programs: AI Fundamentals (4 weeks) and
                    AI Mastery (8 weeks). Each program includes weekly sessions
                    of 2-3 hours, plus hands-on practice time. The programs are
                    designed to fit around your schedule, with both weekday evening
                    and weekend options available.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What tools and software will I learn?
                  </AccordionTrigger>
                  <AccordionContent>
                    You'll learn to use popular AI tools like ChatGPT, Claude,
                    Midjourney, and many others. More importantly, we teach you
                    the fundamental principles of AI that allow you to master
                    any new AI tool that emerges. We focus on prompt engineering,
                    AI workflow design, and practical applications for your
                    specific industry and role.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Enrollment & Support
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    What's included in the workshop fee?
                  </AccordionTrigger>
                  <AccordionContent>
                    Your workshop fee includes all training materials, access to
                    AI tools during the program, certificate of completion, and
                    lifetime access to our learning community. For the AI Mastery
                    program, you also get 1-on-1 mentoring sessions and job
                    placement assistance. No hidden fees or additional costs.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Do you offer online or in-person workshops?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer both online and in-person workshops to accommodate
                    different preferences and locations. Our online workshops
                    are fully interactive with live instruction, breakout rooms,
                    and hands-on practice. In-person workshops are available in
                    major cities and provide additional networking opportunities.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    What if I can't attend a session?
                  </AccordionTrigger>
                  <AccordionContent>
                    All sessions are recorded and available for makeup viewing.
                    We also offer multiple time slots for most programs, so you
                    can switch to a different session if needed. Our instructors
                    provide additional support through office hours and our
                    community platform to ensure you don't fall behind.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    Do you provide ongoing support after the workshop?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! You get lifetime access to our learning community where
                    you can ask questions, share experiences, and stay updated
                    on the latest AI developments. We also host monthly webinars,
                    provide tool updates, and offer advanced workshops for
                    continued learning. Our goal is to support your AI journey
                    long after the initial workshop ends.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
