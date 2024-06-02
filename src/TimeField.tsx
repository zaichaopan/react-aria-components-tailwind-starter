import {
  TimeField as RACTimeField,
  TimeFieldProps as RACTimeFieldProps,
  TimeValue,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export interface TimeFieldProps<T extends TimeValue>
  extends RACTimeFieldProps<T> {}

export function TimeField<T extends TimeValue>(props: RACTimeFieldProps<T>) {
  return (
    <RACTimeField
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) => {
          return twMerge(
            'flex flex-col',
            isDisabled && 'opacity-50',
            className,
          );
        },
      )}
    />
  );
}


