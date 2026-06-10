import { ChevronDown } from 'lucide-react';
import { brand } from '@/config/brand';
import { homeAnchorHref } from '@/features/home/anchors';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Container } from '@/shared/layout/Container/Container';

export const Hero = () => (
    <Container>
        <section className="flex min-h-[calc(100svh-var(--header-height))] flex-col items-center py-16">
            <div className="flex max-w-2xl flex-1 flex-col justify-center gap-4 text-center">
                <Text variant="hero">{brand.tagline}</Text>
                <Text variant="body">Une sélection de produits livrés rapidement chez vous.</Text>
            </div>
            <Button variant="ghost" size="icon" nativeButton={false} render={<a href={homeAnchorHref('products')} />} aria-label="Voir les articles">
                <ChevronDown />
            </Button>
        </section>
    </Container>
);
