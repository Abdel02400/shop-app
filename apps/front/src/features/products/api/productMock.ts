import type { ProductDto } from '@/features/products/schemas/product';

export const productsMock: ProductDto[] = [
    {
        id: 'p1',
        name: 'T-shirt en coton bio',
        slug: 't-shirt-en-coton-bio',
        imageUrl: 'https://picsum.photos/seed/p1/600/600',
        price: 19.9,
        description: 'Coton 100% biologique, coupe droite, finition col rond.',
    },
    {
        id: 'p2',
        name: 'Casquette brodée',
        slug: 'casquette-brodee',
        imageUrl: 'https://picsum.photos/seed/p2/600/600',
        price: 24.5,
        description: 'Toile lavée avec broderie discrète, fermeture clip réglable.',
    },
];
