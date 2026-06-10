import type { PropsWithChildren } from 'react';
import { inter } from '@/config/fonts';
import { rootMetadata } from '@/config/metadata';
import { AppProviders } from '@/shared/providers/AppProviders';
import './globals.css';

export const metadata = rootMetadata;

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="fr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
        <body>
            <AppProviders>{children}</AppProviders>
        </body>
    </html>
);

export default RootLayout;
