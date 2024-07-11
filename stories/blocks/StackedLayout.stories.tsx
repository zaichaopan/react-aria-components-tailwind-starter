import type { Meta } from '@storybook/react';
import { TextField, SearchInput, SearchField } from '../../src/Field';
import { docs } from '../../.storybook/docs';
import { Button } from '../../src/Button';
import { Strong, TextLink } from '../../src/Text';
import { Separator } from '../../src/Separator';
import { Icon } from '../../src/Icon';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../src/Menu';
import { Avatar } from '../../src/Avatar';
import {
  Bell,
  Lightbulb,
  LogOut,
  MenuIcon,
  Settings,
  ShieldCheck,
  UserCircle,
} from 'lucide-react';
import { Modal } from '../../src/Modal';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogCloseButton,
} from '../../src/Dialog';
import { Link } from '../../src/Link';
import { Heading } from '../../src/Heading';

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
    <div className="bg-zinc-10 flex min-h-screen w-full flex-col bg-zinc-100 dark:bg-background">
      <header className="flex h-14 items-center px-2 md:px-6 ">
        <HamburgerMenu />

        <div className="flex hidden gap-2 lg:flex">
          <div className="mr-2 flex items-center gap-4">
            <img
              className="size-6"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            />
            <Strong>Tailwind Labs</Strong>
          </div>
          <Separator orientation="vertical" className="m-2" />
          <nav className="flex">
            <ul className="flex flex-1 gap-4">
              <li className="flex">
                <Link
                  href="/"
                  className={[
                    'p-2 font-semibold hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800',
                    'before:absolute',
                    'before:left-[8px]',
                    'before:-bottom-2',
                    "before:content-['']",
                    'before:w-[calc(100%-16px)]',
                    'before:border-b-2',
                    'before:border-accent',
                  ].join(' ')}
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/events"
                  className="p-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
                >
                  Events
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/orders"
                  className="p-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
                >
                  Orders
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/broadcasts"
                  className="p-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
                >
                  Broadcasts
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/broadcasts"
                  className="p-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
                >
                  Settings
                </Link>
              </li>
            </ul>
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
            <MenuPopover placement="bottom end" className="min-w-64">
              <Menu>
                <MenuItem
                  icon={
                    <Icon>
                      <UserCircle />
                    </Icon>
                  }
                >
                  My profile
                </MenuItem>
                <MenuItem
                  icon={
                    <Icon>
                      <Settings />
                    </Icon>
                  }
                >
                  Settings
                </MenuItem>
                <MenuSeparator />
                <MenuItem
                  icon={
                    <Icon>
                      <ShieldCheck />
                    </Icon>
                  }
                >
                  Privacy policy
                </MenuItem>
                <MenuItem
                  icon={
                    <Icon>
                      <Lightbulb />
                    </Icon>
                  }
                >
                  Share feedback
                </MenuItem>
                <MenuSeparator />
                <MenuItem
                  icon={
                    <Icon>
                      <LogOut />
                    </Icon>
                  }
                >
                  Sign out
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </header>
      <main className="mx-2 mb-2 flex-1 rounded-xl border border-border/75 bg-background p-6 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <Heading>Home</Heading>
          <Separator className="my-4" />
          <Strong>
            This is a rebuild of the beautiful design from Tailwind Labs. Please
            check it out{' '}
            <TextLink
              href="https://catalyst.tailwindui.com/demos/stacked"
              target="_blank"
            >
              https://catalyst.tailwindui.com/demos/stacked
            </TextLink>{' '}
            and buy{' '}
            <TextLink>https://tailwindui.com/templates/catalyst</TextLink>
          </Strong>{' '}
          if you enjoy it.
        </div>
      </main>
    </div>
  );
};

function HamburgerMenu() {
  return (
    <DialogTrigger>
      <Button plain isIconOnly className="text-muted lg:hidden">
        <Icon aria-label="Open Navigation">
          <MenuIcon />
        </Icon>
      </Button>
      <Modal drawer size="xs" isDismissable>
        <Dialog>
          <DialogCloseButton />
          <DialogBody className="px-0 py-6">
            <div className="flex items-center gap-4 px-6">
              <img
                className="size-6"
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              />
              <Strong>Tailwind Lab</Strong>
            </div>
            <Separator />
            <nav className="mt-4 flex">
              <ul className="flex flex-1 flex-col gap-1">
                <li className="flex flex-1 px-2">
                  <Link
                    href="/"
                    className={[
                      'flex-1 p-2 font-semibold hover:bg-zinc-100 hover:no-underline dark:hover:bg-zinc-800',
                      'before:absolute',
                      'before:top-[8px]',
                      'before:-left-2',
                      "before:content-['']",
                      'before:h-[calc(100%-16px)]',
                      'before:border-l-2',
                      'before:border-accent',
                    ].join(' ')}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex flex-1 px-2">
                  <Link
                    href="/events"
                    className="flex-1 p-2 font-semibold text-muted hover:bg-zinc-100 hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Events
                  </Link>
                </li>
                <li className="flex flex-1 px-2">
                  <Link
                    href="/orders"
                    className="flex-1 p-2 font-semibold text-muted hover:bg-zinc-100 hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Orders
                  </Link>
                </li>
                <li className="flex flex-1 px-2">
                  <Link
                    href="/broadcasts"
                    className="flex-1 p-2 font-semibold text-muted hover:bg-zinc-100 hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Broadcasts
                  </Link>
                </li>
                <li className="flex flex-1 px-2">
                  <Link
                    href="/broadcasts"
                    className="flex-1 p-2 font-semibold text-muted hover:bg-zinc-100 hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
