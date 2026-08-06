import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, hover = true, glow = false, children, ...props }) {
  return (
    <div
      className={cn(
        'glass-panel rounded-3xl border border-slate-200 dark:border-white/10 relative overflow-hidden transition-all duration-300',
        hover && 'glass-panel-hover',
        glow && 'border-teal-400/50 shadow-[0_0_50px_rgba(0,211,189,0.2)] bg-white dark:bg-[#0d171f]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('p-6 sm:p-8 pb-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn('text-xl font-bold text-slate-900 dark:text-white font-heading', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6 sm:p-8', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('p-6 sm:p-8 pt-0 border-t border-slate-200 dark:border-white/5 flex items-center justify-between', className)} {...props}>
      {children}
    </div>
  );
}
