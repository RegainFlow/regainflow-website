import React from 'react';
import { useScrollAnimation } from '~/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in';
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  id,
  animation = 'fade-up',
  className = '',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-on-scroll ${animation} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
