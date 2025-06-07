import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { docs } from '../.storybook/docs';
import {
  Autocomplete,
  Group,
  Selection,
  useFilter,
} from 'react-aria-components';
import { Select, SelectButton, SelectPopover } from '../src/select';
import { SearchField, SearchInput } from '../src/search-field';

import { Menu, MenuItem } from '../src/menu';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateTitle,
} from '../src/empty-state';
import { Tag, TagGroup, TagList } from '../src/tag-group';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon } from '../src/icons/outline/chevron-down';
import { Label, LabeledGroup } from '../src/field';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

const skills = [
  { id: 'javascript', label: 'Javascript' },
  { id: 'typescript', label: 'Typescript' },
  { id: 'react', label: 'React' },
  { id: 'node.js', label: 'Node.js' },
  { id: 'graphQL', label: 'GraphQL' },
  { id: 'postgreSQL', label: 'PostgreSQL' },
];

export function BasicExample() {
  const [open, setOpen] = React.useState(false);
  const [skillIds, setSkillIds] = React.useState<Selection>(new Set([]));
  const { contains } = useFilter({ sensitivity: 'base' });

  return (
    <div className="w-80 space-y-4">
      {skillIds!=='all' && skillIds.size>0 ? (
        <TagGroup
          aria-label="Selected skills"
          onRemove={(value) => {
            setSkillIds((prev) => {
              if (prev !== 'all') {
                return new Set(
                  Array.from(prev).filter(
                    (id) => id !== value.values().next().value,
                  ),
                );
              }
              return value;
            });
          }}
        >
          <TagList>
            {Array.from(skillIds).map((id) => {
              const skill = skills.find((s) => s.id === id);
              return (
                <Tag key={id} id={id}>
                  {skill?.label}
                </Tag>
              );
            })}
          </TagList>
        </TagGroup>
      ) : null}

      <Select placeholder="Select skills&hellip;" aria-label="Skills">
        <SelectButton onPress={() => setOpen((val) => !val)}></SelectButton>
        <SelectPopover
          className="flex !max-h-80 flex-col"
          isOpen={open}
          onOpenChange={setOpen}
        >
          <Autocomplete filter={contains}>
            <SearchField aria-label="Search skills" autoFocus className="px-1">
              <SearchInput
                placeholder="Select skills&hellip;"
                className="border-transparent shadow-none ring-0"
              />
            </SearchField>
            <Menu
              items={skills}
              defaultSelectedKeys={skillIds}
              selectionMode="multiple"
              onSelectionChange={(value) => {
                setSkillIds(value);
                setOpen(false);
              }}
              className="mt-1 border-t px-2"
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
          </Autocomplete>
        </SelectPopover>
      </Select>
    </div>
  );
}

export function Inline() {
  const [skillIds, setSkillIds] = React.useState<Selection>(
    new Set(['javascript', 'react']),
  );

  const [open, setOpen] = React.useState(false);
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
    <LabeledGroup ref={triggerRef}>
      <Label>Skills</Label>
      <Group
        ref={triggerRef}
        className={({ isHovered }) => {
          return twMerge(
            'relative isolate flex w-80 flex-row flex-wrap rounded-md pe-8.5',
            skillIds !== 'all' && skillIds.size === 0
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
        {skillIds!=='all' && skillIds.size>0 ? (
          <TagGroup
            aria-label="Selected skills"
            className="contents"
            onRemove={(value) => {
              setSkillIds((prev) => {
                if (prev !== 'all') {
                  return new Set(
                    Array.from(prev).filter(
                      (id) => id !== value.values().next().value,
                    ),
                  );
                }
                return value;
              });
            }}
          >
            <TagList className="contents">
              {Array.from(skillIds).map((id) => {
                const skill = skills.find((s) => s.id === id);
                return (
                  <Tag key={id} id={id} className="m-0.5 h-fit self-center">
                    {skill?.label}
                  </Tag>
                );
              })}
            </TagList>
          </TagGroup>
        ) : null}

        <Select
          placeholder="Select skills&hellip;"
          aria-label="Skills"
          className="peer min-w-fit flex-1 self-center"
        >
          <SelectButton
            buttonArrow={null}
            onPress={() => setOpen((val) => !val)}
            className={({ isDisabled }) => {
              return twMerge(
                'py-0 pe-0 shadow-none ring-0 sm:py-0',
                skillIds !== 'all' && skillIds.size === 0 ? 'ps-0' : 'ps-2.5',
                isDisabled && 'opacity-100',
              );
            }}
          ></SelectButton>
          <SelectPopover
            className="flex !max-h-80 flex-col"
            isOpen={open}
            onOpenChange={setOpen}
            style={{ width: `${width}px` }}
            triggerRef={triggerRef}
          >
            <Autocomplete filter={contains}>
              <SearchField
                aria-label="Search skills"
                autoFocus
                className="px-1"
              
              >
                <SearchInput
                  placeholder="Select skills&hellip;"
                  className="border-transparent shadow-none ring-0"
                />
              </SearchField>
              <Menu
                items={skills}
                defaultSelectedKeys={skillIds}
                selectionMode="multiple"
                onSelectionChange={(value) => {
                  setSkillIds(value);
                  setOpen(false);
                }}
                className="mt-1 border-t px-2"
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
            </Autocomplete>
          </SelectPopover>
        </Select>
        {/* React Aria Button does not allow tabIndex */}
        <button
          aria-hidden
          onClick={() => {
            setOpen((val) => !val);
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
