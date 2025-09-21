import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { docs } from '../.storybook/docs';
import {
  Autocomplete,
  DialogTrigger,
  MenuTrigger,
  SubmenuTrigger,
  useFilter,
} from 'react-aria-components';
import { Input, Label, TextField } from '../src/field';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
  SelectPopover,
} from '../src/select';
import { SearchField, SearchInput } from '../src/search-field';
import { Button } from '../src/button';
import { Kbd } from '../src/kbd';
import { Modal } from '../src/modal';
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogHeader,
} from '../src/dialog';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuSection,
  SubMenu,
} from '../src/menu';
import { users } from './users';
import { Avatar } from '../src/avatar';
import {
  CircleUserIcon,
  CogIcon,
  FingerprintIcon,
  FlameIcon,
  KanbanIcon,
  MessageSquareDotIcon,
  SlidersHorizontalIcon,
  TagIcon,
} from 'lucide-react';
import { Icon } from '../src/icon';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from '../src/empty-state';
import { ExclamationTriangleIcon } from '../src/icons/outline/exclamation-triangle';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

const commands = [
  { id: 'new-file', label: 'Create new file…' },
  { id: 'new-folder', label: 'Create new folder…' },
  { id: 'assign', label: 'Assign to…' },
  { id: 'assign-me', label: 'Assign to me' },
  { id: 'status', label: 'Change status…' },
  { id: 'priority', label: 'Change priority…' },
  { id: 'label-add', label: 'Add label…' },
  { id: 'label-remove', label: 'Remove label…' },
];

export function CommandPalette() {
  const [isOpen, setOpen] = React.useState(false);
  const { contains } = useFilter({ sensitivity: 'base' });
  const isMac = React.useMemo(() => /Mac/.test(navigator.platform), []);

  React.useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'k' && (isMac ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setOpen}>
      <Button variant="plain" className="font-normal">
        <span className="block sm:hidden">Tap to open</span>
        <span className="hidden sm:block">
          Type <Kbd outline>{isMac ? '⌘' : 'Ctrl'}</Kbd> + <Kbd outline>K</Kbd>{' '}
          or press here to open
        </span>
      </Button>
      <Modal isDismissable>
        <Dialog>
          <Autocomplete filter={contains}>
            <DialogHeader className="ps-0 pt-2">
              <SearchField
                aria-label="Search commands"
                autoFocus
                className="px-1"
              >
                <SearchInput
                  placeholder="Search commands…"
                  className="border-transparent shadow-none ring-0"
                />
              </SearchField>
            </DialogHeader>
            <DialogBody className="border-t px-1 pt-1 pb-1">
              <Menu
                items={commands}
                renderEmptyState={() => (
                  <EmptyState>
                    <EmptyStateTitle elementType="div" displayLevel={2}>
                      No results
                    </EmptyStateTitle>
                    <EmptyStateDescription>
                      Try adjusting your search filters.
                    </EmptyStateDescription>
                  </EmptyState>
                )}
              >
                {({ label }) => <MenuItem>{label}</MenuItem>}
              </Menu>
            </DialogBody>
          </Autocomplete>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

const commands2: Array<{
  label?: string;
  items: Array<{
    label: string;
    icon: React.ReactNode;
    shortcut?: string;
  }>;
}> = [
  {
    items: [
      {
        label: 'Preferences',
        icon: <SlidersHorizontalIcon />,
      },
      {
        label: 'Profile',
        icon: <CircleUserIcon />,
      },
      {
        label: 'Notifications',
        icon: <MessageSquareDotIcon />,
      },
      {
        label: 'Security & access',
        icon: <FingerprintIcon />,
      },
      {
        label: 'Connected accounts',
        icon: <CogIcon />,
        shortcut: '⌘,',
      },
    ],
  },
  {
    label: 'Issues',
    items: [
      {
        label: 'Label',
        icon: <TagIcon />,
      },
      {
        label: 'Template',
        icon: <KanbanIcon />,
      },
      {
        label: 'SLAs',
        icon: <FlameIcon />,
      },
    ],
  },
];

export function CommandJ() {
  const [isOpen, setOpen] = React.useState(false);
  const { contains } = useFilter({ sensitivity: 'base' });
  const isMac = React.useMemo(() => /Mac/.test(navigator.platform), []);

  React.useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'j' && (isMac ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setOpen}>
      <Button variant="outline">
        <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd> + <Kbd>J</Kbd>
      </Button>
      <Modal isDismissable>
        <Dialog>
          <Autocomplete filter={contains}>
            <DialogHeader className="flex-row ps-1 pt-2 pe-4">
              <TextField
                aria-label="Search commands"
                autoFocus
                className="flex-1"
              >
                <Input
                  placeholder="Open settings…"
                  className="border-transparent shadow-none ring-0"
                />
              </TextField>

              <DialogCloseButton className="self-center" variant="outline" size="sm">
                ESC
              </DialogCloseButton>
            </DialogHeader>
            <DialogBody className="border-t px-1 pt-1 pb-1">
              <Menu
                className=""
                renderEmptyState={() => (
                  <EmptyState className="py-4">
                    <EmptyStateIcon>
                      <ExclamationTriangleIcon className="size-6" />
                    </EmptyStateIcon>
                    <EmptyStateTitle elementType="div">
                      No results found
                    </EmptyStateTitle>
                    <EmptyStateDescription>
                      We couldn’t find anything with that term. Please try
                      again..
                    </EmptyStateDescription>
                  </EmptyState>
                )}
              >
                {commands2.map((group, index) => {
                  return (
                    <MenuSection key={index} title={group.label}>
                      {group.items.map(({ label, icon, shortcut }) => (
                        <MenuItem key={label} textValue={label}>
                          <Icon>{icon}</Icon>
                          <MenuItemLabel>{label}</MenuItemLabel>
                          {shortcut && <Kbd>{shortcut}</Kbd>}
                        </MenuItem>
                      ))}
                    </MenuSection>
                  );
                })}
              </Menu>
            </DialogBody>
          </Autocomplete>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

const languages = [
  { id: 'ar', name: 'Arabic' },
  { id: 'bn', name: 'Bengali' },
  { id: 'bs', name: 'Bosnian' },
  { id: 'cs', name: 'Czech' },
  { id: 'da', name: 'Danish' },
  { id: 'de', name: 'German' },
  { id: 'el', name: 'Greek' },
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Spanish' },
  { id: 'fa', name: 'Persian' },
  { id: 'fi', name: 'Finnish' },
  { id: 'fr', name: 'French' },
  { id: 'gu', name: 'Gujarati' },
  { id: 'hi', name: 'Hindi' },
  { id: 'hr', name: 'Croatian' },
  { id: 'hu', name: 'Hungarian' },
  { id: 'is', name: 'Icelandic' },
  { id: 'it', name: 'Italian' },
  { id: 'ja', name: 'Japanese' },
  { id: 'jv', name: 'Javanese' },
  { id: 'kn', name: 'Kannada' },
  { id: 'ko', name: 'Korean' },
  { id: 'ml', name: 'Malayalam' },
  { id: 'mr', name: 'Marathi' },
  { id: 'no', name: 'Norwegian' },
  { id: 'pa', name: 'Punjabi' },
  { id: 'pl', name: 'Polish' },
  { id: 'pt', name: 'Portuguese' },
  { id: 'ro', name: 'Romanian' },
  { id: 'ru', name: 'Russian' },
  { id: 'sk', name: 'Slovak' },
  { id: 'sl', name: 'Slovenian' },
  { id: 'sq', name: 'Albanian' },
  { id: 'sr', name: 'Serbian' },
  { id: 'sv', name: 'Swedish' },
  { id: 'sw', name: 'Swahili' },
  { id: 'ta', name: 'Tamil' },
  { id: 'te', name: 'Telugu' },
  { id: 'th', name: 'Thai' },
  { id: 'tl', name: 'Filipino' },
  { id: 'tr', name: 'Turkish' },
  { id: 'uk', name: 'Ukrainian' },
  { id: 'ur', name: 'Urdu' },
  { id: 'vi', name: 'Vietnamese' },
  { id: 'zh', name: 'Chinese' },
];

export function SearchableSelect() {
  const { contains } = useFilter({ sensitivity: 'base' });

  return (
    <div className="flex flex-col gap-y-8">
      <Select>
        <Label>Language</Label>
        <SelectButton />
        <SelectPopover className="flex !max-h-80 flex-col">
          <Autocomplete filter={contains}>
            <SearchField aria-label="Search" autoFocus>
              <SearchInput
                placeholder="Search languages"
                className="rounded-none shadow-none ring-0"
              />
            </SearchField>
            <SelectListBox
              items={languages}
              className="flex-1 scroll-pb-1 overflow-auto border-t"
              renderEmptyState={() => (
                <EmptyState>
                  <EmptyStateTitle elementType="div" displayLevel={3}>
                    No results
                  </EmptyStateTitle>
                  <EmptyStateDescription>
                    Try adjusting your search filters.
                  </EmptyStateDescription>
                </EmptyState>
              )}
            >
              {(item) => <SelectListItem>{item.name}</SelectListItem>}
            </SelectListBox>
          </Autocomplete>
        </SelectPopover>
      </Select>

      <Select placeholder="Assign to" defaultSelectedKey="1">
        <Label>Assignee</Label>
        <SelectButton />
        <SelectPopover className="flex !max-h-80 flex-col">
          <Autocomplete filter={contains}>
            <SearchField aria-label="Search" autoFocus>
              <SearchInput
                placeholder="Search assignees"
                className="shadow-none ring-0"
              />
            </SearchField>
            <SelectListBox
              items={users}
              className="flex-1 scroll-pb-1 overflow-auto border-t"
              renderEmptyState={() => (
                <EmptyState>
                  <EmptyStateTitle elementType="div" displayLevel={3}>
                    No results
                  </EmptyStateTitle>
                  <EmptyStateDescription>
                    Try adjusting your search filters.
                  </EmptyStateDescription>
                </EmptyState>
              )}
            >
              {(user) => {
                return (
                  <SelectListItem textValue={user.name}>
                    <Avatar
                      className="rounded-full"
                      src={user.avatar}
                      alt={user.name}
                    />
                    <SelectListItemLabel>{user.name}</SelectListItemLabel>
                    <SelectListItemDescription>
                      {user.description}
                    </SelectListItemDescription>
                  </SelectListItem>
                );
              }}
            </SelectListBox>
          </Autocomplete>
        </SelectPopover>
      </Select>
    </div>
  );
}

export const SearchableMenu = () => {
  const { contains } = useFilter({ sensitivity: 'base' });

  return (
    <MenuTrigger>
      <MenuButton>Actions</MenuButton>
      <MenuPopover>
        <Menu>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Delete</MenuItem>
          <SubmenuTrigger>
            <MenuItem>Add tag...</MenuItem>
            <MenuPopover className="flex !max-h-80 flex-col">
              <Autocomplete filter={contains}>
                <SearchField aria-label="Search tags" autoFocus>
                  <SearchInput
                    placeholder="Search tags"
                    className="shadow-none ring-0"
                  />
                </SearchField>
                <SubMenu
                  aria-label="Email"
                  className="flex-1 scroll-pb-1 overflow-auto border-t"
                  renderEmptyState={() => (
                    <EmptyState>
                      <EmptyStateTitle elementType="div" displayLevel={3}>
                        No results
                      </EmptyStateTitle>
                      <EmptyStateDescription>
                        Try adjusting your search filters.
                      </EmptyStateDescription>
                    </EmptyState>
                  )}
                >
                  <MenuItem>News</MenuItem>
                  <MenuItem>Travel</MenuItem>
                  <MenuItem>Shopping</MenuItem>
                  <MenuItem>Business</MenuItem>
                  <MenuItem>Entertainment</MenuItem>
                  <MenuItem>Food</MenuItem>
                  <MenuItem>Technology</MenuItem>
                  <MenuItem>Health</MenuItem>
                  <MenuItem>Science</MenuItem>
                </SubMenu>
              </Autocomplete>
            </MenuPopover>
          </SubmenuTrigger>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};
