import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Raleway, Roboto_Slab } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Header } from '@/components/header';
import { LOCALES } from '@/constants';
import './theme-config.css';

// Default font
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

// Heading font
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata = {
  title: 'Marimekko',
  description: 'Marimekko E-commerce Web Application',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;

  // Render not found UI, if the locale in route parameters does not match any of the supported locales
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
