import { docs } from '../../.storybook/docs.ts';
import { Button } from '../../src/button';
import { Icon } from '../../src/icon.tsx';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../src/menu.tsx';
import { Avatar } from '../../src/avatar.tsx';
import {
  InboxIcon,
  HelpCircleIcon,
  SendIcon,
  UserIcon,
  Settings2Icon,
  LogOutIcon,
  HomeIcon,
  MenuIcon,
  ArrowRightLeftIcon,
  Grid2X2Icon,
  ProportionsIcon,
} from 'lucide-react';
import { Modal } from '../../src/modal.tsx';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogHeader,
} from '../../src/dialog.tsx';
import { Link } from '../../src/link.tsx';
import {
  Disclosure,
  DisclosureControl,
  DisclosurePanel,
} from '../../src/disclosure.tsx';
import { NotificationBadge } from '../../src/notification-badge.tsx';
import { composeRenderProps, LinkProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { CalendarIcon } from '../../src/icons/outline/calendar.tsx';
import { SearchIcon } from '../../src/icons/outline/search.tsx';
import { ChevronRightIcon } from '../../src/icons/outline/chevron-right.tsx';

const meta = {
  title: 'Layouts/Sidebar',
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

export const Sidebar = () => {
  return (
    <div className="flex h-dvh w-full flex-col md:flex-row dark:bg-zinc-950">
      <HamburgerMenu />
      <SideNavigation />
      <main className="border-border/50 bg-background relative flex-1 overflow-y-auto border-s p-6 lg:p-10"></main>
    </div>
  );
};

function AvatarMenuPopover() {
  return (
    <MenuPopover placement="top left" className="min-w-64">
      <Menu>
        <MenuItem>Clear status</MenuItem>
        <MenuSeparator />
        <MenuItem>
          <Icon>
            <UserIcon />
          </Icon>
          <MenuItemLabel>My profile</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <Icon>
            <Settings2Icon />
          </Icon>
          <MenuItemLabel>Settings</MenuItemLabel>
        </MenuItem>
        <MenuSeparator />

        <MenuItem>
          <Icon>
            <LogOutIcon />
          </Icon>
          <MenuItemLabel>Sign out</MenuItemLabel>
        </MenuItem>
      </Menu>
    </MenuPopover>
  );
}

function HamburgerMenu() {
  return (
    <header className="sticky top-0 left-0 flex h-14 items-center px-4 md:hidden">
      <DialogTrigger>
        <Button variant="plain" isIconOnly className="text-muted lg:hidden">
          <Icon aria-label="Open Navigation">
            <MenuIcon />
          </Icon>
        </Button>
        <Modal drawer size="xs" isDismissable>
          <Dialog className="h-full">
            <DialogHeader className="p-0 pt-16">
              <div className="flex flex-1 gap-x-2 px-2.5 pb-3">
                <MenuTrigger>
                  <MenuButton
                    variant="outline"
                    className="flex-1 gap-x-2.5 overflow-hidden rounded-lg font-semibold sm:px-1.5"
                  >
                    <Avatar
                      alt="Acme"
                      className="size-6 [--border-radius:0.25rem]"
                      background="black"
                    />
                    <span className="truncate"> Acme, Inc</span>
                  </MenuButton>
                  <MenuPopover placement="bottom left">
                    <Menu>
                      <MenuItem>Item 1</MenuItem>
                      <MenuItem>Item 2</MenuItem>
                    </Menu>
                  </MenuPopover>
                </MenuTrigger>
              </div>
            </DialogHeader>
            <DialogCloseButton />

            <DialogBody className="px-0">
              <MainNavigation />
            </DialogBody>
          </Dialog>
        </Modal>
      </DialogTrigger>

      <div className="ml-auto flex items-center gap-4 px-2">
        <Button isIconOnly variant="plain">
          <SearchIcon aria-label="Search" />
        </Button>
        <MenuTrigger>
          <MenuButton variant="plain" buttonArrow={null}>
            <Avatar
              className="size-8"
              src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Marissa Whitaker"
            />
          </MenuButton>
          <AvatarMenuPopover />
        </MenuTrigger>
      </div>
    </header>
  );
}

function SideNavigation() {
  return (
    <div className="group isolate hidden w-64 flex-col overflow-y-auto md:flex">
      <div className="bg-background sticky top-0 left-0 z-10 flex items-center justify-between gap-x-2.5">
        <div className="flex flex-1 items-center overflow-hidden px-4 pt-4 pb-2">
          <MenuTrigger>
            <MenuButton
              variant="outline"
              className="flex-1 gap-x-2.5 overflow-hidden rounded-lg font-semibold sm:px-1.5"
            >
              <Avatar
                alt="Acme"
                className="size-6 [--border-radius:0.25rem]"
                background="black"
              />
              <span className="truncate"> Acme, Inc</span>
            </MenuButton>
            <MenuPopover placement="bottom left">
              <Menu>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </div>

      <MainNavigation />

      <div className="bg-background sticky bottom-0 left-0 flex px-2 py-4">
        <MenuTrigger>
          <MenuButton
            variant="plain"
            className="flex-1 justify-start overflow-hidden font-normal"
          >
            <Avatar
              src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Marissa Whitaker"
              className="size-8"
            />

            <span className="text-foreground/70 truncate font-medium">
              Marissa Whitaker
            </span>
          </MenuButton>
          <AvatarMenuPopover />
        </MenuTrigger>
      </div>
    </div>
  );
}

const navLinks: Array<NavLinkProps> = [
  {
    href: '/',
    isActive: true,
    children: (
      <>
        <Icon>
          <HomeIcon />
        </Icon>
        Home
      </>
    ),
  },
  {
    href: '/',
    children: (
      <>
        <CalendarIcon />
        Calendars
      </>
    ),
  },
  {
    href: '/',
    'aria-label': 'Inbox - 5 new messages',
    children: (
      <>
        <Icon>
          <InboxIcon />
        </Icon>
        Inbox
        <NotificationBadge
          variant="numeric"
          value={5}
          aria-label="Inbox - 5 new messages"
        >
          5
        </NotificationBadge>
      </>
    ),
  },
  {
    title: 'Workspaces',
    items: [
      {
        href: '/',

        children: (
          <>
            <Icon>
              <Grid2X2Icon />
            </Icon>
            Summary
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <ArrowRightLeftIcon />
            </Icon>
            Transactions
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <ProportionsIcon />
            </Icon>
            Reports
          </>
        ),
      },
    ],
  },
];

function MainNavigation() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul className="grid gap-y-1 p-4">
        {navLinks.map((link) => (
          <li>
            <NavLink {...link} />
          </li>
        ))}
      </ul>
      <ul className="mt-auto grid gap-y-1 p-4">
        <li>
          <NavLink href="/">
            <Icon>
              <HelpCircleIcon />
            </Icon>
            Support
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            <Icon>
              <SendIcon />
            </Icon>
            Feedback
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

type NavLinkItem = {
  isActive?: boolean;
} & LinkProps;

type NavLinkProps = NavLinkItem | { title: string; items: NavLinkItem[] };

function NavLink(props: NavLinkProps) {
  if ('items' in props) {
    return (
      <Disclosure defaultExpanded>
        <DisclosureControl className="group/control not-hover:text-foreground/50 mt-3 w-full ps-2.5 text-xs/6 font-semibold">
          {props.title}{' '}
          <ChevronRightIcon className="ms-auto hidden size-4 transition-all group-hover/control:flex group-aria-expanded:rotate-90" />
        </DisclosureControl>
        <DisclosurePanel>
          <ul className="grid gap-y-1">
            {props.items.map((item) => (
              <li>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </DisclosurePanel>
      </Disclosure>
    );
  }

  const { isActive, ...rest } = props;
  return (
    <Link
      {...rest}
      className={composeRenderProps(rest.className, (className) => {
        return twMerge(
          'group w-full gap-x-3 overflow-hidden rounded-md px-2.5 py-1 text-nowrap hover:bg-zinc-100/50 hover:no-underline focus-visible:outline-offset-0 dark:hover:bg-zinc-800 [&>[data-ui=icon]:not([class*=size-])]:size-4.5',
          '[&>[data-ui=notification-badge]]:text-foreground/70',
          '[&>[data-ui=notification-badge]]:rounded-md',
          '[&>[data-ui=notification-badge]]:top-1/2',
          '[&>[data-ui=notification-badge]]:right-1',
          '[&>[data-ui=notification-badge]]:-translate-y-1/2',
          '[&>[data-ui=notification-badge]]:bg-zinc-200/40',
          'dark:[&>[data-ui=notification-badge]]:bg-zinc-900',
          '[&>[data-ui=notification-badge]]:p-3',
          '[&>[data-ui=notification-badge]]:text-xs/6',
          '[&>[data-ui=notification-badge]]:font-semibold',
          props.isActive
            ? 'bg-zinc-100/50 font-semibold dark:bg-zinc-900 [&>[data-ui=notification-badge]]:bg-transparent'
            : [
                'font-medium',
                'text-foreground/70 [&:not(:hover)>[data-ui=icon]]:text-foreground/35',
              ],

          className,
        );
      })}
    />
  );
}
