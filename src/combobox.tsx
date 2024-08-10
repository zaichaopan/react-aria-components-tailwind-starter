import React from 'react';
import {
  ListBoxProps,
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ComboBoxStateContext,
} from 'react-aria-components';
import { ButtonWithoutAsChildProps, CloseButton, Button } from './button';
import { ListBox } from './list-box';
import { composeTailwindRenderProps } from './utils';
import { Popover, PopoverProps } from './popover';
import { twMerge } from 'tailwind-merge';

export interface ComboBoxProps<T extends object>
  extends Omit<RACComboBoxProps<T>, 'children' | 'items'> {
  children: React.ReactNode;
}

export function ComboBox({ children, ...props }: ComboBoxProps<object>) {
  return (
    <RACComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex min-w-[150px] flex-col gap-1',
      )}
    >
      {children}
    </RACComboBox>
  );
}

export function ComboBoxControl({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return <div className={twMerge('relative', className)} {...props} />;
}

export function ComboBoxPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(
        className,
        'min-w-[--trigger-width] overflow-auto',
      )}
    />
  );
}

export function ComboBoxListBox<T extends object>({
  className,
  ...props
}: ListBoxProps<T>) {
  return (
    <ListBox
      {...props}
      className={composeTailwindRenderProps(
        className,
        'flex max-h-[inherit] flex-col overflow-auto p-1 has-[header]:px-2 has-[header]:pt-0',
      )}
    />
  );
}

export function TriggerButton() {
  return (
    <Button
      className="absolute right-1 top-1/2 size-6 -translate-y-1/2 rounded p-0.5"
      plain
    >
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 opacity-75"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </Button>
  );
}

export function ClearButton({
  onPress,
}: {
  onPress?: ButtonWithoutAsChildProps['onPress'];
}) {
  const state = React.useContext(ComboBoxStateContext);

  if (!state?.inputValue) {
    return null;
  }

  return (
    <CloseButton
      slot={null}
      className="absolute right-1 top-1/2 -translate-y-1/2"
      size="sm"
      plain
      onPress={(e) => {
        state?.setSelectedKey(null);
        onPress?.(e);
      }}
    ></CloseButton>
  );
}
