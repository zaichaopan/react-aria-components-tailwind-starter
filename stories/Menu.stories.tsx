import React from 'react';
import { type Selection } from 'react-aria-components';
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
  MenuItemLabel,
  MenuItemDescription,
} from '../src/menu';
import { Switch } from '../src/switch';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/icon';
import { Small, Strong, Text } from '../src/text';
import { Avatar } from '../src/avatar';
import { Kbd } from '../src/kbd';
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  FilePlus2Icon,
  FileX2Icon,
  InfoIcon,
  LinkIcon,
  LogOutIcon,
  MoonIcon,
  UserIcon,
  EllipsisIcon,
  ChevronsUpDownIcon,
  ScissorsIcon,
  CopyCheckIcon,
  ClipboardIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  UnderlineIcon,
  ItalicIcon,
  BoldIcon,
  Settings2Icon,
} from 'lucide-react';
import { Popover } from '../src/popover';
import { Dialog, DialogTrigger } from '../src/dialog';
import { Separator } from '../src/separator';
import { Button } from '../src/button';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const MenuButtons = () => {
  return (
    <MenuTrigger>
      <MenuButton variant="solid">Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const DisabledState = () => {
  return (
    <MenuTrigger>
      <MenuButton isDisabled>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const DisabledItems = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuItem isDisabled>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const PopoverPlacements = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover placement="top">
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const PopoverWidth = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover className="min-w-56">
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const MenuSeparators = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Paste</MenuItem>
          <MenuSeparator />
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ItemWithDescriptions = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>Copy</MenuItemLabel>
            <MenuItemDescription>Copy the selected text</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Cut</MenuItemLabel>
            <MenuItemDescription>Cut the selected text</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Paste</MenuItemLabel>
            <MenuItemDescription>Paste the selected text</MenuItemDescription>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemDescription>Delete the selected text</MenuItemDescription>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ItemWithIcons = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Icon>
              <LinkIcon />
            </Icon>
            <MenuItemLabel>Copy</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ScissorsIcon />
            </Icon>
            <MenuItemLabel>Cut</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ClipboardIcon />
            </Icon>
            <MenuItemLabel>Paste</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <Icon>
              <FileX2Icon />
            </Icon>
            <MenuItemLabel>Delete</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ItemWithIconAndDescriptions = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Icon>
              <LinkIcon />
            </Icon>
            <MenuItemLabel>Copy</MenuItemLabel>
            <MenuItemDescription>Copy the selected text</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ScissorsIcon />
            </Icon>
            <MenuItemLabel>Cut</MenuItemLabel>
            <MenuItemDescription>Cut the selected text</MenuItemDescription>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ClipboardIcon />
            </Icon>
            <MenuItemLabel>Paste</MenuItemLabel>
            <MenuItemDescription>Paste the selected text</MenuItemDescription>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <Icon>
              <FileX2Icon />
            </Icon>
            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemDescription>Delete the selected text</MenuItemDescription>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ItemWithShortcutHints = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>Copy</MenuItemLabel>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Cut</MenuItemLabel>
            <Kbd>⌘X</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Paste</MenuItemLabel>
            <Kbd>⌘V</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete</MenuItemLabel>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ItemWithShortcutHintsAndDescriptions = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>Copy</MenuItemLabel>
            <MenuItemDescription>Create the selected text</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Cut</MenuItemLabel>
            <MenuItemDescription>Copy the selected text</MenuItemDescription>
            <Kbd>⌘X</Kbd>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Paste</MenuItemLabel>
            <MenuItemDescription>Paste the selected text</MenuItemDescription>
            <Kbd>⌘V</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemDescription>Delete the selected text</MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const ItemWithIconShortcutHintsAndDescriptions = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Icon>
              <FilePlus2Icon />
            </Icon>
            <MenuItemLabel>Copy</MenuItemLabel>
            <MenuItemDescription>Copy the selected text</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ScissorsIcon />
            </Icon>
            <MenuItemLabel>Cut</MenuItemLabel>
            <MenuItemDescription>Cut the selected text</MenuItemDescription>
            <Kbd>⌘X</Kbd>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ClipboardIcon />
            </Icon>
            <MenuItemLabel>Paste</MenuItemLabel>
            <MenuItemDescription>Paste the selected text</MenuItemDescription>
            <Kbd>⌘V</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <Icon>
              <FileX2Icon />
            </Icon>
            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemDescription>Delete the selected text</MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const DestructiveItems = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Icon>
              <FilePlus2Icon />
            </Icon>
            <MenuItemLabel>Copy</MenuItemLabel>
            <MenuItemDescription>Copy the selected text</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ScissorsIcon />
            </Icon>
            <MenuItemLabel>Cut</MenuItemLabel>
            <MenuItemDescription>Cut the selected text</MenuItemDescription>
            <Kbd>⌘X</Kbd>
          </MenuItem>
          <MenuItem>
            <Icon>
              <ClipboardIcon />
            </Icon>
            <MenuItemLabel>Paste</MenuItemLabel>
            <MenuItemDescription>Paste the selected text</MenuItemDescription>
            <Kbd>⌘V</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuItem destructive>
            <Icon>
              <FileX2Icon />
            </Icon>
            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemDescription>Delete the selected text</MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const Sections = () => {
  return (
    <div className="flex flex-col gap-4">
      <MenuTrigger>
        <MenuButton>Actions</MenuButton>
        <MenuPopover>
          <Menu>
            <MenuSection title="Actions">
              <MenuItem>Copy</MenuItem>
              <MenuItem>Cut</MenuItem>
              <MenuItem>Paste</MenuItem>
            </MenuSection>
            <MenuSection title="Danger zone">
              <MenuItem>Delete</MenuItem>
            </MenuSection>
          </Menu>
        </MenuPopover>
      </MenuTrigger>

      <MenuTrigger>
        <MenuButton>Actions</MenuButton>
        <MenuPopover>
          <Menu>
            <MenuSection title="Actions">
              <MenuItem>
                <Icon>
                  <FilePlus2Icon />
                </Icon>
                <MenuItemLabel>Copy</MenuItemLabel>
                <MenuItemDescription>
                  Copy the selected text
                </MenuItemDescription>
                <Kbd>⌘C</Kbd>
              </MenuItem>

              <MenuItem>
                <Icon>
                  <ScissorsIcon />
                </Icon>
                <MenuItemLabel>Cut</MenuItemLabel>
                <MenuItemDescription>Cut the selected text</MenuItemDescription>
                <Kbd>⌘V</Kbd>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <ClipboardIcon />
                </Icon>
                <MenuItemLabel>Paste</MenuItemLabel>
                <MenuItemDescription>
                  Paste the selected text
                </MenuItemDescription>
                <Kbd>⌘X</Kbd>
              </MenuItem>
            </MenuSection>
            <MenuSection title="Danger zone">
              <MenuItem>
                <Icon>
                  <FileX2Icon />
                </Icon>

                <MenuItemLabel>Delete</MenuItemLabel>
                <MenuItemDescription>
                  Delete the selected text
                </MenuItemDescription>
                <Kbd>⌘⇧D</Kbd>
              </MenuItem>
            </MenuSection>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </div>
  );
};

export const IconTriggers = () => {
  return (
    <MenuTrigger>
      <MenuButton buttonArrow={null} variant="plain" isIconOnly>
        <Icon>
          <EllipsisIcon />
        </Icon>
      </MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>View Report</MenuItem>
          <MenuItem>Analyze Trend</MenuItem>
          <MenuSeparator />
          <MenuItem>Export Data</MenuItem>
          <MenuItem>Set Alerts</MenuItem>
          <MenuItem>Customize Alerts</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const AvatarTriggers = () => {
  return (
    <MenuTrigger>
      <MenuButton buttonArrow={null} variant="plain">
        <Avatar
          className="rounded-full"
          src="https://i.imgur.com/xIe7Wlb.png"
          alt="Marissa Whitaker"
        />
      </MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Icon>
              <UserIcon />
            </Icon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <CogIcon />
            </Icon>
            <MenuItemLabel>Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <BellIcon />
            </Icon>
            <MenuItemLabel>Notifications</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <CreditCardIcon />
            </Icon>
            <MenuItemLabel>Billing</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <InfoIcon />
            </Icon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <Icon>
              <MoonIcon />
            </Icon>
            <MenuItemLabel>Dark mode</MenuItemLabel>
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
  );
};

export const CustomTriggers = () => {
  return (
    <MenuTrigger>
      <MenuButton
        variant="unstyle"
        buttonArrow={
          <Icon>
            <ChevronsUpDownIcon className="text-muted/75 size-4" />
          </Icon>
        }
        className="hover:border-border flex items-center border border-transparent py-1 ps-1 pe-2 hover:border"
        aria-label="Jane"
      >
        <Avatar
          alt="Marissa Whitaker"
          src="https://i.imgur.com/xIe7Wlb.png"
        ></Avatar>
        <div className="ms-2 me-12 flex flex-col justify-center">
          <Strong className="self-start sm:leading-5">Marissa</Strong>
          <Small className="self-start sm:leading-5">marissa@example.com</Small>
        </div>
      </MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Icon>
              <UserIcon />
            </Icon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <CogIcon />
            </Icon>
            <MenuItemLabel>Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <BellIcon />
            </Icon>
            <MenuItemLabel>Notifications</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <CreditCardIcon />
            </Icon>
            <MenuItemLabel>Billing</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <InfoIcon />
            </Icon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <Icon>
              <MoonIcon />
            </Icon>
            <MenuItemLabel>Dark mode</MenuItemLabel>
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
  );
};

export const ItemAsLink = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem href="https://adobe.com/" target="_blank">
            Adobe
          </MenuItem>
          <MenuItem href="https://apple.com/" target="_blank">
            Apple
          </MenuItem>
          <MenuItem href="https://google.com/" target="_blank">
            Google
          </MenuItem>
          <MenuItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SubMenus = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
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
};

export const MobilFriendlySubmenus = () => {
  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
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
};

export const SingleSelection = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['left']));

  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
          <MenuItem id="left1">Left</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSelectionWithIconDescriptionAndShortcut = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['copy']));

  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="copy">
            <Icon>
              <FilePlus2Icon />
            </Icon>
            <MenuItemLabel>Copy</MenuItemLabel>
            <MenuItemDescription>Copy the selected text</MenuItemDescription>
            <Kbd>⌘C</Kbd>
          </MenuItem>

          <MenuItem id="cut">
            <Icon>
              <ScissorsIcon />
            </Icon>
            <MenuItemLabel>Cut</MenuItemLabel>
            <MenuItemDescription>Cut the selected text</MenuItemDescription>
            <Kbd>⌘X</Kbd>
          </MenuItem>
          <MenuItem id="paste">
            <Icon>
              <ClipboardIcon />
            </Icon>
            <MenuItemLabel>Paste</MenuItemLabel>
            <MenuItemDescription>Paste the selected text</MenuItemDescription>
            <Kbd>⌘V</Kbd>
          </MenuItem>
          <MenuItem id="delete">
            <Icon>
              <FileX2Icon />
            </Icon>

            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemDescription>Delete the selected text</MenuItemDescription>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSelectionWithSections = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['copy']));

  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Actions">
            <MenuItem id="copy">Copy</MenuItem>
            <MenuItem id="cut">Cut</MenuItem>
            <MenuItem id="edit">Paste</MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem id="delete">Delete</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SingleSelectionCompleteExample = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['copy']));

  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Actions">
            <MenuItem id="copy">
              <Icon>
                <FilePlus2Icon />
              </Icon>
              <MenuItemLabel>Copy</MenuItemLabel>
              <MenuItemDescription>Copy the selected text</MenuItemDescription>
              <Kbd>⌘C</Kbd>
            </MenuItem>

            <MenuItem id="cut">
              <Icon>
                <ScissorsIcon />
              </Icon>
              <MenuItemLabel>Cut</MenuItemLabel>
              <MenuItemDescription>Cut the selected text</MenuItemDescription>
              <Kbd>⌘X</Kbd>
            </MenuItem>
            <MenuItem id="paste">
              <Icon>
                <ClipboardIcon />
              </Icon>
              <MenuItemLabel>Paste</MenuItemLabel>
              <MenuItemDescription>Paste the selected text</MenuItemDescription>
              <Kbd>⌘V</Kbd>
            </MenuItem>
          </MenuSection>
          <MenuSection title="Danger zone">
            <MenuItem id="delete" destructive>
              <Icon>
                <FileX2Icon />
              </Icon>

              <MenuItemLabel>Delete</MenuItemLabel>
              <MenuItemDescription>
                Delete the selected text
              </MenuItemDescription>
              <Kbd>⌘⇧D</Kbd>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const MultiSelections = () => {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['sidebar', 'console']),
  );

  return (
    <div className="flex flex-col items-center">
      <Text className="w-64 pt-2 pb-4 text-center">
        Current selection (controlled): {[...selected].join(', ')}
      </Text>

      <MenuTrigger>
        <MenuButton>Actions</MenuButton>
        <MenuPopover>
          <Menu
            selectedKeys={selected}
            onSelectionChange={setSelected}
            selectionMode="multiple"
          >
            <MenuItem id="sidebar">Sidebar</MenuItem>
            <MenuItem id="searchbar">Searchbar</MenuItem>
            <MenuItem id="tools">Tools</MenuItem>
            <MenuItem id="console">Console</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </div>
  );
};

export const CheckIconPlacement = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['left']));

  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu
          checkIconPlacement="start"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
          <MenuItem id="left1">Left</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const SectionLevelSelections = () => {
  const placements = ['start', 'end'] as const;
  const [style, setStyle] = React.useState<Selection>(new Set(['bold']));
  const [align, setAlign] = React.useState<Selection>(new Set(['left']));

  return (
    <div className="flex gap-x-2">
      {placements.map((placement) => {
        return (
          <MenuTrigger key={placement}>
            <MenuButton>Actions</MenuButton>
            <MenuPopover>
              <Menu checkIconPlacement={placement}>
                <MenuSection title="Clipboard">
                  <MenuItem id="cut">
                    <Icon>
                      <ScissorsIcon />
                    </Icon>
                    <MenuItemLabel>Cut</MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="copy">
                    <Icon>
                      <CopyCheckIcon />
                    </Icon>
                    <MenuItemLabel>Copy</MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="paste">
                    <Icon>
                      <ClipboardIcon />
                    </Icon>
                    <MenuItemLabel>Paste</MenuItemLabel>
                  </MenuItem>
                </MenuSection>
                <MenuSection
                  title="Text Alignment"
                  selectionMode="single"
                  selectedKeys={align}
                  onSelectionChange={setAlign}
                >
                  <MenuItem id="left">
                    <Icon>
                      <AlignLeftIcon />
                    </Icon>
                    <MenuItemLabel>Left</MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="center">
                    <Icon>
                      <AlignCenterIcon />
                    </Icon>
                    <MenuItemLabel>Center</MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="right">
                    <Icon>
                      <AlignRightIcon />
                    </Icon>
                    <MenuItemLabel>Right</MenuItemLabel>
                  </MenuItem>
                </MenuSection>
                <MenuSection
                  title="Font Style"
                  selectionMode="multiple"
                  selectedKeys={style}
                  onSelectionChange={setStyle}
                >
                  <MenuItem id="bold">
                    <Icon>
                      <BoldIcon />
                    </Icon>
                    <MenuItemLabel>Left</MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="italic">
                    <Icon>
                      <ItalicIcon />
                    </Icon>
                    <MenuItemLabel>Italic</MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="underline">
                    <Icon>
                      <UnderlineIcon />
                    </Icon>
                    <MenuItemLabel>Underline</MenuItemLabel>
                  </MenuItem>
                </MenuSection>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        );
      })}
    </div>
  );
};

export const Headers = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <MenuTrigger>
        <MenuButton>Actions</MenuButton>
        <MenuPopover>
          <Menu>
            <MenuSection
              title={
                <div className="border-border/45 flex flex-col border-b pb-2">
                  <Small>Signed in as Tony Reichert</Small>
                  <Strong>@tonyreichert</Strong>
                </div>
              }
            >
              <MenuItem>Team Settings</MenuItem>
              <MenuItem>Analytics</MenuItem>
              <MenuItem>System</MenuItem>
              <MenuItem>Configuration</MenuItem>
              <MenuItem> Help & Feedback</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuSection>
          </Menu>
        </MenuPopover>
      </MenuTrigger>

      <DialogTrigger>
        <Button isIconOnly aria-label="Account" variant="plain">
          <Avatar
            alt="Marissa Whitaker"
            src="https://i.imgur.com/xIe7Wlb.png"
            className="rounded-full"
          ></Avatar>
        </Button>
        <Popover placement="bottom end" className="p-1.5">
          <Dialog className="outline-hidden" aria-label="account">
            <div className="mx-3 mt-2 flex items-center gap-2">
              <Avatar
                alt="Marissa Whitaker"
                src="https://i.imgur.com/xIe7Wlb.png"
                className="size-16 rounded-full"
              />
              <div className="flex flex-col">
                <Strong className="sm:text-base/4">Marissa Whitaker</Strong>
                <Text className="pb-1">user@example.com</Text>
                <Switch>Dark Mode</Switch>
              </div>
            </div>
            <Separator className="my-3" />

            <Menu aria-label="account">
              <MenuItem id="account-settings">
                <Icon>
                  <Settings2Icon></Settings2Icon>
                </Icon>
                <MenuItemLabel>Account Settings</MenuItemLabel>
              </MenuItem>
              <MenuItem id="support">Support</MenuItem>
              <MenuSeparator />
              <MenuItem id="legal-notice">Legal notices</MenuItem>
              <MenuItem id="about">About</MenuItem>
              <MenuSeparator />
              <MenuItem id="sign-out">Sign out</MenuItem>
            </Menu>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </div>
  );
};

export const ControlledOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <MenuTrigger>
      <MenuButton onPress={() => setOpen((prev) => !prev)}>Actions</MenuButton>
      <MenuPopover isOpen={isOpen} onOpenChange={setOpen}>
        <Menu
          onAction={(key) => {
            if (key === 'dark_mode') {
              setDarkMode((prev) => !prev);
              return;
            }

            setOpen(false);
          }}
        >
          <MenuItem>
            <Icon>
              <UserIcon />
            </Icon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <Icon>
              <CogIcon />
            </Icon>
            <MenuItemLabel>Settings</MenuItemLabel>{' '}
          </MenuItem>
          <MenuItem>
            <Icon>
              <CreditCardIcon />
            </Icon>
            <MenuItemLabel>Billing</MenuItemLabel>{' '}
          </MenuItem>
          <MenuItem>
            <Icon>
              <InfoIcon />
            </Icon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem id="dark_mode">
            <Icon>
              <MoonIcon />
            </Icon>

            <Switch
              data-ui="label"
              isSelected={darkMode}
              className="flex-1 justify-between"
              labelPlacement="start"
            >
              Dark mode
            </Switch>
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
  );
};
