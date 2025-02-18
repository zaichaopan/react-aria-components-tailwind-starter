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
  return (
    <RACListBox
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'outline-hidden',
      ])}
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
            isFocusVisible && 'outline-ring outline outline-2 outline-offset-2',
            className,
          ),
      )}
    />
  );
}
