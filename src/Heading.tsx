import React from 'react';
import {
  Heading as RACHeading,
  HeadingProps as RACHeadingProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

type Level = 1 | 2 | 3 | 4;

export type HeadingProps = RACHeadingProps &
  React.RefAttributes<HTMLHeadingElement> & {
    displayLevel?: Level;
    level?: Level;
  };

const displayLevels: Record<Level, string> = {
  4: 'font-medium text-base/6 sm:text-sm/6',
  3: 'font-semibold text-base/6 sm:text-sm/6 ',
  2: 'font-semibold text-base/6 ',
  1: 'font-bold text-lg',
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ displayLevel, className, level = 1, ...props }, ref) {
    return (
      <RACHeading
        {...props}
        ref={ref}
        level={level}
        className={twMerge(
          displayLevels[displayLevel ? displayLevel : level],
          className,
        )}
      />
    );
  },
);
