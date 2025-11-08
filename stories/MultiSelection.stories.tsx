import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { docs } from '../.storybook/docs';
import {
  Autocomplete,
  Group,
  Key,
  useFilter,
} from 'react-aria-components';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from '../src/select';
import { SearchField, SearchInput } from '../src/search-field';
import { users } from './users';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateTitle,
} from '../src/empty-state';
import { Tag, TagGroup, TagList } from '../src/tag-group';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon } from '../src/icons/outline/chevron-down';
import { Label, LabeledGroup } from '../src/field';
import { Avatar } from '../src/avatar';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export function BasicExample() {
  const [attendeeIds, setAttendeeIds] = React.useState<Array<Key>>([]);

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { contains } = useFilter({ sensitivity: 'base' });

  const triggerRef = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.target.clientWidth);
      }
    });

    observer.observe(trigger);
    return () => {
      observer.unobserve(trigger);
    };
  }, [triggerRef]);

  return (
    <LabeledGroup>
      <Label>Attendees</Label>
      <Group
        ref={triggerRef}
        className={({ isHovered }) => {
          return twMerge(
            'relative isolate flex w-72 sm:w-96 flex-row flex-wrap rounded-md pe-8.5',
            attendeeIds.length === 0
              ? 'py-2.5 ps-2.5 sm:py-1.5'
              : 'py-1.5 ps-2 sm:py-1',

            'shadow-sm ring ring-zinc-950/10 dark:shadow-none dark:ring-white/10',
            isHovered && 'ring-zinc-950/20 dark:ring-white/20',
            '[&:has([data-ui=select][data-invalid])]:ring-red-500',
            '[&:has([data-ui=select][data-focus-visible])]:ring-ring',
            '[&:has([data-ui=select][data-focus-visible][data-invalid])]:ring-ring',
            '[&:has([data-ui=select][data-focus-visible])]:ring-2',
            '[&:has([data-ui=select][data-disabled])]:opacity-50',
          );
        }}
      >
        {attendeeIds.length > 0 ? (
          <TagGroup
            aria-label="Selected attendees"
            className="contents"
            onRemove={(keys) => {
              setAttendeeIds((prev) => {
                return prev.filter((k) => !keys.has(k));
              });
            }}
          >
            <TagList className="contents">
              {Array.from(attendeeIds).map((id) => {
                const attendee = users.find((u) => u.id === id);
                if (attendee == null) {
                  return null;
                }

                return (
                  <Tag key={id} id={id} className="m-0.5 h-fit self-center">
                    <Avatar
                      className="rounded-full"
                      size={16}
                      src={attendee.avatar}
                      alt={attendee.name}
                    />
                    {attendee.name}
                  </Tag>
                );
              })}
            </TagList>
          </TagGroup>
        ) : null}

        <Select
          placeholder="Add attendees&hellip;"
          aria-label="attendees"
          className="peer min-w-fit flex-1 self-center"
          selectionMode="multiple"
          onChange={(selected) => {
            setAttendeeIds(selected as Key[]);
          }}
        >
          <SelectButton
            ref={buttonRef}
            selectValue={null}
            buttonArrow={null}
            className={({ isDisabled }) => {
              return twMerge(
                'text-muted py-0 pe-0 shadow-none ring-0 sm:py-0',
                attendeeIds.length === 0 ? 'ps-0' : 'ps-2.5',
                isDisabled && 'opacity-100',
              );
            }}
          >
            Add attendees&hellip;
          </SelectButton>
          <SelectPopover
            triggerRef={triggerRef}
            placement="bottom end"
            style={{ width: `${width}px` }}
            className="flex !max-h-80 flex-col"
          >
            <Autocomplete filter={contains}>
              <SearchField
                aria-label="Search states"
                autoFocus
                className="border-b px-1"
              >
                <SearchInput
                  placeholder="Add attendees&hellip;"
                  className="border-transparent shadow-none ring-0"
                />
              </SearchField>
              <SelectListBox
                items={users}
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
                {(user) => (
                  <SelectListItem textValue={user.name}>
                    <Avatar
                      className="rounded-full"
                      src={user.avatar}
                      alt={user.name}
                    />
                    <SelectListItemLabel>{user.name}</SelectListItemLabel>
                  </SelectListItem>
                )}
              </SelectListBox>
            </Autocomplete>
          </SelectPopover>
        </Select>
        {/* React Aria Button does not allow tabIndex */}
        <button
          aria-hidden
          onClick={() => {
            buttonRef.current?.click();
          }}
          tabIndex={-1}
          className="text-muted absolute top-1/2 right-1 z-10 -translate-y-1/2 px-2 peer-data-disabled:hidden hover:bg-transparent"
        >
          <ChevronDownIcon className="text-muted size-5 sm:size-4" />
        </button>
        <div className="text-muted absolute top-1/2 right-1 -translate-y-1/2 px-2 peer-data-disabled:flex">
          <ChevronDownIcon className="text-muted size-5 sm:size-4" />
        </div>
      </Group>
    </LabeledGroup>
  );
}
