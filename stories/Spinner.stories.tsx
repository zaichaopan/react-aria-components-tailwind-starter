import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Spinner } from '../src/Spinner';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">**button**</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.',
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
    <div className="flex gap-4">
      <Spinner />
      <Spinner className="size-8" />
      <Spinner className="size-12" />
      <Spinner className="size-16" strokeWidth="1" aria-label='loading' />
    </div>
  );
};
