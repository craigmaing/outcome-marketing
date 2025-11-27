'use client';

import dynamic from 'next/dynamic';
import Container from '@/components/ui/Container';

const AnimateOnScroll = dynamic(() => import('@/components/ui/AnimateOnScroll'), {
  ssr: false,
  loading: () => <div style={{ opacity: 0 }} />,
});

interface Feature {
  text: string;
}

interface WhyChooseUsProps {
  overline?: string;
  title?: string;
  description?: string;
  features?: Feature[];
}

export default function WhyChooseUs({
  overline = "Why Outcome",
  title = "We Say What We Mean.\nWe Mean What We Say.",
  description = "In an industry full of smoke and mirrors, we choose clarity. Every recommendation we make has one purpose: to get you results you can see and measure.",
  features = [
    { text: "No hidden fees, ever" },
    { text: "Monthly reports you'll actually understand" },
    { text: "Strategies tailored to YOUR business" },
    { text: "Based right here in Cornwall" },
  ],
}: WhyChooseUsProps) {
  return (
    <section className="bg-slate-wash py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Overline */}
            <AnimateOnScroll className="animate-on-scroll mb-4">
              <span className="font-dm-sans text-sm md:text-base uppercase tracking-widest text-cottage-cream font-semibold">
                {overline}
              </span>
            </AnimateOnScroll>

            {/* Title */}
            <AnimateOnScroll className="animate-on-scroll stagger-1">
              <h2 className="font-dm-serif text-4xl md:text-5xl lg:text-[3.375rem] text-cottage-cream leading-tight mb-6 whitespace-pre-line">
                {title}
              </h2>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll className="animate-on-scroll stagger-2">
              <p className="text-lg text-mist-white leading-relaxed mb-10 max-w-[480px]">
                {description}
              </p>
            </AnimateOnScroll>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <AnimateOnScroll
                  key={index}
                  as="li"
                  className={`flex items-start ${index % 2 === 0 ? "animate-fade-up-left" : "animate-fade-up-right"}`}
                  delay={index * 100 + 300}
                >
                  {/* Checkmark Icon with bounce */}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-trevaunance-teal/20 flex items-center justify-center mr-4 mt-0.5 transition-all duration-300 hover:scale-110 hover:bg-trevaunance-teal/30">
                    <svg
                      className="w-4 h-4 text-trevaunance-teal-dark"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-mist-white text-lg leading-relaxed">
                    {feature.text}
                  </span>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="hidden lg:flex items-center justify-center">
            <AnimateOnScroll className="animate-scale-in stagger-4">
              <div className="relative">
                {/* Large decorative "O" */}
                <div className="text-[20rem] font-dm-serif text-trevaunance-teal/10 leading-none select-none">
                  O
                </div>

                {/* Accent circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-harbour-rust/30"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
