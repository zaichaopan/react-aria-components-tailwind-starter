import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs.ts';
import { MailIcon, PlusIcon, ChevronDownIcon } from 'lucide-react';
import { Icon } from '../src/accessible-icon.tsx';
import { Separator } from '../src/separator.tsx';
import { Button } from '../src/button.tsx';
import {
  MenuItem,
  MenuTrigger,
  Menu,
  MenuButton,
  MenuPopover,
  MenuSection,
} from '../src/menu.tsx';

const meta: Meta = {
  title: 'Separator',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/useSeparator.html#useseparator" target="_blank">**separator**</a> is a visual divider between two groups of content, e.g. groups of menu items or sections of a page.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div>
        A separator consists of a single element that represents the divider
      </div>
      <Separator className="my-4" />
      With reduced contrast
      <Separator className="my-4" soft />
    </div>
  );
};

export const SeparatorWithVerticalOrientation = () => {
  return (
    <div className="flex p-8">
      <div className="h-48 flex-1 px-4"></div>
      <Separator orientation="vertical" />
      <div className="flex-1 px-4"></div>
    </div>
  );
};

SeparatorWithVerticalOrientation.parameters = {
  docs: {
    description: {
      story: 'Use **orientation="vertical"** to render vertical separator.',
    },
  },
};

export const SeparatorWithTextsOrIcons = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <Separator>Continue</Separator>

      <Separator>
        <Icon>
          <MailIcon className="mx-2" />
        </Icon>
      </Separator>

      <Separator>
        {new Intl.DateTimeFormat('en', {
          weekday: 'long',
          month: 'short',
          day: '2-digit',
        }).format(new Date())}
      </Separator>

      <Separator>
        <MenuTrigger>
          <MenuButton variant="outline">
            {new Intl.DateTimeFormat('en', {
              weekday: 'long',
              month: 'short',
              day: '2-digit',
            }).format(new Date())}
          </MenuButton>
          <MenuPopover>
            <Menu>
              <MenuSection title="Jump to&hellip; ">
                <MenuItem>Today</MenuItem>
                <MenuItem>Yesterday</MenuItem>
                <MenuItem>Last week</MenuItem>
                <MenuItem>Last month</MenuItem>
                <MenuItem>The very beginning</MenuItem>
              </MenuSection>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </Separator>

      <Separator>
        <Button variant="outline">
          <Icon>
            <PlusIcon />
          </Icon>
          New Page
        </Button>
      </Separator>

      <Separator>
        <Button variant="outline">
          Expand
          <Icon>
            <ChevronDownIcon />
          </Icon>
        </Button>
      </Separator>

      <div className="flex p-8">
        <div className="h-48 flex-1 px-4"></div>
        <Separator orientation="vertical">Or</Separator>
        <div className="flex-1 px-4"></div>
      </div>
    </div>
  );
};

SeparatorWithTextsOrIcons.parameters = {
  docs: {
    description: {
      story:
        'Add **text** or **icon** inside to render text or icons inside your separator.',
    },
  },
};
