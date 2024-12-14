import { Container } from '@radix-ui/themes';
import { Suspense } from 'react';

import { ProductList } from '@/components/product-list';
import { StaticContent } from '@/components/static-content';

type HomePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;

  return (
    <Container asChild>
      <main>
        <StaticContent />
        {/* Wrap product list component in a suspense boundary to stream it after initial page load */}
        <Suspense fallback={null}>
          <ProductList locale={locale} />
        </Suspense>
      </main>
    </Container>
  );
};

export default HomePage;
