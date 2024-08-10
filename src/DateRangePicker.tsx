import React from 'react';
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateRangePickerStateContext,
  DateValue,
  useLocale,
} from 'react-aria-components';
import { Button } from './Button';
import { DateInput } from './DateField';
import { Dialog } from './Dialog';
import { InputFieldGroup } from './Field';
import { Popover } from './Popover';
import { RangeCalendar } from './RangeCalendar';
import { composeTailwindRenderProps } from './utils';
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
        'group flex shrink-0 flex-col gap-1',
      ])}
    />
  );
}

export function DateRangePickerInput() {
  return (
    <>
      <InputFieldGroup>
        <DateInput slot="start" className="min-w-fit" />
        <span
          aria-hidden="true"
          className="ml-2 text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600"
        >
          –
        </span>
        <DateInput slot="end" className="min-w-fit flex-1" />
        <Button
          plain
          size="sm"
          className="mx-1.5 size-auto rounded p-0.5 outline-offset-0"
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
            className="size-4"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
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
  const { locale } = useLocale();
  const state = React.useContext(DateRangePickerStateContext);
  const formattedValue = state.formatValue(locale, {});

  return (
    <>
      <InputFieldGroup>
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
            <>
              <span className="min-w-fit text-sm">{formattedValue.start}</span>
              <span
                aria-hidden="true"
                className="ml-2 text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600"
              >
                –
              </span>
              <span className="min-w-fit flex-1 text-sm">
                {formattedValue.end}
              </span>
            </>
          ) : (
            <span className="flex flex-1 items-center text-muted">
              Select date range
            </span>
          )}

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
            className="size-4"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
        </Button>

        <DateInput slot="start" aria-hidden className="hidden" />
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
