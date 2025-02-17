import React from 'react';
import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxProps as RACListBoxProps,
  ListBoxItemProps,
  composeRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';
import { twMerge } from 'tailwind-merge';

export interface ListBoxProps<T>
  extends Omit<RACListBoxProps<T>, 'layout' | 'orientation'> {}

export function ListBox<T extends object>(props: ListBoxProps<T>) {
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
      ref={ref}
      className={composeTailwindRenderProps(props.className, ['outline-hidden'])}
    />
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
        (className, { isFocusVisible, isDisabled }) =>
          twMerge(
            'group relative flex outline-0',
            isDisabled && 'opacity-50',
            isFocusVisible &&
              'outline outline-2 outline-offset-2 outline-ring',
            className,
          ),
      )}
    />
  );
}
