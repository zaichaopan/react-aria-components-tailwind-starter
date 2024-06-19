import React from 'react';
import type { Meta } from '@storybook/react';
import { Settings } from 'lucide-react';
import { Button } from '../src/Button';
import { Popover} from '../src/Popover';
import { docs } from '../.storybook/docs';
import { Avatar, AvatarBadge } from '../src/Avatar';
import { Separator } from '../src/Separator';
import { Switch } from '../src/Switch';
import { Text } from '../src/Text';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  MenuButton,
} from '../src/Menu';
import { Available } from '../src/Status';
import { Dialog } from '../src/Dialog';
import { DialogTrigger } from 'react-aria-components';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Popover.html#popover" target="_blank">**popover**</a> is an overlay element positioned relative to a trigger.',
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
    <DialogTrigger>
      <>
        <Button aria-label="Settings" outline>
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <Popover className="w-96">
          <Dialog>
            <div className="flex flex-col gap-2 p-3">
              <div className="flex gap-4">
                <Avatar
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="John"
                >
                  <AvatarBadge aria-label="Available" badge={<Available />} />
                </Avatar>
                <div className="flex flex-col">
                  <div className="font-medium">Lisa Wilson</div>
                  <Text>Admin</Text>
                </div>
              </div>

              <Separator className="mt-2 bg-border/5" />

              <MenuTrigger>
                <MenuButton text>
                  Language <span className="ml-auto">English (US)</span>
                </MenuButton>
                <MenuPopover placement="end top">
                  <Menu>
                    <MenuItem>English (US)</MenuItem>
                    <MenuItem>French (FR)</MenuItem>
                    <MenuItem>Japanese</MenuItem>
                    <MenuItem>Chinese</MenuItem>
                  </Menu>
                </MenuPopover>
              </MenuTrigger>

              <Switch className="justify-between px-3" defaultSelected>
                Notification
              </Switch>
              <Switch className="justify-between px-3">Badges</Switch>
            </div>
          </Dialog>
        </Popover>
      </>
    </DialogTrigger>
  );
};

export const ControlledOpen = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <>
      <Button
        aria-label="Settings"
        outline
        onPress={() => setIsOpen(true)}
        ref={ref}
      >
        <Settings className="h-4 w-4" />
        Settings
      </Button>
      <Popover
        className="w-96"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        triggerRef={ref}
      >
        <Dialog aria-label="Settings">
          <div className="flex flex-col gap-2 p-3">
            <div className="flex gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="John"
              >
                <AvatarBadge aria-label="Available" badge={<Available />} />
              </Avatar>
              <div className="flex flex-col">
                <div className="font-medium">Lisa Wilson</div>
                <Text>Admin</Text>
              </div>
            </div>

            <Separator className="mt-2 bg-border/5" />

            <MenuTrigger>
              <MenuButton text>
                Language <span className="ml-auto">English (US)</span>
              </MenuButton>
              <MenuPopover placement="end top">
                <Menu>
                  <MenuItem>English (US)</MenuItem>
                  <MenuItem>French (FR)</MenuItem>
                  <MenuItem>Japanese</MenuItem>
                  <MenuItem>Chinese</MenuItem>
                </Menu>
              </MenuPopover>
            </MenuTrigger>

            <Switch className="justify-between px-3" defaultSelected>
              Notification
            </Switch>
            <Switch className="justify-between px-3">Badges</Switch>
          </div>
        </Dialog>
      </Popover>
    </>
  );
};
