import { NavLink } from '@/shared/components/NavLink';
import { path } from '@/shared/router';

export const HeaderNav = () => (
    <nav className="hidden gap-8 sm:flex">
        <NavLink href={path('about')}>À propos</NavLink>
        <NavLink href={path('contact')}>Contact</NavLink>
    </nav>
);
