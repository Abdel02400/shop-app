import { BrandMark } from '@/shared/components/BrandMark';
import { LanguageToggle } from '@/shared/components/LanguageToggle';
import { ThemeToggle } from '@/shared/components/ThemeToggle';
import { Container } from '@/shared/layout/Container/Container';
import { StickyBar } from '@/shared/layout/StickyBar/StickyBar';

export const Header = () => (
    <StickyBar>
        <Container>
            <header className="flex h-16 items-center justify-between">
                <BrandMark />

                {/* Center: Nav categories (TBD) */}
                <nav className="text-muted-foreground hidden gap-8 text-sm md:flex">Nav</nav>

                {/* Right: Actions (4c.5 ajoutera account, cart) */}
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </header>
        </Container>
    </StickyBar>
);
