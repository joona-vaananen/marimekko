import { Container } from '@radix-ui/themes';

import { ProductList } from '@/components/product-list';
import { StaticContent } from '@/components/static-content';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <Container asChild>
      <main>
        <StaticContent />
        <Suspense fallback={null}>
          <ProductList />
        </Suspense>
      </main>
    </Container>
  );
};

export default HomePage;
