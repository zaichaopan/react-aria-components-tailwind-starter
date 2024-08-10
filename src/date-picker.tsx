import React from 'react';
import {
  DatePicker as RACDatePicker,
  DatePickerProps as RACDatePickerProps,
  DateValue,
  DatePickerStateContext,
  useLocale,
  Group,
} from 'react-aria-components';
import { Button } from './button';
import { Calendar } from './calendar';
import { DateInput, DateInputProps } from './date-field';
import { Dialog } from './dialog';
import { Popover } from './popover';
import { composeTailwindRenderProps, inputField } from './utils';
import { twMerge } from 'tailwind-merge';
import { CalendarIcon } from './icons';

export interface DatePickerProps<T extends DateValue>
  extends RACDatePickerProps<T> {}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  return (
    <RACDatePicker
      {...props}
      className={composeTailwindRenderProps(props.className, inputField)}
    />
  );
}

export function DatePickerInput(props: DateInputProps) {
  return (
    <>
      <Group
        data-ui="control"
        {...props}
        className={[
          'group',
          'grid w-auto min-w-52',
          'grid-cols-[1fr_calc(theme(size.5)+20px)]',
          'sm:grid-cols-[1fr_calc(theme(size.4)+20px)]',
        ].join(' ')}
      >
        <DateInput
          {...props}
          className={composeTailwindRenderProps(props.className, [
            'col-span-full',
            'row-start-1',
            'sm:pe-9',
            'pe-10',
          ])}
        />
        <Button
          variant="plain"
          size="sm"
          isIconOnly
          data-ui="trigger"
          className={[
            'focus-visible:-outline-offset-1',
            'row-start-1',
            '-col-end-1',
            'place-self-center',
            'text-muted group-hover:text-foreground',
          ].join(' ')}
        >
          <CalendarIcon />
        </Button>
      </Group>

      <Popover
        className={[
          'max-w-none',
          'dark:bg-zinc-800',
          'dark:ring-zinc-700',
        ].join(' ')}
        placement="bottom"
      >
        <Dialog className="overflow-auto">
          <Calendar />
        </Dialog>
      </Popover>
    </>
  );
}

export function DatePickerButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { locale } = useLocale();
  const state = React.useContext(DatePickerStateContext);
  const formattedDate = state?.formatValue(locale, {});

  return (
    <>
      <Group data-ui="control">
        <Button
          className={twMerge(
            'w-full min-w-52 flex-1 justify-between px-3 font-normal',
            className,
          )}
          variant="outline"
        >
          {formattedDate === '' ? (
            <span className="text-muted">{children}</span>
          ) : (
            <span className="text-sm">{formattedDate}</span>
          )}

          <CalendarIcon className="text-muted group-hover:text-foreground group-pressed:text-foreground" />
        </Button>

        <DateInput className="hidden" aria-hidden />
      </Group>

      <Popover
        className={[
          'max-w-none',
          'dark:bg-zinc-800',
          'dark:ring-zinc-700',
        ].join(' ')}
        placement="bottom"
      >
        <Dialog className="overflow-auto">
          <Calendar />
        </Dialog>
      </Popover>
    </>
  );
}
