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
            'flex shrink-0 flex-col items-center justify-center rounded-md',
            'border-zinc-950/10 dark:border-white/15 border border-dashed p-2',
            isDisabled && 'opacity-50',
            isDropTarget && 'bg-accent/15 dark:bg-accent/75',
            (isDropTarget || isFocusVisible) &&
              'ring-ring dark:ring-ring border-transparent ring-2',
            className,
          ),
      )}
    />
  );
}
