import * as React from 'react';
import { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary-800 text-white-main',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        primary: 'border-transparent bg-primary-800/[0.15] text-primary-700',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type badgeVs = VariantProps<typeof badgeVariants>;
// eslint-disable-next-line prettier/prettier
export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, badgeVs { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
