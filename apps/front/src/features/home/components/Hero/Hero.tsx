import { Sparkle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Container } from '@/shared/layout/Container/Container';
import heroImage from './hero-abstract.webp';

export const Hero = () => (
    <div className="aurora">
        <svg aria-hidden viewBox="0 0 1920 800" fill="none" className="hero-svg text-brand">
            <path d="M-100 420 C 250 280, 650 650, 1050 450 S 1700 250, 2100 420" stroke="currentColor" strokeWidth="2" opacity="0.10" />
            <path d="M-100 520 C 350 700, 900 250, 1400 500 S 1800 650, 2100 520" stroke="currentColor" strokeWidth="1" opacity="0.06" />
        </svg>
        <Container>
            <section className="grid min-h-svh items-center gap-8 py-16 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
                    <div className="bg-brand/10 text-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
                        <Sparkle className="size-4" />
                        <span>Produits sélectionnés avec exigence</span>
                    </div>
                    <Text variant="hero">
                        Moins de choix.
                        <br />
                        De meilleurs <span className="text-brand">produits.</span>
                    </Text>
                    <Text variant="body">Nous comparons, testons et sélectionnons uniquement ce qui mérite vraiment sa place ici.</Text>
                    <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
                        <Button variant="primary" size="lg" nativeButton={false} render={<a href="#produits" />}>
                            Découvrir la sélection
                        </Button>
                        <Button variant="secondary" size="lg">
                            Notre méthode
                        </Button>
                    </div>
                </div>
                <Image src={heroImage} alt="" priority decoding="sync" draggable={false} sizes="(min-width: 768px) 50vw, 0px" className="hidden h-auto w-full rounded-lg md:block" />
            </section>
        </Container>
    </div>
);
