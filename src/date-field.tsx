import {
  DateField as RACDateField,
  DateFieldProps as RACDateFieldProps,
  DateInput as RACDateInput,
  DateInputProps as RACDateInputProps,
  DateSegment,
  DateValue,
  composeRenderProps,
} from 'react-aria-components';
import { inputField } from './utils';
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
      className={composeRenderProps(
        props.className,
        (className, { isInvalid, isFocusWithin, isHovered, isDisabled }) =>
          twMerge(
            'group flex min-w-[150px] items-center',
            'w-full rounded-md text-base/6 shadow-sm outline-none sm:text-sm/6 dark:shadow-none',
            'px-2.5 py-2.5 sm:py-1.5',
            'ring ring-zinc-950/10 dark:ring-white/10',
            !isFocusWithin &&
              !isDisabled &&
              !isInvalid &&
              isHovered && [
                '[&:not(:has([data-ui=date-segment][aria-readonly]))]:ring-zinc-950/20',
                'dark:[&:not(:has([data-ui=date-segment][aria-readonly]))]:ring-white/20',
              ],
            '[&:has([data-disabled=true])]:opacity-50',
            '[&:has([data-ui=date-segment][aria-readonly])]:bg-zinc-50',
            'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-white/5',
            isInvalid && 'ring-red-600 dark:ring-red-600',
            isFocusWithin ? 'ring-ring dark:ring-ring ring-2' : '',
            className,
          ),
      )}
    >
      {(segment) => (
        <DateSegment
          data-ui="date-segment"
          segment={segment}
          className={twMerge(
            'inline rounded-sm px-0.5 caret-transparent outline-0 data-[type=literal]:px-0',
            'data-placeholder:text-muted data-placeholder:italic',
            'focus:bg-accent focus:text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)] focus:data-placeholder:text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
          )}
        />
      )}
    </RACDateInput>
  );
}
