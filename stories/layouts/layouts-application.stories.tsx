import { docs } from '../../.storybook/docs.ts';
import { Button, ButtonProps } from '../../src/button.tsx';
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
} from 'lucide-react';
import { Link, LinkProps } from '../../src/link.tsx';
import { Heading } from '../../src/heading.tsx';
import { Separator } from '../../src/separator.tsx';
import { NotificationBadge } from '../../src/notification-badge.tsx';
import { composeRenderProps } from 'react-aria-components';
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

      <main className="relative flex-1 overflow-y-auto border-s border-border/45 bg-background dark:bg-zinc-900">
        <div className="sticky left-0 top-0 pt-4">
          <Heading className="px-4">Chat</Heading>
          <Separator soft className="mt-4" />
        </div>
        <div className="flex flex-1 p-4"></div>
      </main>
    </div>
  );
};

function Sidebar() {
  return (
    <div className="group flex w-16 flex-col">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-x-2.5">
          <CompanyLogo />
        </div>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul className="grid gap-y-1 gap-y-2 p-4">
          <li>
            <SidebarButton tooltip={<Tooltip placement="end">Search</Tooltip>}>
              <Icon aria-label="Search">
                <SearchIcon />
              </Icon>
            </SidebarButton>
          </li>
          <li>
            <SidebarLink
              href="/"
              tooltip={<Tooltip placement="end">Inbox</Tooltip>}
            >
              <Icon aria-label="Activity">
                <BellIcon />
              </Icon>
              <NotificationBadge variant="dot"></NotificationBadge>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink  isActive tooltip={<Tooltip placement="end">Chat</Tooltip>}>
              <Icon aria-label="Chat">
                <MessageCircleMoreIcon />
              </Icon>

              <NotificationBadge
                variant="numeric"
                value={10}
              ></NotificationBadge>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink tooltip={<Tooltip placement="end">Call</Tooltip>}>
              <Icon aria-label="Phone">
                <PhoneIcon />
              </Icon>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink tooltip={<Tooltip placement="end">Calendar</Tooltip>}>
              <Icon aria-label="Calendars">
                <CalendarDaysIcon />
              </Icon>
            </SidebarLink>
          </li>

          <li>
            <MenuTrigger>
              <MenuButton
                tooltip={<Tooltip placement="end">More</Tooltip>}
                isIconOnly
                buttonArrow={null}
                variant="plain"
                className="group/more hover:bg-accent p-2"
              >
                <Icon>
                  <MoreHorizontalIcon className="text-muted group-hover/more:text-white" />
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

      <div className="mt-auto flex justify-center px-2 py-4">
        <MenuTrigger>
          <MenuButton variant="unstyle" buttonArrow={null}>
            <Avatar
              src="https://i.imgur.com/xIe7Wlb.png"
              alt="Marissa Whitaker"
              className="size-9"
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
          'w-9 gap-x-2.5 text-nowrap rounded-md p-2 hover:no-underline',
          '[&>[data-ui=icon]:not([class*=size-])]:size-5',

          isActive
            ? 'bg-accent text-white'
            : 'hover:bg-accent hover:text-white [&:not(:hover)>[data-ui=icon]]:text-muted',
          className,
        );
      })}
    />
  );
}

function SidebarButton({
  isActive,
  ...props
}: ButtonProps & {
  isActive?: boolean;
}) {
  return (
    <Button
      variant="unstyle"
      className={composeRenderProps(props.className, (className) => {
        return twMerge(
          'group flex w-9 items-center gap-x-2.5 p-2 sm:text-sm/6',
          'hover:bg-accent hover:text-white [&:not(:hover)>[data-ui=icon]]:text-muted [&>[data-ui=icon]]:size-5',
          className,
        );
      })}
      {...props}
    />
  );
}

function CompanyLogo() {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="size-8 text-accent"
      >
        <rect width="24" height="24" fill="none" />
        <path
          fill="currentColor"
          d="M21 2H9a1 1 0 0 0-1 .999V7h8a1 1 0 0 1 1 .999V16h4a1 1 0 0 0 1-.999V3a1 1 0 0 0-.999-1z"
          opacity="0.25"
        />
        <path
          fill="currentColor"
          d="M3 12h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M16 7H6a1 1 0 0 0-1 .999V12h6a1 1 0 0 1 1 .999V19h4a1 1 0 0 0 1-.999V8a1 1 0 0 0-.999-1z"
          opacity="0.5"
        />
      </svg>
    </Icon>
  );
}
