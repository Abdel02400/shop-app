import type { PropsWithChildren } from 'react';
import { cn } from '@/shared/lib/cn';

type StickyBarProps = PropsWithChildren<{
    bottom?: boolean;
    withBackdropBlur?: boolean;
}>;

export const StickyBar = ({ bottom = false, withBackdropBlur = true, children }: StickyBarProps) => {
    const position = bottom ? 'bottom-0 border-t' : 'top-0 border-b';
    const background = withBackdropBlur ? 'bg-background/80 backdrop-blur' : 'bg-background';

    return <div className={cn('border-border sticky z-50', position, background)}>{children}</div>;
};
