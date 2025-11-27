import type { Metadata } from 'next';
import Image from 'next/image';
import PreFooterCTA from '@/components/sections/PreFooterCTA';

export const metadata: Metadata = {
  title: 'About Us | Outcome Marketing',
  description: 'Built on bedrock, not buzzwords. Learn about our Cornwall-rooted approach to honest marketing.',
};

const values = [
  {
    title: 'Honesty',
    description: 'We tell you what you need to hear, not what you want to hear.',
  },
  {
    title: 'Integrity',
    description: "We do what we say we'll do. Every time.",
  },
  {
    title: 'Transparency',
    description: "No hidden costs. You'll always know what we're doing and why.",
  },
  {
    title: 'Truth',
    description: 'Our strategies are built on data and reality, not wishful thinking.',
  },
];

export default function AboutPage() {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Outcome Marketing',
    description: 'Learn about our Cornwall-rooted approach to honest digital marketing. Built on bedrock, not buzzwords.',
    url: 'https://outcomemarketing.co.uk/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
      description: 'Cornwall-based digital marketing agency delivering honest, transparent, and results-driven strategies',
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
        name: 'About',
        item: 'https://outcomemarketing.co.uk/about',
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-cottage-cream pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 animate-fade-up">
              <p className="text-trevaunance-teal text-sm md:text-base font-dm-sans font-semibold uppercase tracking-wider mb-4">
                About Us
              </p>
              <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-deep mb-6 leading-tight">
                Built on Bedrock,<br />Not Buzzwords
              </h1>
              <p className="text-slate-deep text-lg md:text-xl leading-relaxed max-w-2xl">
                We started Outcome Marketing because we were tired of seeing good businesses get burned by bad marketing.
              </p>
            </div>

            {/* Right Image - 40% */}
            <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1700836390743-4b141439055d?q=80&w=1200&h=900&auto=format&fit=crop&fp-y=0.65"
                  alt="Person contemplating on rocky Cornwall beach"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-mist-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl text-slate-deep mb-12 animate-fade-up">
            Our Story
          </h2>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-secondary-text text-lg leading-relaxed">
              Outcome Marketing was founded on a simple observation: the digital marketing industry has a trust problem. Too many agencies make promises they can't keep, hide behind jargon, and prioritize sales over service. We decided to do things differently.
            </p>

            <p className="text-secondary-text text-lg leading-relaxed">
              Based in Cornwall, we understand what it's like to run a business in a region that faces unique challenges. We know the struggle of competing against bigger companies with deeper pockets. We've seen businesses burned by agencies that overpromised and underdelivered. And we knew there had to be a better way.
            </p>

            <p className="text-secondary-text text-lg leading-relaxed">
              That better way started with honesty. We built our agency on the principle that businesses deserve the truth, even when it's not what they want to hear. If SEO isn't the right solution for your business right now, we'll tell you. If your expectations aren't realistic, we'll explain why. And if we can't help you, we'll say so upfront.
            </p>

            {/* Pull Quote */}
            <blockquote
              className="border-l-4 border-harbour-rust pl-6 py-4 my-12 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <p className="font-dm-serif text-2xl md:text-3xl text-slate-deep italic leading-relaxed">
                "We measure success in your growth, not our invoice."
              </p>
            </blockquote>

            <p className="text-secondary-text text-lg leading-relaxed">
              What started as a one-person operation in Cornwall has grown into a team that serves businesses across the UK. But we've never lost sight of what made us different: treating clients with honesty and respect, delivering real results, and building relationships based on trust rather than contracts.
            </p>

            <p className="text-secondary-text text-lg leading-relaxed">
              The marketing industry is full of empty promises. "Guaranteed first page rankings." "10x your traffic in 30 days." "Secret algorithm hacks." It's all nonsense, and it damages the relationship between agencies and the businesses they're meant to serve.
            </p>

            <p className="text-secondary-text text-lg leading-relaxed">
              Here's the truth: digital marketing is not magic. SEO takes time. Content marketing requires consistency. Paid advertising needs testing and optimization. There are no shortcuts, no guarantees, and no secrets that only special agencies know.
            </p>

            <p className="text-secondary-text text-lg leading-relaxed">
              What actually works is understanding your business, your market, and your customers. It's setting realistic expectations. It's measuring results honestly. It's being transparent about what's working and what isn't. It's having difficult conversations when necessary and celebrating genuine wins together.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-wash py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl text-cottage-cream text-center mb-16 animate-fade-up">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-mist-white p-8 border-l-4 border-harbour-rust hover:border-l-8 transition-all duration-300 shadow-sm hover:shadow-md animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-dm-serif text-2xl text-slate-deep mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-text text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cornwall Connection Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1663432846241-41b6aec24b60?q=80&w=2000&auto=format&fit=crop"
            alt="Tintagel stone archway in Cornwall"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/80 via-slate-deep/70 to-slate-deep/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl text-cottage-cream mb-8 animate-fade-up">
            Rooted in Cornwall
          </h2>

          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-mist-white text-lg md:text-xl leading-relaxed mb-6">
              Cornwall isn't just where we're based — it's who we are. This rugged coastline teaches you something: that real things last. That substance matters more than show. That the work you put in determines what you get out.
            </p>
            <p className="text-mist-white text-lg md:text-xl leading-relaxed">
              We bring that same grounded, no-nonsense approach to every project we take on.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PreFooterCTA
        title="Ready to Work Together?"
        description="Let's have an honest conversation about your business and whether we're the right fit."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
