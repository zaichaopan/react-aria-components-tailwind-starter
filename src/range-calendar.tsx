import {
  RangeCalendar as RACRangeCalendar,
  RangeCalendarProps as RACRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
  composeRenderProps,
} from 'react-aria-components';
import { CalendarGridHeader, CalendarHeader } from './calendar';
import { groupFocusVisibleOutline } from './utils';
import { twMerge } from 'tailwind-merge';
import { getLocalTimeZone, isToday } from '@internationalized/date';

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<RACRangeCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <RACRangeCalendar
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('px-1.5 py-2.5', className);
      })}
    >
      <CalendarHeader />
      <CalendarGrid
        className="mx-3 border-separate border-spacing-y-0.5 sm:mx-2 [&_td]:px-0"
        weekdayStyle="short"
      >
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={[
                'group size-9 cursor-default text-[0.85rem] outline-none',
                'selected:bg-accent/[0.07] selected:dark:bg-accent/35 dark:selected:text-white',
                'invalid:selected:bg-destructive/15 invalid:selected:text-destructive dark:invalid:selected:bg-destructive/30',
                'selection-start:rounded-s-md',
                'selection-end:rounded-e-md',
                '[td:first-child_&]:rounded-s-md [td:last-child_&]:rounded-e-md',
                isToday(date, getLocalTimeZone()) &&
                  'rounded-md bg-zinc-100 selected:rounded-none dark:bg-zinc-700',
              ].join(' ')}
            >
              {({ formattedDate }) => (
                <span
                  className={twMerge(
                    'relative flex size-[calc(theme(size.9)-1px)] items-center justify-center',
                    'group-hover:rounded-md',
                    'group-hover:bg-zinc-100',
                    'dark:group-hover:bg-zinc-700',
                    'group-pressed:bg-accent/90',

                    // selected
                    'group-selected:group-hover:bg-accent',
                    'group-selected:group-hover:text-white',
                    'group-selected:dark:group-hover:bg-accent',
                    'group-selected:group-pressed:bg-accent',
                    'group-selected:group-pressed:text-white',

                    // disabled
                    'group-disabled:opacity-40',

                    // unavailable
                    'group-unavailable:text-destructive',
                    'group-unavailable:decoration-destructive',
                    'group-unavailable:line-through',

                    // selection start
                    'group-selected:group-selection-start:text-sm',
                    'group-selected:group-selection-start:border',
                    'group-selected:group-selection-start:dark:border-0',
                    'group-selected:group-selection-start:border-accent',
                    'group-selected:group-selection-start:rounded-md',
                    'group-selected:group-selection-start:bg-accent',
                    'group-selected:group-selection-start:text-white',
                    'group-selected:group-selection-start:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                    'group-selected:group-selection-start:group-hover:bg-accent/90',
                    'group-selected:group-selection-start:dark:group-hover:bg-accent/90',
                    'group-selected:group-selection-start:group-invalid:border-destructive',
                    'group-selected:group-selection-start:group-invalid:bg-destructive',
                    'group-selected:group-selection-start:group-invalid:text-white',

                    // selection end
                    'group-selected:group-selection-end:text-sm',
                    'group-selected:group-selection-end:border',
                    'group-selected:group-selection-end:dark:border-0',
                    'group-selected:group-selection-end:border-accent',
                    'group-selected:group-selection-end:rounded-md',
                    'group-selected:group-selection-end:bg-accent',
                    'group-selected:group-selection-end:text-white',
                    'group-selected:group-selection-end:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                    'group-selected:group-selection-end:group-hover:bg-accent/90',
                    'group-selected:group-selection-end:dark:group-hover:bg-accent/90',
                    'group-selected:group-selection-end:group-invalid:border-destructive',
                    'group-selected:group-selection-end:group-invalid:bg-destructive',
                    'group-selected:group-selection-end:group-invalid:text-white',

                    groupFocusVisibleOutline,
                    'group-focus-visible:rounded-md',
                  )}
                >
                  {formattedDate}
                </span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-destructive">
          {errorMessage}
        </Text>
      )}
    </RACRangeCalendar>
  );
}
