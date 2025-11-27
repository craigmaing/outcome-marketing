'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`px-4 py-3 rounded-md transition-all duration-200 font-dm-sans ${
              isActive(item.href)
                ? 'bg-trevaunance-teal-dark text-mist-white font-semibold'
                : 'text-mist-white hover:bg-slate-deep/50 hover:translate-x-1'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-all duration-200 font-dm-sans relative group ${
            isActive(item.href)
              ? 'text-trevaunance-teal-dark font-semibold'
              : 'text-slate-deep hover:text-trevaunance-teal-dark'
          }`}
        >
          {item.label}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-trevaunance-teal-dark transition-all duration-200 ${
            isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      ))}
    </nav>
  );
}
