'use client';

import dynamic from 'next/dynamic';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const AnimateOnScroll = dynamic(() => import('@/components/ui/AnimateOnScroll'), {
  ssr: false,
  loading: () => <div style={{ opacity: 0 }} />,
});

interface HeroProps {
  title?: string;
  subtitle?: string;
  overline?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
}

export default function Hero({
  title = "Marketing That\nActually Works",
  subtitle = "No jargon. No empty promises. Just clear strategies and real results for local businesses.",
  overline = "Cornwall's Honest Digital Marketing Agency",
  buttonText = "Let's Have a Conversation",
  buttonHref = '/contact',
  backgroundImage = 'https://images.unsplash.com/photo-1694697413775-dfcd7966ab24?w=1920&q=80&auto=format',
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Direct from Unsplash CDN */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Cornwall coastal background"
          fill
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAhExQf/aAAwDAQACEQMRAD8AzoXUtvLbSvbukMjKXVJNodc+OR0f2qWn+UXUFvHCbezYoioWMbZOBjJ+0pSh6LMn/9k="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(30, 40, 40, 0.85), rgba(30, 40, 40, 0.75))',
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-20 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <AnimateOnScroll className="animate-on-scroll mb-6">
            <span className="font-dm-sans text-sm md:text-base uppercase tracking-widest text-cottage-cream font-semibold">
              {overline}
            </span>
          </AnimateOnScroll>

          {/* Main Headline */}
          <AnimateOnScroll className="animate-on-scroll stagger-1">
            <h1 className="font-dm-serif text-[2.625rem] leading-tight md:text-7xl lg:text-[4.5rem] text-mist-white mb-6 whitespace-pre-line">
              {title}
            </h1>
          </AnimateOnScroll>

          {/* Subtitle */}
          <AnimateOnScroll className="animate-on-scroll stagger-2">
            <p className="text-lg md:text-xl text-mist-white mb-10 max-w-[540px] mx-auto leading-relaxed">
              {subtitle}
            </p>
          </AnimateOnScroll>

          {/* CTA Button */}
          <AnimateOnScroll className="animate-scale-in stagger-3">
            <Button
              href={buttonHref}
              variant="primary"
              className="bg-harbour-rust-dark hover:bg-harbour-rust-dark/90 text-mist-white border-0 px-10 py-4 text-lg font-dm-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
            >
              {buttonText}
            </Button>
          </AnimateOnScroll>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-cottage-cream"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
