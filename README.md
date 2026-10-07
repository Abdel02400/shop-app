# Shop App

> Plateforme e-commerce développée sous forme de monorepo, avec un frontend Next.js / React / TypeScript.

## 🎯 Objectif

Shop App est un projet personnel destiné à expérimenter la conception d'une application e-commerce moderne et l'organisation d'un projet frontend à l'échelle d'un monorepo.

Le projet est actuellement en cours de développement.

## 🏗️ Architecture

Le projet est organisé en monorepo afin de centraliser les différentes parties de l'application et les outils communs.

```text
shop-app/
├── apps/
│   └── front/
│       └── Next.js / React
├── docs/
└── infra/
```

Le frontend utilise l'App Router de Next.js.

## 🛠️ Stack technique

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4
* shadcn/ui
* Lucide React

### Qualité et tooling

* ESLint
* Prettier
* TypeScript strict checking
* Husky
* lint-staged
* pnpm

### Validation

* Zod

## 🧩 Frontend

Le frontend est construit avec Next.js App Router.

L'organisation actuelle distingue notamment :

```text
src/
├── app/
├── config/
└── shared/
```

Le dossier `shared` regroupe les éléments transverses de l'application : composants, layout, providers, utilitaires et gestion du routage.

## 🔒 Qualité du code

Des contrôles sont exécutés automatiquement lors des commits.

Le hook Git vérifie notamment :

* ESLint ;
* Prettier ;
* le typage TypeScript.

Un commit est bloqué lorsqu'une des vérifications échoue.

Les scripts disponibles sont notamment :

```bash
pnpm lint
pnpm format:check
pnpm type-check
pnpm build
```

## 🚀 Installation

### Prérequis

* Node.js
* pnpm

### Installation

```bash
git clone https://github.com/Abdel02400/shop-app.git
cd shop-app
pnpm install
```

### Développement

```bash
pnpm dev
```

Le frontend est alors disponible sur :

```text
http://shop-app.local:3000
```

Une configuration Apache permet également d'utiliser :

```text
http://shop-app.local
```

La configuration correspondante est documentée dans `infra/README.md`.

## 🚧 État du projet

Le projet est actuellement en cours de développement.

Le frontend constitue la première partie du projet. Le backend Symfony / API Platform et les fonctionnalités e-commerce plus avancées sont prévus dans les prochaines étapes.

## 🎓 Objectifs techniques

Ce projet me permet notamment d'expérimenter :

* Next.js App Router ;
* React ;
* TypeScript ;
* architecture frontend ;
* monorepo ;
* design system ;
* composants réutilisables ;
* validation typée ;
* qualité et automatisation des contrôles ;
* Git hooks et automatisation du workflow de développement.
