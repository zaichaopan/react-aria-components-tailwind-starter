import { LinkProps, TextProps } from 'react-aria-components';
import { Link } from './Link';
import { twMerge } from 'tailwind-merge';
import React from 'react';

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
        'text-pretty text-base/6 text-muted sm:text-sm/6',
        className,
      ),
    },
    children,
  );
}

export function Strong({
  className,
  ...props
}: JSX.IntrinsicElements['strong']) {
  return (
    <Text
      elementType="strong"
      className={twMerge(
        'text-base/6 font-medium text-foreground sm:text-sm/6',
        className,
      )}
      {...props}
    />
  );
}


export function Small({
  className,
  ...props
}: JSX.IntrinsicElements['small']) {
  return (
    <Text
      elementType="small"
      className={twMerge(
        'text-sm/6/ sm:text-xs/6 text-muted',
        className,
      )}
      {...props}
    />
  );
}


export function TextLink(props: LinkProps) {
  return <Link {...props} className="underline" />;
}
