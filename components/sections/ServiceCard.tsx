import Link from 'next/link';
import Card from '@/components/ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <Card hover className="h-full">
        <h3 className="text-2xl font-dm-serif text-slate-deep font-bold mb-3">{title}</h3>
        <p className="text-secondary-text mb-4">{description}</p>
        <span className="text-trevaunance-teal-dark hover:text-slate-deep transition-colors font-dm-sans font-semibold inline-flex items-center">
          Learn more about {title}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Card>
    </Link>
  );
}
