import type { CollectionConfig } from 'payload';

import { BREAKPOINTS } from '@/constants';

export const generateImageName = ({
  extension,
  originalName,
  width,
}: {
  extension: string;
  height: number;
  originalName: string;
  sizeName: string;
  width: number;
}) => {
  return `${originalName}-${width}x.${extension}`;
};

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  upload: {
    formatOptions: {
      format: 'webp',
      options: {
        quality: 90,
      },
    },
    imageSizes: [
      {
        name: 'xs',
        width: BREAKPOINTS.XS,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'sm',
        width: BREAKPOINTS.SM,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'md',
        width: BREAKPOINTS.MD,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'lg',
        width: BREAKPOINTS.LG,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'xl',
        width: BREAKPOINTS.XL,
        generateImageName,
        withoutEnlargement: false,
      },
    ],
  },
};
