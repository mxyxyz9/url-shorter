'use client';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export function LoadingSpinner({ size = 'md', className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Loader2 className={cn(
        'animate-spin text-primary',
        sizeClasses[size],
        className
      )} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Loading...</h2>
          <p className="text-sm text-muted-foreground">Preparing your experience</p>
        </div>
      </div>
    </div>
  );
}