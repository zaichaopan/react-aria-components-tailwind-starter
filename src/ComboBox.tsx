import React from 'react';
import {
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
} from 'react-aria-components';
import { Button } from './Button';
import { Input, InputFieldGroup } from './Field';
import { DropdownSection } from './ListBox';
import { composeTailwindRenderProps } from './utils';
import { SelectItem, SelectPopover } from './Select';

export interface ComboBoxFieldProps<T extends object>
  extends Omit<RACComboBoxProps<T>, 'children' | 'items'> {
  children: React.ReactNode;
}

export function ComboBoxFiled({
  children,
  ...props
}: ComboBoxFieldProps<object>) {
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

export interface ComboBoxProps<T extends object> {
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ComboBox<T extends object>({
  children,
  items,
}: Pick<ComboBoxProps<T>, 'children' | 'items'>) {
  return (
    <>
      <InputFieldGroup>
        <Input />
        <Button text className="rounded-md"></Button>
      </InputFieldGroup>

      <SelectPopover items={items}>{children}</SelectPopover>
    </>
  );
}

export const ComboBoxItem = SelectItem;

export const ComboBoxSection = DropdownSection;
