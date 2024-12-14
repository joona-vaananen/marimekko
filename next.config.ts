import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

import { BREAKPOINTS } from '@/constants';

const nextConfig: NextConfig = {
  images: {
    deviceSizes: Object.values(BREAKPOINTS).filter(
      (breakpoint) => breakpoint > 0
    ),
    imageSizes: [],
    remotePatterns: [
      // Allow external images from GCS bucket
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: `/${process.env.APP_GOOGLE_CLOUD_STORAGE_BUCKET}/**`,
      },
    ],
  },
  output: 'standalone',
  redirects: async () => [
    // Redirect to default locale
    {
      source: '/',
      destination: '/en',
      permanent: true,
    },
  ],
  webpack(config) {
    // Use SVGR for SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not ?? []), /url/],
        },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withPayload(nextConfig);
