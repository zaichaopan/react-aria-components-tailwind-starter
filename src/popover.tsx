import {
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  useSlottedContext,
  PopoverContext,
  composeRenderProps,
} from 'react-aria-components';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface PopoverProps extends Omit<RACPopoverProps, 'children'> {
  children: React.ReactNode;
  noAnimation?: boolean;
}

export const Popover = React.forwardRef(
  ({ noAnimation, ...props }: PopoverProps, ref: React.Ref<HTMLDivElement>) => {
    const popoverContext = useSlottedContext(PopoverContext)!;
    const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger';

    let offset = 10;
    offset =
      props.offset !== undefined
        ? props.offset
        : isSubmenu
          ? offset - 14
          : offset;

    return (
      <RACPopover
        {...props}
        ref={ref}
        offset={offset}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge([
              'bg-background',
              'shadow-lg',
              'rounded-md',
              'ring-1',
              'ring-zinc-950/10',
              'dark:ring-zinc-800',

              !noAnimation && [
                'origin-(--trigger-anchor-point)',
                renderProps.isEntering &&
                  'animate-in fade-in zoom-in-95 duration-200 ease-out',

                renderProps.isExiting &&
                  'animate-out fade-out zoom-out-95 duration-150 ease-in',
              ],

              className,
            ]);
          },
        )}
      />
    );
  },
);
