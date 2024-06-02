import React from 'react';
import type { Meta } from '@storybook/react';
import {
  BadgeInfo,
  ChevronsUpDown,
  ExternalLink,
  LogOut,
  MoreHorizontal,
  Settings,
  UserCircle,
} from 'lucide-react';
import {
  Menu,
  SubMenu,
  MenuSeparator,
  MenuItem,
  MenuSection,
  MenuButton,
  MenuTrigger,
  SubmenuTrigger,
  MenuPopover,
} from '../src/Menu';
import { Switch } from '../src/Switch';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/Icon';
import { Strong } from '../src/Text';
import { Avatar } from '../src/Avatar';

const meta: Meta = {
  title: 'Menu',
  component: MenuTrigger,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Menu.html#menu" target="_blank">**menu**</a> displays a list of actions or options that a user can choose.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover {...args}>
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const MenuButtons = () => {
  return (
    <MenuTrigger>
      <MenuButton color="accent">Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuButtons.parameters = {
  docs: {
    description: {
      story:
        'Menu Button is renderer as **Button**. Use **variant** and **color** to config button style:',
    },
  },
};

export const MenuPopoverPlacements = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover placement="top">
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuPopoverPlacements.parameters = {
  docs: {
    description: {
      story:
        'Use the [**placement**](https://react-spectrum.adobe.com/react-aria/Popover.html#placement) prop on the **MenuPopover** to position the menu relative to the trigger:',
    },
  },
};

export const MenuSeparators = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuSeparator />
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuSeparators.parameters = {
  docs: {
    description: {
      story:
        'Use the **MenuSeparator** components to a separator between menu items:',
    },
  },
};

export const MenuSections = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuSection title="Your Organization">
            <MenuItem id="repos">Repositories</MenuItem>
            <MenuItem id="projects">Projects</MenuItem>
            <MenuItem id="organizations">Organizations</MenuItem>
            <MenuItem id="stars">Stars</MenuItem>
            <MenuItem id="sponsors">Sponsors</MenuItem>
          </MenuSection>
          <MenuSection title="Your Account">
            <MenuItem id="profile">Profile</MenuItem>
            <MenuItem id="status">Set status</MenuItem>
            <MenuItem id="sign-out">Sign out</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuSections.parameters = {
  docs: {
    description: {
      story:
        'Use **MenuSection** component with **title** props, and **Separator** component to group menu items into sections:',
    },
  },
};

export const MenuDescriptions = () => (
  <MenuTrigger>
    <MenuButton outline>Options</MenuButton>
    <MenuPopover>
      <Menu>
        <MenuItem description="Copy the selected text">Copy</MenuItem>
        <MenuItem description="Cut the selected text">Cut</MenuItem>
        <MenuItem description="Paste the copied text">Paste</MenuItem>
      </Menu>
    </MenuPopover>
  </MenuTrigger>
);

MenuDescriptions.parameters = {
  docs: {
    description: {
      story:
        'Add **description** prop to **MenuItem** component to add a description:',
    },
  },
};

export const WithIcons = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem icon={<Icon icon={<UserCircle className="h-4 w-4" />} />}>
            Account
          </MenuItem>
          <MenuItem icon={<Icon icon={<Settings className="h-4 w-4" />} />}>
            Settings
          </MenuItem>
          <MenuItem icon={<Icon icon={<BadgeInfo className="h-4 w-4" />} />}>
            Support
          </MenuItem>
          <MenuItem icon={<Icon icon={<LogOut className="h-4 w-4" />} />}>
            Sign out
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithIcons.parameters = {
  docs: {
    description: {
      story:
        'Add **icon** props to a **MenuItem** to render a **decorative icon** next to the menu text:',
    },
  },
};

export const WithKeyboardShortcut = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem shortcut="⌘,">Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithKeyboardShortcut.parameters = {
  docs: {
    description: {
      story:
        "Add **shortcut** props to a **MenuItem** to render a **keyboard shortcut** you've implemented in your application:",
    },
  },
};

export const DisabledMenuItems = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem isDisabled>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

DisabledMenuItems.parameters = {
  docs: {
    description: {
      story:
        'Use the **isDisabled** prop on a **MenuItem** to disable that item and prevent it from being selected:',
    },
  },
};

export const WithIconTrigger = () => {
  return (
    <MenuTrigger>
      <MenuButton noArrow outline>
        <Icon icon={<MoreHorizontal />} aria-label="More" />
      </MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithIconTrigger.parameters = {
  docs: {
    description: {
      story:
        'Add **Icon** to **MenuButton**, **aria-label** and **noArrow** to make an icon-only menu trigger',
    },
  },
};

export const WithAvatarTrigger = () => {
  return (
    <MenuTrigger>
      <MenuButton noArrow unstyle>
        <Avatar
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
  );
};

WithAvatarTrigger.parameters = {
  docs: {
    description: {
      story:
        "Add **Avatar** component to **MenuButton** with **variant='unstyled'** to use an avatar as the menu trigger:",
    },
  },
};

export const WithCustomTrigger = () => {
  return (
    <MenuTrigger>
      <MenuButton
        unstyle
        className="flex items-center gap-2 border border-transparent p-2 hover:border hover:border-border"
        aria-label="Jane"
      >
        <Avatar
          alt="Jane"
          className="size-10"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
        ></Avatar>
        <div className="mr-16 flex w-16 flex-col justify-center">
          <span className="text-sm/5 font-medium">Taylor</span>
          <span className="text-xs/5 text-muted">Manager</span>
        </div>
        <Icon
          icon={
            <ChevronsUpDown className="size-4 text-muted" strokeWidth={1.5} />
          }
        />
      </MenuButton>
      <MenuPopover className="min-w-56">
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithCustomTrigger.parameters = {
  docs: {
    description: {
      story:
        'Add **unstyle** to **MenuButton** to render your own custom menu trigger:',
    },
  },
};

export const WithLink = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem href="https://react-spectrum.adobe.com/react-spectrum/Menu.html#links">
            <div className="text-wrap text-xs/6 group-data-[focused]:text-white">
              Your workspace is currently on{' '}
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
          <MenuItem href="https://example/" target="_blank">
            Settings
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            Workflow Analytics
            <Icon icon={<ExternalLink className="ml-auto h-4" />}></Icon>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

WithLink.parameters = {
  docs: {
    description: {
      story: 'Add **href=`** to **MenuItem** to render a menu item as a link::',
    },
  },
};

export const SubMenus = () => (
  <MenuTrigger>
    <MenuButton outline>Options</MenuButton>
    <MenuPopover>
      <Menu>
        <MenuItem id="new">New…</MenuItem>
        <MenuItem id="open">Open…</MenuItem>
        <MenuSeparator />
        <MenuItem id="save">Save</MenuItem>
        <MenuItem id="saveAs">Save as…</MenuItem>
        <MenuSeparator />
        <MenuItem id="print">Print…</MenuItem>
        <SubmenuTrigger>
          <MenuItem>Email</MenuItem>
          <MenuPopover>
            <SubMenu aria-label="Email">
              <MenuItem>Work</MenuItem>
              <MenuItem>Personal</MenuItem>
            </SubMenu>
          </MenuPopover>
        </SubmenuTrigger>
      </Menu>
    </MenuPopover>
  </MenuTrigger>
);

SubMenus.parameters = {
  docs: {
    description: {
      story: 'Use **SubmenuTrigger** and **SubMenu** to a sub menu:',
    },
  },
};

export const SubMenuOnMobile = () => (
  <MenuTrigger>
    <MenuButton outline>Options</MenuButton>
    <MenuPopover>
      <Menu>
        <MenuItem id="new">New…</MenuItem>
        <MenuItem id="open">Open…</MenuItem>
        <MenuSeparator />
        <MenuItem id="save">Save</MenuItem>
        <MenuItem id="saveAs">Save as…</MenuItem>
        <MenuSeparator />
        <MenuItem id="print">Print…</MenuItem>
        <SubmenuTrigger>
          <MenuItem className="sm:hidden">Email</MenuItem>
          <MenuPopover className="sm:hidden" placement="bottom">
            <SubMenu aria-label="Email">
              <MenuItem>Work</MenuItem>
              <MenuItem>Personal</MenuItem>
            </SubMenu>
          </MenuPopover>
        </SubmenuTrigger>
        <SubmenuTrigger>
          <MenuItem className="hidden sm:flex">Email</MenuItem>
          <MenuPopover className="hidden sm:block">
            <SubMenu aria-label="Email">
              <MenuItem>Work</MenuItem>
              <MenuItem>Personal</MenuItem>
            </SubMenu>
          </MenuPopover>
        </SubmenuTrigger>
      </Menu>
    </MenuPopover>
  </MenuTrigger>
);

SubMenuOnMobile.parameters = {
  docs: {
    description: {
      story:
        'To show submenu properly small screen, duplicate your **Submenu** with **placement="bottom"** and show it on small screens:',
    },
  },
};

export const SingleSelection = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu selectionMode="single" defaultSelectedKeys={['left']}>
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
          <MenuItem id="left1">Left</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

SingleSelection.parameters = {
  docs: {
    description: {
      story:
        'Add **sectionMode="single"** and **defaultSelectedKey** to **Menu** to make menu supports single selection:',
    },
  },
};

export const MultiSelections = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="multiple"
          defaultSelectedKeys={['sidebar', 'console']}
        >
          <MenuItem id="sidebar">Sidebar</MenuItem>
          <MenuItem id="searchbar">Searchbar</MenuItem>
          <MenuItem id="tools">Tools</MenuItem>
          <MenuItem id="console">Console</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MultiSelections.parameters = {
  docs: {
    description: {
      story:
        'Add **sectionMode="multiple"** and **defaultSelectedKey** to **Menu** to make menu supports multi selections:',
    },
  },
};

export const MenuHeaders = () => {
  return (
    <MenuTrigger>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover>
        <div className="flex items-center gap-4 border-b p-4">
          <Avatar
            alt="Jane"
            className="size-10 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          ></Avatar>
          <div className="text-xs text-muted">jane@example.com</div>
        </div>
        <Menu className="py-2">
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

MenuHeaders.parameters = {
  docs: {
    description: {
      story:
        'Add your custom header component as the first child of **MenPopover** to a menu header:',
    },
  },
};

export const CustomMenuWidth = (args: any) => {
  return (
    <MenuTrigger {...args}>
      <MenuButton outline>Options</MenuButton>
      <MenuPopover className="min-w-56">
        <Menu>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

CustomMenuWidth.parameters = {
  docs: {
    description: {
      story:
        'Use **min-w-*** utilities to increase the minimum width of a menu popover, and **max-w-*** utilities to prevent it from getting wider than a specific size:',
    },
  },
};

export const ControlledMenuOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [subScribe, setSubscribe] = React.useState(true);

  return (
    <MenuTrigger>
      <MenuButton onPress={() => setOpen((prev) => !prev)} outline>
        Options
      </MenuButton>
      <MenuPopover isOpen={isOpen} onOpenChange={setOpen}>
        <Menu
          onAction={(key) => {
            if (key === 'subscribe') {
              if (
                confirm(
                  `You want to ${subScribe ? 'un-subscribe' : 'subscribe'}`,
                )
              ) {
                setSubscribe((prev) => !prev);
              }
              return;
            }
            setOpen(false);
          }}
        >
          <MenuItem>Settings</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem aria-label="New teams" id="subscribe">
            <Switch isSelected={subScribe} className="flex-1 justify-between">
              Subscribe
            </Switch>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

ControlledMenuOpenState.parameters = {
  docs: {
    description: {
      story:
        'Use **isOpen** and **onOpenChange** of **MenuPopover** component to control menu open state:',
    },
  },
};
