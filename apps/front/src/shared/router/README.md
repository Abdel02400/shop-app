# Router

Router type-safe centralisé pour [shop-app frontend](../../../README.md).

Toutes les URLs de l'app sont définies dans [`routes.ts`](./routes.ts). Au lieu d'écrire `<Link href="/products/casquette">` (typo possible, refactor douloureux), on utilise `<Link href={path('productDetail', { slug: 'casquette' })}>` — TypeScript valide tout : nom de route, params dynamiques, types des valeurs.

## Utilisation

```tsx
import Link from 'next/link';
import { path } from '@/shared/router';

// Route statique
<Link href={path('home')}>Accueil</Link>

// Route avec param dynamique (le param est validé par TS)
<Link href={path('productDetail', { slug: 'casquette-noir' })}>...</Link>

// Route avec query params (les options non-paramétriques deviennent ?key=value)
<Link href={path('search', { q: 'jean', page: 2 })}>...</Link>
// → /search?q=jean&page=2
```

## Ajouter une nouvelle route

Édite [`routes.ts`](./routes.ts) :

```ts
export const routes = {
    home: { path: '/' },
    productDetail: { path: '/products/{slug}' }, // {param} pour route dynamique
    adminOrders: { path: '/admin/orders' },
} satisfies RoutesMap;
```

Le helper `path()` est immédiatement type-safe pour les nouvelles routes — les typos sont bloquées par TS.

## Conventions

- **Clé de route** en `camelCase` (`productDetail`, pas `product-detail`)
- **Path** en `kebab-case` (`/products/{slug}`, pas `/Products/{Slug}`)
- **Params dynamiques** entre `{}` (ex: `/products/{slug}`, `/orders/{token}`)

## Architecture des fichiers

| Fichier                                | Rôle                                                  |
| -------------------------------------- | ----------------------------------------------------- |
| [`routes.ts`](./routes.ts)             | Définition des routes — single source of truth        |
| [`types.ts`](./types.ts)               | Types TypeScript pour la map de routes et les options |
| [`createRouter.ts`](./createRouter.ts) | Fabrique la fonction `path()` à partir de la map      |
| [`index.ts`](./index.ts)               | Export public (`path`, types)                         |

## Pourquoi ce router custom et pas juste `<Link href="/">`

Next 16 a déjà `typedRoutes` qui valide que la route existe au compile-time, mais **ce router va plus loin** :

| Capability                                    | Next 16 typedRoutes seul   | Router shop-app |
| --------------------------------------------- | -------------------------- | --------------- |
| Catch typo dans `href`                        | ✅                         | ✅              |
| Catch URL inexistante                         | ✅                         | ✅              |
| Source centralisée des paths                  | ❌                         | ✅              |
| Refactor URL une fois → propage partout       | ❌ (find & replace risqué) | ✅ (1 fichier)  |
| Params dynamiques typés (le param est validé) | Partiel                    | ✅              |
| Query params helpers automatiques             | ❌                         | ✅              |

→ Une typo `path('hone')` est rejetée par TS. Une URL renommée dans `routes.ts` met à jour automatiquement toute la codebase.

## Activation Next 16 typedRoutes

Le router se base sur le type `Route` de Next, donc l'option `typedRoutes: true` doit être active dans [`next.config.ts`](../../../next.config.ts).
