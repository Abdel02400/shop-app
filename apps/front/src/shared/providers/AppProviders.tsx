'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';
import { themeList } from '@/config/themes';

export const AppProviders = ({ children }: PropsWithChildren) => (
    <ThemeProvider attribute="data-theme" disableTransitionOnChange themes={themeList}>
        {children}
    </ThemeProvider>
);
