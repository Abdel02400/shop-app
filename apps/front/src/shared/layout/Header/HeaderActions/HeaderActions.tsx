import { AccountMenu } from '@/shared/layout/Header/HeaderActions/AccountMenu/AccountMenu';
import { CartButton } from '@/shared/layout/Header/HeaderActions/CartButton/CartButton';
import { HamburgerMenu } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/HamburgerMenu';

export const HeaderActions = () => (
    <div className="flex items-center gap-2">
        <CartButton />
        <AccountMenu />
        <HamburgerMenu />
    </div>
);
