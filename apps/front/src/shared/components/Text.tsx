import type { ElementType, ReactNode } from 'react';

type TextVariant = 'brand' | 'hero' | 'title' | 'subtitle' | 'body' | 'muted' | 'caption';

const variants: Record<TextVariant, { className: string; as: ElementType }> = {
    brand: { className: 'text-accent text-base font-semibold', as: 'span' },
    hero: { className: 'text-4xl font-bold tracking-tight md:text-5xl', as: 'h1' },
    title: { className: 'text-2xl font-semibold tracking-tight md:text-3xl', as: 'h2' },
    subtitle: { className: 'text-xl font-semibold', as: 'h3' },
    body: { className: 'text-base', as: 'p' },
    muted: { className: 'text-muted text-sm', as: 'p' },
    caption: { className: 'text-muted text-xs', as: 'span' },
};

type TextProps = {
    variant?: TextVariant;
    children: ReactNode;
};

export const Text = ({ variant = 'body', children }: TextProps) => {
    const { className, as: Component } = variants[variant];
    return <Component className={className}>{children}</Component>;
};
