import type { Meta } from '@storybook/react';
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
  Home,
  Laugh,
  ListFilter,
  MessageCircle,
  MoreHorizontal,
  PenBoxIcon,
  Plus,
  Smile,
  UserPlus2,
} from 'lucide-react';
import { Link } from '../../src/Link';
import { Strong } from '../../src/Text';
import { NotificationBadge } from '../../src/NotificationBadge';

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
      <div className="h-10"></div>
      <div className="flex flex-1">
        <div className="flex flex w-16 flex-col items-center pb-6">
          <NavLinks />

          <div className="mt-auto flex flex-col items-center gap-4">
            <CreateMenu />
            <ProfileMenu />
          </div>
        </div>
        <div className="mb-1 mr-1 flex flex-1 overflow-hidden rounded-md border border-fuchsia-900 bg-background">
          <Sidebar />
        </div>
      </div>
    </div>
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
          <Icon
            icon={
              <Home
                size={20}
                strokeWidth={1.5}
                className="transition group-hover:scale-110"
              />
            }
          />
        </div>
        Home
      </Link>

      <Link
        arial-label="Chat - 6 new messages"
        className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs"
      >
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon
            icon={
              <MessageCircle
                size={20}
                strokeWidth={1.5}
                className="transition group-hover:scale-110"
              />
            }
          />
          <NotificationBadge count={6} />
        </div>
        DMs
      </Link>
      <Link
        aria-label="Calls - new calls"
        className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs"
      >
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon
            icon={
              <Bell
                size={20}
                strokeWidth={1.5}
                className="transition group-hover:scale-110"
              />
            }
          />
          <NotificationBadge show />
        </div>
        Activity
      </Link>
      <Link className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs">
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon
            icon={
              <Bookmark
                strokeWidth={1.5}
                size={20}
                className="transition group-hover:scale-110"
              />
            }
          />
        </div>
        Later
      </Link>

      <Link className="group flex-col text-white hover:text-white hover:no-underline sm:text-xs">
        <div className="relative rounded-lg p-2 group-hover:bg-fuchsia-300/45">
          <Icon
            icon={
              <MoreHorizontal
                strokeWidth={1.5}
                size={20}
                className="transition group-hover:scale-110"
              />
            }
          />
        </div>
        More
      </Link>
    </nav>
  );
}

function CompanyMenu() {
  return (
    <MenuTrigger>
      <MenuButton text className="text-base text-white hover:bg-fuchsia-900">
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
                    <Icon
                      icon={<ExternalLink className="ml-auto h-4" />}
                    ></Icon>
                  </MenuItem>
                  <MenuItem textValue="Workflow analytics">
                    <span>Workflow Analytics</span>
                    <Icon
                      icon={<ExternalLink className="ml-auto h-4" />}
                    ></Icon>
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
        text
        className="ml-auto text-white hover:bg-fuchsia-900"
        noArrow
      >
        <Icon icon={<ListFilter />} aria-label="Filter Convestation"></Icon>
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
        text
        size="lg"
        className="rounded-full bg-fuchsia-300/45 text-white aria-[expanded=true]:rotate-45 hover:bg-fuchsia-900"
      >
        <Icon icon={<Plus strokeWidth={1.5} />} aria-label="Create new"></Icon>
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
                  <Icon icon={<PenBoxIcon className="size-5" />} />
                </div>
              }
            >
              Message
            </MenuItem>
            <MenuItem
              description="Star a video or audio chat"
              icon={
                <div className="my-1 rounded-full bg-teal-200 p-2 text-teal-900">
                  <Icon
                    className="my-1 rounded-full bg-teal-200 text-teal-900"
                    icon={<Headphones className="size-5" />}
                  />
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
                  <Icon icon={<FilePlus className="size-5" />} />
                </div>
              }
            >
              Canvas
            </MenuItem>
            <MenuItem
              description="Start a group convention by topic"
              icon={
                <div className="rounded-full bg-slate-200 p-2 text-slate-900">
                  <Icon icon={<HashIcon className="size-5" />} />
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
                <Icon
                  className="rounded-full"
                  icon={<UserPlus2 strokeWidth={1.5} className="size-5" />}
                />
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
      <MenuButton unstyle>
        <Avatar
          className="size-10"
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
      <MenuPopover className="min-w-[300px] bg-white rounded-md" placement="right bottom">
        <div className="flex items-center gap-2 px-6 pb-2 pt-6">
          <Avatar
            className="size-10"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
            alt="Steve"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Zai Pan</span>
            <span className="flex items-center gap-1 text-sm">
              <Icon
                icon={<Available className="h-2.5 w-2.5"></Available>}
              ></Icon>
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
