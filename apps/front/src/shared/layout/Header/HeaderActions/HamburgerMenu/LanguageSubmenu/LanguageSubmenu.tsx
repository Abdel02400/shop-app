'use client';

import type { ComponentType } from 'react';
import { useState } from 'react';
import { languages, type Language } from '@/config/languages';
import { FlagFR } from '@/shared/components/flags/FlagFR';
import { FlagGB } from '@/shared/components/flags/FlagGB';
import { DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@/shared/components/ui/dropdown-menu';
import { IconLabel } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/IconLabel/IconLabel';
import { menuEntryVariants } from '@/shared/layout/Header/HeaderActions/menuEntryVariants';

const languageItems = [
    { value: languages.fr, label: 'Français', flag: FlagFR },
    { value: languages.en, label: 'English', flag: FlagGB },
] as const satisfies ReadonlyArray<{ value: Language; label: string; flag: ComponentType }>;

export const LanguageSubmenu = () => {
    const [language, setLanguage] = useState<Language>(languages.fr);
    const { flag: CurrentFlag } = languageItems.find(({ value }) => value === language)!;

    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger className={menuEntryVariants()}>
                <IconLabel icon={<CurrentFlag />}>Langue</IconLabel>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
                {languageItems.map(({ value, label, flag: Flag }) => (
                    <DropdownMenuItem key={value} closeOnClick onClick={() => setLanguage(value)} className={menuEntryVariants({ layout: 'spread' })}>
                        <IconLabel icon={<Flag />}>{label}</IconLabel>
                        {language === value && <span className="bg-brand size-2 rounded-full" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    );
};
