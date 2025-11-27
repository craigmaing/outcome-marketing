import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Get Found | Website SEO Services | Outcome Marketing',
  description: 'When someone searches for what you do, you want to be there. We help local businesses climb search rankings through honest, sustainable SEO.',
  keywords: ['SEO Cornwall', 'local SEO', 'website optimization', 'search engine optimization', 'Google ranking'],
};

export default function WebsiteSEOPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website SEO Services',
    description: 'When someone searches for what you do, you want to be there. We help local businesses climb search rankings through honest, sustainable SEO.',
    provider: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: 'Search Engine Optimization',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Website SEO Services',
    description: 'When someone searches for what you do, you want to be there. We help local businesses climb search rankings through honest, sustainable SEO.',
    url: 'https://outcomemarketing.co.uk/services/website-seo',
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
        name: 'Website SEO',
        item: 'https://outcomemarketing.co.uk/services/website-seo',
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&auto=format"
            alt="SEO analytics and search optimization"
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
              <span className="text-mist-white">Website SEO</span>
            </nav>

            <h1 className="font-dm-serif text-cottage-cream text-5xl md:text-6xl lg:text-7xl mb-6">
              Get Found
            </h1>

            <p className="text-mist-white text-xl md:text-2xl max-w-2xl leading-relaxed mb-8">
              When someone searches for what you do, you want to be there. We help local businesses climb search rankings through honest, sustainable SEO.
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
              What Is Website SEO?
            </h2>

            <div className="space-y-6 text-secondary-text text-lg leading-relaxed">
              <p>
                SEO (Search Engine Optimization) is the practice of improving your website so it ranks higher in search engine results. When potential customers search for what you offer, proper SEO ensures your business appears prominently in their results—ideally on page one of Google.
              </p>

              <p>
                It's not magic, and it's not manipulation. Good SEO is about making your website technically sound, creating genuinely useful content, and building credibility through quality backlinks. It takes time, but the results compound: better rankings lead to more visitors, which lead to more customers.
              </p>

              <div className="bg-trevaunance-teal/10 border-l-4 border-trevaunance-teal p-6 rounded-r-lg">
                <p className="text-slate-deep font-medium text-lg">
                  75% of people never scroll past the first page of search results. If you're not ranking on page one for your key terms, you're invisible to most potential customers.
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
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Local Service Businesses</h3>
                <p className="text-secondary-text leading-relaxed">
                  Plumbers, electricians, accountants, solicitors, and other service providers who need to rank locally. When someone searches "plumber near me" or "solicitor Truro," you want to be at the top.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Hospitality & Tourism</h3>
                <p className="text-secondary-text leading-relaxed">
                  Hotels, B&Bs, restaurants, and attractions competing for visibility in Cornwall's busy tourism market. Ranking well for "hotels Cornwall" or "things to do Newquay" drives bookings directly.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Trades Seeking Local Customers</h3>
                <p className="text-secondary-text leading-relaxed">
                  Builders, landscapers, and other tradespeople who rely on local customers finding them online. Good local SEO ensures you appear when people search for your services in your area.
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
              Why Choose Our SEO Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Local Focus That Gets Results</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  We specialize in local SEO for Cornwall businesses. We understand the local market, know how to optimize Google Business Profiles, and target the location-specific keywords that bring you customers who can actually use your services.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Sustainable, White-Hat Methods</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  No shortcuts, no black-hat tactics, no risk of penalties. We use only legitimate SEO techniques that Google approves of. It takes longer, but the results last. We're building your business, not just chasing quick wins.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Measurable, Transparent Results</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  You'll see exactly what we're doing and what results we're achieving. Monthly reports show your keyword rankings, traffic growth, and conversions. No jargon, no smoke and mirrors—just clear data about what's working.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Long-Term Growth, Not Quick Fixes</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  SEO is a marathon, not a sprint. We focus on sustainable growth that builds over time. While you won't rank #1 overnight, the rankings you do achieve will be stable, valuable, and resistant to algorithm changes.
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
                    We audit your current site, research your competitors, and identify the keywords your potential customers are actually searching for. This foundation ensures we're targeting the right terms.
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
                    We create a clear SEO roadmap prioritizing quick wins and long-term goals. Technical fixes, content recommendations, link-building opportunities—everything mapped out with realistic timelines.
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
                    We execute the plan: fix technical issues, optimize existing content, create new content, build quality backlinks, and continually refine based on performance data. You're kept informed throughout.
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
                    Monthly reporting shows what's working and what needs adjustment. SEO is never "finished"—we continuously optimize based on results, algorithm updates, and competitive changes to keep you ranking.
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
              Let's Talk About Your SEO
            </h2>

            <p className="text-mist-white text-lg leading-relaxed">
              Every business is different. Let's have a conversation about what SEO could look like for yours. No pressure, no sales pitch—just honest advice about whether SEO is right for you and what results you can realistically expect.
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
