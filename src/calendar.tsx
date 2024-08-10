import {
  Calendar as RACCalendar,
  CalendarGridHeader as RACCalendarGridHeader,
  CalendarProps as RACCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Text,
  useLocale,
  composeRenderProps,
} from 'react-aria-components';
import { Button } from './button';
import { focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export interface CalendarProps<T extends DateValue>
  extends Omit<RACCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <RACCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid weekdayStyle="short">
        <CalendarGridHeader />
        <CalendarGridBody className="before:block before:w-full before:leading-[0.25rem] before:opacity-0 before:content-['.']">
          {(date) => (
            <CalendarCell
              date={date}
              className={composeRenderProps('', (className, renderProps) => {
                return twMerge(
                  'flex size-9 cursor-default items-center justify-center rounded-md text-sm outline-none',
                  renderProps.isSelected
                    ? 'bg-accent text-white invalid:bg-destructive invalid:text-white'
                    : 'hover:bg-hover pressed:bg-accent/90 pressed:text-white',
                  renderProps.isDisabled && 'text-muted',
                  renderProps.isFocusVisible && focusOutlineStyle,
                  className,
                );
              })}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-destructive">
          {errorMessage}
        </Text>
      )}
    </RACCalendar>
  );
}

export function CalendarHeader() {
  const { direction } = useLocale();

  return (
    <header className="flex w-full items-center gap-1">
      <Button slot="previous" plain iconOnly aria-label="Previous">
        {direction === 'rtl' ? (
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
            className="text-muted"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        ) : (
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
            className="text-muted"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        )}
      </Button>

      <Heading
        className="mx-2 flex-1 text-center font-medium"
        level={2}
        aria-hidden
      />

      <Button slot="next" plain iconOnly aria-label="Next">
        {direction === 'rtl' ? (
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
            className="text-muted"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        ) : (
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
            className="text-muted"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </Button>
    </header>
  );
}

export function CalendarGridHeader() {
  return (
    <RACCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="size-9 text-sm/6 font-normal text-muted">
          {day}
        </CalendarHeaderCell>
      )}
    </RACCalendarGridHeader>
  );
}
