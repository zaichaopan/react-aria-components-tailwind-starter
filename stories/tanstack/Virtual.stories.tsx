import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { docs } from '../../.storybook/docs';
import {
  Autocomplete,
  MenuTrigger,
  SubmenuTrigger,
  Toolbar,
  useFilter,
} from 'react-aria-components';
import {
  SelectListBox,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
} from '../../src/select';
import { SearchField, SearchInput } from '../../src/search-field';
import { faker } from '@faker-js/faker';
import { Avatar } from '../../src/avatar';
import {
  EllipsisIcon,
  FlagIcon,
  ForwardIcon,
  LanguagesIcon,
  MailOpenIcon,
  MoveUpRightIcon,
  PinIcon,
  PrinterIcon,
  ReplyAllIcon,
  ReplyIcon,
  SettingsIcon,
  TrashIcon,
} from 'lucide-react';
import { Icon } from '../../src/icon';
import { twMerge } from 'tailwind-merge';
import { NotificationBadge } from '../../src/notification-badge';
import { Small, Strong, Text } from '../../src/text';
import { Heading } from '../../src/heading';
import { Separator } from '../../src/separator';
import { Button, ButtonGroup } from '../../src/button';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateTitle,
} from '../../src/empty-state';
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
} from '../../src/dialog';
import { Modal } from '../../src/modal';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuSeparator,
  SubMenu,
} from '../../src/menu';
import { flushSync } from 'react-dom';
import { Tooltip } from '../../src/tooltip';
import { useListData } from 'react-stately';
import { Switch } from '../../src/switch';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

const caches = new Map<string, any>();

const mails: Array<{
  id: string;
  sender: string;
  subject: string;
  message: string;
  unread?: boolean;
}> = [];
for (let i = 0; i < 100; i++) {
  mails.push({
    id: i.toString(),
    sender: faker.person.fullName(),
    subject: faker.lorem.sentence({ min: 3, max: 10 }),
    message: faker.lorem.paragraph(),
    unread: i === 0,
  });
}

export const BasicExample = () => {
  const { contains } = useFilter({ sensitivity: 'base' });
  const [selectUnread, setSelectUnread] = React.useState(false);

  const data = useListData({
    initialFilterText: '',
    initialItems: mails,
    filter: (item, filterText) => {
      if (selectUnread) {
        return !!item.unread && contains(item.sender, filterText);
      }

      return contains(item.sender, filterText);
    },
  });

  // The virtualizer
  const parentRef = React.useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: data.items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 90,
  });

  const [selectedMailId, setSelectedMailId] = React.useState<Set<string>>(
    new Set(data.items[0]?.id),
  );

  const selectedMail = mails.find((item) => {
    return selectedMailId.has(item.id);
  });

  React.useEffect(() => {
    if (caches.has(`scrollPosition - ${selectUnread ? 'Unread' : 'All'}`)) {
      rowVirtualizer.scrollToOffset(
        Number(
          caches.get(`scrollPosition - ${selectUnread ? 'Unread' : 'All'}`),
        ),
      );
    }
  }, [selectUnread, rowVirtualizer]);

  return (
    <div className="flex h-dvh w-full">
      <div className="flex w-86 flex-col border-e">
        <div className="flex items-center justify-between gap-x-2 border-b px-2.5 py-2">
          <Heading displayLevel={2}>Inbox</Heading>
          <Switch
            isSelected={selectUnread}
            onChange={() => {
              setSelectUnread(!selectUnread);
              caches.set(
                `scrollPosition - ${selectUnread ? 'Unread' : 'All'}`,
                rowVirtualizer.scrollOffset,
              );
            }}
          >
            Unread
          </Switch>
        </div>

        <Autocomplete
          inputValue={data.filterText}
          onInputChange={data.setFilterText}
          disableAutoFocusFirst
        >
          <SearchField aria-label="Search" className="p-2">
            <SearchInput
              placeholder="search…"
              className=""
            />
          </SearchField>
          <div
            ref={parentRef}
            tabIndex={-1}
            style={{
              height: '100%',
              overflow: 'auto',
            }}
            className="outline-hidden"
          >
            <div
              className="relative w-full"
              style={{
                height: rowVirtualizer.getTotalSize(),
              }}
            >
              <SelectListBox
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${rowVirtualizer.getVirtualItems()[0]?.start ?? 0}px)`,
                }}
                aria-label="Mail list"
                disallowEmptySelection
                selectionMode="single"
                selectionBehavior="replace"
                selectedKeys={selectedMailId}
                items={data.items}
                className="mt-1 flex flex-col overflow-visible p-0"
                onSelectionChange={(selected) => {
                  setSelectedMailId(selected as Set<string>);
                }}
                renderEmptyState={() => {
                  return (
                    <EmptyState className="justify-start">
                      <EmptyStateTitle elementType="div" displayLevel={2}>
                        No results
                      </EmptyStateTitle>
                      <EmptyStateDescription>
                        Try adjusting your search filters.
                      </EmptyStateDescription>
                    </EmptyState>
                  );
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const item = data.items[virtualRow.index];
                  return (
                    <SelectListItem
                      key={item.id}
                      id={item.id}
                      ref={rowVirtualizer.measureElement}
                      data-index={virtualRow.index}
                      className={({ isSelected }) => {
                        return twMerge(
                          'group/list-item relative rounded-none px-4 [&:not(:first-child)]:border-t',
                          isSelected && 'bg-zinc-100 dark:bg-zinc-800',
                        );
                      }}
                      textValue={item.sender}
                      checkIcon={null}
                    >
                      <Avatar
                        alt={item.sender}
                        className="rounded-full"
                        colorful
                      ></Avatar>
                      <SelectListItemLabel className="flex pt-0.5">
                        <Strong id={`item-${item.id.toString()}-sender`}>
                          {item.sender}
                        </Strong>

                        <Toolbar
                          className="ms-auto flex hidden space-x-1 group-data-[hovered]/list-item:flex"
                          aria-hidden
                        >
                          <Button
                            isIconOnly
                            size="sm"
                            variant="plain"
                            excludeFromTabOrder
                            className="p-0.5 focus-visible:outline-offset-0 sm:size-5"
                          >
                            <Icon>
                              <SettingsIcon />
                            </Icon>
                          </Button>

                          <Button
                            excludeFromTabOrder
                            isIconOnly
                            size="sm"
                            variant="plain"
                            className="p-0.5 focus-visible:outline-offset-0 sm:size-5"
                          >
                            <Icon>
                              <FlagIcon />
                            </Icon>
                          </Button>
                          <Button
                            excludeFromTabOrder
                            isIconOnly
                            size="sm"
                            variant="plain"
                            className="p-0.5 focus-visible:outline-offset-0 sm:size-5"
                          >
                            <Icon>
                              <PinIcon />
                            </Icon>
                          </Button>
                          <Button
                            excludeFromTabOrder
                            isIconOnly
                            size="sm"
                            variant="plain"
                            className="p-0.5 focus-visible:outline-offset-0 sm:size-5"
                          >
                            <Icon>
                              <TrashIcon />
                            </Icon>
                          </Button>
                        </Toolbar>
                      </SelectListItemLabel>
                      <SelectListItemDescription aria-hidden>
                        <Text
                          elementType="span"
                          className="text-foreground line-clamp-1"
                        >
                          {item.subject}
                        </Text>
                        <Text elementType="span" className="line-clamp-1">
                          {item.message}
                        </Text>
                      </SelectListItemDescription>
                      {item.unread && (
                        <NotificationBadge
                          aria-label="Unread"
                          id={`item-${item.id.toString()}-badge`}
                          variant="dot"
                          className="top-[calc(1lh/2)] left-1"
                        />
                      )}
                      {/* </span> */}
                    </SelectListItem>
                  );
                })}
              </SelectListBox>
            </div>
          </div>
        </Autocomplete>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {selectedMail && <MailDetails mail={selectedMail} />}
      </div>
    </div>
  );
};

function MailDetails({
  mail,
}: {
  mail: { subject: string; sender: string; message: string };
}) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    React.useState(false);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-y-4">
      <div className="flex gap-x-2">
        <Heading level={2} tabIndex={0} className="focus-visible:outline-ring">
          {mail.subject}
        </Heading>

        <ButtonGroup className="ms-auto">
          <Button variant="plain" tooltip={<Tooltip>Reply</Tooltip>}>
            <Icon aria-label="Reply">
              <ReplyIcon />
            </Icon>
          </Button>
          <Button variant="plain" tooltip={<Tooltip>Reply all</Tooltip>}>
            <Icon aria-label="Reply all">
              <ReplyAllIcon />
            </Icon>
          </Button>
          <Button variant="plain" tooltip={<Tooltip>Forward</Tooltip>}>
            <Icon aria-label="Forward">
              <ForwardIcon />
            </Icon>
          </Button>
        </ButtonGroup>

        <Separator soft orientation="vertical" />

        <MenuTrigger>
          <MenuButton buttonArrow={null} variant="plain">
            <Icon>
              <EllipsisIcon />
            </Icon>
          </MenuButton>
          <MenuPopover placement="bottom end">
            <Menu>
              <MenuItem
                destructive
                onAction={() => {
                  flushSync(() => {
                    setIsDeleteConfirmationOpen(true);
                  });
                }}
              >
                <Icon>
                  <TrashIcon />
                </Icon>
                <MenuItemLabel>Delete</MenuItemLabel>
              </MenuItem>

              <MenuItem>
                <Icon>
                  <MailOpenIcon />
                </Icon>
                <MenuItemLabel>Mark as unread</MenuItemLabel>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <FlagIcon />
                </Icon>
                <MenuItemLabel>Flag</MenuItemLabel>
              </MenuItem>
              <MenuSeparator />
              <MenuItem>Report</MenuItem>
              <MenuItem>Block</MenuItem>
              <MenuSeparator />
              <MenuItem>
                <Icon>
                  <PrinterIcon />
                </Icon>
                <MenuItemLabel>Print</MenuItemLabel>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <LanguagesIcon />
                </Icon>
                <MenuItemLabel>Translate</MenuItemLabel>
              </MenuItem>
              <SubmenuTrigger>
                <MenuItem>Email</MenuItem>
                <MenuPopover>
                  <SubMenu aria-label="View">
                    <MenuItem>
                      <Icon>
                        <MoveUpRightIcon />
                      </Icon>
                      <MenuItemLabel>Open in new window</MenuItemLabel>
                    </MenuItem>
                    <MenuItem>View message details</MenuItem>
                  </SubMenu>
                </MenuPopover>
              </SubmenuTrigger>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </div>

      <Separator soft />

      <div className="flex items-center gap-x-2">
        <Avatar alt={mail.sender} className="rounded-full" colorful />
        <Heading elementType="div" displayLevel={3}>
          {mail.sender}
        </Heading>

        <Small className="ms-auto">Oct 22, 2023, 9:00:00 AM</Small>
      </div>

      <Text>{mail.message} </Text>

      <DeleteConfirmation
        isOpen={isDeleteConfirmationOpen}
        setIsOpen={setIsDeleteConfirmationOpen}
      />
    </div>
  );
}

function DeleteConfirmation({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Dialog alert>
        <DialogHeader>Delete email</DialogHeader>
        <DialogBody>
          <Text>
            Are you sure you want to delete this email?&nbsp;
            <Strong>This action can not be undone.</Strong>
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogCloseButton variant="plain">Cancel</DialogCloseButton>
          <DialogCloseButton color="red" variant="solid">
            Delete
          </DialogCloseButton>
        </DialogFooter>
      </Dialog>
    </Modal>
  );
}
