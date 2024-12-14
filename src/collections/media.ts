import type { CollectionConfig, ImageUploadFormatOptions } from 'payload';

import { BREAKPOINTS } from '@/constants';

const formatOptions: ImageUploadFormatOptions = {
  format: 'webp',
  options: {
    quality: 90,
  },
};

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
    formatOptions,
    imageSizes: [
      {
        name: 'xs',
        width: BREAKPOINTS.XS,
        formatOptions,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'sm',
        width: BREAKPOINTS.SM,
        formatOptions,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'md',
        width: BREAKPOINTS.MD,
        formatOptions,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'lg',
        width: BREAKPOINTS.LG,
        formatOptions,
        generateImageName,
        withoutEnlargement: false,
      },
      {
        name: 'xl',
        width: BREAKPOINTS.XL,
        formatOptions,
        generateImageName,
        withoutEnlargement: false,
      },
    ],
  },
};
