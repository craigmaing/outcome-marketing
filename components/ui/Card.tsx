import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 ${
        hover ? 'transition-shadow duration-300 hover:shadow-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
