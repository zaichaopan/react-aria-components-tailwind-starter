import type { Meta } from '@storybook/react';
import { VisuallyHidden } from '../src/VisuallyHidden';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/VisuallyHidden.html#visuallyhidden" target="_blank">**VisuallyHidden**</a> hides its children visually, while keeping content visible to screen readers..',
      },
      ...docs,
      canvas: {
        sourceState: 'shown',
      },
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
    <div>
      <VisuallyHidden>This will be visually hidden</VisuallyHidden>
      Inspect devtool to see what is hidden
    </div>
  );
};
