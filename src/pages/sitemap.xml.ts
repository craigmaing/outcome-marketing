import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { seoServices, seoLocations, seoIndustries, seoProblems } from '../data/seo-data';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const caseStudies = await getCollection('case-studies');
  const services = await getCollection('services');
  
  const siteUrl = 'https://outcomemarketing.co.uk';
  
  const pages = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
  ];
  
  // Generate programmatic SEO pages
  const programmaticPages = [];
  
  // Service-Location pages
  for (const service of seoServices) {
    for (const location of seoLocations) {
      programmaticPages.push({
        url: `/seo-services/${service.slug}/${location.slug}`,
        priority: '0.9',
        changefreq: 'weekly'
      });
    }
  }
  
  // Industry pages
  for (const industry of seoIndustries) {
    programmaticPages.push({
      url: `/seo-solutions/${industry.slug}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  }
  
  // Problem pages
  for (const problem of seoProblems) {
    programmaticPages.push({
      url: `/seo-help/${problem.slug}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  
  ${posts.map(post => `
  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${post.data.publishDate.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  
  ${caseStudies.map(caseStudy => `
  <url>
    <loc>${siteUrl}/case-studies/${caseStudy.slug}</loc>
    <lastmod>${caseStudy.data.publishDate.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  
  ${services.map(service => `
  <url>
    <loc>${siteUrl}/services/${service.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  
  ${programmaticPages.map(page => `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};