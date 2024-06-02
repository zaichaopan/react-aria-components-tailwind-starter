import type { Meta } from '@storybook/react';
import { Separator } from '../src/Separator';
import { docs } from '../.storybook/docs';
import { Mail } from 'lucide-react';
import { Icon } from '../src/Icon';

const meta: Meta<typeof Separator> = {
  title: 'Separator',
  component: Separator,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/useSeparator.html#useseparator" target="_blank">**separator**</a> is a visual divider between two groups of content, e.g. groups of menu items or sections of a page.',
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
    <div className="flex flex-col items-center p-8">
      <div>
        A separator consists of a single element that represents the divider
      </div>
      <Separator className='my-4'/>
    </div>
  );
};

export const VerticalSeparators = () => {
  return (
    <div className="flex p-8">
      <div className="h-48 flex-1 px-4"></div>
      <Separator orientation="vertical" />
      <div className="flex-1 px-4"></div>
    </div>
  );
};

VerticalSeparators.parameters = {
  docs: {
    description: {
      story:
        'Use **orientation="vertical"** to render vertical separators:',
    },
  },
};

export const WithTextsOrIcons = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col p-8">
        <div className="h-4"></div>
        <Separator>Continue</Separator>
        <div className="h-4"></div>
      </div>

      <div className="flex flex-col items-center p-8">
        <Separator>
          <Icon
            icon={<Mail className="size-5 text-muted" strokeWidth={1.5} />}
          />
        </Separator>
      </div>

      <div className="flex p-8">
        <div className="h-48 flex-1 px-4"></div>
        <Separator orientation="vertical">Or</Separator>
        <div className="flex-1 px-4"></div>
      </div>
    </div>
  );
};

WithTextsOrIcons.parameters = {
  docs: {
    description: {
      story:
        'Add **text** or **icon** inside to render text or icons inside your separator:',
    },
  },
};
