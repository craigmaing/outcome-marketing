import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    authorTitle: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Case studies collection
const caseStudyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    publishDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    results: z.object({
      trafficIncrease: z.string().optional(),
      conversionIncrease: z.string().optional(),
      revenueGrowth: z.string().optional(),
      timeframe: z.string().optional(),
      rankings: z.string().optional(),
    }),
    services: z.array(z.string()),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Services collection
const serviceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    features: z.array(z.string()).default([]),
    pricing: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
    order: z.number().default(0),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Locations collection for programmatic SEO
const locationCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    region: z.string(),
    country: z.string(),
    population: z.string(),
    businessCount: z.string(),
    description: z.string(),
    marketInsights: z.array(z.string()).default([]),
    competitionLevel: z.enum(['Low', 'Medium', 'High']),
    averageCost: z.string().optional(),
    localKeywords: z.array(z.string()).default([]),
    caseStudyRelevance: z.array(z.string()).default([]),
  }),
});

// Industries collection for programmatic SEO
const industryCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    challenges: z.array(z.string()).default([]),
    strategies: z.array(z.string()).default([]),
    benchmarkData: z.object({
      averageConversionRate: z.string().optional(),
      averageTrafficGrowth: z.string().optional(),
      averageROI: z.string().optional(),
    }).optional(),
    successFactors: z.array(z.string()).default([]),
    relevantServices: z.array(z.string()).default([]),
  }),
});

// SEO Problems collection for programmatic SEO
const problemCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    impact: z.string(),
    symptoms: z.array(z.string()).default([]),
    diagnosticSteps: z.array(z.string()).default([]),
    solutions: z.array(z.string()).default([]),
    timeline: z.string().optional(),
    costEstimate: z.string().optional(),
    preventionTips: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudyCollection,
  'services': serviceCollection,
  'locations': locationCollection,
  'industries': industryCollection,
  'problems': problemCollection,
};