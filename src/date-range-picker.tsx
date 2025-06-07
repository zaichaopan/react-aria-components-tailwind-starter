import React from 'react';
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateRangePickerStateContext,
  DateValue,
  useLocale,
  Group,
} from 'react-aria-components';
import { Button } from './button';
import { DateInput } from './date-field';
import { Dialog } from './dialog';
import { Popover } from './popover';
import { RangeCalendar } from './range-calendar';
import { composeTailwindRenderProps, inputField } from './utils';
import { twMerge } from 'tailwind-merge';
import { CalendarIcon } from './icons/outline/calendar';

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {}

export function DateRangePicker<T extends DateValue>({
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeTailwindRenderProps(props.className, inputField)}
    />
  );
}

export function DateRangePickerInput() {
  return (
    <>
      <Group
        data-ui="control"
        className={({ isFocusWithin, isDisabled, isInvalid, isHovered }) =>
          twMerge(
            'rounded-md text-base/6 shadow-sm outline-none sm:text-sm/6 dark:shadow-none',
            'group relative grid grid-cols-[auto_16px_auto_1fr] items-center',
            'group-data-invalid:ring-red-600 dark:group-data-invalid:ring-red-600',
            '[&:has(_input[data-disabled=true])]:opacity-50',
            '[&:has([data-ui=date-segment][aria-readonly])]:bg-zinc-950/5',
            'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-white/10',

            'ring ring-zinc-950/10 dark:ring-white/10',
            !isFocusWithin &&
              !isDisabled &&
              !isInvalid &&
              isHovered &&
              '[&:not([readonly])]:ring-zinc-950/20 dark:[&:not([readonly])]:ring-white/20',
            '[&[readonly]]:bg-zinc-50 dark:[&[readonly]]:bg-white/5',

            isFocusWithin
              ? 'ring-ring dark:ring-ring group-data-invalid:ring-ring dark:group-data-invalid:ring-ring ring-2'
              : '',
          )
        }
      >
        <DateInput
          slot="start"
          className={[
            'flex min-w-fit shadow-none ring-0 focus-within:ring-0',
            '[&:has([data-disabled=true])]:opacity-100',
            '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
            'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
          ].join(' ')}
        />
        <span
          aria-hidden="true"
          className="text-muted place-self-center group-data-disabled:opacity-50"
        >
          –
        </span>
        <DateInput
          slot="end"
          className={[
            'flex min-w-fit opacity-100 shadow-none ring-0 focus-within:ring-0',
            '[&:has([data-disabled=true])]:opacity-100',
            '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
            'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
          ].join(' ')}
        />
        <Button
          variant="plain"
          isIconOnly
          size="sm"
          className="not-disabled:not-hover:text-muted me-1 justify-self-end not-disabled:hover:bg-transparent focus-visible:-outline-offset-1"
        >
          <CalendarIcon />
        </Button>
      </Group>
      <Popover placement="bottom" className="rounded-lg">
        <Dialog>
          <RangeCalendar />
        </Dialog>
      </Popover>
    </>
  );
}

export function DateRangePickerButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { locale } = useLocale();
  const state = React.useContext(DateRangePickerStateContext);
  const formattedValue = state?.formatValue(locale, {});

  return (
    <>
      <Group data-ui="control">
        <Button
          variant="outline"
          className={twMerge(
            'w-full min-w-64 px-0 font-normal sm:px-0',
            className,
          )}
        >
          <div
            className={twMerge(
              'grid w-full items-center',
              formattedValue
                ? 'grid grid-cols-[1fr_16px_1fr_36px]'
                : 'grid-cols-[1fr_36px]',
            )}
          >
            {formattedValue ? (
              <>
                <span className="min-w-fit px-3 text-base/6 sm:text-sm/6">
                  {formattedValue.start}
                </span>
                <span
                  aria-hidden="true"
                  className="text-muted place-self-center group-data-disabled:opacity-50"
                >
                  –
                </span>
                <span className="min-w-fit px-3 text-base/6 sm:text-sm/6">
                  {formattedValue.end}
                </span>
              </>
            ) : (
              <span className="text-muted justify-self-start px-3">
                {children}
              </span>
            )}

            <CalendarIcon className="text-muted place-self-center" />
          </div>
        </Button>

        <DateInput slot="start" aria-hidden className="hidden" />
        <DateInput slot="end" aria-hidden className="hidden" />
      </Group>
      <Popover placement="bottom" className="rounded-lg">
        <Dialog>
          <RangeCalendar />
        </Dialog>
      </Popover>
    </>
  );
}
