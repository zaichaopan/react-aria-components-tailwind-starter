import {
  Select as RACSelect,
  SelectProps as RACSelectProps,
  Header,
  Button,
  ListBoxItemProps,
  SelectValue,
  composeRenderProps,
  Collection,
  ListBoxSectionProps as RACListBoxSectionProps,
  ListBoxSection as RACListBoxSection,
  ListBoxItem as RACListBoxItem,
} from 'react-aria-components';
import { ListBoxProps, ListBox } from './list-box';
import { Popover, PopoverProps } from './popover';
import {
  selectBoxIndicator,
  composeTailwindRenderProps,
  inputField,
  focusVisibleRing,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { Small } from './text';
import { CheckIcon } from './icons';

export function Select<T extends object>(props: RACSelectProps<T>) {
  return (
    <RACSelect
      {...props}
      data-ui="select"
      className={composeTailwindRenderProps(props.className, [
        'w-full min-w-56',
        inputField,
      ])}
    />
  );
}

export function SelectButton(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      data-ui="control"
      className={composeTailwindRenderProps(props.className, [
        'relative flex w-full cursor-default items-center gap-x-1 rounded-md border text-start outline-none transition',
        'pe-8 ps-3',
        'py-[calc(theme(spacing[2.5])-1px)]',
        'sm:py-[calc(theme(spacing[1.5])-1px)]',
        'group-invalid:border-destructive',
        'group:disabled:cursor-not-allowed group-disabled:opacity-50',
        'text-base/6 sm:text-sm/6',
        focusVisibleRing,
        'hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:hover:pressed:bg-zinc-800',
        'pressed:bg-zinc-50 dark:pressed:bg-zinc-800',
        selectBoxIndicator,
      ])}
    >
      {!!props.children && (
        <span className="flex items-center gap-x-2">{props.children}</span>
      )}
      <SelectValue
        data-ui="select-value"
        className={twMerge([
          'flex-1 truncate  data-[placeholder]:text-muted dark:data-[placeholder]:text-white',
          // Selected Item style
          '[&>[data-ui=content]]:flex',
          '[&>[data-ui=content]]:items-center',
          '[&>[data-ui=content]]:gap-x-2',
          '[&>[data-ui=content]_[data-ui=description]]:sr-only',
          '[&>[data-ui=content]:not(:hover)_[data-ui=icon]:not([class*=text-])]:text-muted',
          '[&>[data-ui=content]_[data-ui=icon]:not([class*=size-])]:size-5',
          '[&>[data-ui=content]_[role=img]]:size-6',
          'sm:[&>[data-ui=content]_[data-ui=icon]:not([class*=size-])]:size-4',
          'sm:[&>[data-ui=content]_[role=img]]:size-5',
        ])}
      />
    </Button>
  );
}

export function SelectPopover({
  className,
  placement = 'bottom',
  ...props
}: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(className, [
        'w-[--trigger-width]',
        'dark:bg-zinc-800',
        'dark:ring-zinc-700',
      ])}
      placement={placement}
    />
  );
}

export function SelectListBox<T extends object>({
  selectedIconPlacement = 'end',
  ...props
}: ListBoxProps<T> & {
  selectedIconPlacement?: 'start' | 'end';
}) {
  return (
    <ListBox
      {...props}
      data-selected-icon-placement={selectedIconPlacement}
      className={composeTailwindRenderProps(props.className, [
        'max-h-[inherit] overflow-auto',
        'flex flex-col',
        'p-1 has-[header]:pt-0',

        // Listbox item
        '[&_[data-ui=content]]:grid',
        '[&_[data-ui=content]]:grid-cols-[minmax(theme(spacing[4]),max-content)_1fr]',
        '[&:has([data-ui=content]>[role=img])_[data-ui=content]]:grid-cols-[minmax(theme(spacing[5]),max-content)_1fr]',
        '[&:has([data-ui=content]>[role=img]+[data-ui=label]+[data-ui=description])_[data-ui=content]]:grid-cols-[minmax(theme(spacing[7]),max-content)_1fr]',

        '[&_[data-ui=content]]:items-center',
        '[&_[data-ui=content]]:gap-x-2',

        // Icon
        '[&_[data-ui=content]>[data-ui=icon]:not([class*=size-])]:size-4',
        '[&_[data-ui=content]:not(:hover)>[data-ui=icon]:not([class*=text-])]:text-muted',

        // Label
        '[&_[data-ui=label]]:col-span-full',
        '[&:has(:is([data-ui=icon],[role=img])+[data-ui=label])_[data-ui=label]]:col-start-2',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=content]:not(:has([data-ui=label]))]:ps-6',
        '[&_[data-ui=label]:has(+[data-ui=description])]:leading-5',

        // Description
        '[&:has(:is([data-ui=icon],[role=img])+[data-ui=label])_[data-ui=description]]:col-start-2',

        // Image
        '[&_[role=img]]:size-5',
        '[&:has([data-ui=description])_[role=img]]:size-7',
        '[&_[role=img]]:self-start',
        '[&_[role=img]]:mt-0.5',
        '[&_[role=img]]:row-start-1',
        '[&:has([data-ui=description])_[role=img]]:row-end-3',
      ])}
    />
  );
}

export interface SectionProps<T> extends RACListBoxSectionProps<T> {
  title?: string | React.ReactNode;
}

export function SelectSection<T extends object>(props: SectionProps<T>) {
  return (
    <RACListBoxSection
      className={twMerge(
        '[&:not(:first-child)]:mt-1.5',
        '[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/40',
        props.className,
      )}
    >
      <Header
        className={twMerge(
          'sticky z-10 truncate bg-white ps-8 pt-2 text-xs/6 text-muted dark:bg-zinc-800',
          'inset-0 rounded',
          '[[data-selected-icon-placement=end]_&]:px-2',
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </RACListBoxSection>
  );
}

export function SelectListItem({
  destructive,
  ...props
}: ListBoxItemProps & {
  destructive?: true;
}) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        'group flex cursor-default select-none items-center gap-x-1.5 rounded outline-none',
        'px-2 py-2.5 sm:py-1.5',
        'text-base/6 sm:text-sm/6',
        'disabled:opacity-50',
        'focus:bg-zinc-100 focus:dark:bg-zinc-700',
        destructive && 'text-destructive',
      ])}
    >
      {composeRenderProps(props.children, (children) => {
        return (
          <>
            <CheckIcon
              className={twMerge(
                'invisible',
                'mt-1',
                'size-4',
                'self-start',
                'group-selected:visible',
                '[[data-ui=select-value]_&]:hidden',
                '[[data-selected-icon-placement=end]_&]:hidden',
              )}
            />

            <div data-ui="content" className="w-full">
              {children}
            </div>
            <CheckIcon
              className={twMerge(
                'invisible',
                'mt-1',
                'size-4',
                'self-start',
                'group-selected:visible',
                '[[data-ui=select-value]_&]:hidden',
                '[[data-selected-icon-placement=start]_&]:hidden',
              )}
            />
          </>
        );
      })}
    </RACListBoxItem>
  );
}

export function SelectListItemLabel({
  className,
  ...props
}: React.JSX.IntrinsicElements['span']) {
  return (
    <span
      {...props}
      slot="label"
      data-ui="label"
      className={twMerge('mb-0 w-full truncate', className)}
    />
  );
}

export function SelectListItemDescription({
  className,
  ...props
}: React.JSX.IntrinsicElements['span']) {
  return (
    <Small
      {...props}
      slot="description"
      data-ui="description"
      className={className}
    />
  );
}
