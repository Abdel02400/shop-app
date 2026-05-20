'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { Text } from '@/shared/components/Text';
import { cn } from '@/shared/lib/cn';

type NavLinkProps = PropsWithChildren<{
    href: Route;
}>;

export const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} aria-current={isActive ? 'page' : undefined} className={cn('focus-ring group flex items-center px-3', isActive && 'bg-brand/15')}>
            <Text variant={isActive ? 'linkActive' : 'link'}>{children}</Text>
        </Link>
    );
};
