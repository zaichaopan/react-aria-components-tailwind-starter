import { ChevronsUpDown } from 'lucide-react';
import React from 'react';
import {
  Select as RACSelect,
  SelectProps as RACSelectProps,
  Button,
  ListBoxItemProps,
  SelectValue,
  composeRenderProps,
} from 'react-aria-components';
import {
  DropdownItem,
  DropdownSection,
  DropdownSectionProps,
  ListBox,
} from './ListBox';
import { Popover } from './Popover';
import { composeTailwindRenderProps, inputRingStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export interface SelectProps<T extends object>
  extends Omit<RACSelectProps<T>, 'children' | 'items'> {
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function SelectField({
  children,
  ...props
}: Omit<SelectProps<object>, 'items'> & { children: React.ReactNode }) {
  return (
    <RACSelect
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex min-w-[150px] flex-col gap-1',
      )}
    >
      {children}
    </RACSelect>
  );
}

export function Select<T extends object>({
  children,
  items,
}: Pick<SelectProps<T>, 'children' | 'items'>) {
  return (
    <>
      <SelectButton />
      <SelectPopover items={items}>{children}</SelectPopover>
    </>
  );
}

export function SelectItem(props: ListBoxItemProps & { destructive?: true }) {
  return <DropdownItem {...props} className="shrink-0 pr-5" />;
}

export function SelectSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection {...props} />;
}

function SelectButton(props: { icon?: React.ReactNode; className?: string }) {
  return (
    <Button
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible }) =>
          twMerge(
            'flex w-full cursor-default items-center gap-4 rounded-md border py-1.5 pl-3 pr-2 shadow-sm outline-none transition',
            'group-invalid:border-destructive',
            'group:disabled:cursor-not-allowed group-disabled:opacity-50',
            isFocusVisible && inputRingStyle,
            'ring-offset-0',
            className,
          ),
      )}
    >
      <SelectValue className="flex-1 text-sm data-[placeholder]:text-left data-[placeholder]:text-muted dark:data-[placeholder]:text-white" />
      {props.icon ? (
        props.icon
      ) : (
        <ChevronsUpDown
          aria-hidden
          className="h-3.5 w-3.5 text-muted group-disabled:opacity-50"
        />
      )}
    </Button>
  );
}

export function SelectPopover<T extends object>({
  items,
  children,
}: Pick<SelectProps<T>, 'items' | 'children'>) {
  return (
    <Popover className="min-w-[--trigger-width]">
      <ListBox
        items={items}
        className="flex max-h-[inherit] flex-col overflow-auto p-1 has-[header]:px-2 has-[header]:pt-0"
      >
        {children}
      </ListBox>
    </Popover>
  );
}
