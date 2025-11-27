import { MetadataRoute } from 'next'

// Blog posts data - imported from the blog page
// This ensures the sitemap stays in sync with the actual blog posts
const blogPosts = [
  {
    slug: 'how-much-does-seo-cost',
    date: '2024-11-20',
  },
  {
    slug: 'website-design-for-tradesmen',
    date: '2024-11-15',
  },
  {
    slug: 'local-business-marketing-cornwall',
    date: '2024-11-10',
  },
  {
    slug: 'local-seo-small-business-guide',
    date: '2025-11-27',
  },
  {
    slug: 'social-media-marketing-small-business',
    date: '2025-11-27',
  },
  {
    slug: 'restaurant-marketing-ideas',
    date: '2025-11-27',
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://outcomemarketing.co.uk';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/one-page-website`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/blog-writing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/website-seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/research`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Generate blog post URLs dynamically with actual publish dates
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogUrls];
}
