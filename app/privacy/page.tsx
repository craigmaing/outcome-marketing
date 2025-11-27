import type { Metadata } from 'next';
import PreFooterCTA from '@/components/sections/PreFooterCTA';

export const metadata: Metadata = {
  title: 'Privacy Policy | Outcome Marketing',
  description: 'Our commitment to protecting your privacy. Learn how Outcome Marketing collects, uses, and protects your personal information in compliance with UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | Outcome Marketing',
    description: 'Our commitment to protecting your privacy. Learn how Outcome Marketing collects, uses, and protects your personal information in compliance with UK GDPR.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  const privacyPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy for Outcome Marketing',
    url: 'https://outcomemarketing.co.uk/privacy',
    publisher: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      telephone: '07770580125',
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
        name: 'Privacy Policy',
        item: 'https://outcomemarketing.co.uk/privacy',
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPageSchema),
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
          <div className="max-w-4xl mx-auto animate-fade-up">
            <p className="text-trevaunance-teal text-sm md:text-base font-dm-sans font-semibold uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl text-slate-deep mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-deep text-lg md:text-xl leading-relaxed">
              Last updated: 27 November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-mist-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="animate-fade-up">
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Introduction
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                Outcome Marketing is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website or contact us about our digital marketing services.
              </p>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We are a digital marketing agency based in Cornwall, United Kingdom, and we comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-secondary-text text-lg leading-relaxed">
                If you have any questions about this policy or how we handle your data, please contact us on <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">07770 580125</a>.
              </p>
            </div>

            {/* Data Controller */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Data Controller Information
              </h2>
              <div className="bg-cottage-cream border-l-4 border-trevaunance-teal p-6 rounded-r">
                <p className="text-slate-deep text-lg font-medium mb-2">Outcome Marketing</p>
                <p className="text-secondary-text text-base mb-1">Cornwall, United Kingdom</p>
                <p className="text-secondary-text text-base">
                  Telephone: <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">07770 580125</a>
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Information We Collect
              </h2>

              <h3 className="font-dm-serif text-2xl text-slate-deep mb-4 mt-8">
                Contact Form Data
              </h3>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                When you submit our contact form, we collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-text text-lg mb-6 ml-4">
                <li>Your full name</li>
                <li>Your telephone number</li>
                <li>Your business or company name</li>
                <li>The content of your message</li>
                <li>The date and time of form submission</li>
              </ul>

              <div className="bg-cottage-cream border-l-4 border-harbour-rust p-6 mb-6 rounded-r">
                <p className="text-slate-deep font-medium text-lg">
                  Important: We do NOT collect email addresses through our contact form. We contact you by telephone only.
                </p>
              </div>

              <h3 className="font-dm-serif text-2xl text-slate-deep mb-4 mt-8">
                Information Collected Automatically
              </h3>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                When you visit our website, we automatically collect certain technical information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-text text-lg mb-4 ml-4">
                <li>Your IP address (for security purposes)</li>
                <li>Browser type and version</li>
                <li>Device information (desktop, mobile, tablet)</li>
                <li>Pages you visit on our website</li>
                <li>Time spent on each page</li>
                <li>The website that referred you to us</li>
              </ul>
              <p className="text-secondary-text text-lg leading-relaxed">
                This information is collected through server logs and is used to improve our website functionality and security.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                How We Use Your Information
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-secondary-text text-lg mb-4 ml-4">
                <li><strong>Responding to enquiries:</strong> To contact you by telephone regarding your message and provide information about our digital marketing services</li>
                <li><strong>Service delivery:</strong> To understand your business needs and provide relevant marketing advice</li>
                <li><strong>Website improvement:</strong> To analyse how visitors use our website and improve user experience</li>
                <li><strong>Security:</strong> To protect our website from fraud, abuse, and security threats</li>
                <li><strong>Legal compliance:</strong> To comply with legal obligations and respond to lawful requests from authorities</li>
              </ul>
              <p className="text-secondary-text text-lg leading-relaxed">
                We do not use your information for marketing purposes unless you specifically request ongoing communications from us.
              </p>
            </div>

            {/* Legal Basis */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Legal Basis for Processing
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                Under UK GDPR, we process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-3 text-secondary-text text-lg mb-4 ml-4">
                <li><strong>Consent:</strong> When you submit our contact form, you consent to us using your information to respond to your enquiry</li>
                <li><strong>Legitimate interests:</strong> We have a legitimate interest in analysing website usage to improve our services and protect our website from security threats</li>
                <li><strong>Legal obligation:</strong> We may need to process your data to comply with legal requirements, such as responding to court orders or law enforcement requests</li>
              </ul>
            </div>

            {/* Data Storage and Security */}
            <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Data Storage and Security
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We take the security of your personal information seriously and implement appropriate measures to protect it:
              </p>
              <ul className="list-disc list-inside space-y-3 text-secondary-text text-lg mb-6 ml-4">
                <li><strong>Secure processing:</strong> Contact form submissions are processed through Netlify Forms, which uses industry-standard security measures</li>
                <li><strong>Data location:</strong> Your data is stored on servers located within the United Kingdom and European Union</li>
                <li><strong>Encryption:</strong> All data transmitted between your browser and our website is encrypted using SSL/TLS protocols</li>
                <li><strong>Access controls:</strong> Only authorised personnel have access to your personal information</li>
                <li><strong>Regular reviews:</strong> We regularly review and update our security measures to ensure your data remains protected</li>
              </ul>
              <p className="text-secondary-text text-lg leading-relaxed">
                While we implement robust security measures, please note that no method of electronic storage or transmission over the internet is completely secure. We cannot guarantee absolute security but commit to using industry best practices to protect your data.
              </p>
            </div>

            {/* Data Retention */}
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Data Retention
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We retain your personal information for the following periods:
              </p>
              <ul className="list-disc list-inside space-y-3 text-secondary-text text-lg mb-6 ml-4">
                <li><strong>Contact form submissions:</strong> We retain your enquiry details for up to 2 years from the date of submission, or until you request deletion</li>
                <li><strong>Website logs:</strong> Technical information collected automatically is retained for up to 12 months</li>
                <li><strong>Active clients:</strong> If you become a client, we retain your information for the duration of our business relationship and for 6 years afterwards for accounting and legal purposes</li>
              </ul>
              <p className="text-secondary-text text-lg leading-relaxed">
                After these retention periods, we securely delete or anonymise your personal information. You can request earlier deletion by contacting us on <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">07770 580125</a>.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Third-Party Services
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We use a limited number of third-party services to operate our website and process your information:
              </p>
              <ul className="list-disc list-inside space-y-3 text-secondary-text text-lg mb-6 ml-4">
                <li><strong>Netlify Forms:</strong> Processes contact form submissions. Netlify complies with GDPR and stores data securely</li>
                <li><strong>Website hosting:</strong> Our website is hosted on servers that comply with UK and EU data protection standards</li>
              </ul>
              <div className="bg-cottage-cream border-l-4 border-trevaunance-teal p-6 rounded-r">
                <p className="text-slate-deep text-lg font-medium mb-2">
                  What we DON'T use:
                </p>
                <p className="text-secondary-text text-base">
                  We do not use third-party marketing platforms, email marketing services, social media tracking pixels, or advertising networks. We believe in keeping your data secure and minimising third-party access.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Cookies and Similar Technologies
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                Our website uses a minimal number of cookies, which are small text files stored on your device.
              </p>

              <h3 className="font-dm-serif text-2xl text-slate-deep mb-4 mt-6">
                Essential Cookies
              </h3>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We use only essential cookies that are necessary for our website to function properly:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-text text-lg mb-6 ml-4">
                <li>Session management cookies (to maintain your browsing session)</li>
                <li>Security cookies (to protect against fraud and abuse)</li>
                <li>Form submission cookies (to prevent duplicate form submissions)</li>
              </ul>

              <div className="bg-cottage-cream border-l-4 border-harbour-rust p-6 mb-6 rounded-r">
                <p className="text-slate-deep font-medium text-lg mb-2">
                  We do NOT use:
                </p>
                <ul className="list-disc list-inside space-y-1 text-secondary-text text-base ml-4">
                  <li>Analytics or tracking cookies</li>
                  <li>Advertising cookies</li>
                  <li>Social media cookies</li>
                  <li>Third-party marketing cookies</li>
                </ul>
              </div>

              <h3 className="font-dm-serif text-2xl text-slate-deep mb-4 mt-6">
                Managing Cookies
              </h3>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                You can control and delete cookies through your browser settings. However, please note that blocking essential cookies may affect the functionality of our website. Here's how to manage cookies in common browsers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-text text-lg ml-4">
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="animate-fade-up" style={{ animationDelay: '0.9s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Your Rights Under UK GDPR
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-6">
                You have important rights regarding your personal information:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Right to Access
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    You can request a copy of the personal information we hold about you. We will provide this free of charge within one month of your request.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Right to Rectification
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    If any of your personal information is inaccurate or incomplete, you have the right to request that we correct or complete it.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Right to Erasure ("Right to be Forgotten")
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    You can request that we delete your personal information in certain circumstances, such as when it is no longer necessary for the purpose it was collected.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Right to Restrict Processing
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    You can request that we restrict the processing of your personal information in certain situations, such as while we verify the accuracy of data you have disputed.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Right to Data Portability
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    You have the right to receive your personal information in a structured, commonly used format and to transfer it to another service provider.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Right to Object
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    You can object to our processing of your personal information based on legitimate interests. We will stop processing unless we can demonstrate compelling legitimate grounds.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-serif text-xl text-slate-deep mb-2">
                    Rights Related to Automated Decision-Making
                  </h3>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    You have the right not to be subject to decisions based solely on automated processing. We do not use automated decision-making or profiling.
                  </p>
                </div>
              </div>

              <div className="bg-cottage-cream border-l-4 border-trevaunance-teal p-6 mt-8 rounded-r">
                <p className="text-slate-deep text-lg font-medium mb-2">
                  How to Exercise Your Rights
                </p>
                <p className="text-secondary-text text-base">
                  To exercise any of these rights, please contact us on <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">07770 580125</a>. We will respond to your request within one month and will not charge a fee unless your request is clearly unfounded or excessive.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="animate-fade-up" style={{ animationDelay: '1s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Children's Privacy
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                Our services are not directed at children under the age of 16. We do not knowingly collect personal information from children under 16.
              </p>
              <p className="text-secondary-text text-lg leading-relaxed">
                If we become aware that we have inadvertently collected personal information from a child under 16, we will take immediate steps to delete that information from our systems. If you believe we may have collected information from a child under 16, please contact us on <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">07770 580125</a>.
              </p>
            </div>

            {/* International Transfers */}
            <div className="animate-fade-up" style={{ animationDelay: '1.1s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                International Data Transfers
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We primarily store and process your data within the United Kingdom and European Union. If we need to transfer your data outside the UK/EU (which is rare), we will ensure appropriate safeguards are in place, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-text text-lg mb-4 ml-4">
                <li>Standard Contractual Clauses approved by the UK Information Commissioner's Office</li>
                <li>Adequacy decisions confirming the recipient country provides adequate data protection</li>
                <li>Other approved transfer mechanisms under UK GDPR</li>
              </ul>
              <p className="text-secondary-text text-lg leading-relaxed">
                We will always inform you if we plan to transfer your data internationally and explain the safeguards we have put in place.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="animate-fade-up" style={{ animationDelay: '1.2s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-text text-lg mb-4 ml-4">
                <li>Update the "Last updated" date at the top of this page</li>
                <li>Notify you of significant changes by posting a notice on our website</li>
                <li>Where required by law, obtain your consent for material changes</li>
              </ul>
              <p className="text-secondary-text text-lg leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-up" style={{ animationDelay: '1.3s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Contact Information
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="bg-cottage-cream border-l-4 border-trevaunance-teal p-6 rounded-r">
                <p className="text-slate-deep text-lg font-medium mb-3">Outcome Marketing</p>
                <p className="text-secondary-text text-base mb-2">Cornwall, United Kingdom</p>
                <p className="text-secondary-text text-base">
                  Telephone: <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors font-medium">07770 580125</a>
                </p>
              </div>
            </div>

            {/* Complaints */}
            <div className="animate-fade-up" style={{ animationDelay: '1.4s' }}>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-slate-deep mb-6">
                Right to Complain
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed mb-4">
                If you are unhappy with how we have handled your personal information, you have the right to lodge a complaint with the UK's data protection supervisory authority:
              </p>
              <div className="bg-cottage-cream border-l-4 border-harbour-rust p-6 rounded-r">
                <p className="text-slate-deep text-lg font-medium mb-3">
                  Information Commissioner's Office (ICO)
                </p>
                <p className="text-secondary-text text-base mb-2">
                  Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">ico.org.uk</a>
                </p>
                <p className="text-secondary-text text-base mb-2">
                  Telephone: 0303 123 1113
                </p>
                <p className="text-secondary-text text-base">
                  Address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                </p>
              </div>
              <p className="text-secondary-text text-lg leading-relaxed mt-4">
                However, we would appreciate the opportunity to address your concerns before you approach the ICO. Please contact us first on <a href="tel:07770580125" className="text-trevaunance-teal hover:text-slate-deep underline transition-colors">07770 580125</a> so we can try to resolve the issue directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PreFooterCTA
        title="Questions About Your Privacy?"
        description="If you have any questions about how we handle your data, we're here to help."
        buttonText="Contact Us"
        buttonHref="/contact"
        phoneText="Or call us:"
        phoneNumber="07770 580125"
      />
    </>
  );
}
