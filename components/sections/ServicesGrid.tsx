'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const AnimateOnScroll = dynamic(() => import('@/components/ui/AnimateOnScroll'), {
  ssr: false,
  loading: () => <div style={{ opacity: 0 }} />,
});

interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface ServicesGridProps {
  services: Service[];
  overline?: string;
  title?: string;
}

export default function ServicesGrid({
  services,
  overline = "What We Do",
  title = "Services Built for Businesses Like Yours",
}: ServicesGridProps) {
  return (
    <section className="bg-cottage-cream py-20 md:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="font-dm-sans text-sm md:text-base uppercase tracking-widest text-trevaunance-teal font-semibold">
              {overline}
            </span>
          </div>
          <h2 className="font-dm-serif text-4xl md:text-5xl lg:text-[3.375rem] text-slate-deep leading-tight">
            {title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.href}
              className="animate-on-scroll"
              delay={index * 100}
            >
              <div className="group bg-mist-white rounded-lg p-8 border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-trevaunance-teal/20 h-full">
                {/* Title */}
                <h3 className="font-dm-sans font-semibold text-xl text-slate-deep mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-secondary-text leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-trevaunance-teal-dark font-dm-sans font-medium hover:text-slate-deep transition-colors duration-200 group/link"
                >
                  Learn more about {service.title}
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
