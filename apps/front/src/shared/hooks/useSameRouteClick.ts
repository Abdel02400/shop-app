import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';
import { useCallback } from 'react';

type UseSameRouteClickReturn = (event: MouseEvent<HTMLAnchorElement>) => void;

export const useSameRouteClick = (href: Route): UseSameRouteClickReturn => {
    const pathname = usePathname();
    return useCallback<UseSameRouteClickReturn>(
        (event) => {
            if (pathname !== href || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        },
        [pathname, href],
    );
};
