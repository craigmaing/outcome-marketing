import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'none';
}

export default function Section({
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const bgClass = background === 'gray'
    ? 'bg-accent-light'
    : background === 'none'
    ? ''
    : 'bg-white';

  return (
    <section className={`py-16 md:py-24 ${bgClass} ${className}`}>
      {children}
    </section>
  );
}
