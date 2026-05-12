'use client';

import { Check, Languages } from 'lucide-react';
import { useState } from 'react';
import { type Language } from '@/config/languages';
import { Button } from '@/shared/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';

const LANGUAGE_ITEMS = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
] as const satisfies ReadonlyArray<{ value: Language; label: string }>;

export const LanguageToggle = () => {
    const [current, setCurrent] = useState<Language>('fr');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger openOnHover render={<Button variant="ghost" size="icon" className="size-9 cursor-pointer" aria-label="Changer de langue" />}>
                <Languages className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {LANGUAGE_ITEMS.map(({ value, label }) => (
                    <DropdownMenuItem key={value} onClick={() => setCurrent(value)} className="hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        {label}
                        {current === value && <Check className="ml-auto size-4" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
