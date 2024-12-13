import configPromise from '@payload-config';
import {
  AspectRatio,
  Card,
  Grid,
  Heading,
  Inset,
  Section,
  Text,
} from '@radix-ui/themes';
import { unstable_cache as cache } from 'next/cache';
import Image from 'next/image';
import { getPayload } from 'payload';

import { BREAKPOINTS, LOCALE } from '@/constants';

export const ProductList = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const products = await cache(
    () =>
      payload.find({
        collection: 'products',
      }),
    ['products'],
    {
      tags: ['products'],
    }
  )();

  return products.docs.length > 0 ? (
    <Section>
      <Heading as="h2" weight="medium" mb="4">
        Products
      </Heading>
      <Grid
        columns={{
          initial: '2',
          sm: '3',
          lg: '4',
        }}
        gap="3"
        role="list"
      >
        {products.docs.map((product) => (
          <Card role="list-item" key={product.id}>
            <Inset clip="padding-box" side="top" pb="current">
              <AspectRatio
                ratio={2 / 3}
                style={{
                  backgroundColor: 'var(--gray-2)',
                }}
              >
                {typeof product.images?.[0] === 'object' ? (
                  <Image
                    src={product.images[0].url!}
                    alt={product.images[0].alt!}
                    fill
                    sizes={[
                      `(max-width: ${BREAKPOINTS.SM - 1}) 50vw`,
                      `(max-width: ${BREAKPOINTS.LG - 1}) 33vw`,
                      '25vw',
                    ].join(', ')}
                    style={{ objectFit: 'cover' }}
                    quality={100}
                  />
                ) : null}
              </AspectRatio>
            </Inset>
            <Heading as="h3" size="3" weight="medium" mb="2">
              {product.name}
            </Heading>
            <Text weight={'medium'}>
              {(product.price / 100).toLocaleString(LOCALE, {
                style: 'currency',
                currency: 'EUR',
              })}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  ) : null;
};
