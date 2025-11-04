'use client';

import { ReactNode, useEffect, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 300, className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-${duration} ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 300, 
  className = '' 
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const directionClasses = {
    left: isVisible ? 'translate-x-0' : 'translate-x-full',
    right: isVisible ? 'translate-x-0' : '-translate-x-full',
    up: isVisible ? 'translate-y-0' : 'translate-y-full',
    down: isVisible ? 'translate-y-0' : '-translate-y-full',
  };

  return (
    <div
      className={`transition-all duration-${duration} ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${directionClasses[direction]}`}
    >
      {children}
    </div>
  );
}

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, duration = 300, className = '' }: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-${duration} ${className} ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
}

interface PulseProps {
  children: ReactNode;
  className?: string;
}

export function Pulse({ children, className = '' }: PulseProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
}

interface BounceProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Bounce({ children, delay = 0, className = '' }: BounceProps) {
  return (
    <div 
      className={`animate-bounce ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}