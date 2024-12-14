import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "products_filename_idx";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "url";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "thumbnail_u_r_l";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "filename";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "mime_type";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "filesize";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "width";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "height";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "focal_x";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "focal_y";`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ADD COLUMN "url" varchar;
  ALTER TABLE "products" ADD COLUMN "thumbnail_u_r_l" varchar;
  ALTER TABLE "products" ADD COLUMN "filename" varchar;
  ALTER TABLE "products" ADD COLUMN "mime_type" varchar;
  ALTER TABLE "products" ADD COLUMN "filesize" numeric;
  ALTER TABLE "products" ADD COLUMN "width" numeric;
  ALTER TABLE "products" ADD COLUMN "height" numeric;
  ALTER TABLE "products" ADD COLUMN "focal_x" numeric;
  ALTER TABLE "products" ADD COLUMN "focal_y" numeric;
  CREATE UNIQUE INDEX IF NOT EXISTS "products_filename_idx" ON "products" USING btree ("filename");`);
}
