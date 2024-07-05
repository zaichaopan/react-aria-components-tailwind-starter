import React from 'react';
import {
  ListBoxProps,
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ComboBoxStateContext,
} from 'react-aria-components';
import { ButtonPropsWithoutAsChild, CloseButton, Button } from './Button';
import { ListBox } from './ListBox';
import { composeTailwindRenderProps } from './utils';
import { Popover, PopoverProps } from './Popover';
import { ChevronDown } from 'lucide-react';
import { Icon } from './Icon';

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
      <Icon>
        <ChevronDown className="size-4 text-muted" />
      </Icon>
    </Button>
  );
}

export function ClearButton({
  onPress,
}: {
  onPress?: ButtonPropsWithoutAsChild['onPress'];
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
