import Link from 'next/link';
import { brand } from '@/config/brand';
import { Logo } from '@/shared/components/Logo';
import { Text } from '@/shared/components/Text';
import { path } from '@/shared/router';

export const BrandMark = () => (
    <Link href={path('home')} aria-label={`${brand.name} — Accueil`} className="flex items-center gap-2">
        <Logo />
        <Text variant="brand">{brand.name}</Text>
    </Link>
);
