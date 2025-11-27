import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-wash text-mist-white border-t border-slate-deep/20">
      <Container>
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4 transition-opacity duration-200 hover:opacity-80">
                <Image
                  src="/logo-white.png"
                  alt="Outcome Digital Marketing"
                  width={180}
                  height={45}
                  className="h-10 w-auto"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <p className="text-cottage-cream text-sm leading-relaxed mb-4">
                Honest, transparent digital marketing rooted in Cornwall values.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-trevaunance-teal-light font-dm-sans font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Made in Cornwall
              </div>
            </div>

            {/* Services Section */}
            <div>
              <div className="font-dm-sans font-semibold text-mist-white mb-4">Services</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/one-page-website" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    One-Page Website
                  </Link>
                </li>
                <li>
                  <Link href="/services/blog-writing" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Blog Writing
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-seo" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Website SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/research" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Market Research
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <div className="font-dm-sans font-semibold text-mist-white mb-4">Company</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Contact Section */}
            <div>
              <div className="font-dm-sans font-semibold text-mist-white mb-4">Legal</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>
                  <Link href="/privacy" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 py-2 inline-block">
                    FAQ
                  </Link>
                </li>
              </ul>
              <div className="text-sm space-y-2">
                <p className="text-cottage-cream">Cornwall, United Kingdom</p>
                <a
                  href="tel:+447770580125"
                  className="text-cottage-cream hover:text-trevaunance-teal-light transition-colors duration-200 inline-block"
                >
                  07770 580125
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-deep/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-cottage-cream text-sm">
              &copy; {currentYear} Outcome Digital Marketing. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-cottage-cream">
              <span className="font-dm-sans">Built with care in Cornwall</span>
              <span className="text-trevaunance-teal">🌊</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
