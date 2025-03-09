import { docs } from '../../.storybook/docs.ts';
import { Button } from '../../src/button.tsx';
import { Strong } from '../../src/text.tsx';
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
  SearchIcon,
  InboxIcon,
  ChartBarIncreasingIcon,
  WorkflowIcon,
  UserCog2Icon,
  ChartNoAxesColumnIcon,
  CalendarCogIcon,
  TagsIcon,
  RadioIcon,
  HelpCircleIcon,
  SendIcon,
  UserIcon,
  Settings2Icon,
  LogOutIcon,
  HomeIcon,
  Layers3Icon,
  MenuIcon,
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
import { Heading } from '../../src/heading.tsx';
import { Separator } from '../../src/separator.tsx';
import { NotificationBadge } from '../../src/notification-badge.tsx';
import { composeRenderProps, LinkProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { ChevronRightIcon } from '../../src/icons.tsx';

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
    <div className="flex h-dvh w-full flex-col md:flex-row">
      <HamburgerMenu />

      <SideNavigation />

      <main className="border-border/75 bg-background relative flex-1 overflow-y-auto border-s p-6 lg:p-10 dark:bg-zinc-900">
        <div>
          <Heading className="relative">Projects</Heading>
          <Separator soft className="my-4" />
        </div>
      </main>
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
            <DialogHeader>
              <div className="flex items-center gap-x-2.5">
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="-m-1 size-8"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2"
                      opacity="0.5"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Icon>

                <Strong>Acme</Strong>
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
          <Icon aria-label="Search">
            <SearchIcon />
          </Icon>
        </Button>
        <MenuTrigger>
          <MenuButton variant="plain" buttonArrow={null}>
            <Avatar
              className="size-8"
              src="https://i.imgur.com/xIe7Wlb.png"
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
    <div className="group hidden w-64 flex-col overflow-y-auto bg-zinc-100 md:flex dark:bg-zinc-950">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-x-2.5 p-2">
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="-m-1 size-10"
            >
              <path
                fill="currentColor"
                d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2"
                opacity="0.5"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </Icon>
          <Strong>Acme</Strong>
        </div>
      </div>

      <MainNavigation />

      <div className="sticky bottom-0 left-0 flex bg-inherit px-2 py-4">
        <MenuTrigger>
          <MenuButton
            variant="plain"
            className="flex-1 justify-start overflow-hidden font-normal"
          >
            <Avatar
              src="https://i.imgur.com/xIe7Wlb.png"
              alt="Marissa Whitaker"
              className="size-8"
            />

            <span className="truncate">Marissa Whitaker</span>
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
    'aria-label': 'Inbox - 6 new messages',
    children: (
      <>
        <Icon>
          <InboxIcon />
        </Icon>
        Inbox
        <NotificationBadge
          className="ms-auto"
          inline
          variant="numeric"
          value={6}
          aria-label="Inbox - 6 new messages"
        >
          10
        </NotificationBadge>
      </>
    ),
  },
  {
    title: 'Workspaces',
    items: [
      {
        href: '/',
        isActive: true,
        children: (
          <>
            <Icon>
              <Layers3Icon />
            </Icon>
            Projects
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <ChartBarIncreasingIcon />
            </Icon>
            Analyze
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <WorkflowIcon />
            </Icon>
            Workflows
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <UserCog2Icon />
            </Icon>
            Manage Access
          </>
        ),
      },
    ],
  },
  {
    title: 'Data management',
    items: [
      {
        href: '/',
        children: (
          <>
            <Icon>
              <ChartNoAxesColumnIcon />
            </Icon>
            All charts
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <CalendarCogIcon />
            </Icon>
            Explore events
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <TagsIcon />
            </Icon>
            Visual labels
          </>
        ),
      },
      {
        href: '/',
        children: (
          <>
            <Icon>
              <RadioIcon />
            </Icon>
            Live data feed
          </>
        ),
      },
    ],
  },
];

function MainNavigation() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul className="grid gap-y-0.5 p-4">
        <li className="hidden md:block">
          <Button
            variant="unstyle"
            className="group/search flex w-full items-center gap-x-2.5 px-2 py-1 hover:bg-zinc-200 sm:text-sm/6 dark:hover:bg-zinc-800"
          >
            <Icon>
              <SearchIcon className="text-muted group-hover/search:text-accent size-4" />
            </Icon>
            Search
          </Button>
        </li>
        {navLinks.map((link) => (
          <li>
            <NavLink {...link} />
          </li>
        ))}
      </ul>
      <ul className="mt-auto grid gap-y-0.5 p-4">
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
        <DisclosureControl className="group/control [&:not(:hover)]:text-muted mt-3 mb-1 w-full text-xs/6">
          {props.title} <ChevronRightIcon className="hidden group-hover/control:flex size-4 ms-auto transition-all group-aria-expanded:rotate-90"/>
        </DisclosureControl>
        <DisclosurePanel>
          <ul className="grid gap-y-0.5">
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
          'group w-full gap-x-2.5 overflow-hidden rounded-lg px-2 py-1 text-nowrap hover:bg-zinc-200 hover:no-underline focus-visible:outline-offset-0 dark:hover:bg-zinc-800',
          props.isActive
            ? '[&>[data-ui=icon]]:text-accent bg-zinc-200 dark:bg-zinc-800'
            : '[&>[data-ui=icon]]:text-muted [&:hover>[data-ui=icon]]:text-accent',
          className,
        );
      })}
    />
  );
}
