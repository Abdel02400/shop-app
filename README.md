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
cd shop-app/apps/front
pnpm install
pnpm dev   # http://shop-app.local (via Apache) ou http://shop-app.local:3000 (direct)
```

Setup du domaine local (entrée hosts + vhost Apache) documenté dans [infra/README.md](./infra/README.md).

## License

Privé.
