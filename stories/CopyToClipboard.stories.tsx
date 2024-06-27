import type { Meta } from '@storybook/react';
import { Button } from '../src/Button';
import { CopyButton, CopyToClipboard } from '../src/CopyToClipboard';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof CopyToClipboard> = {
  title: 'CopyToClipboard',
  component: CopyToClipboard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A **copy button** copies given text to clipboard.',
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
    <CopyButton
      plain
      copyText="http://example.com"
      labelBeforeCopy="Copy link"
      labelAfterCopy="Link is copied"
    ></CopyButton>
  );
};

export const CopyToClipboardCustomUI = () => {
  return (
    <CopyToClipboard>
      {({ copied, copy }) => {
        return (
          <Button
            isDisabled={copied}
            onPress={() => copy('http://example.com')}
          >
            {copied ? 'Copied url' : 'Copy url'}
          </Button>
        );
      }}
    </CopyToClipboard>
  );
};

CopyToClipboardCustomUI.parameters = {
  docs: {
    description: {
      story:
        'Use **CopyToClipboard** component to build your own copy to clipboard UI:',
    },
  },
};
