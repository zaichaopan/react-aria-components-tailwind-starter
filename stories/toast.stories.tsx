import React from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { GlobalToastRegion, ToastAction } from '../src/toast/toast-region';
import { toast } from '../src/toast/toast-queue';
import { TextLink } from '../src/text';

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
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  const toastKey = React.useRef<string | null>(null);

  return (
    <div className="flex items-center justify-center gap-4 p-12">
      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Default
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Description only
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: 'info',
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Info
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: 'error',
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Error
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: 'warning',
            title: 'Templates unavailable',
            description:
              'Issue template and forms are current unavailable. Please try again later.',
          });
        }}
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: 'Payment details saved',
            description: 'Your payment details have been save successfully.',
            type: 'success',
          });
        }}
      >
        Success
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: 'Payment details saved',
            description: (
              <div>
                Your payment details have been save successfully.&nbsp;{' '}
                <TextLink href="/">Learn more</TextLink>{' '}
              </div>
            ),
            type: 'success',
          });
        }}
      >
        Link
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toastKey.current = toast.add({
            title: 'Payment details saved',
            description: 'Your payment details have been save successfully',
            action: (
              <ToastAction
                onPress={() => {
                  console.log('test', toastKey);
                  if (toastKey.current) {
                    toast.close(toastKey.current);
                  }
                }}
              >
                Dismiss
              </ToastAction>
            ),
            type: 'success',
          });
        }}
      >
        With Action
      </Button>

      <GlobalToastRegion aria-label="notification" />
    </div>
  );
};
