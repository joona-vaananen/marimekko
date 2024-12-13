import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Raleway, Roboto_Slab } from 'next/font/google';

import { Header } from '@/components/header';
import { LOCALE } from '@/constants';
import './theme-config.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata = {
  title: 'Marimekko',
  description: 'Marimekko app',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang={LOCALE}
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
