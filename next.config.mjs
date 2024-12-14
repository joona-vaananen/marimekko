import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:
      process.env.NODE_ENV === 'production'
        ? [
            // Allow external images from GCS bucket in production
            {
              protocol: 'https',
              hostname: 'storage.googleapis.com',
              pathname: `/${process.env.APP_GOOGLE_CLOUD_STORAGE_BUCKET}/**`,
            },
          ]
        : [],
  },
  output: 'standalone',
  redirects: () => [
    // Redirect to default locale
    {
      source: '/',
      destination: '/en',
      permanent: true,
    },
  ],
  webpack(config) {
    // Use SVGR to SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
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
