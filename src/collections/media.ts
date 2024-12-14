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
    imageSizes: [
      {
        name: 'xs',
        width: BREAKPOINTS.XS,
        generateImageName,
        withoutEnlargement: true,
      },
      {
        name: 'sm',
        width: BREAKPOINTS.SM,
        generateImageName,
        withoutEnlargement: true,
      },
      {
        name: 'md',
        width: BREAKPOINTS.MD,
        generateImageName,
        withoutEnlargement: true,
      },
      {
        name: 'lg',
        width: BREAKPOINTS.LG,
        generateImageName,
        withoutEnlargement: true,
      },
      {
        name: 'xl',
        width: BREAKPOINTS.XL,
        generateImageName,
        withoutEnlargement: true,
      },
    ],
  },
};
