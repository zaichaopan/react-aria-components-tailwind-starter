import React from 'react';
import { CalendarDays } from 'lucide-react';
import {
  DatePicker as RACDatePicker,
  DatePickerProps as RACDatePickerProps,
  DateValue,
  DatePickerStateContext,
  GroupProps,
} from 'react-aria-components';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { DateInput } from './DateField';
import { Dialog } from './Dialog';
import { InputFieldGroup } from './Field';
import { Popover } from './Popover';
import { composeTailwindRenderProps } from './utils';
import { Icon } from './Icon';

export interface DatePickerProps<T extends DateValue>
  extends RACDatePickerProps<T> {}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  return (
    <RACDatePicker
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'group flex flex-col gap-1',
      ])}
    />
  );
}

export function DatePickerInput({ className, ...props }: GroupProps) {
  return (
    <>
      <InputFieldGroup
        {...props}
        className={composeTailwindRenderProps(
          className,
          'h-9 w-auto min-w-[208px]',
        )}
      >
        <DateInput />

        <Button
          plain
          size="sm"
          className="mx-1.5 size-auto rounded p-0.5 outline-offset-0"
        >
          <Icon>
            <CalendarDays className="size-4 opacity-75" />
          </Icon>
        </Button>
      </InputFieldGroup>

      <Popover className="max-w-none" placement="bottom">
        <Dialog className="overflow-auto px-3 py-2">
          <Calendar />
        </Dialog>
      </Popover>
    </>
  );
}

export function DatePickerButton({ className, ...props }: GroupProps) {
  const state = React.useContext(DatePickerStateContext)!;
  const formattedDate = state.formatValue('en-US', {});

  return (
    <>
      <InputFieldGroup
        {...props}
        className={composeTailwindRenderProps(className, 'h-9')}
      >
        <Button className="flex-1 px-2 font-normal" plain>
          {formattedDate === '' ? (
            <span className="text-muted">Select date</span>
          ) : (
            formattedDate
          )}
          <Icon aria-label="Calendar">
            <CalendarDays className="ml-auto size-4 opacity-75" />
          </Icon>
        </Button>

        <DateInput className="hidden" aria-hidden />
      </InputFieldGroup>

      <Popover className="max-w-none" placement="bottom">
        <Dialog className="overflow-auto px-3 py-2">
          <Calendar />
        </Dialog>
      </Popover>
    </>
  );
}
