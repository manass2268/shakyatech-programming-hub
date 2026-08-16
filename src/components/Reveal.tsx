"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll detector (Desktop ke liye)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // 10% screen par aane par trigger hoga
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-100 translate-y-0 md:opacity-0 md:translate-y-16'
      }`}
    >
      {children}
    </div>
  );
}