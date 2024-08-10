import React from 'react';
import {
  DatePicker as RACDatePicker,
  DatePickerProps as RACDatePickerProps,
  DateValue,
  DatePickerStateContext,
  GroupProps,
  useLocale,
} from 'react-aria-components';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { DateInput } from './DateField';
import { Dialog } from './Dialog';
import { InputFieldGroup } from './Field';
import { Popover } from './Popover';
import { composeTailwindRenderProps } from './utils';

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
          <Calendar />
        </Dialog>
      </Popover>
    </>
  );
}

export function DatePickerButton(props: GroupProps) {
  const { locale } = useLocale();
  const state = React.useContext(DatePickerStateContext);
  const formattedDate = state.formatValue(locale, {});

  return (
    <>
      <InputFieldGroup {...props}>
        <Button className="text flex-1 px-2 font-normal" plain>
          {formattedDate === '' ? (
            <span className="text-muted">Select date</span>
          ) : (
            <span className="text-sm">{formattedDate}</span>
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
            className="ml-auto size-4"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
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
