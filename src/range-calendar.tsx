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
              className={composeRenderProps(
                '',
                (
                  className,
                  { isSelected, isSelectionStart, isSelectionEnd, isInvalid },
                ) => {
                  return twMerge(
                    'group size-9 cursor-default text-[0.85rem] outline-none',
                    isToday(date, getLocalTimeZone()) && [
                      isSelected && 'rounded-none',
                      'rounded-md bg-zinc-100 dark:bg-zinc-700',
                    ],
                    isSelected && [
                      'bg-accent/[0.07] dark:bg-accent/35 dark:text-white',
                    ],
                    isSelected &&
                      isInvalid && [
                        'bg-destructive/15 text-destructive dark:bg-destructive/30',
                      ],
                    isSelectionStart && 'rounded-s-md',
                    isSelectionEnd && 'rounded-e-md',
                    '[td:first-child_&]:rounded-s-md [td:last-child_&]:rounded-e-md',
                    className,
                  );
                },
              )}
            >
              {({
                formattedDate,
                isSelected,
                isInvalid,
                isHovered,
                isPressed,
                isSelectionStart,
                isSelectionEnd,
                isFocusVisible,
                isUnavailable,
                isDisabled,
              }) => (
                <span
                  className={twMerge(
                    'relative flex size-[calc(theme(size.9)-1px)] items-center justify-center',
                    isHovered && [
                      'rounded-md',
                      'bg-zinc-100',
                      'dark:bg-zinc-700',
                      isPressed && 'bg-accent/90',
                      isSelected && [
                        'bg-accent',
                        'text-white',
                        'dark:bg-accent',
                      ],
                      isPressed && isSelected && ['bg-accent', 'text-white'],
                    ],
                    isDisabled && 'opacity-40',
                    isUnavailable && [
                      'text-destructive',
                      'decoration-destructive',
                      'line-through',
                    ],
                    isSelected &&
                      (isSelectionStart || isSelectionEnd) && [
                        'text-sm',
                        'border',
                        'dark:border-0',
                        'border-accent',
                        'rounded-md',
                        'bg-accent',
                        'text-white',
                        'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                        isHovered && 'bg-accent/90 dark:bg-accent/90',
                        isInvalid &&
                          'border-destructive bg-destructive text-white',
                      ],
                    isFocusVisible && [
                      'outline',
                      'outline-2',
                      'outline-ring',
                      (isSelectionStart || isSelectionEnd) &&
                        'outline-offset-1',
                      'rounded-md',
                    ],
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
