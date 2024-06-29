import type { Meta } from '@storybook/react';
import React from 'react';
import { Avatar, AvatarBadge } from '../../src/Avatar';
import { Icon } from '../../src/Icon';
import { Available } from '../../src/Status';
import {
  MenuButton,
  MenuTrigger,
  MenuPopover,
  Menu,
  MenuItem,
  SubmenuTrigger,
  SubMenu,
  MenuSection,
  MenuSeparator,
} from '../../src/Menu';
import {
  Bell,
  Bookmark,
  ExternalLink,
  FilePlus,
  HashIcon,
  Headphones,
  HelpCircle,
  Home,
  Laugh,
  ListFilter,
  MessageCircle,
  MoreHorizontal,
  PenBoxIcon,
  Plus,
  Search,
  Smile,
  UserPlus2,
} from 'lucide-react';
import { Link } from '../../src/Link';
import { Strong } from '../../src/Text';
import { NotificationBadge } from '../../src/NotificationBadge';
import { ComboBox, ComboBoxListBox, ComboBoxPopover } from '../../src/ComboBox';
import { Input } from '../../src/Field';
import { Keyboard } from 'react-aria-components';
import { DropdownItem, DropdownSection } from '../../src/ListBox';
import { Button } from '../../src/Button';
import { TooltipTrigger, Tooltip } from '../../src/Tooltip';

const meta: Meta = {
  title: 'Layouts/slack',
  component: Slack,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Slack() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-fuchsia-950 via-fuchsia-900 to-fuchsia-950">
      <div className="flex h-10 items-center px-4">
        <div className="ml-auto w-2/5">
          <SearchBox />
        </div>
        <TooltipTrigger>
          <Button unstyle className="ml-auto p-2 text-white" aria-label="help">
            <Icon>
              <HelpCircle className="size-5" />
            </Icon>

            <NotificationBadge show className="bg-white" />
          </Button>
          <Tooltip>Help</Tooltip>
        </TooltipTrigger>
      </div>
      <div className="flex flex-1">
        <div className="flex flex w-16 flex-col items-center pb-6">
          <NavLinks />

          <div className="mt-auto flex flex-col items-center gap-4">
            <CreateMenu />
            <ProfileMenu />
          </div>
        </div>
        <div className="mb-1 mr-1 flex flex-1 rounded-md border border-fuchsia-900 bg-background">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function SearchBox() {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <ComboBox allowsCustomValue menuTrigger="focus" aria-label="Search">
      <div className="relative">
        <Icon>
          <Search className="absolute left-2 top-1/2 w-4 -translate-y-1/2 text-muted" />
        </Icon>

        <Input
          ref={ref}
          placeholder="Search"
          className="peer h-8 bg-background pl-7 focus:border-border focus:ring-0"
        />

        <Keyboard className="absolute right-2 top-1/2 hidden -translate-y-1/2 px-2 font-sans text-sm/6 text-muted sm:flex sm:peer-data-[focused=true]:hidden">
          ⌘K
        </Keyboard>
        <Keyboard className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-md border px-2 py-0.5 text-[0.6rem] text-muted sm:peer-data-[focused=true]:flex">
          ESC
        </Keyboard>
      </div>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownSection title="Suggestion">
            <DropdownItem textValue="linear">Linear</DropdownItem>
            <DropdownItem textValue="slack">Slack</DropdownItem>
            <DropdownItem textValue="youtube">Youtube</DropdownItem>
            <DropdownItem textValue="raycast">Raycast</DropdownItem>
          </DropdownSection>
          <DropdownSection title="Commands">
            <DropdownItem textValue="clipboard history">
              Clipboard history
            </DropdownItem>
            <DropdownItem textValue="import extension">
              Import Extension
            </DropdownItem>
          </DropdownSection>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

function Sidebar() {
  return (
    <div className="w-80 border-r bg-fuchsia-900/95 p-2">
      <div className="flex">
        <CompanyMenu />
        <FilterMessagesMenu />
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <nav className="mt-6 flex w-16 flex-col gap-4 px-2">
      <Link className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs">
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon>
            <Home
              size={20}
              strokeWidth={1.5}
              className="transition group-hover:scale-110"
            />
          </Icon>
        </div>
        Home
      </Link>

      <Link
        arial-label="Chat - 6 new messages"
        className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs"
      >
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon>
            <MessageCircle
              size={20}
              strokeWidth={1.5}
              className="transition group-hover:scale-110"
            />
          </Icon>
          <NotificationBadge count={6} />
        </div>
        DMs
      </Link>
      <Link
        aria-label="Calls - new calls"
        className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs"
      >
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon>
            <Bell
              size={20}
              strokeWidth={1.5}
              className="transition group-hover:scale-110"
            />
          </Icon>
          <NotificationBadge show />
        </div>
        Activity
      </Link>
      <Link className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs">
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon>
            <Bookmark
              strokeWidth={1.5}
              size={20}
              className="transition group-hover:scale-110"
            />
          </Icon>
        </div>
        Later
      </Link>

      <Link className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs">
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon>
            <MoreHorizontal
              strokeWidth={1.5}
              size={20}
              className="transition group-hover:scale-110"
            />
          </Icon>
        </div>
        More
      </Link>
    </nav>
  );
}

function CompanyMenu() {
  return (
    <MenuTrigger>
      <MenuButton plain className="text-base text-white hover:bg-fuchsia-900">
        ACME
      </MenuButton>
      <MenuPopover className="min-w-[300px] rounded-md">
        <div className="flex items-center gap-4 border-b p-4">
          <Avatar alt="A C" />
          <div className="flex flex-col">
            <span className="text-md font-semibold">ACME</span>
            <span className="flex items-center gap-1 text-sm">
              teamacme.slack.com
            </span>
          </div>
        </div>
        <Menu>
          <MenuItem href="https://react-spectrum.adobe.com/react-spectrum/Menu.html#links">
            <div className="text-wrap text-xs/6 group-data-[focused]:text-white">
              Your workspace is currently on Slack's{' '}
              <Strong className="font-semibold group-data-[focused]:text-white sm:text-xs/6">
                Business + Plan
              </Strong>
              .{' '}
              <span className="font-semibold group-data-[focused]:text-white hover:underline">
                Learn More
              </span>
            </div>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>Invite people to Acme</MenuItem>
          <MenuSeparator />
          <MenuItem shortcut="⌘,">Preferences</MenuItem>
          <SubmenuTrigger>
            <MenuItem>Tools & settings</MenuItem>
            <MenuPopover className="min-w-[250px] rounded-md">
              <SubMenu aria-label="Tools & settings">
                <MenuSection title="Tools">
                  <MenuItem>Customize workspace</MenuItem>
                  <MenuItem textValue="workflow builder">
                    <span>Workflow Builder</span>
                    <Icon>
                      <ExternalLink className="ml-auto h-4" />
                    </Icon>
                  </MenuItem>
                  <MenuItem textValue="Workflow analytics">
                    <span>Workflow Analytics</span>
                    <Icon>
                      <ExternalLink className="ml-auto h-4" />
                    </Icon>
                  </MenuItem>
                </MenuSection>
                <MenuSection title="Administration">
                  <MenuItem>Manager apps</MenuItem>
                </MenuSection>
              </SubMenu>
            </MenuPopover>
          </SubmenuTrigger>
          <MenuSeparator />
          <MenuItem>Sign in on mobile</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

function FilterMessagesMenu() {
  return (
    <MenuTrigger>
      <MenuButton
        plain
        className="ml-auto text-white hover:bg-fuchsia-900"
        noArrow
      >
        <Icon aria-label="Filter Conversation">
          <ListFilter />
        </Icon>
      </MenuButton>
      <MenuPopover className="min-w-[250px] rounded-md">
        <Menu
          selectionMode="multiple"
          defaultSelectedKeys={['all_activity', 'everyone']}
        >
          <MenuItem id="all_activity">All activity</MenuItem>
          <MenuItem id="unreads_only">Unreads only</MenuItem>
          <MenuItem id="mention_only">Mentions only</MenuItem>
          <MenuItem id="custom">Custom by section</MenuItem>
          <MenuSeparator />
          <MenuItem id="everyone">Everyone</MenuItem>
          <MenuItem id="without_external_people">
            Without external people
          </MenuItem>
          <MenuItem id="including_external_people">
            Including external people
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

function CreateMenu() {
  return (
    <MenuTrigger>
      <MenuButton
        noArrow
        plain
        size="lg"
        className="rounded-full bg-fuchsia-300/45 text-white aria-[expanded=true]:rotate-45 hover:bg-fuchsia-900"
      >
        <Icon aria-label="Create new">
          <Plus strokeWidth={1.5} />
        </Icon>
      </MenuButton>
      <MenuPopover placement="right" className="min-w-[350px]">
        <Menu>
          <MenuSection
            title="Create"
            className="px-2 pb-2 pt-4 text-sm font-semibold text-foreground "
          >
            <MenuItem
              description="Star a conversation in a DM or channel"
              shortcut="⌘N"
              icon={
                <div className="my-1 rounded-full bg-purple-200 p-2 text-purple-900">
                  <Icon>
                    <PenBoxIcon className="size-5" />
                  </Icon>
                </div>
              }
            >
              Message
            </MenuItem>
            <MenuItem
              description="Star a video or audio chat"
              icon={
                <div className="my-1 rounded-full bg-teal-200 p-2 text-teal-900">
                  <Icon>
                    <Headphones className="size-5" />
                  </Icon>
                </div>
              }
            >
              Huddle
            </MenuItem>
            <MenuItem
              description="Curate content and conversation"
              shortcut="⌘⇧N"
              icon={
                <div className="my-1 rounded-full bg-cyan-200 p-2 text-cyan-900">
                  <Icon>
                    <FilePlus className="size-5" />
                  </Icon>
                </div>
              }
            >
              Canvas
            </MenuItem>
            <MenuItem
              description="Start a group convention by topic"
              icon={
                <div className="rounded-full bg-slate-200 p-2 text-slate-900">
                  <Icon>
                    <HashIcon className="size-5" />
                  </Icon>
                </div>
              }
            >
              Channel
            </MenuItem>
          </MenuSection>

          <MenuSeparator></MenuSeparator>
          <MenuItem
            className="font-medium"
            icon={
              <div className="my-1 rounded-full p-2">
                <Icon>
                  <UserPlus2 strokeWidth={1.5} className="size-5" />
                </Icon>
              </div>
            }
          >
            Invite people
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

function ProfileMenu() {
  return (
    <MenuTrigger>
      <MenuButton unstyle noArrow>
        <Avatar
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Steve"
        >
          <AvatarBadge
            aria-label="Available"
            className="border-fuchsia-950"
            badge={<Available />}
          />
        </Avatar>
      </MenuButton>
      <MenuPopover
        className="min-w-[300px] rounded-md bg-white"
        placement="right bottom"
      >
        <div className="flex items-center gap-2 px-6 pb-2 pt-6">
          <Avatar
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
            alt="Steve"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Zai Pan</span>
            <span className="flex items-center gap-1 text-sm">
              <Icon>
                <Available className="h-2.5 w-2.5"></Available>
              </Icon>
              <span className="text-xs text-muted">Active</span>
            </span>
          </div>
        </div>
        <Menu>
          <MenuItem
            className="mx-4 mb-2 rounded-md border"
            aria-label="Update your status"
          >
            <div className="flex items-center gap-2">
              <Smile className="h-4 w-4 group-focus:hidden" />
              <Laugh className="hidden h-4 w-4 text-amber-600 group-focus:flex group-focus:text-white" />
              <div>Update your status</div>
            </div>
          </MenuItem>
          <MenuItem className="px-4">
            Set yourself as&nbsp;<span className="font-semibold">away</span>
          </MenuItem>

          <SubmenuTrigger>
            <MenuItem className="px-4">Pause notifications</MenuItem>
            <MenuPopover className="rounded-lg">
              <SubMenu aria-label="Pause notifications">
                <MenuSection title="Pause notifications ...">
                  <MenuItem>For 30 minutes</MenuItem>
                  <MenuItem>For 1 hour</MenuItem>
                  <MenuItem>Until tomorrow</MenuItem>
                  <MenuItem>Until next week</MenuItem>
                </MenuSection>
              </SubMenu>
            </MenuPopover>
          </SubmenuTrigger>

          <MenuSeparator />
          <MenuItem className="px-4">Profile</MenuItem>
          <MenuItem className="px-4" shortcut="⌘,">
            Preferences
          </MenuItem>
          <MenuSeparator />
          <MenuItem className="px-4" shortcut="⌘⇧J">
            Download
          </MenuItem>
          <MenuSeparator />
          <MenuItem className="px-4">Sign out of ACME</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
export default meta;
