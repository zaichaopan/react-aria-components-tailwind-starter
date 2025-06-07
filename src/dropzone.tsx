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
        (className, { isDropTarget, isDisabled, isFocusVisible, isHovered }) =>
          twMerge(
            'sm:min-w-96',
            'flex shrink-0 flex-col items-center justify-center rounded-lg',
            'p-4',
            'shadow-sm ring ring-zinc-950/10 dark:ring-white/10',
            !isFocusVisible &&
              !isDisabled &&
              isHovered &&
              'ring-zinc-950/20 dark:ring-white/20',
            isDisabled && 'opacity-50',
            isDropTarget && 'bg-accent/10',
            (isDropTarget || isFocusVisible) &&
              'ring-ring dark:ring-ring ring-2',
            className,
          ),
      )}
    />
  );
}
