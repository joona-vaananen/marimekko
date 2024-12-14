'use client';

import NextImage from 'next/image';

export type ImageProps = Readonly<
  Omit<React.ComponentPropsWithRef<typeof NextImage>, 'quality'>
>;

export const Image = (props: ImageProps) => {
  return (
    <NextImage
      // Set custom loader to resolve Payload's image URLs
      loader={({ src, width }) => {
        const extensionIndex = src.lastIndexOf('.');

        return `${src.substring(0, extensionIndex)}-${width}x${src.substring(extensionIndex)}`;
      }}
      {...props}
    />
  );
};
