import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ className, variant = 'teal', children, icon: Icon, ...props }) {
  const baseStyles = 'inline-flex flex-row items-center whitespace-nowrap gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors';

  const variants = {
    teal: 'bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-400',
    purple: 'bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-400',
    pink: 'bg-pink-500/10 border border-pink-500/30 text-pink-700 dark:text-pink-400',
    cyan: 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400',
    emerald: 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400',
    outline: 'bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {Icon ? (
        <>
          <Icon className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap">{children}</span>
        </>
      ) : (
        children
      )}
    </span>
  );
}
