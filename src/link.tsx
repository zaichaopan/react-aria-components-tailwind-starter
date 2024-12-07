import React from 'react';
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusVisibleOutline } from './utils';
import { twMerge } from 'tailwind-merge';
import { AsChildProps, Slot } from './slot';
import { TooltipTrigger } from './tooltip';

export type LinkProps = RACLinkProps & {
  tooltip?: React.ReactNode;
};

export type LinkWithAsChild = AsChildProps<
  RACLinkProps & {
    tooltip?: React.ReactNode;
  }
>;

const linkStyle = [
  'relative inline-flex cursor-pointer items-center gap-1 rounded outline-none hover:underline',
  'text-base/6 sm:text-sm/6',
  'disabled:no-underline disabled:opacity-50 disabled:cursor-default',
  '[&.border]:hover:no-underline',
  '[&>[data-ui=icon]:not([class*=size-])]:size-4',
].join(' ');

export const Link = React.forwardRef<HTMLAnchorElement, LinkWithAsChild>(
  function Link(props, ref) {
    if (props.asChild) {
      return <Slot className={twMerge(linkStyle)}>{props.children}</Slot>;
    }

    const { asChild, tooltip, ...rest } = props;

    const link = (
      <RACLink
        {...rest}
        ref={ref}
        className={composeTailwindRenderProps(props.className, [
          linkStyle,
          focusVisibleOutline,
        ])}
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

    return link
  },
);
