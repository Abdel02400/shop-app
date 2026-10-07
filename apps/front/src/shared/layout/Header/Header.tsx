'use client';

import { useEffect, useRef, useState } from 'react';
import { BrandMark } from '@/shared/components/BrandMark';
import { Container } from '@/shared/layout/Container/Container';
import { cn } from '@/shared/lib/cn';
import { HeaderActions } from './HeaderActions/HeaderActions';

export const Header = () => {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;
        const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={sentinelRef} aria-hidden data-navbar-sentinel className="-mb-px h-px" />
            <div className={cn('sticky top-0 z-50 mb-[calc(-1*var(--header-height))] border-b backdrop-blur transition-[background-color,border-color] duration-300 ease-out', scrolled ? 'border-border bg-background/80' : 'border-transparent')}>
                <Container>
                    <header className="flex h-(--header-height) items-stretch justify-between py-3">
                        <BrandMark />
                        <HeaderActions />
                    </header>
                </Container>
            </div>
        </>
    );
};
