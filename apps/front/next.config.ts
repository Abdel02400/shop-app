import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    allowedDevOrigins: ['shop-app.local'],
    turbopack: {
        root: __dirname,
    },
};

export default nextConfig;
