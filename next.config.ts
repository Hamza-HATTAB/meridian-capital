import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // RTL / i18n stub — ready for Arabic expansion
  // i18n: {
  //   locales: ['en', 'ar'],
  //   defaultLocale: 'en',
  // },
  experimental: {
    // typedRoutes: true, // enable when all routes are stable
  },
};

export default nextConfig;
