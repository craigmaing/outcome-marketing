import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Content That Connects | Blog Writing Services | Outcome Marketing',
  description: 'Quality blog content that engages your audience, builds trust, and improves your search visibility. Written by humans who understand your industry.',
  keywords: ['blog writing Cornwall', 'content writing services', 'SEO content', 'business blog writing', 'professional content'],
};

export default function BlogWritingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Blog Writing Services',
    description: 'Quality blog content that engages your audience, builds trust, and improves your search visibility. Written by humans who understand your industry.',
    provider: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: 'Blog Writing and Content Creation',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Blog Writing Services',
    description: 'Quality blog content that engages your audience, builds trust, and improves your search visibility.',
    url: 'https://outcomemarketing.co.uk/services/blog-writing',
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
        name: 'Blog Writing',
        item: 'https://outcomemarketing.co.uk/services/blog-writing',
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
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80&auto=format"
            alt="Professional writing and content creation"
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
              <span className="text-mist-white">Blog Writing</span>
            </nav>

            <h1 className="font-dm-serif text-cottage-cream text-5xl md:text-6xl lg:text-7xl mb-6">
              Content That Connects
            </h1>

            <p className="text-mist-white text-xl md:text-2xl max-w-2xl leading-relaxed mb-8">
              Quality blog content that engages your audience, builds trust, and improves your search visibility. Written by humans who understand your industry.
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
              What Is Professional Blog Writing?
            </h2>

            <div className="space-y-6 text-secondary-text text-lg leading-relaxed">
              <p>
                Professional blog writing is creating valuable, engaging content that serves two audiences: your readers and search engines. It's not just about filling a page with words—it's about crafting articles that answer real questions, solve actual problems, and position your business as an authority in your field.
              </p>

              <p>
                Good blog content attracts visitors through search engines, keeps them engaged with useful information, and gently guides them toward becoming customers. It's one of the most effective long-term marketing investments you can make, building a library of content that works for your business 24/7.
              </p>

              <div className="bg-trevaunance-teal/10 border-l-4 border-trevaunance-teal p-6 rounded-r-lg">
                <p className="text-slate-deep font-medium text-lg">
                  Businesses that blog consistently receive 67% more leads than those that don't. But consistency without quality is wasted effort—that's where we come in.
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
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Businesses Wanting Organic Traffic</h3>
                <p className="text-secondary-text leading-relaxed">
                  You understand that ranking in search results brings free, qualified traffic to your site. You need consistent, SEO-optimized content that attracts visitors searching for what you offer.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Companies Building Authority</h3>
                <p className="text-secondary-text leading-relaxed">
                  You want to be seen as the expert in your field. Regular, insightful blog posts demonstrate your knowledge, build trust, and give potential customers confidence in choosing you.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-mist-white p-8 rounded-lg border-l-4 border-trevaunance-teal hover:shadow-md transition-shadow">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-4">Brands Needing Consistent Content</h3>
                <p className="text-secondary-text leading-relaxed">
                  You know blogging works, but finding time to write quality content consistently is impossible. You need a reliable partner who understands your business and can maintain a regular publishing schedule.
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
              Why Choose Our Blog Writing
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">SEO-Optimized Without Sounding Like Robots</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  We write for humans first, search engines second. Every article is optimized for relevant keywords, but we never sacrifice readability for rankings. Your content reads naturally while performing technically.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Industry Expertise That Shows</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  We don't just research your industry—we immerse ourselves in it. We understand your customers' questions, your competitors' weaknesses, and the trends shaping your market. This depth shows in every piece we write.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Consistent Quality, Every Time</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  No off days, no rushed articles, no filler content. Every blog post meets the same high standard: well-researched, clearly written, properly structured, and genuinely useful to your readers.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-cottage-cream p-8 rounded-lg border-l-4 border-trevaunance-teal">
                <h3 className="font-dm-serif text-slate-deep text-2xl mb-3">Your Voice, Not Ours</h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  We adapt to your brand's tone and style. Whether you're professional and formal or casual and friendly, we match your voice so seamlessly that readers can't tell we wrote it. Your content sounds like you, not a generic content mill.
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
                    We start by understanding your business, audience, and goals. What questions do your customers ask? What topics matter most? What's your brand voice? This foundation ensures every article serves a purpose.
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
                    We create a content calendar with topics that target valuable keywords and address your audience's needs. You approve the topics before we write, ensuring we're covering what matters to your business.
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
                    We research, write, and optimize each article. Every piece is fact-checked, properly structured for readability, and optimized for search engines. You receive ready-to-publish content on schedule.
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
                    We track which topics perform best—what ranks, what drives traffic, what converts. This data informs future content, creating a virtuous cycle where your blog gets more effective over time.
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
              Let's Talk About Your Content
            </h2>

            <p className="text-mist-white text-lg leading-relaxed">
              Every business is different. Let's have a conversation about what blog writing could look like for yours. No pressure, no sales pitch—just honest advice about creating content that drives real results.
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
