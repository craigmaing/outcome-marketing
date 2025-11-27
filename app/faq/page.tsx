import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FAQ from '@/components/FAQ';
import { faqData } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Outcome Marketing',
  description: 'Find answers to common questions about our digital marketing services including SEO cost, website design for tradespeople, hotel and restaurant websites, and small business marketing.',
  openGraph: {
    title: 'Frequently Asked Questions | Outcome Marketing',
    description: 'Find answers to common questions about our digital marketing services including SEO cost, website design for tradespeople, hotel and restaurant websites, and small business marketing.',
    type: 'website',
  },
};

export default function FAQPage() {
  // Generate Schema.org FAQPage structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap((category) =>
      category.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80&auto=format"
            alt="Frequently asked questions and answers"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(45, 58, 58, 0.85), rgba(45, 58, 58, 0.7))' }} />
        </div>
        <Container className="relative z-20 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-dm-serif text-cottage-cream text-5xl md:text-6xl lg:text-7xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-mist-white text-xl md:text-2xl leading-relaxed">
              Honest answers to your questions about digital marketing, SEO, and website design for small businesses
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20 bg-mist-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-lg text-secondary-text leading-relaxed">
                We believe in transparency and honest communication. Below you'll find detailed answers to the most common questions about our services. If you don't find what you're looking for, please{' '}
                <a href="/contact" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">
                  get in touch
                </a>{' '}
                and we'll be happy to help.
              </p>
            </div>

            <nav className="mb-12 p-6 bg-cottage-cream rounded-lg" aria-label="FAQ categories">
              <h2 className="font-dm-serif text-slate-deep text-lg mb-4">
                Jump to a section:
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {faqData.map((category) => (
                  <li key={category.slug}>
                    <a
                      href={`#${category.slug}`}
                      className="text-trevaunance-teal hover:text-slate-deep hover:underline focus:underline focus:outline-none transition-colors"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-16">
              {faqData.map((category) => (
                <div
                  key={category.slug}
                  id={category.slug}
                  className="scroll-mt-24"
                >
                  <h2 className="font-dm-serif text-slate-deep text-3xl mb-6 pb-3 border-b-2 border-trevaunance-teal">
                    {category.title}
                  </h2>
                  <FAQ faqs={category.faqs} category={category.slug} />
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-cottage-cream rounded-lg text-center border-l-4 border-trevaunance-teal">
              <h2 className="font-dm-serif text-slate-deep text-2xl mb-4">
                Still Have Questions?
              </h2>
              <p className="text-secondary-text mb-6">
                We're here to help. Get in touch and we'll provide honest, straightforward answers about how we can help your business.
              </p>
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
