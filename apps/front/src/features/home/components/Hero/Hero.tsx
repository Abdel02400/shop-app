import { brand } from '@/config/brand';
import { Text } from '@/shared/components/Text';
import { Container } from '@/shared/layout/Container/Container';

export const Hero = () => (
    <Container>
        <section className="mx-auto flex min-h-[calc(100svh-var(--header-height))] max-w-2xl flex-col justify-center gap-4 py-16 text-center">
            <Text variant="hero">{brand.tagline}</Text>
            <Text variant="body">Une sélection de produits livrés rapidement chez vous.</Text>
        </section>
    </Container>
);
