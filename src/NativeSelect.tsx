import React from 'react';
import { useFocusRing } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import { inputRingStyle } from '../src/utils';
import { LabelContext } from 'react-aria-components';
import {
  DescriptionProvider,
  WithDescriptionContext,
  WithLabelContext,
} from './Field';

export function NativeSelectField({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId }}>
      <DescriptionProvider>
        <div
          className={twMerge(
            'has-[:disabled]:opacity-50, group flex flex-col gap-1',
            'has-[select:disabled]:opacity-50',
            className,
          )}
          {...props}
        />
      </DescriptionProvider>
    </LabelContext.Provider>
  );
}

export function NativeSelect({
  className,
  ...props
}: JSX.IntrinsicElements['select']) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <WithLabelContext>
      {(labelContext) => {
        return (
          <WithDescriptionContext>
            {(descriptionContext) => {
              return (
                <div
                  className={twMerge(
                    'relative flex',
                    'transition',
                    'w-full min-w-[150px]',
                    "before:pointer-events-none before:absolute before:right-2 before:top-[45%] before:size-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border-l before:border-t before:border-muted before:content-['']",
                    "after:pointer-events-none after:absolute after:bottom-[45%] after:right-2 after:size-[5px] after:-translate-x-1/2 after:translate-y-1/2 after:rotate-45  after:border-b after:border-r after:border-muted after:content-['']",
                    className,
                  )}
                >
                  <select
                    {...focusProps}
                    aria-labelledby={labelContext?.['aria-labelledBy']}
                    aria-describedby={descriptionContext?.['aria-describedby']}
                    className={twMerge(
                      'appearance-none bg-transparent py-1.5 pl-3 pr-8 text-base/6 outline-none sm:text-sm/6',
                      'min-h-9 w-full cursor-default items-center rounded-md border shadow-sm outline-none',
                      isFocusVisible && inputRingStyle,
                    )}
                    {...props}
                  />
                </div>
              );
            }}
          </WithDescriptionContext>
        );
      }}
    </WithLabelContext>
  );
}
