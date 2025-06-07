import type { Meta } from '@storybook/react-vite';
import { Button } from '../src/button';
import { CopyButton, Clipboard } from '../src/clipboard';
import { docs } from '../.storybook/docs';
import { Input, Label, TextField } from '../src/field';
import { Strong } from '../src/text';
import { LinkIcon } from '../src/icons/outline/link';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="grid place-items-center gap-y-6">
      <CopyButton
        copyValue="http://example.com"
        label="Copy link"
        labelAfterCopied="Link is copied"
      ></CopyButton>

      <CopyButton variant="outline" copyValue="http://example.com">
        Copy link
      </CopyButton>

      <CopyButton
        variant="outline"
        copyValue="http://example.com"
        icon={<LinkIcon />}
      >
        Copy link
      </CopyButton>

      <div className="flex items-center gap-x-1.5">
        <TextField isReadOnly>
          <Label className="sr-only">Install command</Label>
          <Input
            value="npm i tailwindcss-react-aria-components"
            className="truncate"
          />
        </TextField>

        <CopyButton copyValue="npm i tailwindcss-react-aria-components" />
      </div>

      <div className="flex items-center gap-x-1.5 rounded-md border py-1.5 ps-2.5 pe-1">
        <Strong>npm i tailwindcss-react-aria-components</Strong>
        <CopyButton
          size="sm"
          copyValue="npm i tailwindcss-react-aria-components"
        />
      </div>
    </div>
  );
};

export const Customization = () => {
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
