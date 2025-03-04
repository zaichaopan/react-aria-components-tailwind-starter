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
        className="border-separate border-spacing-y-0.5 px-3 sm:px-2"
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
                    'group size-10 cursor-default text-sm outline-hidden',
                    isToday(date, getLocalTimeZone()) && [
                      isSelected ? 'rounded-none' : 'rounded-lg',
                      'bg-zinc-100 dark:bg-zinc-700',
                    ],
                    isSelected && [
                      'bg-accent/[0.07] dark:bg-accent/35 dark:text-white',
                    ],
                    isSelected &&
                      isInvalid && [
                        'bg-destructive/15 text-destructive dark:bg-destructive/30',
                      ],
                    isSelectionStart && 'rounded-s-lg',
                    isSelectionEnd && 'rounded-e-lg',
                    '[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg',
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
                    'relative flex size-[calc(theme(size.10)-1px)] items-center justify-center',
                    isHovered && [
                      'rounded-md',
                      'bg-zinc-100',
                      'dark:bg-zinc-700',
                      isPressed && 'bg-accent/90',
                      isSelected && [
                        'bg-accent',
                        'text-[lch(from_var(--color-accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
                        'dark:bg-accent',
                      ],
                      isPressed &&
                        isSelected && [
                          'bg-accent',
                          'text-[lch(from_var(--color-accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
                        ],
                    ],
                    isDisabled && 'opacity-40',
                    isUnavailable && [
                      'text-destructive',
                      'decoration-destructive',
                      'line-through',
                    ],
                    isSelected &&
                      (isSelectionStart || isSelectionEnd) && [
                        'bg-accent rounded-lg text-sm text-[lch(from_var(--color-accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
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
                      'rounded-lg',
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
        <Text slot="errorMessage" className="text-destructive text-sm">
          {errorMessage}
        </Text>
      )}
    </RACRangeCalendar>
  );
}
