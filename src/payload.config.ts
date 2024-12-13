// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { gcsStorage } from '@payloadcms/storage-gcs';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { Media } from './collections/media';
import { Products } from './collections/products';
import { Users } from './collections/users';
import { migrations } from './migrations';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Products],
  editor: lexicalEditor(),
  secret: process.env.APP_PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    },
    prodMigrations: migrations,
  }),
  sharp,
  plugins:
    process.env.NODE_ENV === 'production'
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
