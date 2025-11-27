import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import ServiceCard from '@/components/sections/ServiceCard';

export const metadata: Metadata = {
  title: 'Digital Marketing Services - Cornwall & UK',
  description: 'Comprehensive digital marketing services for Cornwall businesses including web development, SEO, content writing, and market research.',
};

const services = [
  {
    title: 'One-Page Website',
    description: 'Professional, conversion-focused single-page websites designed to showcase your business effectively.',
    href: '/services/one-page-website',
  },
  {
    title: 'Blog Writing',
    description: 'SEO-optimized blog content that engages your audience and drives organic traffic to your website.',
    href: '/services/blog-writing',
  },
  {
    title: 'Website SEO',
    description: 'Comprehensive SEO strategies to improve your search rankings and increase online visibility.',
    href: '/services/website-seo',
  },
  {
    title: 'Market Research',
    description: 'Data-driven market research to inform your business strategy and competitive positioning.',
    href: '/services/research',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-deep py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2000&h=1200&auto=format&fit=crop"
            alt="Professional team collaboration"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/80 via-slate-deep/70 to-slate-deep" />
        </div>

        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-trevaunance-teal text-sm md:text-base font-dm-sans font-semibold uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-dm-serif text-mist-white font-bold mb-6 leading-tight">
              Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-cottage-cream leading-relaxed max-w-3xl mx-auto">
              Professional digital marketing solutions tailored to Cornwall businesses
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <Section className="bg-cottage-cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
