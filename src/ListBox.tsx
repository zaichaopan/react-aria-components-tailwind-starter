import { Check } from 'lucide-react';
import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxProps as RACListBoxProps,
  Collection,
  Header,
  ListBoxItemProps,
  Section,
  SectionProps,
  composeRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

interface ListBoxProps<T>
  extends Omit<RACListBoxProps<T>, 'layout' | 'orientation'> {}

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  return (
    <RACListBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'rounded-lg outline-0',
      )}
    >
      {children}
    </RACListBox>
  );
}

export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);
  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isFocusVisible }) => {
          return twMerge(
            'group relative flex outline-0',
            isDisabled && 'opacity-50',
            isFocusVisible && focusOutlineStyle,
            className,
          );
        },
      )}
    >
      {props.children}
    </RACListBoxItem>
  );
}

export function DropdownItem({
  destructive,
  ...props
}: ListBoxItemProps & { destructive?: true }) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);
  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeRenderProps(
        props.className,

        (className, { isDisabled, isFocused }) => {
          return twMerge([
            'group flex cursor-default select-none items-center gap-1 outline-none outline-0',
            'text-base/6 sm:text-sm/6',
            'p-1.5 has-submenu:pr-0',
            isDisabled && 'opacity-50',
            isFocused && 'bg-accent/85 text-white',
            destructive && 'text-destructive ',
            isFocused && destructive && 'bg-destructive/85 text-white',
            className,
          ]);
        },
      )}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span className="flex w-4 items-center">
            {isSelected && <Check className="h-4 w-4" />}
          </span>
          <span className="flex flex-1 items-center gap-2 text-nowrap">
            {children}
          </span>
        </>
      ))}
    </RACListBoxItem>
  );
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string;
}

export function DropdownSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return (
    <Section
      className={twMerge(
        '[&:not(:first-child)]:mt-0.5',
        '[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/75 dark:[&:not(:first-child)]:border-t-border',
        '[&_header]:has-[[role=option]]:pl-6',
      )}
    >
      <Header
        className={twMerge(
          'dark:bg-popover sticky top-0 z-10 truncate bg-background px-2.5 pt-2 text-xs/6 text-muted',
          props.className,
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
