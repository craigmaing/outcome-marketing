'use client';

import dynamic from 'next/dynamic';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const AnimateOnScroll = dynamic(() => import('@/components/ui/AnimateOnScroll'), {
  ssr: false,
  loading: () => <div style={{ opacity: 0 }} />,
});

interface PreFooterCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  phoneText?: string;
  phoneNumber?: string;
}

export default function PreFooterCTA({
  title = "Ready to Talk?",
  description = "No pressure. No sales pitch. Just an honest conversation about your business and whether we're the right fit.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
  phoneText = "Or call us:",
  phoneNumber = "07770 580125",
}: PreFooterCTAProps) {
  return (
    <section className="bg-cottage-cream py-20 md:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <AnimateOnScroll className="animate-on-scroll">
            <h2 className="font-dm-serif text-4xl md:text-5xl lg:text-[3.375rem] text-slate-deep mb-6 leading-tight">
              {title}
            </h2>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll className="animate-on-scroll stagger-1">
            <p className="text-lg md:text-xl text-secondary-text leading-relaxed mb-10 max-w-[600px] mx-auto">
              {description}
            </p>
          </AnimateOnScroll>

          {/* CTA Button with Pulse Glow */}
          <AnimateOnScroll className="animate-scale-in stagger-2">
            <div className="mb-6">
              <Button
                href={buttonHref}
                variant="primary"
                className="bg-harbour-rust hover:bg-harbour-rust/90 text-mist-white border-0 px-10 py-4 text-lg font-dm-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow hover:scale-105 active:scale-100"
              >
                {buttonText}
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Phone Contact */}
          <AnimateOnScroll className="animate-on-scroll stagger-3">
            <p className="text-secondary-text text-base">
              {phoneText}{' '}
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="text-trevaunance-teal-dark hover:text-slate-deep transition-colors duration-200 font-medium"
              >
                {phoneNumber}
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
