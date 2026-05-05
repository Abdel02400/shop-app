# shop-app — infra

Documentation des configurations d'infrastructure pour shop-app. Le dossier sert de référence pour configurer un environnement de développement local et (à terme) le déploiement.

📁 Voir [README racine](../README.md) pour la vue d'ensemble du projet, et [apps/front/README.md](../apps/front/README.md) pour le frontend.

## Sommaire

- [Domaine local de dev (Apache)](#domaine-local-de-dev-apache)

---

## Domaine local de dev (Apache)

Permet d'accéder au front Next.js via `http://shop-app.local` (sans port) au lieu de `http://shop-app.local:3000`. Apache fait office de reverse proxy sur le port 80.

> **Plus tard** : ce setup sera potentiellement migré vers Caddy/Traefik dans Docker compose quand on ajoutera Postgres/MinIO/Mailpit.

### Prérequis

- Apache HTTP Server installé et fonctionnel sur la machine
- Droits administrateur (pour le hosts file)
- Le front Next.js doit être lancé en parallèle (`pnpm dev` dans `apps/front`)

### 1. Modules Apache requis

Vérifier que ces modules sont **décommentés** dans `httpd.conf` :

```apache
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule proxy_wstunnel_module modules/mod_proxy_wstunnel.so
LoadModule rewrite_module modules/mod_rewrite.so
```

`mod_proxy_wstunnel` est critique : sans lui, le HMR (Hot Module Replacement) Next.js / Turbopack ne fonctionnera pas.

### 2. Hosts file

Ajouter ces deux lignes dans `C:\Windows\System32\drivers\etc\hosts` (édition en mode admin) :

```
127.0.0.1  shop-app.local
127.0.0.1  www.shop-app.local
```

Les deux entrées sont nécessaires car le vhost Apache déclare `ServerAlias www.shop-app.local`.

### 3. Vhost Apache

Ajouter dans `httpd-vhosts.conf` (assure-toi que `Include conf/extra/httpd-vhosts.conf` est décommenté dans `httpd.conf`) :

```apache
<VirtualHost *:80>
    ServerName shop-app.local
    ServerAlias www.shop-app.local

    ProxyPreserveHost On

    # WebSocket proxy générique pour le HMR Next.js / Turbopack
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} =websocket [NC]
    RewriteRule /(.*) ws://localhost:3000/$1 [P,L]

    # HTTP proxy
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    ErrorLog "logs/shop-app-dev-error.log"
    CustomLog "logs/shop-app-dev-access.log" common
</VirtualHost>
```

### 4. Config Next.js

Le script `dev` est configuré pour binder Next sur `shop-app.local:3000` (au lieu de `localhost:3000` par défaut), pour que le terminal affiche un hostname cohérent et que le HMR same-origin fonctionne en accès direct :

```json
"dev": "next dev --hostname shop-app.local"
```

`allowedDevOrigins` est aussi configuré dans [`apps/front/next.config.ts`](../apps/front/next.config.ts) pour autoriser l'accès cross-origin via Apache (port 80) :

```ts
const nextConfig: NextConfig = {
    allowedDevOrigins: ['shop-app.local'],
};
```

### 5. Restart + test

```bash
# Restart Apache (interface Apache ou service Windows)

# Démarrer le front
cd apps/front
pnpm dev
```

Deux URLs fonctionnent :

- `http://shop-app.local` — port 80, via Apache (URL propre, recommandée)
- `http://shop-app.local:3000` — direct sur Next, bypass Apache

Toute modification d'un fichier `.tsx` doit déclencher un hot reload sans refresh manuel.

### Diagnostics rapides

| Symptôme | Cause probable |
|---|---|
| `ERR_NAME_NOT_RESOLVED` | Hosts file pas pris en compte → `ipconfig /flushdns` |
| `ERR_CONNECTION_REFUSED` | Apache pas redémarré ou vhost pas chargé |
| `502 Bad Gateway` | `pnpm dev` pas lancé ou crashé |
| `404` Apache | `httpd-vhosts.conf` pas inclus dans `httpd.conf` |
| HMR cassé (`Blocked cross-origin request`) | `allowedDevOrigins` manquant dans `next.config.ts` |
| HMR cassé (WebSocket failed) | `mod_proxy_wstunnel` non chargé ou `RewriteRule` absente |
