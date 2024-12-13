import { revalidateTag } from 'next/cache';
import type { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sku',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag('products');
      },
    ],
  },
};
