import configPromise from '@payload-config';
import {
  AspectRatio,
  Card,
  Container,
  Grid,
  Heading,
  Inset,
  Section,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';
import { getPayload } from 'payload';

import { BREAKPOINTS } from '@/constants';

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const products = await payload.find({
    collection: 'products',
  });

  return (
    <Container>
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
                <AspectRatio ratio={2 / 3}>
                  {typeof product.images?.[0] === 'object' ? (
                    <Image
                      src={product.images[0].url!}
                      alt={product.images[0].alt!}
                      fill
                      objectFit="cover"
                      sizes={[
                        `(max-width: ${BREAKPOINTS.SM - 1}) 50vw`,
                        `(max-width: ${BREAKPOINTS.LG - 1}) 33vw`,
                        '25vw',
                      ].join(', ')}
                      quality={100}
                    />
                  ) : null}
                </AspectRatio>
              </Inset>
              <Heading as="h3" size="3" weight="medium" mb="2">
                {product.name}
              </Heading>
              <Text>
                {(product.price / 100).toLocaleString('en', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </Text>
            </Card>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default HomePage;
