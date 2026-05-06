# shop-app

Plateforme e-commerce monorepo. Boutique curated, dropshipping pur.

## Statut

🚧 En cours de développement. Bootstrap en place, design system et features à venir.

## Structure

```
shop-app/
├── apps/
│   └── front/   # Next.js 16 — App Router (voir apps/front/README.md)
├── docs/        # spécifications, parcours, design (à venir)
└── infra/       # configs locales et déploiement (voir infra/README.md)
```

Chaque sous-dossier a son propre `README.md` avec les commandes et conventions associées.

## Tech stack

- **Frontend** : Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript — détails dans [apps/front/README.md](./apps/front/README.md)
- **Backend** : Symfony 7 + API Platform 4 (à venir)
- **Database** : PostgreSQL 17 managé OVH (à venir)
- **Hébergement** : OVH (2 VPS) + Cloudflare CDN

## Quick start

```bash
git clone <repo>
cd shop-app
pnpm install                            # installe husky + lint-staged au root et configure les git hooks
pnpm --dir apps/front install           # installe les deps du front
pnpm dev                                # http://shop-app.local (via Apache) ou http://shop-app.local:3000 (direct)
```

Setup du domaine local (entrée hosts + vhost Apache) documenté dans [infra/README.md](./infra/README.md).

## Scripts root (délégation vers apps/front)

Tous les scripts du front sont exposés à la racine et délèguent à `apps/front` (plus besoin de `cd apps/front`) :

| Commande root | Effet |
|---|---|
| `pnpm dev` | Lance le serveur de dev (Turbopack) |
| `pnpm build` | Build production |
| `pnpm start` | Lance le build production |
| `pnpm lint` | Lint via ESLint |
| `pnpm lint:fix` | Lint avec auto-fix |
| `pnpm format` | Format Prettier sur tous les fichiers |
| `pnpm format:check` | Vérifie le formatage |
| `pnpm type-check` | Type-check TypeScript du front |

## Recommended editor setup

Si tu utilises **VS Code**, ouvre le projet à la racine — VS Code te proposera automatiquement d'installer les extensions recommandées (config dans [.vscode/extensions.json](./.vscode/extensions.json)).

Si tu utilises un autre éditeur, installe manuellement l'équivalent de :

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) — autocomplétion + preview des classes Tailwind v4

## Pre-commit hooks (Husky)

Configuration au root du monorepo. À chaque `git commit`, le hook lance :

1. `lint-staged` (ESLint + Prettier sur les fichiers staged de `apps/front/**`)
2. `tsc --noEmit` (type-check TypeScript du front)

Si une vérif échoue, le commit est bloqué. Bypass ponctuel : `git commit --no-verify`.

## License

Privé.
