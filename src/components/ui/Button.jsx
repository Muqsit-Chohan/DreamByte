import React from 'react';
import { cn } from '../../lib/utils';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    glow: 'btn-glow-teal font-bold hover:scale-[1.02] active:scale-[0.98]',
    primary: 'bg-teal-600 hover:bg-teal-700 text-white dark:bg-gradient-to-r dark:from-teal-400 dark:to-cyan-500 dark:text-slate-950 font-bold hover:shadow-[0_4px_20px_rgba(13,148,136,0.35)] dark:hover:shadow-[0_0_25px_rgba(0,211,189,0.5)] hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-slate-200/90 text-slate-800 hover:bg-slate-300 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20 dark:hover:text-white border border-slate-300/80 dark:border-white/10 shadow-sm dark:shadow-none',
    outline: 'glass-panel text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/15 hover:border-teal-500/40 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white',
    glass: 'bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white shadow-sm dark:shadow-none',
    ghost: 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0" />
      ) : null}
      <span>{children}</span>
    </button>
  );
}
