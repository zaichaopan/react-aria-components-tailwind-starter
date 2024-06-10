import type { Meta } from '@storybook/react';
import { Button } from '../src/Button';
import { docs } from '../.storybook/docs';
import { GlobalToastRegion } from '../src/toast/toast-region';
import { toast } from '../src/toast/toast-queue';

const meta: Meta = {
  title: 'Toast',
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/useToast.html#usetoast" target="_blank">**Toasts**</a> display brief, temporary notifications of actions, errors, or other events in an application.',
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
    <div className="flex gap-4 p-12">
      <Button
        outline
        onPress={() => {
          toast.add({
            title: 'Toast',
            description: 'This is a toast description',
          });
        }}
      >
        Default
      </Button>
      <Button
        outline
        onPress={() => {
          toast.add({
            title: 'Toast',
            description: 'This is a toast description',
            type: 'warning',
          });
        }}
      >
        Warning
      </Button>

      <Button
        outline
        onPress={() => {
          toast.add({
            title: 'Toast',
            description: 'This is a toast description',
            type: 'error',
          });
        }}
      >
        Error
      </Button>

      <Button
        outline
        onPress={() => {
          toast.add({
            title: 'Toast',
            description: 'This is a toast description',
            type: 'success',
          });
        }}
      >
        Success
      </Button>

      <GlobalToastRegion aria-label="notification" />
    </div>
  );
};
