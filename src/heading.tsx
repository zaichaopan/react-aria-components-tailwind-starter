import React from 'react';
import {
  Heading as RACHeading,
  HeadingProps as RACHeadingProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

const displayLevels = {
  1: 'font-bold text-lg',
  2: 'font-semibold text-base/6 ',
  3: 'font-semibold text-base/6 sm:text-sm/6',
  4: 'font-medium text-base/6 sm:text-sm/6',
};

type Level = keyof typeof displayLevels;

export interface HeadingProps
  extends RACHeadingProps,
    React.RefAttributes<HTMLHeadingElement> {
  displayLevel?: Level;
  level?: Level;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ displayLevel, className, level = 1, ...props }, ref) {
    return (
      <RACHeading
        {...props}
        ref={ref}
        level={level}
        className={twMerge(displayLevels[displayLevel ?? level], className)}
      />
    );
  },
);
