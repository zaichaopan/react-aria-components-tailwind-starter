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
import { twMerge } from 'tailwind-merge';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { getLocalTimeZone, isToday } from '@internationalized/date';

export interface CalendarProps<T extends DateValue>
  extends Omit<RACCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <RACCalendar
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('px-1.5 py-2.5', className);
      })}
    >
      <CalendarHeader />
      <CalendarGrid
        weekdayStyle="short"
        className="mx-3 border-separate border-spacing-y-0.5 sm:mx-2"
      >
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => {
            return (
              <CalendarCell
                date={date}
                className={composeRenderProps(
                  '',
                  (
                    className,
                    {
                      isHovered,
                      isPressed,
                      isDisabled,
                      isSelected,
                      isInvalid,
                      isUnavailable,
                      isFocusVisible,
                    },
                  ) => {
                    return twMerge(
                      'relative flex size-9 cursor-default items-center justify-center rounded-md text-[0.85rem] outline-hidden',
                      isToday(date, getLocalTimeZone()) && [
                        'bg-zinc-100 dark:bg-zinc-700',
                      ],
                      isHovered && 'bg-zinc-100 dark:bg-zinc-700',
                      isPressed && 'bg-accent/90 text-white',
                      isDisabled && 'opacity-50',
                      isSelected && [
                        'text-sm text-white',
                        'border border-accent dark:border-0',
                        'bg-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                        isHovered && ['bg-accent', 'dark:bg-accent'],
                        isInvalid && [
                          'border-destructive bg-destructive text-white',
                        ],
                      ],
                      isUnavailable && [
                        'text-destructive line-through decoration-destructive',
                      ],
                      isFocusVisible && [
                        'outline',
                        'outline-2',
                        'outline-ring',
                        isSelected && 'outline-offset-1',
                      ],
                      className,
                    );
                  },
                )}
              />
            );
          }}
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
      <Button
        slot="previous"
        variant="plain"
        isIconOnly
        aria-label="Previous"
        className="focus-visible:-outline-offset-2 [&:not(:hover)]:text-muted"
      >
        {direction === 'rtl' ? (
          <ChevronRightIcon className="sm:size-5" strokeWidth="1.5" />
        ) : (
          <ChevronLeftIcon className="sm:size-5" strokeWidth="1.5" />
        )}
      </Button>

      <Heading
        className="mx-2 flex-1 text-center text-base/6 sm:text-sm/6 font-medium"
        level={2}
        aria-hidden
      />

      <Button
        slot="next"
        variant="plain"
        isIconOnly
        aria-label="Next"
        className="focus-visible:-outline-offset-2 [&:not(:hover)]:text-muted"
      >
        {direction === 'rtl' ? (
          <ChevronLeftIcon className="sm:size-5" strokeWidth="1.5" />
        ) : (
          <ChevronRightIcon className="sm:size-5" strokeWidth="1.5" />
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
