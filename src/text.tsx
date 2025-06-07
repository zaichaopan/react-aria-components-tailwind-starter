import { LinkProps, TextProps } from 'react-aria-components';
import { Link } from './link';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { composeTailwindRenderProps } from './utils';

export function Text({
  className,
  elementType,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    elementType ?? 'p',
    {
      ...props,
      className: twMerge(
        'text-muted text-base text-pretty sm:text-sm/6',
        className,
      ),
    },
    children,
  );
}

export function Strong({
  className,
  ...props
}: React.JSX.IntrinsicElements['strong']) {
  return (
    <Text
      {...props}
      elementType="strong"
      className={twMerge('text-foreground font-medium', className)}
    />
  );
}

export function Small({
  className,
  ...props
}: React.JSX.IntrinsicElements['small']) {
  return (
    <Text
      {...props}
      elementType="small"
      className={twMerge('text-sm sm:text-xs', className)}
    />
  );
}

export function TextLink(props: LinkProps) {
  return (
    <Link
      {...props}
      className={composeTailwindRenderProps(props.className, [
        '[--link-color:var(--link,var(--foreground))]',
        'text-(--link-color) underline decoration-(--link-color)/15 underline-offset-4 dark:decoration-(--link-color)/30',
      ])}
    />
  );
}
