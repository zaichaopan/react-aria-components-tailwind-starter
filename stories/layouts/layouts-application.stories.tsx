import { docs } from '../../.storybook/docs.ts';
import { Button } from '../../src/button.tsx';
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
import { Avatar, AvatarBadge } from '../../src/avatar.tsx';
import {
  SearchIcon,
  UserIcon,
  Settings2Icon,
  LogOutIcon,
  BellIcon,
  MessageCircleMoreIcon,
  PhoneIcon,
  CalendarDaysIcon,
  MoreHorizontalIcon,
  InboxIcon,
} from 'lucide-react';
import { Link, LinkProps } from '../../src/link.tsx';
import { NotificationBadge } from '../../src/notification-badge.tsx';
import { composeRenderProps, TooltipTrigger } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from '../../src/tooltip.tsx';
import { AvailableIcon } from '../../src/icons.tsx';

const meta = {
  title: 'Layouts/Application',
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

export const Application = () => {
  return (
    <div className="flex h-dvh w-full">
      <Sidebar />
      <main className="border-border/75 bg-background relative flex-1 overflow-y-auto border-s dark:bg-zinc-900"></main>
    </div>
  );
};

type SidebarLinkProps = LinkProps & {
  isActive?: boolean;
};

const links: Array<SidebarLinkProps> = [
  {
    href: '/',
    tooltip: <Tooltip placement="end">Inbox</Tooltip>,
    children: (
      <>
        <Icon aria-label="Activity">
          <InboxIcon />
        </Icon>
        <NotificationBadge variant="dot"></NotificationBadge>
      </>
    ),
  },
  {
    href: '/',
    tooltip: <Tooltip placement="end">Activity</Tooltip>,
    children: (
      <>
        <Icon aria-label="Activity">
          <BellIcon />
        </Icon>
      </>
    ),
  },
  {
    href: '/',
    isActive: true,
    tooltip: <Tooltip placement="end">Chat</Tooltip>,
    children: (
      <>
        <Icon aria-label="Chat">
          <MessageCircleMoreIcon />
        </Icon>

        <NotificationBadge variant="numeric" value={10}></NotificationBadge>
      </>
    ),
  },
  {
    href: '/',
    tooltip: <Tooltip placement="end">Call</Tooltip>,
    children: (
      <>
        <Icon aria-label="Call">
          <PhoneIcon />
        </Icon>
      </>
    ),
  },
  {
    href: '/',
    tooltip: <Tooltip placement="end">Calendar</Tooltip>,
    children: (
      <>
        <Icon aria-label="Calendar">
          <CalendarDaysIcon />
        </Icon>
      </>
    ),
  },
];

function Sidebar() {
  return (
    <div className="group flex w-14 flex-col py-2">
      <div className="grid place-content-center">
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="size-10"
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
      </div>

      <nav className="flex flex-1 flex-col">
        <ul className="grid place-content-center gap-y-2 p-4 px-1">
          <li className="grid place-content-center">
            <TooltipTrigger>
              <Button
                variant="unstyle"
                className="p-2 hover:bg-zinc-200/75 dark:hover:bg-zinc-600"
              >
                <SearchIcon aria-label="Search" className="size-4" />
              </Button>
              <Tooltip placement='end'>Search</Tooltip>
            </TooltipTrigger>
          </li>
          {links.map((link, index) => (
            <li key={index} className="grid place-content-center">
              <SidebarLink {...link} />
            </li>
          ))}
          <li className="grid place-content-center">
            <MenuTrigger>
              <MenuButton
                tooltip={<Tooltip placement="end">More</Tooltip>}
                isIconOnly
                buttonArrow={null}
                variant="plain"
                className="group/more p-2 hover:bg-zinc-200/75 dark:hover:bg-zinc-600"
              >
                <Icon>
                  <MoreHorizontalIcon />
                </Icon>
              </MenuButton>
              <MenuPopover placement="end">
                <Menu>
                  <MenuItem>Option1</MenuItem>
                  <MenuItem>Option2</MenuItem>
                  <MenuItem>Option3</MenuItem>
                </Menu>
              </MenuPopover>
            </MenuTrigger>
          </li>
        </ul>
      </nav>

      <div className="mt-auto flex justify-center px-2 pt-4">
        <MenuTrigger>
          <MenuButton variant="unstyle" buttonArrow={null}>
            <Avatar
              src="https://i.imgur.com/xIe7Wlb.png"
              alt="Marissa Whitaker"
            >
              <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
            </Avatar>
          </MenuButton>
          <MenuPopover placement="end" className="min-w-64">
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
        </MenuTrigger>
      </div>
    </div>
  );
}

function SidebarLink({
  isActive,
  ...props
}: LinkProps & {
  isActive?: boolean;
}) {
  return (
    <Link
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge(
          'rounded-md p-2 text-nowrap hover:no-underline focus-visible:outline-offset-0',
          isActive
            ? 'bg-zinc-200/75 dark:bg-zinc-600'
            : 'hover:bg-zinc-200/75 dark:hover:bg-zinc-600',
          className,
        );
      })}
    />
  );
}
