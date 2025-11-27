'use client';

import { useEffect, useRef, ReactNode, ElementType, ComponentPropsWithoutRef, forwardRef } from 'react';

interface AnimateOnScrollProps<T extends ElementType = 'div'> {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

type PolymorphicProps<T extends ElementType> = AnimateOnScrollProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AnimateOnScrollProps<T>>;

/**
 * AnimateOnScroll Component
 *
 * Triggers animations when the element enters the viewport using Intersection Observer.
 * Respects prefers-reduced-motion for accessibility.
 *
 * @param as - HTML element type to render (default: 'div'). Can be any valid HTML element like 'li', 'section', etc.
 * @param children - React elements to wrap with scroll animation
 * @param className - Additional CSS classes (should include animation class like 'animate-on-scroll')
 * @param delay - Delay in milliseconds before triggering animation (default: 0)
 * @param threshold - Percentage of element visibility required to trigger (default: 0.1)
 * @param rootMargin - Margin around viewport for early/late triggering (default: '0px 0px -50px 0px')
 */
function AnimateOnScrollInner<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  ...rest
}: PolymorphicProps<T>) {
  const Component = as || ('div' as ElementType);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If user prefers reduced motion, show element immediately
    if (prefersReducedMotion) {
      element.classList.add('is-visible');
      return;
    }

    // Check if element is already in viewport on mount (for hero sections, etc.)
    const rect = element.getBoundingClientRect();
    const isInViewportOnMount = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    // If element is already visible, trigger animation immediately
    if (isInViewportOnMount) {
      if (delay > 0) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
      } else {
        element.classList.add('is-visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay if specified
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
          } else {
            entry.target.classList.add('is-visible');
          }
          // Stop observing once animation is triggered
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, rootMargin]);

  return (
    <Component ref={ref} className={className} {...(rest as any)}>
      {children}
    </Component>
  );
}

// Export as default with proper typing
const AnimateOnScroll = AnimateOnScrollInner;
export default AnimateOnScroll;
