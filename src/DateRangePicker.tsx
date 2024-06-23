import React from 'react';
import { CalendarDays } from 'lucide-react';
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateRangePickerStateContext,
  DateValue,
} from 'react-aria-components';
import { Button } from './Button';
import { DateInput } from './DateField';
import { Dialog } from './Dialog';
import { InputFieldGroup } from './Field';
import { Popover } from './Popover';
import { RangeCalendar } from './RangeCalendar';
import { composeTailwindRenderProps } from './utils';
import { Icon } from './Icon';
import { twMerge } from 'tailwind-merge';

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {}

export function DateRangePicker<T extends DateValue>({
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'group flex flex-col gap-1',
      ])}
    />
  );
}

export function DateRangePickerInput() {
  return (
    <>
      <InputFieldGroup className="w-auto min-w-[208px]">
        <DateInput slot="start" className="min-w-fit text-sm" />
        <span
          aria-hidden="true"
          className="ml-2 text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600"
        >
          –
        </span>
        <DateInput slot="end" className="min-w-fit flex-1 text-sm" />
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
          <RangeCalendar />
        </Dialog>
      </Popover>
    </>
  );
}

export function DateRangePickerButton() {
  const state = React.useContext(DateRangePickerStateContext);
  const formattedValue = state.formatValue('en-US', {});

  return (
    <>
      <InputFieldGroup className="flex w-auto min-w-[208px]">
        <Button
          plain
          className={(renderProps) => {
            return twMerge(
              'flex-1 px-2 font-normal',
              renderProps.isFocusVisible && 'outline-0',
            );
          }}
        >
          {formattedValue ? (
            <span className="flex flex-1 items-center">
              <span className="min-w-fit text-sm">{formattedValue.start}</span>
              <span
                aria-hidden="true"
                className="flex-1 text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600"
              >
                –
              </span>
              <span className="min-w-fit flex-1 text-sm">
                {formattedValue.end}
              </span>
            </span>
          ) : (
            <span className="flex flex-1 items-center text-muted">
              Select date range
            </span>
          )}
          <Icon>
            <CalendarDays className="size-4 opacity-75" />
          </Icon>
        </Button>

        <DateInput
          slot="start"
          aria-hidden
          className="hidden min-w-fit text-sm"
        />
        <DateInput slot="end" aria-hidden className="hidden" />
      </InputFieldGroup>
      <Popover className="max-w-none" placement="bottom">
        <Dialog className="overflow-auto px-3 py-2">
          <RangeCalendar />
        </Dialog>
      </Popover>
    </>
  );
}
