import React from 'react';
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
  ProgressBarRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';
import { twMerge } from 'tailwind-merge';

const BarContext = React.createContext<ProgressBarRenderProps | null>(null);

export function ProgressBar({ children, ...props }: AriaProgressBarProps) {
  return (
    <AriaProgressBar
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-1',
      )}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <BarContext.Provider value={{ percentage, valueText, isIndeterminate }}>
          {typeof children === 'function'
            ? children({
                isIndeterminate,
                percentage,
                valueText,
                defaultChildren: undefined,
              })
            : children}
        </BarContext.Provider>
      )}
    </AriaProgressBar>
  );
}

export function BarValueText({
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>) {
  const { valueText } = React.useContext(BarContext)!;
  return (
    <span {...props} className={twMerge('text-muted text-sm', className)}>
      {valueText}
    </span>
  );
}

export function Bar({
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
  const { isIndeterminate, percentage } = React.useContext(BarContext)!;

  return (
    <div
      {...props}
      className={twMerge(
        'relative h-2 w-64 overflow-hidden rounded-full bg-gray-300 outline -outline-offset-1 outline-transparent dark:bg-zinc-700',
        className,
      )}
    >
      <div
        data-ui="progress-bar-fill"
        className={`bg-accent absolute top-0 h-full rounded-full ${isIndeterminate ? 'animate-in slide-in-from-left-[20rem] repeat-infinite left-full duration-1000 ease-out' : 'left-0'}`}
        style={{ width: (isIndeterminate ? 40 : percentage) + '%' }}
      />
    </div>
  );
}
