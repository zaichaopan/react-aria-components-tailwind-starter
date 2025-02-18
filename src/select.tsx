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
import { composeTailwindRenderProps, inputField } from './utils';
import { twMerge } from 'tailwind-merge';
import { Small } from './text';
import { CheckIcon, ChevronDownIcon } from './icons';
import { Icon } from './icon';

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
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible, isPressed, isHovered, isDisabled }) =>
          twMerge(
            'group relative flex w-full cursor-default items-center gap-x-1 rounded-md border text-start outline-hidden transition',
            'ps-3 pe-2.5',
            'py-[calc(--spacing(2.5)-1px)]',
            'sm:py-[calc(--spacing(1.5)-1px)]',
            'text-base/6 sm:text-sm/6',
            'group-data-invalid:border-destructive',
            isDisabled && 'cursor-not-allowed opacity-50',
            isHovered && ['bg-zinc-50 dark:bg-zinc-800'],
            isPressed && ['bg-zinc-50 dark:bg-zinc-800'],
            isHovered && isPressed && ['dark:bg-zinc-800'],
            isFocusVisible &&
              'border-ring ring-ring group-data-invalid:border-ring ring-1',
            className,
          ),
      )}
    >
      {!!props.children && (
        <span className="flex items-center gap-x-2">{props.children}</span>
      )}
      <SelectValue
        data-ui="select-value"
        className={twMerge([
          'data-placeholder:text-muted flex-1 truncate dark:data-placeholder:text-white',
          // Selected Item style
          '*:data-[ui=content]:flex',
          '*:data-[ui=content]:items-center',
          '*:data-[ui=content]:gap-x-2',
          '[&>[data-ui=content]_[data-ui=description]]:sr-only',
          '[&>[data-ui=content]:not(:hover)_[data-ui=icon]:not([class*=text-])]:text-muted',
          '[&>[data-ui=content]_[data-ui=icon]:not([class*=size-])]:size-5',
          '[&>[data-ui=content]_[role=img]]:size-6',
          'sm:[&>[data-ui=content]_[data-ui=icon]:not([class*=size-])]:size-4',
          'sm:[&>[data-ui=content]_[role=img]]:size-5',
        ])}
      />
      <Icon className="group-[&:not(:hover)]:text-muted size-5 sm:size-4">
        <ChevronDownIcon />
      </Icon>
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
        'w-(--trigger-width) overflow-hidden',
      ])}
      placement={placement}
    />
  );
}

export function SelectListBox<T extends object>({
  checkIconPlacement = 'end',
  ...props
}: ListBoxProps<T> & {
  checkIconPlacement?: 'start' | 'end';
}) {
  return (
    <ListBox
      {...props}
      data-check-icon-placement={checkIconPlacement}
      className={composeTailwindRenderProps(props.className, [
        'max-h-[inherit] overflow-auto',
        'flex flex-col',
        'p-1 has-[header]:pt-0',

        // Listbox item
        '**:data-[ui=content]:grid',
        '**:data-[ui=content]:grid-cols-[minmax(--spacing(4),max-content)_1fr]',
        '[&:has([data-ui=content]>[role=img])_[data-ui=content]]:grid-cols-[minmax(--spacing(5),max-content)_1fr]',
        '[&:has([data-ui=content]>[role=img]+[data-ui=label]+[data-ui=description])_[data-ui=content]]:grid-cols-[minmax(--spacing(7),max-content)_1fr]',

        '**:data-[ui=content]:items-center',
        '**:data-[ui=content]:gap-x-2',

        // Icon
        '[&_[data-ui=content]>[data-ui=icon]:not([class*=size-])]:size-4',
        '[&_[data-ui=content]:not(:hover)>[data-ui=icon]:not([class*=text-])]:text-muted',

        // Label
        '**:data-[ui=label]:col-span-full',
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
        'not-first:mt-1.5',
        'not-first:border-t-border/40 not-first:border-t',
        props.className,
      )}
    >
      <Header
        className={twMerge(
          'text-muted sticky z-10 truncate bg-white ps-8 pt-2 text-xs/6 dark:bg-zinc-900',
          'inset-0 rounded-sm',
          'in-data-[check-icon-placement=end]:px-2',
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
      className={composeRenderProps(
        props.className,
        (className, { isFocused, isDisabled }) =>
          twMerge(
            'group flex cursor-default items-center gap-x-1.5 rounded-sm outline-hidden select-none',
            'px-2 py-2.5 text-base/6 sm:py-1.5 sm:text-sm/6',
            isDisabled && 'opacity-50',
            isFocused && 'bg-zinc-100 dark:bg-zinc-700',
            destructive && 'text-destructive',
            className,
          ),
      )}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => {
        return (
          <>
            <CheckIcon
              className={twMerge(
                'flex h-[1lh] w-4 gap-x-2 self-start',
                'in-data-[check-icon-placement=end]:hidden',
                'in-data-[ui=select-value]:hidden',
                isSelected ? 'visible' : 'invisible',
              )}
            />

            <div data-ui="content" className="w-full">
              {children}
            </div>

            <CheckIcon
              className={twMerge(
                'flex h-[1lh] w-4 gap-x-2 self-start',
                'in-data-[ui=select-value]:hidden',
                'in-data-[check-icon-placement=start]:hidden',
                isSelected ? 'visible' : 'invisible',
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
