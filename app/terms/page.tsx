import type { Metadata } from 'next';
import PreFooterCTA from '@/components/sections/PreFooterCTA';

export const metadata: Metadata = {
  title: 'Terms of Service | Outcome Marketing',
  description: 'Terms of Service for Outcome Marketing - Cornwall-based digital marketing agency. Review our service terms, conditions, and policies.',
  openGraph: {
    title: 'Terms of Service | Outcome Marketing',
    description: 'Terms of Service for Outcome Marketing - Cornwall-based digital marketing agency. Review our service terms, conditions, and policies.',
    type: 'website',
  },
};

export default function TermsPage() {
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
        name: 'Terms of Service',
        item: 'https://outcomemarketing.co.uk/terms',
      },
    ],
  };

  const lastUpdated = 'November 2024';

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-cottage-cream pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up">
            <p className="text-trevaunance-teal text-sm md:text-base font-dm-sans font-semibold uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl text-slate-deep mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-secondary-text text-lg md:text-xl leading-relaxed max-w-3xl">
              Please read these terms carefully before using our services. By engaging Outcome Marketing, you agree to be bound by these terms.
            </p>
            <p className="text-secondary-text text-sm mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="bg-mist-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">

            {/* 1. About These Terms */}
            <div className="mb-12 animate-fade-up">
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                1. About These Terms
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you (the "Client") and Outcome Marketing ("we", "us", "our"), a digital marketing agency based in Cornwall, United Kingdom.
                </p>
                <p>
                  Our registered contact: <strong>07770 580125</strong>
                </p>
                <p>
                  By engaging our services, requesting a quote, or entering into a service agreement with us, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with any additional terms specific to the services you have commissioned.
                </p>
              </div>
            </div>

            {/* 2. Services We Provide */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                2. Services We Provide
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  Outcome Marketing provides the following digital marketing services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>One-Page Website Design:</strong> Creation of single-page websites including design, development, content integration, and basic on-page SEO optimization.
                  </li>
                  <li>
                    <strong>Search Engine Optimisation (SEO):</strong> Technical SEO audits, keyword research, on-page optimization, content strategy, link building outreach, and ongoing SEO consultancy.
                  </li>
                  <li>
                    <strong>Blog Writing Services:</strong> Research, writing, editing, and publishing of blog content tailored to your industry, audience, and SEO requirements.
                  </li>
                  <li>
                    <strong>Market Research Services:</strong> Competitor analysis, industry research, customer insights, keyword research, and market opportunity identification.
                  </li>
                </ul>
                <p>
                  All services are subject to a written proposal or Statement of Work ("SOW") that outlines deliverables, timelines, pricing, and any service-specific terms.
                </p>
              </div>
            </div>

            {/* 3. Service Engagement and Proposals */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                3. Service Engagement and Proposals
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>3.1 Initial Consultation:</strong> We offer an initial consultation to understand your requirements. This consultation is provided free of charge and does not create a binding agreement.
                </p>
                <p>
                  <strong>3.2 Proposal and Acceptance:</strong> Following consultation, we will provide a written proposal detailing the scope of work, deliverables, timeline, and fees. Your written acceptance of this proposal (via email or signed document) creates a binding agreement.
                </p>
                <p>
                  <strong>3.3 Scope Changes:</strong> Any changes to the agreed scope of work must be documented in writing and may result in adjusted fees and timelines. We will notify you of any additional costs before proceeding with out-of-scope work.
                </p>
                <p>
                  <strong>3.4 Client Cooperation:</strong> Timely delivery of services depends on your provision of necessary materials, information, access credentials, approvals, and feedback as outlined in the proposal. Delays caused by lack of client cooperation may extend project timelines and do not constitute a breach by Outcome Marketing.
                </p>
              </div>
            </div>

            {/* 4. Fees and Payment Terms */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                4. Fees and Payment Terms
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>4.1 Pricing:</strong> All fees are stated in British Pounds (GBP) and are exclusive of VAT unless otherwise stated. We reserve the right to charge VAT where applicable under UK law.
                </p>
                <p>
                  <strong>4.2 Payment Schedule:</strong> Payment terms are specified in each proposal. Typical payment structures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>One-off projects: 50% deposit upon acceptance, 50% upon completion</li>
                  <li>Ongoing services: Monthly invoicing in advance or as otherwise agreed</li>
                  <li>Project-based work: Milestone-based payments as outlined in the SOW</li>
                </ul>
                <p>
                  <strong>4.3 Payment Methods:</strong> We accept payment via bank transfer. Payment details will be provided on invoices.
                </p>
                <p>
                  <strong>4.4 Late Payment:</strong> Invoices are due within 14 days of issue unless otherwise agreed. Late payments may incur interest charges at a rate of 8% above the Bank of England base rate per annum, calculated daily, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
                </p>
                <p>
                  <strong>4.5 Non-Payment:</strong> We reserve the right to suspend services or terminate the agreement if payment is not received within 30 days of the due date. Any outstanding work or materials may be withheld until payment is received in full.
                </p>
                <p>
                  <strong>4.6 Expenses:</strong> Unless otherwise agreed, quoted fees include standard business expenses. Significant third-party costs (e.g., paid advertising, premium tools, stock images) will be quoted separately and require your prior approval.
                </p>
              </div>
            </div>

            {/* 5. Intellectual Property Rights */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                5. Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>5.1 Ownership of Deliverables:</strong> Upon full payment of all fees, you will own the final deliverables we create specifically for you, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website designs and code created specifically for your project</li>
                  <li>Blog content and written materials</li>
                  <li>Market research reports</li>
                  <li>Custom graphics and visual assets created for your use</li>
                </ul>
                <p>
                  <strong>5.2 Retained Rights:</strong> We retain ownership of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our proprietary methodologies, processes, and frameworks</li>
                  <li>Pre-existing intellectual property and templates</li>
                  <li>Working files, research notes, and draft materials</li>
                  <li>The right to showcase work in our portfolio (with your permission)</li>
                </ul>
                <p>
                  <strong>5.3 Third-Party Materials:</strong> Some projects may incorporate third-party elements (stock images, fonts, plugins, libraries). You are responsible for ensuring you have appropriate licenses for ongoing use of such materials. We can advise on licensing requirements but are not responsible for license compliance after project delivery.
                </p>
                <p>
                  <strong>5.4 Client Materials:</strong> You grant us a non-exclusive license to use materials you provide (logos, images, copy, brand assets) solely for the purpose of delivering the agreed services.
                </p>
                <p>
                  <strong>5.5 Portfolio Rights:</strong> We reserve the right to display completed work in our portfolio, website, and marketing materials unless you specifically request otherwise in writing. We will not disclose confidential business information.
                </p>
              </div>
            </div>

            {/* 6. Service-Specific Terms */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                6. Service-Specific Terms
              </h2>

              <div className="space-y-6 text-secondary-text text-base leading-relaxed">
                <div>
                  <h3 className="font-dm-sans text-xl text-slate-deep mb-3 font-semibold">
                    6.1 Website Design Services
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Websites are designed to work on modern browsers and devices. We test on current versions of Chrome, Firefox, Safari, and Edge.</li>
                    <li>You are responsible for ongoing hosting, domain registration, and maintenance after project completion unless otherwise agreed.</li>
                    <li>We will provide reasonable post-launch support as outlined in the proposal. Additional support may be subject to separate fees.</li>
                    <li>You must ensure you have rights to all content, images, and materials you provide for the website.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-dm-sans text-xl text-slate-deep mb-3 font-semibold">
                    6.2 SEO Services
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>No Ranking Guarantees:</strong> We cannot guarantee specific search engine rankings. SEO results depend on numerous factors including algorithm changes, competition, content quality, and website technical factors beyond our control.</li>
                    <li><strong>Timelines:</strong> SEO is a long-term investment. Meaningful results typically take 3-6 months or longer. We will provide regular reports on progress.</li>
                    <li><strong>Ethical Practices:</strong> We use only white-hat, ethical SEO techniques in compliance with search engine guidelines. We will never engage in spam, link schemes, or other practices that could result in penalties.</li>
                    <li><strong>Third-Party Changes:</strong> We are not liable for ranking losses resulting from search engine algorithm updates, competitor actions, or changes to your website made by third parties.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-dm-sans text-xl text-slate-deep mb-3 font-semibold">
                    6.3 Blog Writing Services
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All content is original and written specifically for you. We use plagiarism-checking tools to ensure originality.</li>
                    <li>You receive a specified number of revision rounds as outlined in the proposal. Additional revisions may incur extra charges.</li>
                    <li>Content is provided in draft form for your review and approval before publication.</li>
                    <li>You are responsible for final editorial decisions and legal compliance of published content.</li>
                    <li>Rush delivery may be available for an additional fee, subject to our availability.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-dm-sans text-xl text-slate-deep mb-3 font-semibold">
                    6.4 Market Research Services
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Research is based on publicly available information and industry-standard tools and methodologies.</li>
                    <li>While we strive for accuracy, we cannot guarantee the completeness or accuracy of third-party data sources.</li>
                    <li>Research reports are for your internal use only and should not be redistributed without our permission.</li>
                    <li>Business decisions based on our research are your responsibility. Our reports are advisory in nature.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Client Responsibilities */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                7. Client Responsibilities
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, complete information necessary for service delivery</li>
                  <li>Respond to requests for feedback, approvals, and materials in a timely manner</li>
                  <li>Provide access to necessary systems, platforms, and accounts as required</li>
                  <li>Ensure you have legal rights to all materials you provide to us</li>
                  <li>Review and approve deliverables within the agreed timeframe</li>
                  <li>Comply with all applicable laws and regulations in your use of our services</li>
                  <li>Maintain confidentiality of any login credentials or sensitive information we share</li>
                </ul>
              </div>
            </div>

            {/* 8. Confidentiality */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                8. Confidentiality
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>8.1 Mutual Obligations:</strong> Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of our working relationship.
                </p>
                <p>
                  <strong>8.2 Exceptions:</strong> Confidentiality obligations do not apply to information that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Is publicly available through no breach of this agreement</li>
                  <li>Is independently developed without use of confidential information</li>
                  <li>Is required to be disclosed by law or regulatory authority</li>
                  <li>Is already known to the receiving party without restriction</li>
                </ul>
                <p>
                  <strong>8.3 Duration:</strong> Confidentiality obligations survive termination of the agreement and continue for a period of three (3) years.
                </p>
              </div>
            </div>

            {/* 9. Warranties and Disclaimers */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                9. Warranties and Disclaimers
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>9.1 Our Warranties:</strong> We warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services will be performed with reasonable skill and care</li>
                  <li>Work will be completed in accordance with the agreed specification</li>
                  <li>We have the right to provide the services and deliver the agreed outputs</li>
                  <li>Original content we create will not infringe third-party intellectual property rights</li>
                </ul>
                <p>
                  <strong>9.2 Disclaimers:</strong> Except as expressly stated in these Terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We make no warranties, express or implied, regarding specific outcomes or results</li>
                  <li>We do not guarantee website traffic, search rankings, lead generation, or revenue increases</li>
                  <li>We are not responsible for the performance of third-party platforms, tools, or services</li>
                  <li>Digital marketing is inherently uncertain and results can vary significantly based on factors beyond our control</li>
                </ul>
                <p>
                  <strong>9.3 No Guarantee of Results:</strong> While we strive to deliver excellent results, we cannot guarantee specific business outcomes. Success depends on numerous factors including your business model, market conditions, competition, budget, and the quality of your products or services.
                </p>
              </div>
            </div>

            {/* 10. Limitation of Liability */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.9s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                10. Limitation of Liability
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>10.1 Maximum Liability:</strong> Our total liability for any claims arising from or related to our services, whether in contract, tort, or otherwise, shall not exceed the total fees paid by you for the specific services giving rise to the claim, up to a maximum of the fees paid in the preceding twelve (12) months.
                </p>
                <p>
                  <strong>10.2 Excluded Losses:</strong> We shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loss of profits, revenue, business, or anticipated savings</li>
                  <li>Loss of data or corruption of data</li>
                  <li>Loss of goodwill or reputation</li>
                  <li>Indirect, consequential, special, or punitive losses or damages</li>
                  <li>Losses resulting from your business decisions based on our advice or recommendations</li>
                  <li>Losses caused by factors beyond our reasonable control</li>
                </ul>
                <p>
                  <strong>10.3 Exceptions:</strong> Nothing in these Terms excludes or limits our liability for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Death or personal injury caused by our negligence</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Any liability that cannot be excluded by UK law</li>
                </ul>
                <p>
                  <strong>10.4 Basis of Bargain:</strong> You acknowledge that our fees have been set in reliance upon these limitations of liability and that these limitations are an essential basis of the bargain between us.
                </p>
              </div>
            </div>

            {/* 11. Indemnification */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.0s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                11. Indemnification
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  You agree to indemnify and hold harmless Outcome Marketing from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your breach of these Terms</li>
                  <li>Content, materials, or information you provide to us</li>
                  <li>Your violation of any law or third-party rights</li>
                  <li>Your use of deliverables in a manner not authorised by these Terms</li>
                  <li>Claims that materials you provided infringe third-party intellectual property rights</li>
                </ul>
              </div>
            </div>

            {/* 12. Term and Termination */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.1s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                12. Term and Termination
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>12.1 Project-Based Services:</strong> For fixed-scope projects, the agreement remains in effect until completion and final payment.
                </p>
                <p>
                  <strong>12.2 Ongoing Services:</strong> For ongoing services (monthly retainers, recurring work):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Either party may terminate with 30 days' written notice</li>
                  <li>You remain responsible for payment of fees for services provided up to the termination date</li>
                  <li>Work completed up to termination will be delivered upon receipt of final payment</li>
                </ul>
                <p>
                  <strong>12.3 Termination for Cause:</strong> Either party may terminate immediately if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The other party materially breaches these Terms and fails to remedy within 14 days of written notice</li>
                  <li>The other party becomes insolvent or enters administration</li>
                  <li>Continuing the relationship is no longer feasible due to significant changes in circumstances</li>
                </ul>
                <p>
                  <strong>12.4 Effect of Termination:</strong> Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must pay for all services provided up to the termination date</li>
                  <li>We will deliver completed work upon receipt of final payment</li>
                  <li>Work in progress may be delivered at our discretion</li>
                  <li>Neither party will be liable for any losses resulting from termination, except as specifically stated in these Terms</li>
                  <li>Sections relating to payment, intellectual property, confidentiality, and limitation of liability survive termination</li>
                </ul>
                <p>
                  <strong>12.5 Refunds:</strong> We do not provide refunds for completed work or ongoing services already rendered. If you terminate a project before completion, you are responsible for payment of work completed to date at our standard rates.
                </p>
              </div>
            </div>

            {/* 13. Force Majeure */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.2s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                13. Force Majeure
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including but not limited to: acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labour, or materials.
                </p>
                <p>
                  If a force majeure event prevents performance for more than 60 days, either party may terminate the agreement without penalty. Fees for completed work remain due.
                </p>
              </div>
            </div>

            {/* 14. Data Protection and Privacy */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.3s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                14. Data Protection and Privacy
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>14.1 Compliance:</strong> Both parties shall comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p>
                  <strong>14.2 Data Processing:</strong> Where we process personal data on your behalf, we act as a data processor and you remain the data controller. We will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process personal data only as necessary to deliver agreed services</li>
                  <li>Implement appropriate security measures</li>
                  <li>Not disclose personal data to third parties without your authorisation</li>
                  <li>Delete or return personal data upon termination as requested</li>
                </ul>
                <p>
                  <strong>14.3 Your Data Rights:</strong> Our privacy policy, available at our website, explains how we handle your personal data as a client.
                </p>
                <p>
                  <strong>14.4 Security:</strong> We implement reasonable security measures but cannot guarantee absolute security. You are responsible for maintaining the security of your own systems and accounts.
                </p>
              </div>
            </div>

            {/* 15. Dispute Resolution */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.4s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                15. Dispute Resolution
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>15.1 Good Faith Negotiations:</strong> In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiations.
                </p>
                <p>
                  <strong>15.2 Mediation:</strong> If negotiations fail to resolve the dispute within 30 days, both parties agree to attempt mediation before pursuing litigation. The costs of mediation shall be shared equally.
                </p>
                <p>
                  <strong>15.3 Litigation:</strong> If mediation is unsuccessful, disputes shall be resolved through the courts of England and Wales.
                </p>
              </div>
            </div>

            {/* 16. General Provisions */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.5s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                16. General Provisions
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  <strong>16.1 Entire Agreement:</strong> These Terms, together with any written proposal or SOW, constitute the entire agreement between the parties and supersede all prior communications, negotiations, and agreements.
                </p>
                <p>
                  <strong>16.2 Amendments:</strong> We may update these Terms from time to time. Material changes will be communicated to active clients with reasonable notice. Continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
                <p>
                  <strong>16.3 Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
                <p>
                  <strong>16.4 Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision or any other provision of these Terms.
                </p>
                <p>
                  <strong>16.5 Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations to a successor entity.
                </p>
                <p>
                  <strong>16.6 Third-Party Rights:</strong> These Terms are between you and Outcome Marketing. No third party has any rights under these Terms.
                </p>
                <p>
                  <strong>16.7 Notices:</strong> All notices must be in writing and delivered via email or registered post to the addresses provided by each party. Notices are deemed received when sent by email (with confirmation) or three business days after posting by registered mail.
                </p>
                <p>
                  <strong>16.8 Relationship:</strong> Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship between the parties. We are independent contractors.
                </p>
              </div>
            </div>

            {/* 17. Governing Law and Jurisdiction */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.6s' }}>
              <h2 className="font-dm-serif text-3xl text-slate-deep mb-6 border-b-2 border-trevaunance-teal pb-3">
                17. Governing Law and Jurisdiction
              </h2>
              <div className="space-y-4 text-secondary-text text-base leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the courts of England and Wales for the resolution of any disputes arising from or relating to these Terms or the services provided.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-8 bg-cottage-cream rounded-lg border-l-4 border-trevaunance-teal animate-fade-up" style={{ animationDelay: '1.7s' }}>
              <h2 className="font-dm-serif text-slate-deep text-2xl mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-secondary-text mb-4">
                If you have any questions about these Terms of Service or need clarification on any provision, please contact us:
              </p>
              <div className="text-secondary-text space-y-2">
                <p>
                  <strong>Phone:</strong> <a href="tel:07770580125" className="text-trevaunance-teal hover:underline">07770 580125</a>
                </p>
                <p>
                  <strong>Location:</strong> Cornwall, United Kingdom
                </p>
              </div>
              <p className="text-secondary-text text-sm mt-6">
                By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PreFooterCTA
        title="Ready to Get Started?"
        description="Let's discuss your project and how we can help your business grow with honest, effective digital marketing."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
