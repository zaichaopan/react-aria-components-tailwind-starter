import {
  OverlayArrow,
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  composeRenderProps,
  DialogTrigger,
  useSlottedContext,
  PopoverContext,
} from 'react-aria-components';
import React from 'react';
import { Dialog, DialogBody } from '../src/Dialog';
import { twMerge } from 'tailwind-merge';

export interface PopoverProps extends Omit<RACPopoverProps, 'children'> {
  showArrow?: boolean;
  noAnimation?: boolean;
  children: React.ReactNode;
}

export const PopoverTrigger = DialogTrigger;

export function Popover({
  children,
  showArrow,
  className,
  ...props
}: PopoverProps) {
  const popoverContext = useSlottedContext(PopoverContext)!;
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger';
  let offset = showArrow ? 12 : 8;
  offset = isSubmenu ? offset - 14 : offset;

  return (
    <RACPopover
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) => {
        return twMerge(
          'max-w-[250px] rounded-lg bg-background bg-popover shadow-lg ring-1 ring-border/75 dark:ring-border',
          renderProps.isEntering &&
            'duration-50 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1',
          renderProps.isExiting &&
            'duration-50 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1',

          className,
        );
      })}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={16}
            height={16}
            viewBox="0 0 12 12"
            className="block fill-background stroke-zinc-950/10 stroke-1 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:stroke-white/10 "
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </RACPopover>
  );
}

export function PopoverContent({ children }: { children: React.ReactNode }) {
  return (
    <Dialog className="focus-visible:outline-none">
      <DialogBody className="mt-0 p-0">{children}</DialogBody>
    </Dialog>
  );
}
