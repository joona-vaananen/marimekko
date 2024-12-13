import { unstable_cache as cache } from 'next/cache';
import { getPayload } from 'payload';

import { LOCALE } from '@/constants';
import config from '@payload-config';

export const getProducts = async () => {
  const payload = await getPayload({ config });

  const products = await payload.find({
    collection: 'products',
  });

  // Format product data and pick fields that are actually needed
  return {
    ...products,
    docs: products.docs.map((product) => ({
      id: product.id,
      name: product.name,
      price: {
        formatted: (product.price / 100).toLocaleString(LOCALE, {
          style: 'currency',
          currency: 'EUR',
        }),
        value: product.price / 100,
      },
      images:
        product.images
          ?.filter((image) => typeof image === 'object')
          .map((image) => ({
            id: image.id,
            url: image.url,
            alt: image.alt,
            width: image.width,
            height: image.height,
          })) ?? [],
    })),
  };
};

export const getCachedProducts = cache(() => getProducts(), ['products'], {
  tags: ['products'],
});
