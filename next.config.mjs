import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:
      process.env.NODE_ENV === 'production'
        ? [
            {
              protocol: 'https',
              hostname: 'storage.googleapis.com',
              pathname: `/${process.env.APP_GOOGLE_CLOUD_STORAGE_BUCKET}/**`,
            },
          ]
        : [],
  },
  output: 'standalone',
};

export default withPayload(nextConfig);
