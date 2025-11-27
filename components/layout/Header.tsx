'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navigation from './Navigation';
import Container from '@/components/ui/Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-mist-white text-slate-deep sticky top-0 z-50 border-b border-cottage-cream shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center transition-opacity duration-200 hover:opacity-80">
            <Image
              src="/logo-black.png"
              alt="Outcome Digital Marketing"
              width={200}
              height={50}
              priority
              className="h-12 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <button
            className="md:hidden p-2 text-slate-deep hover:text-trevaunance-teal-dark transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-cottage-cream mt-4 pt-4 bg-slate-wash -mx-4 px-4 rounded-b-lg">
            <Navigation mobile onNavigate={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </Container>
    </header>
  );
}
