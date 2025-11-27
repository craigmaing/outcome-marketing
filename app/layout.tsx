import type { Metadata, Viewport } from 'next';
import { DM_Serif_Display, Inter, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://outcomemarketing.co.uk'),
  title: {
    default: 'Outcome Digital Marketing | Cornwall Digital Marketing Agency',
    template: '%s | Outcome Digital Marketing',
  },
  description: 'Professional digital marketing services in Cornwall. Specializing in website development, SEO, blog writing, and market research.',
  keywords: ['digital marketing', 'Cornwall', 'SEO', 'website development', 'blog writing', 'market research'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://outcomemarketing.co.uk',
    siteName: 'Outcome Digital Marketing',
    title: 'Outcome Digital Marketing | Cornwall Digital Marketing Agency',
    description: 'Professional digital marketing services in Cornwall. Specializing in website development, SEO, blog writing, and market research.',
    images: [
      {
        url: '/logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Outcome Digital Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outcome Digital Marketing | Cornwall Digital Marketing Agency',
    description: 'Professional digital marketing services in Cornwall. Specializing in website development, SEO, blog writing, and market research.',
    images: ['/logo-black.png'],
    creator: '@outcomemktg',
    site: '@outcomemktg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3D7A7A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Outcome Marketing',
    url: 'https://outcomemarketing.co.uk',
    logo: 'https://outcomemarketing.co.uk/logo-black.png',
    description: 'Cornwall-based digital marketing agency delivering honest, transparent, and results-driven strategies',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cornwall',
      addressCountry: 'GB',
    },
    areaServed: 'United Kingdom',
    email: 'hello@outcomemarketing.co.uk',
    sameAs: [],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Outcome Marketing',
    description: 'Cornwall-based digital marketing agency specializing in website design, SEO services, blog writing, and digital marketing for UK businesses',
    url: 'https://outcomemarketing.co.uk',
    telephone: '',
    email: 'hello@outcomemarketing.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cornwall',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: [
      'Website Design',
      'SEO Services',
      'Blog Writing',
      'Digital Marketing',
      'Market Research',
    ],
    priceRange: '$$',
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for Unsplash images */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${dmSerif.variable} ${inter.variable} ${dmSans.variable} font-inter antialiased bg-cottage-cream text-slate-deep`}>
        {/* Lazy load non-critical animations CSS */}
        <Script
          id="load-animations-css"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/animations.css';
              document.head.appendChild(link);
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
