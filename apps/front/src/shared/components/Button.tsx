import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { Button as UiButton } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/cn';

const buttonVariants = cva('cursor-pointer', {
    variants: {
        variant: {
            primary: 'bg-brand text-white hover:bg-brand-strong hover:text-white dark:hover:bg-brand-strong',
            secondary: 'text-brand hover:bg-muted hover:text-brand dark:hover:bg-muted',
            ghost: 'hover:bg-muted dark:hover:bg-muted',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type ButtonProps = Omit<ComponentProps<typeof UiButton>, 'variant'> & VariantProps<typeof buttonVariants>;

export const Button = ({ variant, className, ...props }: ButtonProps) => <UiButton variant="ghost" className={cn(buttonVariants({ variant }), className)} {...props} />;
