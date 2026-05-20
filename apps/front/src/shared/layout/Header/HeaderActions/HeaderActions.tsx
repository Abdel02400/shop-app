import { AuthButtons } from '@/shared/layout/Header/HeaderActions/AuthButtons/AuthButtons';
import { CartButton } from '@/shared/layout/Header/HeaderActions/CartButton/CartButton';
import { HamburgerMenu } from '@/shared/layout/Header/HeaderActions/HamburgerMenu/HamburgerMenu';

export const HeaderActions = () => (
    <div className="flex items-center gap-2">
        <CartButton />
        <AuthButtons />
        <HamburgerMenu />
    </div>
);
