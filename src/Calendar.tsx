import { ChevronLeft, ChevronRight } from 'lucide-react';
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
import { Button } from './Button';
import { focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { Icon } from './Icon';

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
                  'flex h-9 w-9 cursor-default items-center justify-center rounded-lg text-sm outline-none',
                  renderProps.isSelected
                    ? 'bg-accent text-white invalid:bg-destructive invalid:text-white'
                    : 'hover:bg-accent/15 pressed:bg-accent/90 pressed:text-white dark:hover:bg-accent/30',
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
      <Button slot="previous" plain isIconOnly>
        {
          <Icon aria-label="Previous">
            {direction === 'rtl' ? (
              <ChevronRight strokeWidth={1.5} className="opacity-75" />
            ) : (
              <ChevronLeft strokeWidth={1.5} className="opacity-75" />
            )}
          </Icon>
        }
      </Button>

      <Heading
        className="mx-2 flex-1 text-center font-medium"
        level={2}
        aria-hidden
      />

      <Button slot="next" plain isIconOnly>
        {
          <Icon aria-label="Next">
            {direction === 'rtl' ? (
              <ChevronLeft strokeWidth={1.5} className="opacity-75" />
            ) : (
              <ChevronRight strokeWidth={1.5} className="opacity-75" />
            )}
          </Icon>
        }
      </Button>
    </header>
  );
}

export function CalendarGridHeader() {
  return (
    <RACCalendarGridHeader className="border-b">
      {(day) => (
        <CalendarHeaderCell className="size-9 text-sm/6 font-normal text-muted">
          {day}
        </CalendarHeaderCell>
      )}
    </RACCalendarGridHeader>
  );
}
