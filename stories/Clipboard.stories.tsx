import type { Meta } from '@storybook/react';
import { Button } from '../src/Button';
import { CopyButton, Clipboard } from '../src/Clipboard';
import { docs } from '../.storybook/docs';
import { Text } from '../src/Text';

const meta: Meta = {
  title: 'Clipboard',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A **Clipboard** copies given text to clipboard.',
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
    <div className="flex items-center gap-1">
      <Text>http://example.com</Text>

      <CopyButton
        plain
        copyText="http://example.com"
        label="Copy link"
        labelCopied="Link is copied"
      ></CopyButton>
    </div>
  );
};

Example.parameters = {
  docs: {
    description: {
      story: 'Use the **CopyButton** component to copy text to clipboard.'
    }
  }
}

export const CopyToClipboard = () => {
  return (
    <Clipboard>
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
    </Clipboard>
  );
};

CopyToClipboard.parameters = {
  docs: {
    description: {
      story:
        'Use the **Clipboard** component to build your own copy to clipboard UI.',
    },
  },
};
