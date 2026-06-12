import { User } from 'lucide-react';
import { Button } from '@/shared/components/Button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { menuEntryVariants } from '@/shared/layout/Header/HeaderActions/menuEntryVariants';

export const AccountMenu = () => (
    <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="h-full w-10" aria-label="Compte" />}>
            <User />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto" align="end">
            <DropdownMenuItem className={menuEntryVariants()}>Se connecter</DropdownMenuItem>
            <DropdownMenuItem className={menuEntryVariants()}>S’inscrire</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);
