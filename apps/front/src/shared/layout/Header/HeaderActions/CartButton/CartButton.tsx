import { ShoppingCart } from 'lucide-react';
import { Button } from '@/shared/components/Button';

const cartItemCount = 2;

export const CartButton = () => (
    <Button variant="ghost" size="icon" className="relative h-full w-10" aria-label={`Panier, ${cartItemCount} articles`}>
        <ShoppingCart />
        <span className="bg-brand absolute top-1 right-1 flex size-4 items-center justify-center rounded-full text-[10px] font-medium text-white">{cartItemCount}</span>
    </Button>
);
