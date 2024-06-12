import React from 'react';
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
  const ref = React.useRef<HTMLDivElement>(null);

  // Fix not auto scroll to selected item
  React.useEffect(() => {
    if (ref.current) {
      const selectedItem = ref.current.querySelector('[aria-selected=true]');
      if (selectedItem) {
        const timer = setTimeout(() => {
          selectedItem.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
          });
        }, 50);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, []);

  return (
    <RACListBox
      {...props}
      className={composeTailwindRenderProps(props.className, 'outline-none')}
      ref={ref}
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
            'group flex cursor-default select-none items-center gap-0.5 outline-none outline-0',
            'text-base/6 sm:text-sm/6 rounded-md',
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
        '[&:first-child]:-mt-[1px]',
        '[&:not(:first-child)]:mt-0.5',
        '[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/75 dark:[&:not(:first-child)]:border-t-border',
        '[&_header]:has-[[role=option]]:pl-7',
        '[&_header]:has-[[role=menuitem]]:pl-3',
      )}
    >
      <Header
        className={twMerge(
          'sticky z-10 truncate bg-background px-2 pt-2 text-xs/6 text-muted dark:bg-popover',
          '-top-[1px] -mx-[1px]',
          props.className,
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
