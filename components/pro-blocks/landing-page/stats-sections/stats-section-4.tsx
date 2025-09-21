"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Impact</Tagline>
            <h2 className="heading-lg text-foreground">Transforming Lives Through AI Education</h2>
            <p className="text-muted-foreground">
              Our AI workshops have empowered thousands of professionals to unlock their potential and achieve remarkable productivity gains.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Professionals Trained
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  1,014+
                </span>

                <p className="text-muted-foreground text-base">
                  Adults from diverse backgrounds have successfully completed our AI workshops and transformed their careers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Productivity Increase</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  3-10x
                </span>
                <p className="text-muted-foreground text-base">
                  Average productivity improvement reported by workshop participants using AI tools in their daily work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Satisfaction Rating</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  4.9/5
                </span>
                <p className="text-muted-foreground text-base">
                  Exceptional feedback from participants who found our workshops transformative and immediately applicable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
