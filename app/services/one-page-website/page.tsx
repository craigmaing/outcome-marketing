import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Websites That Work | 1-Page Website Development | Outcome Marketing',
  description: 'Your website should be your hardest-working employee. We design and build sites that look great, load fast, and turn visitors into customers. Perfect for Cornwall businesses.',
  keywords: ['one page website Cornwall', 'website development Cornwall', 'tradesman website', 'small business website', 'mobile-friendly website'],
};

export default function OnePageWebsitePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '1-Page Website Development',
    description: 'Professional single-page websites designed for tradesmen, restaurants, and small businesses. Fast, effective, and built to convert.',
    provider: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: 'Website Development',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '1-Page Website Development',
    description: 'Your website should be your hardest-working employee. We design and build sites that look great, load fast, and turn visitors into customers.',
    url: 'https://outcomemarketing.co.uk/services/one-page-website',
    provider: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://outcomemarketing.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://outcomemarketing.co.uk/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '1-Page Website',
        item: 'https://outcomemarketing.co.uk/services/one-page-website',
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-deep py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&h=1200&auto=format&fit=crop"
            alt="Modern website design on laptop"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/80 via-slate-deep/70 to-slate-deep" />
        </div>

        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-cottage-cream mb-6">
              <Link href="/" className="hover:text-mist-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/services" className="hover:text-mist-white transition-colors">Services</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-mist-white">1-Page Website</span>
            </nav>

            <p className="text-trevaunance-teal text-sm md:text-base font-dm-sans font-semibold uppercase tracking-wider mb-4">
              Web Development
            </p>

            <h1 className="font-dm-serif text-mist-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
              Websites That Work
            </h1>

            <p className="text-cottage-cream text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Your website should be your hardest-working employee. We design and build sites that look great, load fast, and turn visitors into customers.
            </p>

            <div>
              <Button href="/contact" size="lg" className="bg-trevaunance-teal text-mist-white hover:bg-trevaunance-teal-dark">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What Is Section */}
      <Section className="bg-mist-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-dm-serif text-slate-deep text-3xl md:text-4xl">
              What Is a 1-Page Website?
            </h2>

            <div className="space-y-6 text-secondary-text text-lg leading-relaxed">
              <p>
                A 1-page website is exactly what it sounds like—a single-page site that contains all your essential business information in one place. Instead of clicking through multiple pages, visitors scroll down to find everything they need: who you are, what you offer, how to contact you, and why they should choose your business.
              </p>

              <p>
                This focused approach is incredibly effective for businesses that need a strong online presence without the complexity of a multi-page site. It's straightforward, user-friendly, and gets straight to the point—which is exactly what modern web users want.
              </p>

              <div className="bg-trevaunance-teal/10 border-l-4 border-trevaunance-teal p-6 rounded-r-lg">
                <p className="text-slate-deep font-medium text-lg">
                  Most visitors make a decision about your business within 3 seconds of landing on your site. A well-designed 1-page website ensures they see exactly what they need, immediately.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who It's For Section */}
      <Section className="bg-cottage-cream">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <h2 className="font-dm-serif text-slate-deep text-3xl md:text-4xl text-center">
              Is This Right For You?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-mist-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Tradespeople</h3>
                <p className="text-secondary-text leading-relaxed">
                  Plumbers, electricians, builders, and carpenters who need a professional online presence that shows services, areas covered, and makes it easy for customers to get in touch.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-mist-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-harbour-rust">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Restaurants</h3>
                <p className="text-secondary-text leading-relaxed">
                  Cafes, restaurants, and food businesses that need to display menus, opening hours, location, and booking information in a beautiful, easy-to-navigate format.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-mist-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Small Businesses</h3>
                <p className="text-secondary-text leading-relaxed">
                  Local services, consultants, and specialists who need credibility online without the complexity of managing multiple pages and extensive content.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-mist-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="font-dm-serif text-slate-deep text-3xl md:text-4xl text-center">
              Why Choose Our 1-Page Websites
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Lightning Fast</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  Single-page sites load in under 2 seconds. Every second of delay costs you customers. Our optimized builds ensure your site is faster than your competitors, giving visitors the instant experience they expect.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-harbour-rust">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Mobile-First Design</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  Over 70% of web traffic comes from mobile devices. We build mobile-first, ensuring your site works perfectly on smartphones and tablets. No pinching, zooming, or frustrated customers.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Conversion-Focused</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  Every element is designed to guide visitors toward taking action—calling you, booking a service, or filling out a contact form. Clear calls-to-action and strategic placement turn browsers into customers.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-harbour-rust">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">You Own Everything</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  No monthly platform fees, no vendor lock-in. You own your website completely—the code, the design, the content. Host it anywhere, modify it anytime. Your business, your rules.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-cottage-cream">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="font-dm-serif text-slate-deep text-3xl md:text-4xl text-center">
              How We Work
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-trevaunance-teal text-mist-white rounded-full flex items-center justify-center font-dm-sans font-bold text-xl">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Discovery</h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    We start by understanding your business—what you do, who you serve, and what makes you different. This 30-minute conversation shapes everything that follows.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-trevaunance-teal text-mist-white rounded-full flex items-center justify-center font-dm-sans font-bold text-xl">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Strategy</h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    We create a clear plan for your site—what content goes where, how visitors will flow through the page, and which actions we want them to take. You approve before we build anything.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-trevaunance-teal text-mist-white rounded-full flex items-center justify-center font-dm-sans font-bold text-xl">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Implementation</h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    We design and build your site, keeping you informed every step of the way. You'll see work-in-progress previews and can request changes. No surprises, no hidden fees.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-trevaunance-teal text-mist-white rounded-full flex items-center justify-center font-dm-sans font-bold text-xl">
                  4
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Measure & Refine</h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    After launch, we track how visitors interact with your site. Based on real data, we suggest refinements to improve performance. Your site gets better over time, not stale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service CTA Section */}
      <Section background="none" className="bg-slate-deep">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-dm-serif text-mist-white text-3xl md:text-4xl">
              Let's Talk About Your Website
            </h2>

            <p className="text-mist-white text-lg leading-relaxed">
              Every business is different. Let's have a conversation about what a 1-page website could look like for yours. No pressure, no sales pitch—just honest advice about whether this is the right solution for you.
            </p>

            <div className="pt-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-cottage-cream text-slate-deep hover:bg-mist-white"
              >
                Start the Conversation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
