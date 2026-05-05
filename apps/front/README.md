# shop-app — frontend

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)

Application frontend de [shop-app](../../README.md) — Next.js 16 (App Router) avec Turbopack.

## Quick start

```bash
pnpm install
pnpm dev    # dev server sur http://localhost:3000
```

## Commandes

| Commande            | Effet                                  |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Lance le serveur de dev avec Turbopack |
| `pnpm build`        | Build production                       |
| `pnpm start`        | Lance le build production              |
| `pnpm lint`         | Lint via ESLint                        |
| `pnpm lint:fix`     | Lint avec auto-fix                     |
| `pnpm format`       | Formate tout le code via Prettier      |
| `pnpm format:check` | Vérifie le formatage sans modifier     |

## Structure

```
src/
└── app/        # App Router (layouts, pages, route handlers)
```

Plus de détails s'ajouteront au fil du développement (design system, composants, i18n, etc.).
