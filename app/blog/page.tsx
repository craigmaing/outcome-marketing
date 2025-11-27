import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Blog - Digital Marketing Insights for UK Businesses',
  description: 'Honest digital marketing insights, SEO tips, and business growth strategies. No jargon, no fluff, just practical advice for UK businesses.',
};

const blogPosts = [
  {
    slug: 'how-much-does-seo-cost',
    title: 'How Much Does SEO Cost? A Transparent Guide for UK Businesses',
    excerpt: 'An honest breakdown of SEO pricing factors without the sales pitch. Learn what affects costs, what to watch for, and how to evaluate proposals.',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'SEO'
  },
  {
    slug: 'website-design-for-tradesmen',
    title: 'Website Design for Tradesmen: What Plumbers, Electricians and Builders Really Need',
    excerpt: 'Everything tradespeople need to know about getting a website that actually brings in work. No technical jargon, just practical advice.',
    date: '2024-11-15',
    readTime: '10 min read',
    category: 'Web Design'
  },
  {
    slug: 'local-business-marketing-cornwall',
    title: 'Local Business Marketing: A Complete Guide for Cornwall Businesses',
    excerpt: 'Practical local marketing strategies for businesses in Cornwall and the South West. Learn how to compete effectively in your local market.',
    date: '2024-11-10',
    readTime: '12 min read',
    category: 'Local Marketing'
  },
  {
    slug: 'local-seo-small-business-guide',
    title: 'Local SEO for Small Business: The Complete UK Guide [2025]',
    excerpt: 'Everything UK small businesses need to know about local SEO. Practical strategies to appear in local search results and attract customers in your area.',
    date: '2025-11-27',
    readTime: '15 min read',
    category: 'Local SEO'
  },
  {
    slug: 'social-media-marketing-small-business',
    title: 'Social Media Marketing for Small Business: A Practical UK Guide',
    excerpt: 'Everything UK small businesses need to know about social media marketing. Practical strategies that work without a massive budget or dedicated team.',
    date: '2025-11-27',
    readTime: '11 min read',
    category: 'Social Media'
  },
  {
    slug: 'restaurant-marketing-ideas',
    title: 'Restaurant Marketing Ideas That Actually Work [2025 UK Guide]',
    excerpt: 'Discover proven restaurant marketing ideas for UK restaurants and cafés. From local SEO to social media, email marketing to loyalty programs—strategies that drive bookings.',
    date: '2025-11-27',
    readTime: '11 min read',
    category: 'Local Marketing'
  }
];

export default function BlogPage() {
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog - Digital Marketing Insights',
    description: 'Honest digital marketing insights, SEO tips, and business growth strategies. No jargon, no fluff, just practical advice for UK businesses.',
    url: 'https://outcomemarketing.co.uk/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
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
        name: 'Blog',
        item: 'https://outcomemarketing.co.uk/blog',
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80&auto=format"
            alt="Digital marketing insights and articles"
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
              Blog
            </h1>
            <p className="text-mist-white text-xl md:text-2xl leading-relaxed">
              Honest digital marketing insights for UK businesses. No jargon, no fluff, just practical advice you can actually use.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <Section className="bg-mist-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <Card hover={true} className="h-full flex flex-col bg-cottage-cream border-l-4 border-trevaunance-teal">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-dm-sans font-semibold text-trevaunance-teal uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-sm text-secondary-text">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-dm-serif text-slate-deep text-2xl mb-3 group-hover:text-trevaunance-teal transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-secondary-text mb-4 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <time className="text-sm text-secondary-text" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                      <span className="text-sm font-dm-sans font-semibold text-trevaunance-teal group-hover:underline">
                        Read article →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
