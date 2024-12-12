// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { gcsStorage } from '@payloadcms/storage-gcs';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { Media } from './collections/Media';
import { Users } from './collections/Users';
import { IS_PRODUCTION } from './constants';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.APP_PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    },
  }),
  sharp,
  plugins: IS_PRODUCTION
    ? [
        gcsStorage({
          collections: {
            media: true,
          },
          bucket: process.env.APP_GOOGLE_CLOUD_STORAGE_BUCKET!,
          options: {
            projectId: process.env.APP_GOOGLE_CLOUD_PROJECT_ID,
          },
        }),
      ]
    : [],
});
