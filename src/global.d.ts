declare module '*.jpg';

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  const content: FC<SVGProps<SVGElement>>;

  export default content;
}

declare module '*.svg?url' {
  const content: unknown;

  export default content;
}