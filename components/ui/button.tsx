import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center font-dm-sans font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap';

    const variants = {
      default:
        'bg-amber text-ink hover:bg-amber/90 focus:ring-amber',
      outline:
        'border border-border-warm text-cream hover:border-amber hover:text-amber focus:ring-amber bg-transparent',
      secondary:
        'bg-surface text-cream hover:bg-surface-2 border border-border-warm focus:ring-border-warm',
    };

    const sizes = {
      sm:  'px-4 py-2 text-sm rounded-lg',
      md:  'px-5 py-2.5 text-base rounded-lg',
      lg:  'px-6 py-3 text-base rounded-lg',
      xl:  'px-8 py-4 text-lg rounded-lg',
    };

    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, (children.props as any).className),
        ref,
        ...props,
      } as any);
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
