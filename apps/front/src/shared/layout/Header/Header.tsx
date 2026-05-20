import { BrandMark } from '@/shared/components/BrandMark';
import { Container } from '@/shared/layout/Container/Container';
import { StickyBar } from '@/shared/layout/StickyBar/StickyBar';
import { HeaderActions } from './HeaderActions/HeaderActions';
import { HeaderNav } from './HeaderNav/HeaderNav';

export const Header = () => (
    <StickyBar>
        <Container>
            <header className="flex h-16 items-stretch justify-between py-3">
                <BrandMark />
                <HeaderNav />
                <HeaderActions />
            </header>
        </Container>
    </StickyBar>
);
