import type { Meta } from '@storybook/react';
import {
  TextField,
  Label,
  FieldError,
  Input,
  SearchInput,
  SearchField,
} from '../../src/Field';
import { docs } from '../../.storybook/docs';
import { Form } from '../../src/Form';
import { Button } from '../../src/Button';
import { Strong, Text } from '../../src/Text';
import { Separator } from '../../src/Separator';
import { Icon } from '../../src/Icon';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '../../src/Menu';
import { Avatar } from '../../src/Avatar';
import { Bell, MenuIcon } from 'lucide-react';
import { Tab, TabList, Tabs } from '../../src/Tabs';
import { Modal } from '../../src/Modal';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
} from '../../src/Dialog';

const meta: Meta<typeof TextField> = {
  title: 'Block/StackedLayout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const StackedLayout01 = () => {
  return (
    <div className="flex min-h-screen w-full flex-col  bg-zinc-100">
      <header className="flex h-14 items-center px-4">
        <HamburgerMenu />

        <div className="flex hidden gap-2 lg:flex">
          <div className="mr-2 flex items-center gap-4">
            <img
              className="size-6"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            />
            <Strong>Tailwind CSS</Strong>
          </div>
          <Separator orientation="vertical" className="mx-2 my-5" />
          <nav>
            <Tabs selectedKey="/">
              <TabList>
                <Tab className="py-4" id="/" href="/">
                  Home
                </Tab>
                <Tab className="py-4" id="/events" href="/events">
                  Events
                </Tab>
                <Tab className="py-4" id="/orders" href="/orders">
                  Orders
                </Tab>
                <Tab className="py-4" id="/broadcasts" href="/broadcasts">
                  Broadcasts
                </Tab>
                <Tab className="py-4" id="/settings" href="/Settings">
                  Settings
                </Tab>
              </TabList>
            </Tabs>
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <SearchField aria-label="Search">
            <SearchInput className="bg-background" placeholder="Search" />
          </SearchField>
          <Button isIconOnly plain className="text-muted">
            <Icon aria-label="Notification">
              <Bell strokeWidth={1.5}></Bell>
            </Icon>
          </Button>
          <MenuTrigger>
            <MenuButton noArrow unstyle>
              <Avatar
                className="size-8"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt="Jane"
              />
            </MenuButton>
            <MenuPopover placement="bottom">
              <Menu>
                <MenuItem>Account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Support</MenuItem>
                <MenuItem>Sign out</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </header>
      <main className="mx-2 flex-1 rounded-t-xl border border-b-0 bg-background">
        <div></div>
      </main>
    </div>
  );
};

function HamburgerMenu() {
  return (
    <DialogTrigger>
      <Button outline isIconOnly className="lg:hidden">
        <Icon aria-label="Open Navigation">
          <MenuIcon />
        </Icon>
      </Button>
      <Modal drawer size="xs" isDismissable>
        <Dialog>
          <DialogCloseButton />
          <DialogBody className="px-0 pt-6">
            <div className="px-6 flex items-center gap-4">
              <img
                className="size-6"
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              />
              <Strong>Tailwind CSS</Strong>
            </div>
            <Separator />
            <nav>
              <Tabs selectedKey="/" orientation="vertical" className="-mx-[3.5px]">
                <TabList className="p-0 border-l-white gap-3">
                  <Tab id="/" href="/" className="px-6 py-0">
                    Home
                  </Tab>
                  <Tab id="/events" href="/events" className="px-6 py-0">
                    Events
                  </Tab>
                  <Tab id="/orders" href="/orders" className="px-6 py-0">
                    Orders
                  </Tab>
                  <Tab
                    id="/broadcasts"
                    href="/broadcasts"
                    className="px-6 py-0"
                  >
                    Broadcasts
                  </Tab>
                  <Tab id="/settings" href="/Settings" className="px-6">
                    Settings
                  </Tab>
                </TabList>
              </Tabs>
            </nav>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
