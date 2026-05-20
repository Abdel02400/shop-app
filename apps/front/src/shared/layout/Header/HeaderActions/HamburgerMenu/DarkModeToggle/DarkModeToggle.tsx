'use client';

import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { themes } from '@/config/themes';
import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu';
import { Switch } from '@/shared/components/ui/switch';
import { IconLabel } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/IconLabel/IconLabel';
import { menuEntryVariants } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/menuEntryVariants';

export const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === themes.dark;

    return (
        <DropdownMenuItem closeOnClick={false} onClick={() => setTheme(isDark ? themes.light : themes.dark)} className={menuEntryVariants({ layout: 'spread' })}>
            <IconLabel icon={<Moon className="[&_path]:fill-brand [&_path]:stroke-brand" />}>Dark Mode</IconLabel>
            <Switch checked={isDark} className="data-checked:bg-brand **:data-[slot=switch-thumb]:bg-white" />
        </DropdownMenuItem>
    );
};
