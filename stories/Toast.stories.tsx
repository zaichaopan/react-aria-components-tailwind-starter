import React from 'react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { GlobalToastRegion } from '../src/toast/toast-region';
import { toast } from '../src/toast/toast-queue';
import { TextLink } from '../src/text';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  const toastKey = React.useRef<string | null>(null);

  return (
    <div className="flex items-center justify-center gap-4 p-12">
      <Button
        variant="outline"
        onPress={() => {
          toast.add(
            {
              title: 'Templates unavailable',
              description:
                'Issue template and forms are current unavailable. Please try again later.',
            },
            { timeout: 5000 },
          );
        }}
      >
        Default
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add(
            {
              description:
                'Issue template and forms are current unavailable. Please try again later.',
            },
            { timeout: 5000 },
          );
        }}
      >
        Description only
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add(
            {
              type: 'info',
              title: 'Templates unavailable',
              description:
                'Issue template and forms are current unavailable. Please try again later.',
            },
            { timeout: 5000 },
          );
        }}
      >
        Info
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add(
            {
              type: 'error',
              title: 'Templates unavailable',
              description:
                'Issue template and forms are current unavailable. Please try again later.',
            },
            { timeout: 5000 },
          );
        }}
      >
        Error
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add(
            {
              type: 'warning',
              title: 'Templates unavailable',
              description:
                'Issue template and forms are current unavailable. Please try again later.',
            },
            { timeout: 5000 },
          );
        }}
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add(
            {
              inline: true,
              dismissable: true,
              title: 'Payment details saved',
              description: 'Your payment details have been save successfully.',
              type: 'success',
            },
            {
              onClose: () => {
                toastKey.current = null;
              },
            },
          );
        }}
      >
        Success
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: 'success',
            dismissable: true,
            title: 'Payment details saved',
            description: (
              <div>
                Your payment details have been save successfully.&nbsp;{' '}
                <TextLink href="/">Learn more</TextLink>{' '}
              </div>
            ),
          });
        }}
      >
        Link
      </Button>

      <GlobalToastRegion aria-label="notification" />
    </div>
  );
};
