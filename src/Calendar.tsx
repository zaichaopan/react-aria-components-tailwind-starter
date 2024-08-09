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
      <Button slot="previous" plain isIconOnly>
        {
          <Icon aria-label="Previous">
            {direction === 'rtl' ? (
              <ChevronRight className="text-muted" />
            ) : (
              <ChevronLeft className="text-muted" />
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
              <ChevronLeft className="text-muted" />
            ) : (
              <ChevronRight className="text-muted" />
            )}
          </Icon>
        }
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
