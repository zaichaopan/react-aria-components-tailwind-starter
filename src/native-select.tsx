import React from 'react';
import { useFocusRing } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import {inputField } from './utils';
import { DescriptionContext, DescriptionProvider } from './field';
import { LabelContext } from 'react-aria-components';
import { Icon } from './icon';
import { ChevronDownIcon } from './icons';

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
  plain,
  ...props
}: React.JSX.IntrinsicElements['select'] & {
  plain?: boolean;
}) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const labelContext = (React.useContext(LabelContext) ?? {}) as {
    id?: string;
  };
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <div
      data-ui="control"
      className={twMerge('group relative isolate flex transition')}
    >
      <select
        {...focusProps}
        aria-labelledby={labelContext.id}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={twMerge(
          'w-full min-w-36',
          'appearance-none bg-transparent',
          'ps-3 pe-8',
          'py-[calc(--spacing(2.5)-1px)]',
          'sm:py-[calc(--spacing(1.5)-1px)]',
          'rounded-md border outline-hidden',
          'text-base/6 sm:text-sm/6',
          'hover:bg-zinc-100 dark:hover:bg-zinc-800',
          isFocusVisible && 'border-ring ring-ring ring-1',
          className,
        )}
        {...props}
      />
      <Icon className="group-[&:not(:hover)]:text-muted absolute end-0 end-2.5 bottom-1/2 size-5 translate-y-1/2 sm:size-4 rtl:translate-x-1.5">
        <ChevronDownIcon />
      </Icon>
    </div>
  );
}
