import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PreFooterCTA from '@/components/sections/PreFooterCTA';

export const metadata: Metadata = {
  title: 'Honest Digital Marketing for Cornwall Businesses | Outcome Marketing',
  description: 'Cornwall-based digital marketing agency delivering honest, transparent, and results-driven strategies. No jargon, no empty promises - just marketing that actually works.',
};

const services = [
  {
    title: '1-Page Websites',
    description: 'Professional single-page websites designed for tradesmen, restaurants, and small businesses. Fast, effective, and built to convert.',
    href: '/services/one-page-website',
    icon: '',
  },
  {
    title: 'Blog Writing',
    description: 'SEO-optimized blog content that engages your audience and drives organic traffic. Quality writing tailored to your industry.',
    href: '/services/blog-writing',
    icon: '',
  },
  {
    title: 'Website SEO',
    description: 'Honest SEO services that deliver real results. No false promises, just proven strategies that improve your rankings.',
    href: '/services/website-seo',
    icon: '',
  },
  {
    title: 'Market Research',
    description: 'Data-driven market research and competitor analysis to inform your strategy and give you a competitive edge.',
    href: '/services/research',
    icon: '',
  },
];

export default function HomePage() {
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Outcome Marketing',
    description: 'Cornwall-based digital marketing agency delivering honest, transparent, and results-driven strategies. No jargon, no empty promises - just marketing that actually works.',
    url: 'https://outcomemarketing.co.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://outcomemarketing.co.uk/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />

      {/* Hero Section with Cornwall coastal background */}
      <Hero />

      {/* Services Grid Section */}
      <ServicesGrid services={services} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Pre-Footer CTA Section */}
      <PreFooterCTA />
    </>
  );
}
