import { z } from 'zod';

export const productDtoSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    slug: z.string().min(1),
    imageUrl: z.url(),
    price: z.number().nonnegative(),
    description: z.string().min(1),
});

export type ProductDto = z.infer<typeof productDtoSchema>;
