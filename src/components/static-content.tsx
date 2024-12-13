import {
  AspectRatio,
  Box,
  Grid,
  Heading,
  Section,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';

import productImage1 from '@/assets/product-image-1.jpg';
import productImage2 from '@/assets/product-image-2.jpg';

export const StaticContent = () => {
  return (
    <Section>
      <Grid
        position="relative"
        columns="2"
        mb="9"
        pt={{
          initial: '9',
          sm: '0',
        }}
      >
        <Box
          width={{
            initial: 'auto',
            sm: '75%',
          }}
          height={{
            initial: 'auto',
            sm: '75%',
          }}
          mt={{
            initial: '9',
            sm: '0',
          }}
          pt={{
            initial: '0',
            sm: '9',
          }}
          pr={{
            initial: '0',
            sm: '9',
          }}
          style={{ zIndex: 1 }}
        >
          <AspectRatio ratio={2 / 3}>
            <Image
              src={productImage1}
              alt="Maija Unikko Blouse"
              fill
              sizes="50vw"
              style={{ objectFit: 'cover' }}
              priority
              quality="100"
            />
          </AspectRatio>
        </Box>
        <Box
          position={{
            initial: 'relative',
            sm: 'absolute',
          }}
          width={{
            initial: 'auto',
            sm: '50%',
          }}
          height={{
            initial: 'auto',
            sm: '100%',
          }}
          right="0"
          mt={{
            initial: '-9',
            sm: '0',
          }}
          ml={{
            initial: '-9',
            sm: '0',
          }}
        >
          <AspectRatio ratio={2 / 3}>
            <Image
              src={productImage2}
              alt="Jäkälä Marras Turtleneck Shirt"
              fill
              sizes="50vw"
              style={{ objectFit: 'cover' }}
              priority
              quality="100"
            />
          </AspectRatio>
        </Box>
      </Grid>
      <Box
        width={{
          initial: '100%',
          sm: '50%',
        }}
        pb={{
          initial: '0',
          sm: '9',
        }}
        pr={{
          initial: '0',
          sm: '9',
        }}
      >
        <Heading as="h2" weight="medium" mb="4">
          Get ready for a party
        </Heading>
        <Text>
          Get ready to express yourself! Begin with a bold dress featuring
          vibrant patterns or create a playful look by mixing prints. Timeless
          floral, stripes, and wavy patterns ensure wear beyond the party
          season. Enhance your outfit with accessories like a statement
          hairpiece, bold scarf, or bright bag. Opt for a pop of color with an
          enchanting black dress. The key is to have fun and feel confident.
        </Text>
      </Box>
    </Section>
  );
};