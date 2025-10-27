import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function GET() {
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
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}