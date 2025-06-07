import { docs } from '../.storybook/docs.ts';
import { MailIcon } from 'lucide-react';
import { ChevronDownIcon } from '../src/icons/outline/chevron-down';
import { PlusIcon } from '../src/icons/outline/plus.tsx';
import { Icon } from '../src/icon.tsx';
import { Separator } from '../src/separator.tsx';
import { Button } from '../src/button';
import {
  MenuItem,
  MenuTrigger,
  Menu,
  MenuButton,
  MenuPopover,
  MenuSection,
} from '../src/menu.tsx';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div>
        A separator consists of a single element that represents the divider
      </div>
      <Separator className="my-4" />
      With reduced contrast
      <Separator className="my-4" soft />
    </div>
  );
};

export const VerticalOrientation = () => {
  return (
    <div className="flex gap-8 p-8">
      <div className="h-48 flex-1 px-4"></div>
      <Separator orientation="vertical" />
      <div className="flex-1 px-4"></div>
    </div>
  );
};

export const SeparatorTexts = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Separator>Continue</Separator>

      <Separator>
        {new Intl.DateTimeFormat('en', {
          weekday: 'long',
          month: 'short',
          day: '2-digit',
        }).format(new Date())}
      </Separator>

      <div className="flex p-8">
        <div className="h-48 flex-1 px-4"></div>
        <Separator orientation="vertical">Or</Separator>
        <div className="flex-1 px-4"></div>
      </div>
    </div>
  );
};

export const SeparatorIcons = () => {
  return (
    <Separator>
      <Icon>
        <MailIcon className="mx-2 stroke-1" />
      </Icon>
    </Separator>
  );
};

export const SeparatorButtons = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Separator>
        <Button variant="outline">
          <PlusIcon />
          New Page
        </Button>
      </Separator>

      <Separator>
        <Button variant="outline">
          Expand
          <ChevronDownIcon />
        </Button>
      </Separator>
    </div>
  );
};

export const SeparatorMenus = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
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
    </div>
  );
};
