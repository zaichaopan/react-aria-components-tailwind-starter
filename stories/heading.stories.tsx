import type { Meta } from '@storybook/react';
import { Heading, HeadingProps } from '../src/heading';
import { docs } from '../.storybook/docs';

const meta: Meta<HeadingProps> = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**Heading** is used to render semantic HTML heading elements.
          \n\n- **level**: render heading from h1 to h4. Default level **1**.
          \n\n- **displayLevel**: use display style of another level.
          `,
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  return (
    <div className='flex flex-col gap-4'>
    <Heading>H1: The quick brown fox jumps over the lazy dog.</Heading>
    <Heading level={2}>H2: The quick brown fox jumps over the lazy dog.</Heading>
    <Heading level={3}>h3: The quick brown fox jumps over the lazy dog.</Heading>
    <Heading level={4}>H4: The quick brown fox jumps over the lazy dog.</Heading>
    <Heading level={4} displayLevel={1}>H4 with H1 style: The quick brown fox jumps over the lazy dog.</Heading>
  </div>
  )
};
