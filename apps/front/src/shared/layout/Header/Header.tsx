import { BrandMark } from '@/shared/components/BrandMark';
import { Container } from '@/shared/layout/Container/Container';
import { StickyBar } from '@/shared/layout/StickyBar/StickyBar';
import { HeaderActions } from './HeaderActions/HeaderActions';

export const Header = () => (
    <StickyBar>
        <Container>
            <header className="flex h-(--header-height) items-stretch justify-between py-3">
                <BrandMark />
                <HeaderActions />
            </header>
        </Container>
    </StickyBar>
);
