import { Container, Flex, VisuallyHidden } from '@radix-ui/themes';

import AppLogo from '@/assets/app-logo.svg';

export type HeaderProps = Readonly<
  React.ComponentPropsWithoutRef<typeof Container>
>;

export const Header = (props: HeaderProps) => {
  return (
    <Container asChild py="4" {...props}>
      <header>
        <Flex justify="center">
          <AppLogo aria-hidden />
          <VisuallyHidden asChild>
            <h1>Marimekko</h1>
          </VisuallyHidden>
        </Flex>
      </header>
    </Container>
  );
};
