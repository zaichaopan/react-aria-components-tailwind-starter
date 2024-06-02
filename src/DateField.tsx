import {
  DateField as RACDateField,
  DateFieldProps as RACDateFieldProps,
  DateInput as RACDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
} from 'react-aria-components';
import { composeTailwindRenderProps, inputRingStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export interface DateFieldProps<T extends DateValue>
  extends RACDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
  return (
    <RACDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-1',
      )}
    />
  );
}

export function DateInput({
  className,
  ...props
}: Omit<DateInputProps, 'children' | 'className'> & { className?: string }) {
  return (
    <RACDateInput
      {...props}
      className={(renderProps) => {
        return twMerge(
          'group flex h-9 w-full items-center overflow-hidden rounded-md border bg-background shadow-sm',
          'invalid:border-destructive',
          'disabled:opacity-50',
          renderProps.isFocusWithin && inputRingStyle,
          'ring-offset-0',
          'block min-w-[150px] px-3 py-1.5 text-sm',
          // When it is inside role=presentation | group parent and it has border
          '[[role=presentation]_&.border]:h-fit [[role=presentation]_&.border]:border-none [[role=presentation]_&.border]:pr-0 [[role=presentation]_&.border]:shadow-none [[role=presentation]_&.border]:ring-0',
          '[[role=group]_&.border]:h-fit [[role=group]_&.border]:border-none [[role=group]_&.border]:pr-0 [[role=group]_&.border]:shadow-none [[role=group]_&.border]:ring-0 [[role=group]_&.border]:invalid:ring-0',
          className,
        );
      }}
    >
      {(segment) => (
        <DateSegment
          segment={segment}
          className={(renderProps) => {
            return twMerge(
              'inline rounded p-0.5 caret-transparent outline outline-0 type-literal:px-0',
              'data-[placeholder]:italic data-[placeholder]:text-muted',
              'disabled:opacity-50',
              renderProps.isFocused &&
                'bg-accent text-white data-[placeholder]:text-white',
            );
          }}
        />
      )}
    </RACDateInput>
  );
}
