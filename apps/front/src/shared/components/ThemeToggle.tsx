'use client';

import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { type Theme } from '@/config/themes';
import { Button } from '@/shared/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { SunAndMoonIcon } from '@/shared/components/SunAndMoonIcon/SunAndMoonIcon';
import { useMounted } from '@/shared/hooks/useMounted';

const THEME_ITEMS = [
    { value: 'light', label: 'Clair', icon: Sun },
    { value: 'dark', label: 'Sombre', icon: Moon },
    { value: 'system', label: 'Système', icon: Monitor },
] as const satisfies ReadonlyArray<{ value: Theme | 'system'; label: string; icon: LucideIcon }>;

export const ThemeToggle = () => {
    const mounted = useMounted();
    const { setTheme } = useTheme();

    if (!mounted) return <Skeleton className="size-9 rounded-md" />;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger openOnHover render={<Button variant="ghost" size="icon" className="size-9 cursor-pointer" aria-label="Basculer le thème" />}>
                <SunAndMoonIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {THEME_ITEMS.map(({ value, label, icon: Icon }) => (
                    <DropdownMenuItem key={value} onClick={() => setTheme(value)} className="hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <Icon className="size-4" />
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
