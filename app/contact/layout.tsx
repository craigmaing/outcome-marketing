import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch | Outcome Marketing',
  description: 'Get in touch with Outcome Marketing. No pressure, no hard sell - just honest advice about your digital marketing goals. Cornwall-based with UK-wide service.',
  openGraph: {
    title: 'Contact Us | Get in Touch | Outcome Marketing',
    description: 'Get in touch with Outcome Marketing. No pressure, no hard sell - just honest advice about your digital marketing goals.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Outcome Marketing',
    description: 'Get in touch with Outcome Marketing for honest digital marketing advice. No pressure, no hard sell.',
    url: 'https://outcomemarketing.co.uk/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      telephone: '+447770580125',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cornwall',
        addressCountry: 'GB',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      {children}
    </>
  );
}
