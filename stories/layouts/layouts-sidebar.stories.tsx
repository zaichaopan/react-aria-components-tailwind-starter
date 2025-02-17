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
      <header className="sticky left-0 top-0 flex h-14 items-center px-4 md:hidden">
        <HamburgerMenu />

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
            <MenuPopover>
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
      </header>

      <div className="group hidden w-64 flex-col overflow-y-auto md:flex">
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex items-center gap-x-2.5">
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
            <Strong>Company</Strong>
          </div>
        </div>

        <MainNavigation />

        <div className="mt-auto flex px-2 py-4">
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
          </MenuTrigger>
        </div>
      </div>

      <main className="relative flex-1 overflow-y-auto border-s border-border/25 bg-background p-6 dark:bg-zinc-900 lg:p-10">
        <div>
          <Heading className="relative">Projects</Heading>
          <Separator soft className="my-4" />
        </div>
      </main>
    </div>
  );
};

function HamburgerMenu() {
  return (
    <DialogTrigger>
      <Button variant="plain" isIconOnly className="text-muted lg:hidden">
        <Icon aria-label="Open Navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </Icon>
      </Button>
      <Modal drawer size="xs" isDismissable>
        <Dialog className="h-full">
          <DialogHeader>
            <div className="flex items-center gap-2.5">
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

              <Strong>Company</Strong>
            </div>
          </DialogHeader>
          <DialogCloseButton />

          <DialogBody className="px-0">
            <MainNavigation />
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

function NavLink({ isActive, ...props }: LinkProps & { isActive?: boolean }) {
  return (
    <Link
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge(
          'group w-full gap-x-2.5 overflow-hidden text-nowrap p-2 group-data-[collapsed=true]:w-9  hover:no-underline dark:hover:bg-zinc-800 sm:text-sm/5 [&>[data-ui=icon]:not([class*=size-])]:size-5',
          isActive
            ? 'bg-zinc-100 dark:bg-zinc-800'
            : 'hover:bg-zinc-100 [&:not(:hover)>[data-ui=icon]]:text-muted',
          className,
        );
      })}
    />
  );
}

function MainNavigation() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul className="grid gap-y-0.5 p-4">
        <li className="hidden md:block">
          <Button
            variant="unstyle"
            className="group flex w-full items-center gap-x-2.5 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 sm:text-sm/5"
          >
            <Icon>
              <SearchIcon className="size-5 text-muted group-hover:text-foreground" />
            </Icon>
            Search
          </Button>
        </li>
        <li>
          <NavLink href="/">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M10 21v-9m-7 0h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
                />
              </svg>
            </Icon>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            <Icon>
              <InboxIcon />
            </Icon>
            Inbox
            <NotificationBadge
              inline
              variant="numeric"
              value={10}
              className="ms-auto rounded-sm bg-accent"
            />
          </NavLink>
        </li>

        <Separator soft className="my-3" />

        <li className="grid">
          <Disclosure defaultExpanded>
            <DisclosureControl className="w-full text-xs/6 text-muted ">
              Workspaces
            </DisclosureControl>
            <DisclosurePanel>
              <ul className="grid gap-y-0.5 pt-1">
                <li>
                  <NavLink isActive>
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="size-5"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path
                          fill="currentColor"
                          d="M20.99 7.325v-2.15a2.29 2.29 0 0 0-1.66-2.21a2.3 2.3 0 0 0-1-.05l-6.51 1a3.7 3.7 0 0 0-1.09-.87a3.8 3.8 0 0 0-1.81-.46H5.84A3.82 3.82 0 0 0 2 6.425v11.16a3.82 3.82 0 0 0 3.84 3.83h12.33a3.82 3.82 0 0 0 2.71-1.12a3.88 3.88 0 0 0 1.12-2.71v-7.7a3.73 3.73 0 0 0-1.01-2.56m-4.34 9.76H7.4a1 1 0 0 1 0-2h9.25a1 1 0 0 1 0 2m2.88-10.71a3.8 3.8 0 0 0-1.3-.23h-4.4a1 1 0 0 1-.47-.12a1 1 0 0 1-.35-.32l-.23-.34l5.8-.93a.8.8 0 0 1 .34 0a.7.7 0 0 1 .3.16a.6.6 0 0 1 .2.27a.7.7 0 0 1 .07.33z"
                        />
                      </svg>
                    </Icon>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Icon>
                      <ChartBarIncreasingIcon />
                    </Icon>
                    Analyze
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Icon>
                      <WorkflowIcon />
                    </Icon>
                    Workflows
                  </NavLink>
                </li>

                <li>
                  <NavLink>
                    <Icon>
                      <UserCog2Icon />
                    </Icon>
                    Manage Access
                  </NavLink>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <Separator soft className="my-3" />

        <li className="grid">
          <Disclosure defaultExpanded>
            <DisclosureControl className="w-full text-xs/6 text-muted  hover:text-foreground">
              Data management
            </DisclosureControl>
            <DisclosurePanel>
              <ul className="grid gap-y-0.5 pt-1">
                <li>
                  <NavLink>
                    <Icon>
                      <ChartNoAxesColumnIcon />
                    </Icon>
                    All charts
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Icon>
                      <CalendarCogIcon />
                    </Icon>
                    Explore events
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Icon>
                      <TagsIcon />
                    </Icon>
                    Visual labels
                  </NavLink>
                </li>

                <li>
                  <NavLink>
                    <Icon>
                      <RadioIcon />
                    </Icon>
                    Live data feed
                  </NavLink>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>
      </ul>
      <ul className="mt-auto grid gap-y-0.5 p-4">
        <li>
          <NavLink>
            <Icon>
              <HelpCircleIcon />
            </Icon>
            Support
          </NavLink>
        </li>
        <li>
          <NavLink>
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
