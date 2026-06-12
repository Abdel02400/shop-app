import type { ProductDto } from '@/features/products/schemas/product';
import { Button } from '@/shared/components/Button';
import { formatPrice } from '@/shared/lib/format';

type ProductCardProps = {
    product: ProductDto;
};

export const ProductCard = ({ product }: ProductCardProps) => (
    <article className="border-border flex flex-col gap-3 rounded-lg border p-3">
        <img src={product.imageUrl} alt={product.name} className="aspect-square w-full rounded-md object-cover" />
        <div className="flex flex-1 flex-col gap-1">
            <h3 className="text-base font-medium">{product.name}</h3>
            <p className="text-muted-foreground text-sm">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
            <span className="text-base font-semibold">{formatPrice(product.price)}</span>
            <Button variant="primary" size="sm">
                Ajouter au panier
            </Button>
        </div>
    </article>
);
