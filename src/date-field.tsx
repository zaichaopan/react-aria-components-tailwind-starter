import {
  DateField as RACDateField,
  DateFieldProps as RACDateFieldProps,
  DateInput as RACDateInput,
  DateInputProps as RACDateInputProps,
  DateSegment,
  DateValue,
  composeRenderProps,
} from 'react-aria-components';
import {
  composeTailwindRenderProps,
  focusWithinRing,
  inputField,
} from './utils';
import { twMerge } from 'tailwind-merge';

export interface DateFieldProps<T extends DateValue>
  extends RACDateFieldProps<T> {}

export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
  return (
    <RACDateField
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) => {
          return twMerge(
            inputField,
            // RAC does not set disable to date field when it is disable
            // So we have to style disable state for none input
            isDisabled && '[&>:not(input)]:opacity-50',
            className,
          );
        },
      )}
    />
  );
}

export type DateInputProps = Omit<RACDateInputProps, 'children'>;

export function DateInput(props: DateInputProps) {
  return (
    <RACDateInput
      {...props}
      data-ui="control"
      className={composeTailwindRenderProps(props.className, [
        'group flex w-full items-center rounded-lg border bg-transparent shadow-sm',
        'invalid:border-destructive',
        '[&:has([data-disabled=true])]:opacity-50',
        '[&:has([data-ui=date-segment][aria-readonly])]:bg-zinc-50',
        'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-white/10',
        'block min-w-[150px]',
        'text-base/6 sm:text-sm/6',
        'px-3',
        'py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
        focusWithinRing,
        'ring-offset-0',
      ])}
    >
      {(segment) => (
        <DateSegment
          data-ui="date-segment"
          segment={segment}
          className={twMerge(
            'inline rounded px-0.5 caret-transparent outline-0 type-literal:px-0',
            'data-[placeholder]:italic data-[placeholder]:text-muted',
            'focus:bg-accent focus:text-white focus:data-[placeholder]:text-white',
          )}
        />
      )}
    </RACDateInput>
  );
}
