import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  content: React.ReactNode;
}

const posts: Record<string, BlogPost> = {
  'how-much-does-seo-cost': {
    title: 'How Much Does SEO Cost? A Transparent Guide for UK Businesses',
    description: 'An honest breakdown of SEO pricing factors without the sales pitch. Learn what affects costs, what to watch for, and how to evaluate proposals.',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'SEO',
    excerpt: 'An honest breakdown of SEO pricing factors without the sales pitch. Learn what affects costs, what to watch for, and how to evaluate proposals.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&auto=format',
    heroAlt: 'SEO analytics dashboard showing website metrics',
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          If you've ever tried to find out how much SEO costs, you've probably noticed something frustrating: no one seems willing to give you a straight answer. Every agency website tells you to "get in touch for a quote" or talks about "bespoke solutions tailored to your needs."
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Here's the truth: there's a reason why <a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">SEO pricing</a> is confusing. It's not because agencies are trying to be difficult. It's because SEO costs genuinely vary depending on a huge number of factors. What works for a local plumber in Truro will be completely different from what a national e-commerce business needs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          That said, the confusion around SEO pricing has created an environment where some agencies take advantage of businesses who don't know what they should be paying. So let's break down what actually affects SEO costs, what you should expect to pay, and how to spot the red flags.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What Affects SEO Cost?</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Website Size and Complexity</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A simple five-page website for a local tradesman requires far less work than a 500-page e-commerce site. More pages means more to optimize, more content to create, more technical issues to fix, and more ongoing maintenance. This directly impacts how much time is needed, and therefore cost.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Competition Level</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you're trying to rank for "<Link href="/blog/local-seo-small-business-guide" className="text-trevaunance-teal hover:underline">plumber Penzance</Link>," you're competing against a handful of local businesses. If you're trying to rank for "business insurance," you're competing against massive companies with huge marketing budgets. The more competitive your keywords, the more work it takes to rank, and the more it costs.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Current State of Your Website</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If your <Link href="/blog/website-design-for-tradesmen" className="text-trevaunance-teal hover:underline">website is relatively new</Link> and has major technical problems, there's a lot of foundation work needed before you can even think about ranking. If you have an established site with good technical health, you can focus more on content and links. Starting from scratch always costs more than improving something that's already decent.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Your Industry and Location</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Some industries are naturally more competitive than others. Financial services, legal, and healthcare tend to be expensive because the competition is fierce and the value of rankings is high. Location matters too - ranking in London is typically more competitive and expensive than ranking in smaller towns.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Your Goals and Timeline</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you need results quickly, that requires more intensive work and therefore costs more. If you're happy with steady, sustainable growth over 12-18 months, that's typically more cost-effective. Similarly, if you want to dominate your entire industry, that costs more than ranking for a specific set of targeted keywords.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Types of SEO Services</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">One-Off SEO Audit</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is where someone analyzes your website and gives you a detailed report of what needs fixing. It's like a health check for your site. This is typically the most affordable option because it's a one-time piece of work, but it doesn't include actually implementing any changes. You get the roadmap, but you need to follow it yourself or hire someone to do it.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Monthly SEO Retainer</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is the most common arrangement. You pay a monthly fee and the agency does ongoing SEO work: fixing technical issues, creating content, building links, monitoring performance, and adjusting strategy based on results. The advantage is consistent, long-term improvement. The downside is the ongoing cost, though SEO does require ongoing work to maintain and improve rankings.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Project-Based SEO</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sometimes it makes sense to approach SEO as a specific project: "Rebuild the website with proper SEO foundations" or "Create 20 high-quality service pages targeting our core keywords." This gives you a defined scope and fixed cost, but doesn't include the ongoing work that SEO typically needs.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why We Don't Publish Prices</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You'll notice we haven't given you specific numbers yet. That's because every business really is different. Costs vary significantly based on your needs, and providing a broad range isn't actually helpful for understanding what you should budget.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          A local business in Cornwall with a simple website and limited competition will require a very different investment than a national business in a competitive industry. Both get value for money - they're just operating at different scales with different requirements.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Publishing prices would either mean we overcharge small businesses (because we quote for the complex scenarios) or undercharge larger businesses (because we quote for simple scenarios). Neither is fair or honest.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Red Flags to Watch For</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Guaranteed Rankings</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          No one can guarantee specific rankings. <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Google's algorithm</a> is complex and constantly changing. If an agency guarantees you'll rank number one for competitive keywords, they're either lying or planning to use dodgy tactics that will get you penalized.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Suspiciously Cheap Packages</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If someone offers comprehensive SEO for £99 per month, the work either isn't being done properly, or isn't being done at all. Good SEO requires time from skilled people. That costs money. Cheap packages usually mean automated tools, template content, and no real strategy.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Pay for Performance Only</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          "You only pay if we get results" sounds great, but it's usually a red flag. These arrangements typically focus on easy, low-value keywords that won't actually help your business. Or they use risky tactics to get quick results that won't last. Legitimate SEO work has value even if results take time.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Lack of Transparency</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If an agency won't tell you what work they're actually doing, or explains everything in jargon you can't understand, that's a problem. You should know what you're paying for and be able to see the work being done.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What Good SEO Actually Costs</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Here's a reality check: good SEO work takes time from skilled people. A proper SEO specialist or agency needs to understand technical SEO, content strategy, link building, analytics, and your specific industry. That expertise has value.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The investment required depends on several factors including your industry competitiveness, website size, and <a href="https://www.gov.uk/business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">business goals</a>. Pricing depends on several factors, and we provide transparent quotes tailored to your situation. Remember you're not just paying for rankings - you're investing in a channel that can bring consistent, high-quality leads for years.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          One-off audits, monthly retainers, and project-based work all vary depending on scope and complexity. The key is understanding what's included in any proposal and ensuring the investment aligns with the value you'll receive.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">How to Evaluate SEO Proposals</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          When you're comparing quotes from different agencies, don't just look at the price. Ask what's actually included. How many hours of work? What specific tasks? How often will you get reports? Who will you be working with?
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Two similarly-priced packages can offer vastly different value. One might include extensive work from an experienced SEO specialist, while another might offer minimal hours from a junior person using automated tools. The price might be the same, but the value is completely different.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ask about their process. How do they approach SEO? What does the first month look like? How do they measure success? Do they focus on rankings, or on business outcomes like leads and revenue? How do they communicate and report progress?
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Bottom Line</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          SEO costs vary because businesses vary. What you should pay depends on your website, your competition, your industry, and your goals. Anyone who gives you a price without understanding your situation is either guessing or offering a one-size-fits-all solution that probably won't fit.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The real question isn't "how much does SEO cost?" It's "what will I get for my investment?" Good SEO should generate more value than it costs. If your investment brings in significantly more business than what you're spending, that's a good investment. If you're spending money and getting nothing, it's too expensive regardless of the amount.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Focus on finding an agency that's transparent about what they do, realistic about timelines, and focused on your business outcomes rather than just rankings. Then the cost becomes an investment rather than an expense. If you'd like to discuss <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">our SEO services</Link> and get a transparent quote for your specific situation, <Link href="/contact" className="text-trevaunance-teal hover:underline">get in touch</Link>.
        </p>
      </>
    )
  },
  'website-design-for-tradesmen': {
    title: 'Website Design for Tradesmen: What Plumbers, Electricians and Builders Really Need',
    description: 'Everything tradespeople need to know about getting a website that actually brings in work. No technical jargon, just practical advice.',
    date: '2024-11-15',
    readTime: '10 min read',
    category: 'Web Design',
    excerpt: 'Your website should work as hard as you do. Learn how to create a professional online presence that wins you work without breaking the bank.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format',
    heroAlt: 'Construction tools and blueprints on workbench',
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          If you're a plumber, electrician, builder, or any other tradesperson, you've probably been told you need a website. You might even have one already. But here's the question that actually matters: is it bringing you work?
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Most tradesman websites fall into one of two categories. Either they're expensive, overcomplicated, and full of features you don't need. Or they're cheap, template-based, and so basic they might as well not exist. Neither actually helps you get more customers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This guide is about what tradesmen actually need from a website. Not what web designers think you should have, not what looks impressive, but what genuinely helps you win more work and grow your business.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Tradesmen Need Websites in 2024</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Let's be honest: word of mouth used to be enough. If you did good work, people recommended you. You got busy. You didn't need marketing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          That's changed. When someone needs a <Link href="/blog/local-seo-small-business-guide" className="text-trevaunance-teal hover:underline">plumber or electrician now</Link>, the first thing they do is search on their phone. If you're not showing up in those searches, you're losing work to competitors who are. And if you do show up but your website looks unprofessional or doesn't give people confidence, they'll move on to the next result.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          A website isn't about being trendy or high-tech. It's about being findable when people need you, and giving them enough information to choose you over someone else. That's it.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Problem with Generic Website Builders</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You've seen the ads. "Build your website in minutes!" "No coding required!" "Free templates!" These DIY website builders sound great, but they create specific problems for tradesmen.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          First, the templates aren't designed for trades businesses. They're generic. They might work fine for a photographer or a consultant, but they don't show what matters for a tradesman: your service area, your qualifications, your availability, and how to contact you urgently if needed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Second, these sites are often terrible for <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">SEO</Link>. They might look okay, but Google doesn't find them, or doesn't rank them well. You could have a perfectly nice website that no one ever sees.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Third, they usually look like templates. When someone's choosing between three plumbers, and two have professional websites while one clearly used a free template, who do you think they'll call?
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What Makes a Good Tradesman Website</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Mobile-First Design</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Most people searching for a plumber or electrician are on their phone. Either because something's broken and they need help now, or because they're at work and quickly searching during a break. If your website doesn't work well on mobile, you're losing work.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Mobile-first doesn't just mean "works on phones." It means the phone number is immediately visible and clickable. It means the navigation is simple. It means pages load quickly even on patchy mobile internet. It means people can find what they need and contact you in seconds, not minutes.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Fast Loading Speed</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If your website takes more than a few seconds to load, people leave. They don't wait. They go to the next search result. This is especially true for tradesmen - when someone needs a plumber because their kitchen is flooding, they're not going to wait around for fancy animations to load.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fast loading isn't just about user experience. Google uses speed as a ranking factor. Slow websites rank lower. So you lose customers twice - once because people leave before the site loads, and again because fewer people find you in the first place.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Clear Contact Information</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This should be obvious, but you'd be amazed how many tradesman websites make it hard to actually contact the business. Your phone number should be at the top of every page. On mobile, it should be a clickable link that calls you directly. Your email address should be clearly visible. If you have an office, show the address.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't hide your contact details behind a "Contact Us" page that requires filling in a form. Have a form if you want, but always provide direct contact methods too. Some people prefer calling, some prefer email. Give them options.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Trust Signals</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          People are inviting you into their homes or businesses. They need to trust you. Your website should establish that trust through qualifications, certifications, insurance details, and how long you've been trading.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you're Gas Safe registered, show it. If you're NICEIC approved, show it. If you're fully insured, say so. If you've been trading for 15 years, that's worth mentioning. These aren't bragging - they're reassurance for potential customers who don't know you yet. As outlined in <a href="https://www.gov.uk/set-up-business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">official UK business guidance</a>, displaying your credentials builds legitimacy.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Essential Features for Tradesman Websites</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Service Areas</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Make it crystal clear where you work. Don't just say "Cornwall" - list the specific towns and areas you cover. This helps with local SEO (more on that later) and helps potential customers immediately see if you cover their area.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you're willing to travel further for certain jobs, or charge more for areas outside your main region, explain that too. The clearer you are about where you work, the fewer time-wasting enquiries from people outside your area.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Services Explained</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't assume people know what you do. "Electrical services" could mean anything. Be specific: do you do rewiring, fusebox upgrades, EV charger installation, emergency callouts? List your services clearly.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          For each service, explain it in simple language. What's involved? How long does it typically take? What should customers expect? You're not writing a technical manual - you're helping someone who doesn't know much about your trade make a decision.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">About Section</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This isn't about writing your life story. It's about showing you're a real person who knows their trade. How long have you been doing this? What qualifications do you have? Why should someone choose you?
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          A photo of you (or your team) helps. People prefer working with real people they can see, not faceless companies. It doesn't need to be a professional photoshoot - a decent photo in your work clothes on a job site is often more trustworthy than a staged studio shot.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Gallery or Examples</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Show examples of your work. Before and after photos work well. Pictures of completed jobs. Anything that demonstrates you actually do what you claim to do. You don't need dozens of photos - six to ten good examples is plenty.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Make sure photos are decent quality and show the work clearly. Blurry phone photos of dark corners don't help anyone. If you're not confident about photography, it's worth getting someone to take proper photos of a few jobs.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">One-Page vs Multi-Page Websites</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          For many tradesmen, a <Link href="/services/one-page-website" className="text-trevaunance-teal hover:underline">well-designed one-page website</Link> is enough. Everything potential customers need to know is right there: what you do, where you work, how to contact you, examples of your work, and your qualifications. No clicking through multiple pages. No confusion. No getting lost.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          One-page sites are typically cheaper to build and easier to maintain. They load fast. They work well on mobile. And they give people all the information they need to make a decision.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Multi-page sites make sense if you offer several distinct services that each need proper explanation. A builder doing new builds, extensions, and renovations might want separate pages for each. An electrician doing domestic, commercial, and EV charging might want to split those out. But if you're a straightforward plumber offering standard plumbing services, one page is usually enough.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Local SEO Basics for Trades</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          SEO sounds complicated, but for tradesmen, local SEO is mostly common sense. You want to show up when people in your area search for what you do.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Google Business Profile</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is the single most important thing you can do for local visibility. It's free, and it makes you show up in Google Maps and local search results. According to <a href="https://www.brightlocal.com/research/" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">BrightLocal research</a>, 87% of consumers read online reviews for local businesses. Set up your <a href="https://support.google.com/business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Google Business Profile</a>, keep it updated, and ask satisfied customers to leave reviews.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Keywords</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Include your location in your website content naturally. Not "plumber" but "plumber in Truro" or "emergency electrician Newquay." Don't stuff keywords awkwardly - just mention your location in ways that make sense.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Consistent Information</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Use the same business name, address, and phone number everywhere: your website, Google Business, social media, directories. Inconsistent information confuses Google and hurts your rankings.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Mistakes Tradesmen Make</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">No Clear Call to Action</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't make people hunt for how to contact you. Have a clear "Call Now" button or "Get a Quote" form prominently displayed. Tell people exactly what you want them to do next.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Too Much Text</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          People won't read paragraphs of text about your company history or your philosophy. Give them the essential information in simple, scannable chunks. Use headings, bullet points, and short paragraphs.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Outdated Content</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If your website says you're accepting new customers but your phone goes to voicemail for three days, people will assume you're not actually available. Keep your website current. If circumstances change, update your site.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Trying to Be Too Clever</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          You don't need animations, video backgrounds, or complex navigation. You need clear information and easy contact methods. Simple, professional, and functional beats fancy every time.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Our Approach to Tradesman Websites</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          When we build websites for tradesmen, we focus on what actually matters: being found by local customers and converting visitors into enquiries. That means proper <Link href="/blog/local-business-marketing-cornwall" className="text-trevaunance-teal hover:underline">local marketing</Link> setup, mobile-optimized design, fast loading speeds, and clear calls to action.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We don't add features you don't need. We don't use complicated jargon. We build websites that work for your business and your budget. Sometimes that's a simple one-page site. Sometimes it's a more comprehensive multi-page site. It depends on what you actually need, not what we can convince you to pay for.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you're a tradesperson in Cornwall or elsewhere in the UK, and you want a website that actually brings in work rather than just sitting there looking pretty, <Link href="/contact" className="text-trevaunance-teal hover:underline">let's talk</Link>.
        </p>
      </>
    )
  },
  'local-business-marketing-cornwall': {
    title: 'Local Business Marketing: A Complete Guide for Cornwall Businesses',
    description: 'Practical local marketing strategies for businesses in Cornwall and the South West. Learn how to compete effectively in your local market.',
    date: '2024-11-10',
    readTime: '12 min read',
    category: 'Local Marketing',
    excerpt: 'Marketing strategies that actually work for Cornwall businesses. From tourists to locals, learn how to reach the customers who matter.',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format',
    heroAlt: 'Cornwall coastal village with local businesses',
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Running a business in Cornwall comes with unique challenges. You're geographically isolated from major business centers, your market is seasonal, and you're competing with established businesses that have deep local roots. But you also have advantages: a strong sense of community, customers who prefer supporting local businesses, and a market that's underserved by digital marketing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This guide covers practical local marketing strategies specifically for Cornwall businesses. Not generic advice that might work anywhere, but tactics that make sense for businesses operating in this region.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Unique Challenges of Marketing in Cornwall</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Geographic Isolation</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cornwall is brilliant if you live here, but it's a long way from everywhere else. This affects everything from supplier costs to customer reach. If your business serves customers across the UK, you're competing against companies based in more central locations. If you serve local customers only, your market is smaller and often seasonal.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This means local marketing is especially important. You can't rely on passing trade from business travelers or benefit from being near major population centers. You need to be exceptionally visible to the customers who are actually in Cornwall.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Seasonal Economy</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Many Cornwall businesses experience massive swings between summer and winter. Tourism brings money in, but it's concentrated into a few months. This creates two challenges: making enough during peak season to sustain you year-round, and finding ways to generate income during quiet periods.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your marketing needs to reflect this seasonality. Summer marketing might focus on tourists and day-trippers. Winter marketing might focus on locals, or on positioning yourself for the year ahead. One-size-fits-all marketing approaches don't work well here.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Competition from Established Businesses</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cornwall has a lot of family businesses that have been around for decades. These businesses have established reputations, customer loyalty, and word-of-mouth networks. Breaking into established markets is hard when you're competing against businesses that served your potential customer's parents.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          However, many established Cornwall businesses are weak on digital marketing. They rely on traditional methods and reputation. This creates opportunities for newer businesses who get digital marketing right.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Local SEO Fundamentals</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <Link href="/blog/local-seo-small-business-guide" className="text-trevaunance-teal hover:underline">Local SEO</Link> is about showing up when people in your area search for what you offer. This is crucial for Cornwall businesses because your customers are geographically limited.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Location-Specific Content</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Include your location throughout your website, but naturally. Don't just say you're a "plumber" - say you're a "plumber in Truro" or "covering Penzance and West Cornwall." Create pages for specific service areas if you cover multiple towns.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Write about local topics that matter to your customers. If you're a builder, write about planning permission in Cornwall or building regulations for listed buildings in St Ives. This helps you rank for local searches and shows you understand the local context.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Keywords</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Think about how locals actually search. Someone in Falmouth looking for a plumber might search "plumber Falmouth," "emergency plumber near me," or "plumber in Cornwall." Your website should include these phrases naturally in your content.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't keyword stuff - don't repeat "plumber Falmouth" twenty times on one page. Just make sure your location is mentioned in sensible places: page titles, headings, service descriptions, and your about section.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Mobile Optimization</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Local searches happen on mobile. Someone driving through Newquay who needs a bakery or a coffee shop will search on their phone right now. If your website doesn't work well on mobile, you're invisible to these customers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Mobile optimization means fast loading, easy navigation, and immediately visible contact information. Your phone number should be clickable so people can call you directly from search results.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Google Business Profile Optimization</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is the most important single thing you can do for local visibility. <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Google Business Profile</a> (formerly Google My Business) is free, and it makes you show up in Google Maps and local search results. If you do nothing else from this guide, set up and optimize your Google Business Profile.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Complete Every Section</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fill in every field: business name, address, phone number, website, opening hours, services, description. Add photos of your business, your products, your team. The more complete your profile, the better you rank.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Choose the Right Categories</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your primary category is crucial. Choose the most specific category that describes your business. You can add secondary categories too, but your primary category has the biggest impact on where you show up.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Keep Information Current</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If your hours change for winter, update your profile. If you're closed for holidays, mark it. If your phone number changes, update it immediately. Outdated information frustrates customers and hurts your rankings.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Post Regular Updates</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Business Profile lets you post updates, offers, and events. Use this feature. Post about new products, seasonal offers, or anything newsworthy about your business. Regular posts signal to Google that your business is active.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Respond to Questions</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          People can ask questions on your Google Business Profile. Answer them promptly and helpfully. These Q&As are public and show up to everyone viewing your profile. Good answers help customers and demonstrate you're responsive.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Online Reviews and Reputation</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Reviews matter more for local businesses than almost anything else. People trust reviews from other locals. A Cornwall business with 50 five-star reviews from local customers is going to win business over a competitor with no reviews, even if that competitor has a better website.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Ask for Reviews</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Most satisfied customers won't leave a review unless you ask. After completing a job or making a sale, if the customer seems happy, ask them to leave a review. Make it easy - send them a direct link to your Google Business Profile.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't offer incentives for reviews - that's against Google's policies and can get your listing penalized. Just ask nicely and make it convenient.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Respond to All Reviews</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Thank people for positive reviews. Respond professionally to negative reviews, acknowledging the issue and explaining what you've done or will do about it. How you handle negative reviews often matters more than the review itself.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't argue with reviewers or get defensive. Don't accuse people of lying. Stay professional even if the review is unfair. Other potential customers are watching how you respond.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Monitor Your Reputation</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Set up Google alerts for your business name. Check your reviews regularly. The faster you can respond to problems, the better you can manage your reputation.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Social Media for Local Businesses</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <Link href="/blog/social-media-marketing-small-business" className="text-trevaunance-teal hover:underline">Social media</Link> can work well for local businesses, but it needs to be done right. It's not about having thousands of followers - it's about being visible to your local community.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Choose the Right Platforms</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          You don't need to be on every platform. According to <a href="https://www.ofcom.org.uk/research-and-data" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Ofcom research</a>, Facebook still dominates for local business in Cornwall - it's where locals look for recommendations and discuss local businesses. Instagram works well if your business is visual (<Link href="/blog/restaurant-marketing-ideas" className="text-trevaunance-teal hover:underline">restaurants</Link>, retail, tourism). LinkedIn is good for B2B services.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't spread yourself too thin. It's better to do one or two platforms well than five platforms badly.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Focus on Local Content</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Post about local events, local news, and local interests. Tag local businesses when relevant. Engage with local community groups and pages. The more embedded you are in local social media networks, the more visible you become.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Be Consistent but Not Overwhelming</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Post regularly - a few times per week is fine for most businesses. You don't need to post daily. Quality matters more than quantity. One genuinely useful or interesting post per week is better than seven boring promotional posts.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Community Engagement and Local Partnerships</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cornwall has a strong sense of community. Businesses that actively participate in that community do better than those that don't.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Partnerships</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Partner with complementary businesses. A wedding photographer might partner with local venues. A builder might partner with architects or interior designers. These partnerships create referral networks and make you part of the local business ecosystem. Our <Link href="/services/research" className="text-trevaunance-teal hover:underline">market research services</Link> can help identify the best partnership opportunities for your business.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Community Events and Sponsorship</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sponsor local sports teams, school events, or community festivals. This isn't just altruism - it's visibility. Your business name on a sports shirt or event banner is seen by hundreds or thousands of local people.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Networking</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Join local business networks and chambers of commerce. Attend networking events. Cornwall's business community is relatively small - the more people who know your business and what you do, the more referrals you'll get.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Seasonal Considerations for Cornwall Businesses</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Peak Season Strategy</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          During summer, focus marketing on tourists and visitors if they're part of your market. Make sure your Google Business Profile highlights what makes you relevant to visitors. Update your social media with what's happening now. Make it easy for tourists to find and contact you.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Off-Season Strategy</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Winter is when you focus on locals and on building foundations for next year. This is the time for content marketing, improving your <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">SEO</Link>, building relationships with other local businesses, and planning next season's marketing.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Year-Round Local Focus</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Even if tourists are a big part of your business, don't neglect locals. Local customers provide year-round income, leave reviews, make referrals, and give you stability when tourism slows down.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Measuring Local Marketing Success</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't just do marketing and hope it works. Track what's actually bringing you customers.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Track Where Enquiries Come From</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ask new customers how they found you. Keep a simple record: Google search, Google Maps, Facebook, word of mouth, etc. Over time, you'll see which marketing channels actually work for your business.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Monitor Google Business Insights</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Business Profile shows you how many people found your listing, how they found it, and what actions they took. Check this regularly. If views are going up but calls aren't, something's wrong with how you're presenting your business.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Review Website Analytics</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you have Google Analytics on your website, check where traffic is coming from and what pages people visit. Are people finding you through local searches? Are they looking at your contact page? This tells you if your website is actually helping you get customers.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Moving Forward</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Local marketing for Cornwall businesses isn't complicated, but it does require consistent effort. Focus on the fundamentals: a good Google Business Profile, getting reviews, being visible on local social media, and building relationships in the community.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          You don't need a massive budget or fancy strategies. As <a href="https://www.gov.uk/business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">UK Government business support</a> advises, you need to be findable when locals search for what you offer, trustworthy when they check you out, and professional when they contact you. Get those basics right, and you'll do better than most of your competition.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you need help with any of this - whether it's setting up your Google Business Profile, improving your website's local SEO, or developing a complete local marketing strategy - that's exactly what we do for Cornwall businesses. <Link href="/contact" className="text-trevaunance-teal hover:underline">Get in touch</Link> to discuss how we can help.
        </p>
      </>
    )
  },
  'local-seo-small-business-guide': {
    title: 'Local SEO for Small Business: The Complete UK Guide [2025]',
    description: 'Everything UK small businesses need to know about local SEO. Practical strategies to appear in local search results and attract customers in your area.',
    date: '2025-11-27',
    readTime: '15 min read',
    category: 'Local SEO',
    excerpt: 'Master local SEO without the jargon. A practical guide to getting your small business found by customers in your area.',
    heroImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1920&q=80&auto=format',
    heroAlt: 'Local business location pin on map',
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          If you run a small business in the UK, local SEO isn't optional anymore—it's essential. When 46% of all Google searches have local intent, and 76% of people who search for something nearby visit a business within a day, being visible in local search results directly impacts your revenue.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This guide cuts through the jargon and gives you practical, actionable strategies that actually work for UK businesses. Whether you're a tradesperson, retailer, restaurant, or service provider, these techniques will help you appear when local customers are searching for what you offer.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What Is Local SEO and Why Does It Matter?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Local SEO is the practice of optimising your online presence to attract more business from relevant local searches. These searches take place on Google and other search engines, typically with geographic qualifiers like "plumber in Manchester" or "best coffee shop near me."
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          According to <a href="https://support.google.com/business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Google's own data</a>, "near me" searches have grown by over 500% in recent years. For UK small businesses, this represents an enormous opportunity to reach customers at the exact moment they're ready to buy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The local SEO landscape includes three main components: Google Business Profile optimisation, on-page local SEO for your website, and building local citations and backlinks. Master all three, and you'll dominate local search results in your area.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Google Business Profile: Your Local SEO Foundation</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your Google Business Profile (formerly Google My Business) is the single most important factor in local SEO. It's free, and it determines whether you appear in the "Map Pack"—those three business listings that appear at the top of local search results.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Claiming and Verifying Your Profile</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you haven't already, claim your Google Business Profile at <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">business.google.com</a>. Google will verify you own the business, typically by sending a postcard with a verification code to your business address. This process can take 1-2 weeks, so start immediately.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Profile Optimisation Essentials</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Complete every single field in your profile. Businesses with complete profiles are 70% more likely to attract location visits. Here's what you need:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Business name:</strong> Use your exact legal business name. Don't stuff keywords.</li>
          <li><strong>Primary category:</strong> Choose the most specific category that describes your business.</li>
          <li><strong>Secondary categories:</strong> Add all relevant additional categories (up to 9).</li>
          <li><strong>Address:</strong> Must match your website and all other online listings exactly.</li>
          <li><strong>Phone number:</strong> Use a local phone number, not a call tracking number.</li>
          <li><strong>Website:</strong> Link to your homepage or a dedicated landing page.</li>
          <li><strong>Hours:</strong> Keep these accurate, including holiday hours.</li>
          <li><strong>Description:</strong> Write a compelling 750-character description with your main services and locations.</li>
          <li><strong>Products/Services:</strong> List everything you offer with descriptions and prices where applicable.</li>
          <li><strong>Photos:</strong> Add at least 10 high-quality photos of your business, team, and work.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">The Power of Google Reviews</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Reviews are a critical ranking factor. According to <a href="https://www.brightlocal.com/research/" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">BrightLocal research</a>, 87% of consumers read online reviews for local businesses. Here's how to build your review profile:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Ask satisfied customers for reviews immediately after completing work</li>
          <li>Make it easy by sending a direct link to your review page</li>
          <li>Respond to every review—positive and negative—within 24-48 hours</li>
          <li>Never buy fake reviews; Google will penalise you</li>
          <li>Aim for a steady stream of reviews rather than getting 50 in one week</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">On-Page Local SEO for Your Website</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your website needs to signal to Google that you serve specific geographic areas. Here's how to optimise your site for local search:
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Location-Based Content Strategy</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Create dedicated pages for each location or service area you target. A plumber covering multiple towns should have pages for "Plumber in Birmingham," "Plumber in Solihull," etc. Each page needs unique, valuable content—not just the same text with different location names swapped in.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your homepage should clearly state your primary service area. Include your full business address in the footer of every page, ideally with schema markup (more on that below).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Title Tags and Meta Descriptions</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Include your location in title tags: "Emergency Plumber in Bristol | 24/7 Same-Day Service | ABC Plumbing"
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Meta descriptions should also mention location and include a clear call to action: "Need an emergency plumber in Bristol? ABC Plumbing offers 24/7 same-day service across Bristol and South Gloucestershire. Call now for a free quote."
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Schema Markup</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Schema markup helps search engines understand your business information. At minimum, implement LocalBusiness schema with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Business name, address, phone number</li>
          <li>Opening hours</li>
          <li>Geographic service area</li>
          <li>Business type/category</li>
          <li>Reviews and ratings (if you have testimonials on your site)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you need help with technical SEO elements like schema markup, our <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">website SEO service</Link> covers all of this.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Building Local Citations</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Citations are mentions of your business name, address, and phone number (NAP) on other websites. They help Google verify your business is legitimate and located where you say it is.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Essential UK Business Directories</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Get listed on these core UK directories first:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Yell.com</li>
          <li>Thomson Local</li>
          <li>Yelp UK</li>
          <li>Bing Places</li>
          <li>Apple Maps</li>
          <li>Facebook Business Page</li>
          <li>Checkatrade or MyBuilder (for trades)</li>
          <li>TripAdvisor (for hospitality)</li>
          <li>Industry-specific directories for your sector</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">NAP Consistency</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your business name, address, and phone number must be exactly the same everywhere. "123 High Street" is different from "123 High St." Pick one format and use it consistently across all platforms. Inconsistent NAP information confuses Google and hurts your rankings.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Mobile Optimisation for Local Search</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Over 60% of local searches happen on mobile devices. If your website isn't mobile-friendly, you're losing customers. Google uses mobile-first indexing, meaning it primarily looks at your mobile site when determining rankings.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Key mobile optimisation factors:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Fast loading speed (under 3 seconds)</li>
          <li>Clickable phone number</li>
          <li>Easy-to-use navigation</li>
          <li>Readable text without zooming</li>
          <li>Contact form that works on mobile</li>
          <li>Tap-friendly buttons (at least 48px)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Local Link Building Strategies</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Links from other local websites signal to Google that you're a legitimate local business. Here are effective ways to build local links:
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Community Involvement</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sponsor local sports teams, school events, or charity fundraisers. These organisations often link to their sponsors from their websites. It's good for the community and good for SEO.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Business Partnerships</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Partner with complementary local businesses. A wedding photographer might partner with florists, venues, and caterers. Create joint content, refer customers to each other, and link to each other's websites where it makes sense.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Press and News</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Got a newsworthy story? Reach out to local newspapers and news websites. Expansions, awards, community initiatives, or expert commentary on local issues can all generate press coverage and valuable backlinks.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Tracking Your Local SEO Progress</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You need to measure what's working. Key metrics to track:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Google Business Profile Insights:</strong> Views, searches, actions (calls, direction requests, website visits)</li>
          <li><strong>Keyword rankings:</strong> Track your position for key local terms</li>
          <li><strong>Website traffic from organic search:</strong> Use Google Analytics</li>
          <li><strong>Phone calls and contact form submissions:</strong> Track conversions</li>
          <li><strong>Review count and rating:</strong> Monitor across all platforms</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Check these monthly and look for trends. Local SEO is a long game—expect to see meaningful results in 3-6 months of consistent effort.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Local SEO Mistakes to Avoid</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Based on our work with UK small businesses, these are the most common mistakes:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Ignoring Google Business Profile:</strong> It's free and hugely impactful—use it.</li>
          <li><strong>Inconsistent NAP:</strong> Different addresses or phone numbers across directories.</li>
          <li><strong>No review strategy:</strong> Leaving reviews to chance instead of actively requesting them.</li>
          <li><strong>Duplicate location pages:</strong> Creating thin pages with swapped location names.</li>
          <li><strong>Neglecting mobile users:</strong> Having a desktop-focused website.</li>
          <li><strong>Buying fake reviews:</strong> Google detects and penalises this.</li>
          <li><strong>Expecting overnight results:</strong> Local SEO takes consistent effort over months.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Local SEO for Different Business Types</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Service Area Businesses</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you travel to customers (plumbers, electricians, mobile hairdressers), you can set a service area in Google Business Profile without displaying your home address. Create location pages for each town you serve and include driving distance/time information.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Brick-and-Mortar Retail</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          For shops and stores, include your full address prominently. Add photos of your storefront and interior. Consider adding inventory to your Google Business Profile if you have distinct products.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Restaurants and Hospitality</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Add your menu to Google Business Profile. Use food-specific schema markup. Get listed on TripAdvisor and respond to every review. Consider allowing table bookings directly through Google.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Getting Started: Your Local SEO Checklist</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Here's a prioritised action plan to improve your local SEO:
        </p>
        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
          <li>Claim and fully optimise your Google Business Profile</li>
          <li>Ensure NAP consistency across your website and existing listings</li>
          <li>Get listed on core UK directories</li>
          <li>Add location information to your website title tags and content</li>
          <li>Implement LocalBusiness schema markup</li>
          <li>Start requesting reviews from satisfied customers</li>
          <li>Ensure your website is mobile-friendly</li>
          <li>Create location-specific content if you serve multiple areas</li>
          <li>Build local links through community involvement</li>
          <li>Track progress monthly and adjust your strategy</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Need Help With Local SEO?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Local SEO can feel overwhelming, especially when you're busy running your business. If you'd rather focus on what you do best while experts handle your online visibility, we can help.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">SEO services</Link> include comprehensive local SEO optimisation tailored to UK small businesses. We'll audit your current presence, identify opportunities, and implement a strategy that gets you found by local customers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Read more about <Link href="/blog/local-business-marketing-cornwall" className="text-trevaunance-teal hover:underline">local marketing strategies</Link> or <Link href="/contact" className="text-trevaunance-teal hover:underline">get in touch</Link> to discuss your business.
        </p>
      </>
    )
  },
  'social-media-marketing-small-business': {
    title: 'Social Media Marketing for Small Business: A Practical UK Guide',
    description: 'Everything UK small businesses need to know about social media marketing. Practical strategies that work without a massive budget or dedicated team.',
    date: '2025-11-27',
    readTime: '11 min read',
    category: 'Social Media',
    excerpt: 'Cut through the noise with social media that actually drives business results. Practical strategies for time-poor business owners.',
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80&auto=format',
    heroAlt: 'Social media apps on smartphone screen',
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Social media marketing for small businesses doesn't require a big budget or a dedicated team. What it does require is strategy, consistency, and understanding which platforms actually matter for your specific business.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This guide covers practical social media strategies that work for UK small businesses. No fluff, no unrealistic expectations—just actionable advice you can implement today.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Social Media Matters for Small Businesses</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          According to <a href="https://www.ofcom.org.uk/research-and-data/media-literacy-research" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Ofcom research</a>, 84% of UK adults use social media. Your customers are on these platforms, whether you're there or not. The question isn't whether to use social media—it's how to use it effectively.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          For small businesses, social media offers three main benefits: brand awareness, customer engagement, and traffic generation. It's not necessarily about direct sales (though that can happen), but about staying visible and building relationships with your audience.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Choosing the Right Platforms</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You don't need to be everywhere. In fact, being on too many platforms usually means doing all of them badly. Choose 2-3 platforms where your customers actually spend time.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Facebook</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Still the most widely used platform in the UK, especially among users 35+. Essential for local businesses—Facebook is often where people look for recommendations and local business information. Great for community building and local advertising.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Instagram</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Visual-first platform popular with 18-44 year olds. Perfect for businesses with strong visual elements: food, fashion, interiors, travel, beauty, fitness. Less effective for B2B or service businesses without visual products.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">LinkedIn</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          The platform for B2B businesses and professional services. If you sell to other businesses or position yourself as an industry expert, LinkedIn should be a priority. Not effective for most B2C businesses.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">TikTok</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fastest-growing platform, now used by all age groups despite its Gen Z reputation. Works well for businesses willing to create entertaining, authentic video content. High organic reach compared to other platforms.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">X (Twitter)</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Useful for real-time engagement, customer service, and staying visible in your industry. Best for businesses that can provide timely updates, commentary, or participate in industry conversations.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Creating a Content Strategy</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Random posting doesn't work. You need a strategy that balances different types of content while staying manageable for a small business.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">The 80/20 Rule</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          80% of your content should provide value—educate, entertain, or inspire your audience. 20% can be promotional. Constantly selling turns followers off. Providing value builds trust and keeps people engaged.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Content Pillars</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Identify 3-4 main themes for your content. A local bakery might have: behind-the-scenes baking, product showcases, local community features, and baking tips. Having pillars makes content planning easier and keeps your feed cohesive.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Content Calendar</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Plan your content in advance. Even a simple spreadsheet showing what you'll post each week saves time and reduces the stress of "what should I post today?" Batch-create content when you have time, schedule it, and you've got consistent posting without daily effort.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Types of Content That Work</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Behind-the-Scenes</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          People love seeing how businesses work. Show your process, your workspace, your team. It humanises your brand and builds connection. A video of bread being made will always outperform a static product photo.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">User-Generated Content</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Encourage customers to share photos using your product or service, then reshare with permission. It's authentic, free, and more trusted than brand-created content. Create a branded hashtag to make content easy to find.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Educational Content</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Share your expertise. A plumber could share tips for preventing frozen pipes. An accountant could explain tax deadlines. This positions you as an expert and provides genuine value to followers.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Local Content</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          For local businesses, featuring your area builds community connection. Shout out other local businesses, comment on local events, show your involvement in the community. Local customers love supporting businesses that love their area.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Posting Frequency and Timing</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          According to <a href="https://www.hootsuite.com/research" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Hootsuite research</a>, optimal posting frequency varies by platform:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Facebook:</strong> 1-2 times per day</li>
          <li><strong>Instagram:</strong> 3-7 times per week (feed), daily for Stories</li>
          <li><strong>LinkedIn:</strong> 1-2 times per day on weekdays</li>
          <li><strong>TikTok:</strong> 1-3 times per day</li>
          <li><strong>X:</strong> 3-5 times per day</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          These are ideals. Posting less frequently with quality content beats posting junk just to hit a quota. Start with what's sustainable and increase over time if you can.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Engagement: The Part Most Businesses Skip</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Social media is social. Yet most businesses post and ghost—they put content out but never engage. This is a mistake.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Respond to Everything</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Reply to comments on your posts. Respond to direct messages quickly. Thank people for sharing your content. This engagement signals to algorithms that your content is valuable, increasing your reach.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Engage With Others</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't just wait for people to come to you. Comment on posts from local businesses, industry accounts, and potential customers. Join relevant Facebook groups and participate genuinely (not just promoting yourself).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Build Community</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          The goal isn't just followers—it's building a community of people who care about your business. Ask questions, run polls, invite opinions. Make followers feel part of something, not just spectators.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Paid Social Media Advertising</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Organic reach on most platforms has declined. Paid advertising can extend your reach significantly, even with small budgets.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Start Small</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          You don't need thousands of pounds. Start with £50-100 per month to learn what works. Test different audiences, different content, different calls to action. Use what you learn to optimise future campaigns.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Targeting Options</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          The power of social advertising is precise targeting. According to <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Meta Business</a>, you can target by location, demographics, interests, behaviours, and more. A local café can target people within 5 miles who like coffee. A B2B service can target business owners in specific industries.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Retargeting</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Show ads to people who've already visited your website or engaged with your content. These warm audiences convert at much higher rates than cold audiences. Install tracking pixels on your website to enable retargeting.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Measuring Success</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't just look at follower counts. According to <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">HubSpot</a>, the metrics that matter include:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Engagement rate:</strong> Likes, comments, shares relative to your audience size</li>
          <li><strong>Reach:</strong> How many unique people see your content</li>
          <li><strong>Click-through rate:</strong> Percentage who click links in your posts</li>
          <li><strong>Conversions:</strong> Actions taken on your website from social traffic</li>
          <li><strong>Response rate:</strong> How quickly and consistently you reply to messages</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Review these metrics monthly. Look for patterns: which content performs best? What time of day gets most engagement? Use data to refine your strategy.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Being on every platform:</strong> Better to do 2 well than 5 badly</li>
          <li><strong>Inconsistent posting:</strong> Sporadic activity kills momentum</li>
          <li><strong>Only selling:</strong> Provide value, don't just push products</li>
          <li><strong>Ignoring comments:</strong> Engagement matters more than follower count</li>
          <li><strong>Copying competitors:</strong> Be authentic to your brand</li>
          <li><strong>Expecting overnight results:</strong> Social media is a long game</li>
          <li><strong>Not having a strategy:</strong> Random posting doesn't build a following</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Tools to Make It Easier</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The right tools save time and improve results:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Scheduling:</strong> Buffer, Hootsuite, or Later for scheduling posts in advance</li>
          <li><strong>Design:</strong> Canva for creating professional-looking graphics</li>
          <li><strong>Analytics:</strong> Native platform analytics or tools like Sprout Social</li>
          <li><strong>Content ideas:</strong> AnswerThePublic, Google Trends for topic research</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Getting Started: Action Plan</h2>
        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
          <li>Identify where your customers spend time online</li>
          <li>Choose 2 platforms to focus on</li>
          <li>Complete and optimise your profiles on those platforms</li>
          <li>Define your content pillars (3-4 main themes)</li>
          <li>Create a simple content calendar for the next month</li>
          <li>Commit to a sustainable posting schedule</li>
          <li>Set aside 15 minutes daily for engagement</li>
          <li>Review metrics monthly and adjust</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Need Help With Your Social Media?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Managing social media while running a business is challenging. If you need support with content strategy, creation, or management, we can help.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our <Link href="/services/blog-writing" className="text-trevaunance-teal hover:underline">content services</Link> include social media strategy and management tailored to small businesses. We focus on sustainable approaches that build genuine audiences over time.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Read more about <Link href="/blog/website-design-for-tradesmen" className="text-trevaunance-teal hover:underline">building your online presence</Link> or <Link href="/contact" className="text-trevaunance-teal hover:underline">get in touch</Link> to discuss your business.
        </p>
      </>
    )
  },
  'restaurant-marketing-ideas': {
    title: 'Restaurant Marketing Ideas That Actually Work [2025 UK Guide]',
    description: 'Discover proven restaurant marketing ideas for UK restaurants and cafés. From local SEO to social media, email marketing to loyalty programs—strategies that drive bookings.',
    date: '2025-11-27',
    readTime: '11 min read',
    category: 'Local Marketing',
    excerpt: 'Fill more tables with marketing that works. From Google to Instagram, learn what actually brings diners through your door.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&auto=format',
    heroAlt: 'Modern restaurant interior with ambient lighting',
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Running a restaurant is hard enough without having to become a marketing expert. But in 2025, restaurants that don't market effectively struggle to survive—no matter how good the food is.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This guide covers practical marketing ideas that work for UK restaurants, cafés, pubs, and takeaways. No expensive agencies needed. No jargon. Just actionable strategies you can implement this week.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Restaurant Marketing Has Changed</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The days of hanging a sign and waiting for customers are over. According to <a href="https://www.tripadvisor.com/ForRestaurants" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">TripAdvisor research</a>, 94% of UK diners check online reviews before choosing a restaurant. Your marketing happens whether you manage it or not—the only question is whether you're in control.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Modern restaurant marketing isn't about big budgets. It's about being visible where your customers are looking, which is primarily their phones. Here are the strategies that actually move the needle.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">1. Google Business Profile: Your Most Important Asset</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your Google Business Profile is often the first thing potential customers see. It shows up in Google Maps, local search results, and the sidebar when people search for your restaurant by name. According to <a href="https://support.google.com/business" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Google</a>, businesses with complete profiles get 7x more clicks.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Essential optimisations:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Add your menu with prices</li>
          <li>Upload at least 20 high-quality photos of food, interior, and exterior</li>
          <li>Keep hours accurate, especially for holidays</li>
          <li>Enable and respond to reviews within 24 hours</li>
          <li>Post weekly updates about specials, events, or new dishes</li>
          <li>Add attributes: WiFi, outdoor seating, vegetarian options, etc.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          For a comprehensive guide to local SEO, read our <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">SEO services page</Link>.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">2. Reviews: The Social Proof You Need</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Reviews can make or break a restaurant. A one-star increase in Yelp rating can lead to a 5-9% increase in revenue, according to <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Harvard Business Review</a>.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">How to Get More Reviews</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Ask at the right moment—after a positive comment or compliment</li>
          <li>Include a QR code on receipts linking directly to your Google review page</li>
          <li>Train staff to mention reviews naturally: "If you enjoyed your meal, we'd really appreciate a Google review"</li>
          <li>Follow up via email if you collect contact details during booking</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Responding to Reviews</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Respond to every review, positive and negative. For negative reviews: acknowledge the issue, apologise sincerely, explain what you've done to fix it, and invite them back. Never argue or get defensive. Other potential customers are watching how you handle criticism.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">3. Instagram: Your Visual Menu</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          For restaurants, Instagram isn't optional. Food is inherently visual, and Instagram is where people go to discover new places to eat. According to <a href="https://www.indeed.co.uk/career-advice/career-development/instagram-marketing-restaurants" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">industry research</a>, 30% of millennial diners actively avoid restaurants with weak Instagram presence.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Content Ideas That Work</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Food photography:</strong> Your dishes in their best light. Natural lighting is your friend.</li>
          <li><strong>Behind-the-scenes:</strong> Kitchen prep, ingredient sourcing, chef interviews</li>
          <li><strong>Customer features:</strong> Reshare customer posts (with permission)</li>
          <li><strong>Staff spotlights:</strong> Introduce your team to humanise your brand</li>
          <li><strong>Stories:</strong> Daily specials, busy night atmosphere, quick polls</li>
          <li><strong>Reels:</strong> Short-form video content performs best right now</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Instagram Tips for Restaurants</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Post consistently (3-5 times per week minimum)</li>
          <li>Use local hashtags (#BristolFood #LondonEats etc.)</li>
          <li>Enable location tagging on all posts</li>
          <li>Engage with local food bloggers and influencers</li>
          <li>Respond to comments and DMs quickly</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">4. Email Marketing: The Overlooked Channel</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Email might seem old-fashioned, but it works. You own your email list—unlike social media followers who can disappear if algorithms change or platforms close.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Building Your Email List</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Collect emails during online reservations</li>
          <li>Offer WiFi login in exchange for email signup</li>
          <li>Run competitions requiring email entry</li>
          <li>Offer a discount on first online order for signing up</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Email Content Ideas</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Weekly specials and limited-time offers</li>
          <li>Birthday and anniversary rewards (collect dates at signup)</li>
          <li>Event announcements</li>
          <li>Behind-the-scenes stories and recipes</li>
          <li>Loyalty rewards and exclusive discounts</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">5. Local Partnerships and Cross-Promotions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Partner with complementary local businesses to reach new customers without advertising costs.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Partnership Ideas</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Hotels and B&Bs:</strong> Become their recommended restaurant</li>
          <li><strong>Local attractions:</strong> Offer dinner-and-show packages with nearby theatres</li>
          <li><strong>Offices:</strong> Corporate lunch deals for local businesses</li>
          <li><strong>Other restaurants:</strong> Refer customers when you're fully booked (and vice versa)</li>
          <li><strong>Local suppliers:</strong> Feature their products and share each other's audiences</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">6. Loyalty Programs That Actually Work</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Repeat customers are more valuable than new ones. According to <a href="https://www.bain.com/insights/prescription-for-cutting-costs/" target="_blank" rel="noopener noreferrer" className="text-trevaunance-teal hover:underline">Bain & Company</a>, increasing customer retention by just 5% can increase profits by 25-95%.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Loyalty Program Options</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Stamp cards:</strong> Simple and proven. "Buy 9, get 10th free"</li>
          <li><strong>Points system:</strong> Points per pound spent, redeemable for rewards</li>
          <li><strong>VIP tier system:</strong> Better rewards for your best customers</li>
          <li><strong>Digital apps:</strong> Square, Toast, or dedicated loyalty apps track everything automatically</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">7. Events and Experiences</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Events turn your restaurant into a destination and generate content and word-of-mouth marketing.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Event Ideas</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Wine tasting or pairing dinners</li>
          <li>Guest chef collaborations</li>
          <li>Cooking classes</li>
          <li>Themed nights (quiz night, live music, etc.)</li>
          <li>Seasonal celebrations (Burns Night, Valentine's, etc.)</li>
          <li>Charity events benefiting local causes</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">8. Your Website: More Than a Menu Holder</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your website should make it easy for people to do three things: see your menu, find your location, and make a reservation or order.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Essential Website Features</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Mobile-friendly design (most searches are mobile)</li>
          <li>Online menu with prices (PDF menus frustrate users)</li>
          <li>Online reservations (OpenTable, ResDiary, or simple form)</li>
          <li>Click-to-call phone number</li>
          <li>Embedded Google Maps</li>
          <li>High-quality food photos</li>
          <li>Opening hours (prominently displayed)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Need a professional website? Our <Link href="/services/one-page-website" className="text-trevaunance-teal hover:underline">one-page website service</Link> is perfect for restaurants.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">9. Food Delivery Platforms</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Delivery platforms like Deliveroo, Uber Eats, and Just Eat can expand your reach significantly—but margins are tight.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Making Delivery Work</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Optimise your menu for delivery (some dishes don't travel well)</li>
          <li>Use delivery packaging that maintains food quality</li>
          <li>Include marketing materials in delivery bags</li>
          <li>Encourage direct orders to avoid platform fees</li>
          <li>Monitor reviews on each platform</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">10. Influencer and Blogger Outreach</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Local food bloggers and Instagram influencers can introduce your restaurant to thousands of potential customers.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">How to Work with Influencers</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Focus on local influencers with engaged audiences (followers aren't everything)</li>
          <li>Offer a complimentary meal in exchange for honest coverage</li>
          <li>Don't demand specific content—let them be authentic</li>
          <li>Build ongoing relationships, not one-off transactions</li>
          <li>Ensure they disclose sponsored content (it's the law)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">11. User-Generated Content</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Encourage customers to photograph their food and share it. This free content builds social proof and extends your reach.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Encouraging User Content</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Create Instagrammable presentation and interior elements</li>
          <li>Display your Instagram handle and hashtag in the restaurant</li>
          <li>Reshare customer photos (with credit)</li>
          <li>Run photo competitions with dining credit prizes</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">12. Seasonal and Event-Based Marketing</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Plan your marketing around the calendar. Key dates to prepare for:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Valentine's Day</li>
          <li>Mother's Day and Father's Day</li>
          <li>Easter</li>
          <li>Summer holidays</li>
          <li>Halloween</li>
          <li>Christmas party season</li>
          <li>New Year's Eve</li>
          <li>Local events and festivals</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Start promoting seasonal menus and booking options at least 4-6 weeks in advance.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Getting Started: Priority Actions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You can't do everything at once. Start with these high-impact actions:
        </p>
        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
          <li>Fully optimise your Google Business Profile today</li>
          <li>Set up a process for requesting and responding to reviews</li>
          <li>Create an Instagram account (if you don't have one) and post 3x weekly</li>
          <li>Start building an email list</li>
          <li>Identify one local partnership to pursue</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Need Help Marketing Your Restaurant?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Marketing doesn't have to consume all your time. If you'd rather focus on your food while experts handle your online presence, we can help.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          From <Link href="/services/website-seo" className="text-trevaunance-teal hover:underline">local SEO</Link> to <Link href="/services/one-page-website" className="text-trevaunance-teal hover:underline">professional websites</Link>, we work with restaurants across the UK to build sustainable marketing that drives bookings.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Read more about <Link href="/blog/local-business-marketing-cornwall" className="text-trevaunance-teal hover:underline">local marketing strategies</Link> or <Link href="/contact" className="text-trevaunance-teal hover:underline">get in touch</Link> to discuss your restaurant.
        </p>
      </>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  // BlogPosting Schema
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.heroImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Outcome Marketing',
      url: 'https://outcomemarketing.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://outcomemarketing.co.uk/logo-black.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://outcomemarketing.co.uk/blog/${slug}`,
    },
  };

  // BreadcrumbList Schema
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://outcomemarketing.co.uk/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
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
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(45, 58, 58, 0.85), rgba(45, 58, 58, 0.80))' }} />
        </div>
        <Container className="relative z-20 py-24">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-cottage-cream mb-6">
              <Link href="/" className="hover:text-mist-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/blog" className="hover:text-mist-white transition-colors">Blog</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-mist-white">{post.title}</span>
            </nav>

            <p className="text-trevaunance-teal text-sm font-dm-sans font-semibold uppercase tracking-wider mb-4">
              {post.category}
            </p>

            <h1 className="font-dm-serif text-cottage-cream text-4xl md:text-5xl lg:text-6xl mb-6">
              {post.title}
            </h1>

            <p className="text-mist-white text-lg md:text-xl max-w-2xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
              >
                ← Back to Blog
              </Link>
            </div>

            <article>
              <div className="prose prose-lg max-w-none">
                {post.content}
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need Help with Your Marketing?"
        description="We work with businesses across the UK to develop honest, effective digital marketing strategies."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
