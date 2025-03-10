import React from 'react';
import {
  Heading as RACHeading,
  HeadingProps as RACHeadingProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { FocusScope } from 'react-aria';
import { DisplayLevel, displayLevels } from './utils';

export type BaseHeadingProps = {
  level?: DisplayLevel;
  elementType?: never;
} & RACHeadingProps;

type CustomElement = {
  level?: never;
  elementType: 'div';
} & React.JSX.IntrinsicElements['div'];

export type HeadingProps = {
  displayLevel?: DisplayLevel;
  autoFocus?: boolean;
} & (BaseHeadingProps | CustomElement);

export const Heading = React.forwardRef<
  HTMLHeadingElement | HTMLDivElement,
  HeadingProps
>(function Heading({ elementType, autoFocus, ...props }, ref) {
  if (elementType) {
    const { displayLevel = 1, className, ...restProps } = props;

    if (autoFocus) {
      return (
        <FocusScope autoFocus>
          <div
            {...restProps}
            ref={ref}
            {...(autoFocus && { tabIndex: -1 })}
            className={twMerge(
              [displayLevels[displayLevel], 'outline-hidden'],
              className,
            )}
          />
        </FocusScope>
      );
    }
    return (
      <div
        {...restProps}
        ref={ref}
        className={twMerge(displayLevels[displayLevel], className)}
      />
    );
  }

  const { level = 1, displayLevel, className, ...restProps } = props;

  if (autoFocus) {
    return (
      <FocusScope autoFocus>
        <RACHeading
          {...restProps}
          ref={ref}
          level={level}
          {...(autoFocus && { tabIndex: -1 })}
          className={twMerge(
            [displayLevels[displayLevel ?? level], 'outline-hidden'],
            className,
          )}
        />
      </FocusScope>
    );
  }

  return (
    <RACHeading
      {...restProps}
      ref={ref}
      level={level}
      className={twMerge(displayLevels[displayLevel ?? level], className)}
    />
  );
});

export const SubHeading = React.forwardRef<
  HTMLDivElement,
  React.JSX.IntrinsicElements['div']
>(function SubHeading({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge('text-muted mt-2 text-base sm:text-sm/6', className)}
    />
  );
});
