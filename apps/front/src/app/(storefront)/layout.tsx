import type { PropsWithChildren } from 'react';
import { Header } from '@/shared/layout/Header/Header';

const StorefrontLayout = ({ children }: PropsWithChildren) => (
    <>
        <Header />
        <main>{children}</main>
    </>
);

export default StorefrontLayout;
