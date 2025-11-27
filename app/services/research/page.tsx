import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Know Your Market | Market Research Services | Outcome Marketing',
  description: 'Data-driven insights that inform your business decisions. Understand your customers, competitors, and opportunities.',
  keywords: ['market research Cornwall', 'competitor analysis', 'keyword research', 'market insights', 'business research'],
};

export default function ResearchPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Market Research Services',
    description: 'Data-driven insights that inform your business decisions. Understand your customers, competitors, and opportunities.',
    provider: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: 'Market Research and Competitor Analysis',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Market Research Services',
    description: 'Data-driven market research and competitor analysis to inform your strategy and give you a competitive edge.',
    url: 'https://outcomemarketing.co.uk/services/research',
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
        name: 'Market Research',
        item: 'https://outcomemarketing.co.uk/services/research',
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format"
            alt="Market research and data analysis"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(45, 58, 58, 0.85), rgba(45, 58, 58, 0.80))' }} />
        </div>
        <Container className="relative z-20 py-24">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-cottage-cream mb-6">
              <Link href="/" className="hover:text-mist-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/services" className="hover:text-mist-white transition-colors">Services</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-mist-white">Market Research</span>
            </nav>

            <h1 className="font-dm-serif text-cottage-cream text-5xl md:text-6xl lg:text-7xl mb-6">
              Know Your Market
            </h1>

            <p className="text-mist-white text-xl md:text-2xl max-w-2xl leading-relaxed mb-8">
              Data-driven insights that inform your business decisions. Understand your customers, competitors, and opportunities.
            </p>

            <Button href="/contact" size="lg" className="inline-block bg-cottage-cream text-slate-deep hover:bg-mist-white">
              Discuss Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* What Is Section */}
      <Section className="bg-mist-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-dm-serif text-slate-deep text-3xl md:text-4xl">
              What Is Market Research?
            </h2>

            <div className="space-y-6 text-secondary-text text-lg leading-relaxed">
              <p>
                Market research is gathering and analyzing data about your industry, competitors, and customers to make informed business decisions. It's not guesswork or gut feeling—it's concrete information about what's actually happening in your market.
              </p>

              <p>
                Good research answers critical questions: Who are your real competitors? What keywords do customers use when searching? Where are the gaps in the market? What content attracts visitors? How does your website stack up technically? These insights guide everything from website structure to content strategy to SEO priorities.
              </p>

              <div className="bg-trevaunance-teal/10 border-l-4 border-trevaunance-teal p-6 rounded-r-lg">
                <p className="text-slate-deep font-medium text-lg">
                  Businesses that conduct proper research waste less money on strategies that don't work and gain months of time by focusing efforts where they'll actually deliver results.
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
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Businesses Entering New Markets</h3>
                <p className="text-secondary-text leading-relaxed">
                  You're expanding into Cornwall or launching a new service. You need to understand the competitive landscape, local search behavior, and whether there's genuine opportunity before investing heavily.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Companies Planning Strategy</h3>
                <p className="text-secondary-text leading-relaxed">
                  You're about to invest in SEO, content marketing, or a new website. Research ensures you're targeting the right keywords, creating relevant content, and building on a solid foundation.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Brands Seeking Competitive Edge</h3>
                <p className="text-secondary-text leading-relaxed">
                  You want to understand what your competitors are doing, where they're weak, and where untapped opportunities exist. Knowledge is power in competitive markets.
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
              Why Choose Our Research Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Real Data, Not Opinions</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  We use professional-grade tools to gather actual search volume data, competitor metrics, and market trends. Every recommendation is backed by evidence, not guesswork or assumptions about what might work.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Actionable Insights, Not Just Reports</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  Data means nothing without interpretation. We don't just hand you spreadsheets—we explain what the data means for your business and provide clear recommendations you can act on immediately.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Competitor Analysis That Reveals Opportunities</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  We identify what your competitors rank for, where they're getting backlinks, and what content performs well. More importantly, we find gaps—keywords they're missing, content opportunities they've overlooked.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Customer Understanding Through Search Data</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  Search data reveals how customers actually think and what language they use. This understanding informs everything from website copy to content topics to product positioning.
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
                    We start by understanding your business, goals, and what specific questions you need answered. What decisions will this research inform? What would success look like? This focus ensures we deliver relevant insights.
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
                    We design a research plan tailored to your situation—which competitors to analyze, which keywords to investigate, what market data to gather. You approve the scope before we begin detailed work.
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
                    We gather data using professional tools, analyze competitor strategies, identify keyword opportunities, and map out content gaps. Every finding is documented with supporting data.
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
                    We deliver a comprehensive report and walk through findings with you. Research only matters if it leads to action—we ensure you understand the implications and know exactly what to do next.
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
              Let's Talk About Your Research Needs
            </h2>

            <p className="text-mist-white text-lg leading-relaxed">
              Every business is different. Let's have a conversation about what market research could look like for yours. No pressure, no sales pitch—just honest advice about what insights would help you make better decisions.
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
