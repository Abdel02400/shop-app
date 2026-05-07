import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    allowedDevOrigins: ['shop-app.local'],
    typedRoutes: true,
    turbopack: {
        root: __dirname,
    },
};

export default nextConfig;
