import { Inter } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
});
