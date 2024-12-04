import { FC } from 'react';
import { cn } from '@/utils/cn';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className, ...props }) => (
  <div
    className={cn(
      'border-white-main h-4 w-4 animate-spin rounded-full border-2 border-t-transparent',
      className,
    )}
    {...props}
  />
);
