'use client';

import { useState } from 'react';
import { FAQItem } from '@/data/faqData';

interface FAQProps {
  faqs: FAQItem[];
  category?: string;
}

export default function FAQ({ faqs, category }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const itemId = category
          ? `faq-${category}-${index}`
          : `faq-${index}`;

        return (
          <div
            key={index}
            className="border border-slate-deep/20 rounded-lg overflow-hidden transition-all duration-200 hover:border-slate-deep/40"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={`${itemId}-answer`}
              className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 hover:bg-cottage-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-deep focus:ring-inset"
            >
              <span
                className="text-lg font-semibold text-slate-deep flex-1"
                itemProp="name"
              >
                {faq.question}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-2xl font-light text-slate-deep transition-transform duration-200"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`${itemId}-answer`}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div className="px-6 pb-5 pt-1">
                {faq.answerHtml ? (
                  <p
                    className="text-secondary-text leading-relaxed [&_a]:text-trevaunance-teal-dark [&_a]:hover:underline"
                    itemProp="text"
                    dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                  />
                ) : (
                  <p className="text-secondary-text leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
