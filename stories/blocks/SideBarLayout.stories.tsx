import type { Meta } from '@storybook/react';
import { TextField, SearchInput, SearchField } from '../../src/field';
import { docs } from '../../.storybook/docs';
import { Button } from '../../src/button';
import { Strong, TextLink } from '../../src/text.tsx';
import { Separator } from '../../src/separator.ts';
import { Icon } from '../../src/icon';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../src/menu';
import { Avatar } from '../../src/avatar';
import {
  BellRing,
  CalendarDays,
  ChevronUp,
  Home,
  Inbox,
  Lightbulb,
  LogOut,
  MenuIcon,
  SearchIcon,
  Settings,
  ShieldCheck,
  Ticket,
  UserCircle,
} from 'lucide-react';
import { Modal } from '../../src/modal';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogCloseButton,
} from '../../src/dialog';
import { Link } from '../../src/link';
import { Heading } from '../../src/heading';

const meta: Meta<typeof TextField> = {
  title: 'Block/SideBarLayout',
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

export const SidebarLayout01 = () => {
  return (
    <div className="bg-zinc-10 flex min-h-screen w-full flex-col bg-zinc-100 dark:bg-background md:flex-row">
      <header className="flex h-14 items-center px-2 md:hidden md:px-6 ">
        <HamburgerMenu />

        <div className="ml-auto flex items-center gap-4">
          <SearchField aria-label="Search">
            <SearchInput className="bg-background" placeholder="Search" />
          </SearchField>
          <Button iconOnly plain className="text-muted">
            <Icon aria-label="Notification">
              <Inbox />
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

      <div className="hidden w-64 flex-col md:flex">
        <div className="flex flex-col p-4">
          <div className="mb-2 flex gap-4 px-3">
            <img
              className="size-5"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            />
            <Strong>Tailwind Labs</Strong>
          </div>
          <Button plain className="justify-start gap-4  text-muted">
            <SearchIcon className="size-5"></SearchIcon>Search
          </Button>
          <Button plain className="justify-start gap-4  text-muted">
            <Inbox className="size-5" />
            Inbox
          </Button>
        </div>

        <Separator />

        <nav className="flex p-4">
          <ul className="flex flex-1 flex-col gap-1">
            <li className="flex flex-1">
              <Link
                href="/"
                className="flex-1 gap-4 px-3 py-2 font-semibold hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
              >
                <Icon>
                  <Home className="size-5" />
                </Icon>
                Home
              </Link>
            </li>
            <li className="flex flex-1">
              <Link
                href="/events"
                className="flex-1 gap-4 px-3 py-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
              >
                <Icon>
                  <CalendarDays className="size-5" />
                </Icon>
                Events
              </Link>
            </li>
            <li className="flex flex-1">
              <Link
                href="/orders"
                className="flex-1 gap-4 px-3 py-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
              >
                <Icon>
                  <Ticket className="size-5" />
                </Icon>
                Orders
              </Link>
            </li>
            <li className="flex flex-1">
              <Link
                href="/broadcasts"
                className="flex-1 gap-4 px-3 py-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
              >
                <Icon>
                  <BellRing className="size-5" />
                </Icon>
                Broadcasts
              </Link>
            </li>
            <li className="flex flex-1">
              <Link
                href="/broadcasts"
                className="flex-1 gap-4 px-3  py-2 font-semibold text-muted hover:bg-zinc-200 hover:no-underline dark:hover:bg-zinc-800"
              >
                <Icon>
                  <Settings className="size-5" />
                </Icon>
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <Separator className="" />
        </div>

        <div className="flex p-4">
          <MenuTrigger>
            <MenuButton
              noArrow
              unstyle
              className="flex mt-auto items-center p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Avatar
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt="Jane"
              />

              <div className="mr-16 flex w-16 flex-col justify-center">
                <span className="text-sm/5 font-medium">Taylor</span>
                <span className="text-xs/5 text-muted">Manager</span>
              </div>
              <Icon>
                <ChevronUp className="size-4 text-muted" />
              </Icon>
            </MenuButton>
            <MenuPopover placement="top left" className="min-w-64">
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
      </div>

      <main className="border-border/75 mb-2 flex-1 rounded-xl border border bg-background p-6 dark:bg-zinc-900 md:mr-2 md:mt-2 lg:p-10">
        <div className="max-w-6xl">
          <Heading>Home</Heading>
          <Separator className="my-4" />
          <Strong>
            This is a rebuild of the beautiful design from Tailwind Labs. Please
            check it out{' '}
            <TextLink
              href="https://catalyst.tailwindui.com/demos/sidebar"
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
      <Button plain iconOnly className="text-muted lg:hidden">
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
