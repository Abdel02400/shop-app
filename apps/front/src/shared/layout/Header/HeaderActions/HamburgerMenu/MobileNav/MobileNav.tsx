import Link from 'next/link';
import { Text } from '@/shared/components/Text';
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@/shared/components/ui/dropdown-menu';
import { menuEntryVariants } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/menuEntryVariants';
import { path } from '@/shared/router';

export const MobileNav = () => (
    <DropdownMenuGroup className="sm:hidden">
        <DropdownMenuSeparator />
        <DropdownMenuItem closeOnClick render={<Link href={path('about')} />} className={menuEntryVariants()}>
            <Text variant="label">À propos</Text>
        </DropdownMenuItem>
        <DropdownMenuItem closeOnClick render={<Link href={path('contact')} />} className={menuEntryVariants()}>
            <Text variant="label">Contact</Text>
        </DropdownMenuItem>
    </DropdownMenuGroup>
);
