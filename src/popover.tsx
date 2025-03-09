import {
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  useSlottedContext,
  PopoverContext,
} from 'react-aria-components';
import React from 'react';
import { composeTailwindRenderProps } from './utils';

export interface PopoverProps extends Omit<RACPopoverProps, 'children'> {
  children: React.ReactNode;
}

export function Popover(props: PopoverProps) {
  const popoverContext = useSlottedContext(PopoverContext)!;
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger';

  let offset = 8;
  offset =
    props.offset !== undefined
      ? props.offset
      : isSubmenu
        ? offset - 14
        : offset;

  return (
    <RACPopover
      {...props}
      offset={offset}
      className={composeTailwindRenderProps(props.className, [
        'bg-background',
        'shadow-lg',
        'rounded-md',
        'ring-1',
        'ring-zinc-950/10',
        'dark:ring-zinc-800',
        'data-entering:animate-in',
        'data-entering:ease-out',
        'data-entering:fade-in',
        'data-exiting:animate-out',
        'data-exiting:ease-in',
        'data-exiting:fade-out',
        'data-exiting:duration-50',
      ])}
    />
  );
}
