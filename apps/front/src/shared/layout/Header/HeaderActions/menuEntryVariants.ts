import { cva } from 'class-variance-authority';

export const menuEntryVariants = cva('hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center p-3', {
    variants: {
        layout: {
            spread: 'justify-between gap-10',
        },
    },
});
