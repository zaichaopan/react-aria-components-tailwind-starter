import type { Meta } from '@storybook/react';
import { ProgressBar } from '../src/ProgressBar';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/ProgressBar.html" target="_blank">**Progress bars**</a> show either determinate or indeterminate progress of an operation over time.',
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
  return <ProgressBar label="loading" value={80} />;
};

export const Indeterminate = () => {
  return <ProgressBar label="loading" value={80} isIndeterminate />;
};
