import {
  RangeCalendar as RACRangeCalendar,
  RangeCalendarProps as RACRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
} from 'react-aria-components';
import { CalendarGridHeader, CalendarHeader } from './Calendar';
import { focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<RACRangeCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

const selectionStateStyle = {
  none: 'group-hover:bg-accent/15 group-pressed:bg-accent/90 dark:group-hover:bg-accent/50',
  middle: [
    'group-hover:bg-accent/20 dark:group-hover:bg-accent/50',
    'group-invalid:group-hover:bg-destructive/50',
    'group-pressed:bg-accent group-pressed:text-white',
    'group-invalid:group-pressed:bg-destructive group-invalid:group-pressed:text-white',
  ],
  cap: 'bg-accent text-white group-invalid:bg-destructive group-invalid:text-white',
};

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <RACRangeCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid className="[&_td]:px-0" weekdayStyle="short">
        <CalendarGridHeader />
        <CalendarGridBody className="before:block before:w-full before:leading-[0.25rem] before:content-['.']">
          {(date) => (
            <CalendarCell
              date={date}
              className="group h-9 w-9 cursor-default text-sm outline outline-0 selected:bg-accent/15 invalid:selected:bg-destructive/15 selection-start:rounded-s-lg selection-end:rounded-e-lg dark:selected:bg-accent/40 [td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg"
            >
              {({
                formattedDate,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isFocusVisible,
                isDisabled,
              }) => (
                <span
                  className={twMerge(
                    'flex h-full w-full items-center justify-center rounded-lg',
                    selectionStateStyle[
                      isSelected && (isSelectionStart || isSelectionEnd)
                        ? 'cap'
                        : isSelected
                          ? 'middle'
                          : 'none'
                    ],
                    isFocusVisible && focusOutlineStyle,
                    isDisabled && 'text-muted',
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
