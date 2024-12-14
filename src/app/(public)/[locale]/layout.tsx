import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Raleway, Roboto_Slab } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Header } from '@/components/header';
import { LOCALES } from '@/constants';
import './theme-config.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const experimental_ppr = true;

export const metadata = {
  title: 'Marimekko',
  description: 'Marimekko app',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${robotoSlab.variable} ${raleway.variable}`}
    >
      <body>
        <Theme accentColor="ruby" radius="none">
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
