import React from 'react';
import { useFocusRing } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import { inputField } from './utils';
import { DescriptionContext, DescriptionProvider } from './field';
import { LabelContext } from 'react-aria-components';

export function NativeSelectField({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: 'span' }}>
      <DescriptionProvider>
        <div
          {...props}
          data-ui="native-select-field"
          className={twMerge(
            'has-[select:disabled]:opacity-50',
            inputField,
            className,
          )}
        />
      </DescriptionProvider>
    </LabelContext.Provider>
  );
}

export function NativeSelect({
  className,
  ...props
}: React.JSX.IntrinsicElements['select']) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const labelContext = (React.useContext(LabelContext) ?? {}) as {
    id?: string;
  };
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <div
      data-ui="control"
      className={twMerge(
        'group relative isolate flex transition',
        'after:pointer-events-none',
        'after:absolute',
        'after:border-muted',
        "after:content-['']",
        'after:size-2 sm:after:size-1.5',
        'after:border-r-[1.5px] after:border-b-[1.5px]',
        'after:end-3 after:bottom-[55%] after:-translate-x-1/2 after:translate-y-1/2 after:rotate-45 rtl:after:translate-x-1.5',
      )}
    >
      <select
        {...focusProps}
        data-focus-visible={isFocusVisible ? '' : undefined}
        aria-labelledby={labelContext.id}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={twMerge(
          'rounded-md text-base/6 shadow-sm outline-none sm:text-sm/6 dark:shadow-none',
          'flex-1 appearance-none bg-transparent',
          'py-2.5 ps-2.5 pe-8 sm:py-1.5',
          'ring ring-zinc-950/10 dark:ring-white/10',
          isFocusVisible
            ? 'ring-ring dark:ring-ring ring-2'
            : ['[&:not([disabled])]:hover:ring-zinc-950/20 dark:[&:not([disabled])]:hover:ring-white/20'],
          className,
        )}
        {...props}
      />
    </div>
  );
}
