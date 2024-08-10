import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { CopyButton, Clipboard } from '../src/clipboard';
import { docs } from '../.storybook/docs';
import { Input, Label, TextField } from '../src/field';

const meta: Meta = {
  title: 'Clipboard',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A clipboard copies given text to clipboard. Use the **CopyButton** component to copy text to clipboard.',
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

export const BasicExample = () => {
  return (
    <div className='grid place-items-center gap-y-6'>
      <CopyButton
        copyValue="http://example.com"
        label="Copy link"
        labelAfterCopied="Link is copied"
      ></CopyButton>

      <div className="flex items-center gap-x-1">
        <TextField isReadOnly>
          <Label className="sr-only">Install command</Label>
          <Input
            value="npm i tailwindcss-react-aria-components"
            className="truncate"
          />
        </TextField>

        <CopyButton copyValue="npm i tailwindcss-react-aria-components" />
      </div>
    </div>
  );
};

export const ClipboardWithCustomUI = () => {
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

ClipboardWithCustomUI.parameters = {
  docs: {
    description: {
      story:
        'Use the **Clipboard** component to create your custom clipboard component.',
    },
  },
};
