import type { Route } from 'next';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { Text } from '@/shared/components/Text';

type NavLinkProps = PropsWithChildren<{
    href: Route;
}>;

export const NavLink = ({ href, children }: NavLinkProps) => (
    <Link href={href} className="focus-ring group hover:bg-muted flex items-center px-3">
        <Text variant="link">{children}</Text>
    </Link>
);
