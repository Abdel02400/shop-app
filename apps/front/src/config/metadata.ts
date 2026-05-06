import type { Metadata } from 'next';
import { brand } from '@/config/brand';

export const rootMetadata: Metadata = {
    title: {
        default: brand.name,
        template: `${brand.name} | %s`,
    },
    description: brand.tagline,
};
