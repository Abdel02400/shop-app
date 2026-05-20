'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';
import { themeList } from '@/config/themes';

export const AppProviders = ({ children }: PropsWithChildren) => (
    <ThemeProvider attribute="data-theme" themes={themeList}>
        <ProgressProvider color="var(--brand)" options={{ showSpinner: false }}>
            {children}
        </ProgressProvider>
    </ThemeProvider>
);
