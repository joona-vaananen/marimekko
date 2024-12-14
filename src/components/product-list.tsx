import {
  AspectRatio,
  Card,
  Grid,
  Heading,
  Inset,
  Section,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';

import { BREAKPOINTS } from '@/constants';
import { getCachedProducts } from '@/lib/products';

export type ProductListProps = Readonly<
  React.ComponentPropsWithoutRef<typeof Section> & {
    locale: string;
  }
>;

export const ProductList = async ({ locale, ...props }: ProductListProps) => {
  const products = await getCachedProducts({ locale });

  // If no products were found, render nothing
  if (products.docs.length === 0) {
    return null;
  }

  return (
    <Section {...props}>
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
                    src={product.images[0].url}
                    alt={product.images[0].alt}
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
            <Text weight={'medium'}>{product.price.formatted}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
