import type { PropsWithChildren } from 'react';
import { inter } from '@/config/fonts';
import { rootMetadata } from '@/config/metadata';
import './globals.css';

export const metadata = rootMetadata;

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="fr" className={inter.variable}>
        <body>{children}</body>
    </html>
);

export default RootLayout;
