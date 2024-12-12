import configPromise from '@payload-config';
import {
  AspectRatio,
  Box,
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
import primaryImage from './primary-image.jpg';
import secondaryImage from './secondary-image.jpg';

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
        <Box>
          <Grid columns="2" position="relative" mb="8">
            <Box mt="8" mr="-8" style={{ zIndex: 1 }}>
              <AspectRatio ratio={2 / 3}>
                <Image src={primaryImage} alt="" fill objectFit="cover" />
              </AspectRatio>
            </Box>
            <Box mt="-8" ml="-8">
              <AspectRatio ratio={2 / 3}>
                <Image src={secondaryImage} alt="" fill objectFit="cover" />
              </AspectRatio>
            </Box>
          </Grid>
          <Box
            width={{
              initial: '100%',
              sm: '50%',
            }}
            px={{
              initial: '0',
              sm: '8',
            }}
          >
            <Heading as="h2" weight="medium" mb="4">
              Get ready for a party
            </Heading>
            <Text>
              Get ready to express yourself! Begin with a bold dress featuring
              vibrant patterns or create a playful look by mixing prints.
              Timeless floral, stripes, and wavy patterns ensure wear beyond the
              party season. Enhance your outfit with accessories like a
              statement hairpiece, bold scarf, or bright bag. Opt for a pop of
              color with an enchanting black dress. The key is to have fun and
              feel confident.
            </Text>
          </Box>
        </Box>
      </Section>
      {products.docs.length > 0 ? (
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
      ) : null}
    </Container>
  );
};

export default HomePage;
