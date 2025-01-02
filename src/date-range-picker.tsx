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
import {
  composeTailwindRenderProps,
  focusWithinRing,
  inputField,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { CalendarIcon } from './icons';

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
  const { locale } = useLocale();
  const state = React.useContext(DateRangePickerStateContext);
  const formattedValue = state?.formatValue(locale, {});

  return (
    <>
      <Group
        data-ui="control"
        className={twMerge(
          '[&:has([aria-valuetext=Empty]:) w-full',
          'grid grid-cols-[max-content_16px_max-content_1fr] items-center',
          'group relative rounded-md border bg-inherit',
          'group-invalid:border-destructive',
          '[&:has(_input[data-disabled=true])]:border-border/50',
          '[&:has([data-ui=date-segment][aria-readonly])]:bg-zinc-50',
          'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-white/10',
          formattedValue ? 'min-w-60' : 'min-w-[278px]',
          focusWithinRing,
        )}
      >
        <DateInput
          slot="start"
          className={[
            'flex min-w-fit border-none focus-within:ring-0',
            '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
            'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
          ].join(' ')}
        />
        <span
          aria-hidden="true"
          className="place-self-center text-muted group-disabled:opacity-50"
        >
          –
        </span>
        <DateInput
          slot="end"
          className={[
            'flex min-w-fit flex-1 border-none opacity-100 focus-within:ring-0',
            '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
            'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
          ].join(' ')}
        />
        <Button
          variant="plain"
          isIconOnly
          size="sm"
          className="me-1 justify-self-end text-muted group-hover:text-foreground focus-visible:-outline-offset-1"
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
                  className="place-self-center text-muted group-disabled:opacity-50"
                >
                  –
                </span>
                <span className="min-w-fit px-3 text-base/6 sm:text-sm/6">
                  {formattedValue.end}
                </span>
              </>
            ) : (
              <span className="justify-self-start px-3 text-muted">
                {children}
              </span>
            )}

            <CalendarIcon className="place-self-center text-muted group-hover:text-foreground group-pressed:text-foreground" />
          </div>
        </Button>

        <DateInput slot="start" aria-hidden className="hidden" />
        <DateInput slot="end" aria-hidden className="hidden" />
      </Group>
      <Popover
        className={[
          'max-w-none',
          'dark:bg-zinc-800',
          'dark:ring-zinc-700 ',
        ].join(' ')}
        placement="bottom"
      >
        <Dialog className="overflow-auto">
          <RangeCalendar />
        </Dialog>
      </Popover>
    </>
  );
}
