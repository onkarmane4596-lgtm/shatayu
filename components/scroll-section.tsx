import { ReactNode, useRef, useEffect, useState } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'scale-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
}

export function ScrollSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? animation : 'opacity-0'} ${className}`}
      style={{
        animation: isVisible ? `${animation} 0.6s ease-in-out forwards` : 'none',
      }}
    >
      {children}
    </div>
  );
}
