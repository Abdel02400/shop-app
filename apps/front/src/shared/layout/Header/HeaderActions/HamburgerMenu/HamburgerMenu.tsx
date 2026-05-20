import { Menu } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { DarkModeToggle } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/DarkModeToggle/DarkModeToggle';
import { LanguageSubmenu } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/LanguageSubmenu/LanguageSubmenu';
import { MobileNav } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/MobileNav/MobileNav';

export const HamburgerMenu = () => (
    <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="h-full w-10 cursor-pointer" aria-label="Menu" />}>
            <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto" align="end">
            <DarkModeToggle />
            <LanguageSubmenu />
            <MobileNav />
        </DropdownMenuContent>
    </DropdownMenu>
);
