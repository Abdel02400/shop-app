'use client';

import Link from 'next/link';
import { brand } from '@/config/brand';
import { Logo } from '@/shared/components/Logo';
import { Text } from '@/shared/components/Text';
import { useSameRouteClick } from '@/shared/hooks/useSameRouteClick';
import { path } from '@/shared/router';

export const BrandMark = () => {
    const handleClick = useSameRouteClick(path('home'));

    return (
        <Link href={path('home')} onClick={handleClick} aria-label={`${brand.name} — Accueil`} className="focus-ring flex items-center gap-2">
            <Logo />
            <Text variant="brand">{brand.name}</Text>
        </Link>
    );
};
