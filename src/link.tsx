import React from 'react';
import {
  composeRenderProps,
  Link as RACLink,
  LinkProps as RACLinkProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { TooltipTrigger } from './tooltip';

export type LinkProps = RACLinkProps & {
  tooltip?: React.ReactNode;
};

const linkStyle = [
  'relative inline-flex cursor-pointer items-center gap-1 rounded-sm outline-hidden hover:underline',
  'text-base/6 sm:text-sm/6',
  '[&.border]:hover:no-underline',
  '[&>[data-ui=icon]:not([class*=size-])]:size-4',
  'data-disabled:no-underline data-disabled:opacity-50 data-disabled:cursor-default',
].join(' ');

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const { tooltip, ...rest } = props;

    const link = (
      <RACLink
        {...rest}
        ref={ref}
        className={composeRenderProps(
          props.className,
          (className, { isFocusVisible }) =>
            twMerge(
              linkStyle,
              isFocusVisible && 'outline-ring outline-2 outline-offset-2',
              className,
            ),
        )}
      />
    );

    if (tooltip) {
      return (
        <TooltipTrigger>
          {link}
          {tooltip}
        </TooltipTrigger>
      );
    }

    return link;
  },
);
