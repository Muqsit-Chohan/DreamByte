import React from 'react';
import { cn } from '../../lib/utils';

export const Input = React.forwardRef(({ className, icon: Icon, type = 'text', ...props }, ref) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <Icon className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
      )}
      <input
        type={type}
        ref={ref}
        className={cn(
          'w-full py-3.5 rounded-xl bg-slate-50 dark:bg-[#0b1217] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors',
          Icon ? 'pl-11 pr-4' : 'px-4',
          className
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = React.forwardRef(({ className, rows = 3, ...props }, ref) => {
  return (
    <textarea
      rows={rows}
      ref={ref}
      className={cn(
        'w-full p-4 rounded-xl bg-slate-50 dark:bg-[#0b1217] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
