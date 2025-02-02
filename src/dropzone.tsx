import {
  composeRenderProps,
  DropZoneProps,
  DropZone as RACDropZone,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export function DropZone(props: DropZoneProps) {
  return (
    <RACDropZone
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDropTarget, isDisabled, isFocusVisible }) =>
          twMerge(
            'sm:min-w-96',
            'flex flex-shrink-0 flex-col items-center justify-center rounded-md',
            'border border-dashed p-2',
            isDisabled && 'opacity-50',
            isDropTarget && 'bg-accent/15 dark:bg-accent/75',
            (isDropTarget || isFocusVisible) &&
              'border-solid border-ring ring-1 ring-ring',
            className,
          ),
      )}
    />
  );
}
