import { Container, Flex, VisuallyHidden } from '@radix-ui/themes';

import AppLogo from '@/assets/app-logo.svg';

export const Header = () => {
  return (
    <Container asChild py="4">
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
