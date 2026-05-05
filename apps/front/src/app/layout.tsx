import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'shop-app',
    description: 'Plateforme e-commerce monorepo. Boutique curated, dropshipping pur.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
