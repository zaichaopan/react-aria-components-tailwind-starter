import React from 'react';
import {
  composeRenderProps,
  Tooltip as RACTooltip,
  TooltipProps as RACTooltipProps,
} from 'react-aria-components';
import { FocusableOptions, mergeProps, useFocusable } from 'react-aria';
import { twMerge } from 'tailwind-merge';

export { TooltipTrigger } from 'react-aria-components';

export interface TooltipProps extends Omit<RACTooltipProps, 'children'> {
  children: React.ReactNode;
  noAnimation?: boolean;
}

export function Tooltip({
  children,
  offset = 8,
  noAnimation,
  ...props
}: TooltipProps) {
  return (
    <RACTooltip
      {...props}
      offset={offset}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge([
            'group max-w-64 rounded-md px-3 py-1.5',
            'text-pretty',
            'shadow-2xs dark:border dark:shadow-none',
            'origin-(--trigger-anchor-point)',
            React.Children.toArray(children).every(
              (child) => typeof child === 'string',
            )
              ? 'bg-zinc-950 text-xs text-white dark:bg-zinc-800'
              : 'bg-background border',

            !noAnimation && [
              'origin-(--trigger-anchor-point)',
              renderProps.isEntering &&
                'animate-in fade-in zoom-in-90 duration-150 ease-out',

              renderProps.isExiting &&
                'animate-out fade-out zoom-out-90 duration-150 ease-in',
            ],
            className,
          ]);
        },
      )}
    >
      {children}
    </RACTooltip>
  );
}

// https://argos-ci.com/blog/react-aria-migration
export function NonFousableTooltipTarget(props: {
  children: React.ReactElement;
}) {
  const triggerRef = React.useRef(null);
  const { focusableProps } = useFocusable(
    props.children.props as FocusableOptions,
    triggerRef,
  );

  return React.cloneElement(
    props.children,
    mergeProps(
      focusableProps,
      { tabIndex: 0 },
      props.children.props as React.HTMLProps<HTMLElement>,
      {
        ref: triggerRef,
      },
    ),
  );
}

export function NativeTooltip({
  title,
  ...props
}: React.JSX.IntrinsicElements['div'] & { title: string }) {
  return <div title={title} role="presentation" {...props} />;
}
