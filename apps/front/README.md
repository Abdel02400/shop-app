# shop-app — frontend

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)

Application frontend de [shop-app](../../README.md) — Next.js 16 (App Router) avec Turbopack.

## Quick start

```bash
pnpm install
pnpm dev    # http://shop-app.local (via Apache) ou http://shop-app.local:3000 (direct)
```

## Setup local — domaine de dev

Le script `pnpm dev` bind Next sur `shop-app.local:3000`. Pour profiter de l'URL propre **sans port** (`http://shop-app.local`), un reverse proxy Apache est nécessaire.

Setup complet (entrée hosts, modules Apache, vhost) → [infra/README.md](../../infra/README.md).

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

## Pre-commit (géré au root du monorepo)

Husky et lint-staged sont configurés à la **racine du monorepo** (voir [package.json](../../package.json) et [.husky/pre-commit](../../.husky/pre-commit)).

À chaque `git commit`, le hook root lance :

1. `lint-staged` qui applique ESLint + Prettier uniquement sur les fichiers staged de `apps/front/**`
2. `tsc --noEmit` sur tout le front pour vérifier le typage TypeScript

Si une étape échoue, le commit est bloqué. Bypass ponctuel (à éviter) : `git commit --no-verify`.

## Structure

```
src/
└── app/        # App Router (layouts, pages, route handlers)
```

Plus de détails s'ajouteront au fil du développement (design system, composants, i18n, etc.).
