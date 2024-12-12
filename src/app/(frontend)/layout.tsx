import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Raleway, Roboto_Slab } from 'next/font/google';

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

export const dynamic = 'force-dynamic';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${raleway.variable}`}>
      <body>
        <Theme accentColor="ruby" radius="none">
          {children}
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
