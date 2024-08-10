import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Spinner } from '../src/spinner';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
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
      <Spinner className="size-16"/>
    </div>
  );
};
