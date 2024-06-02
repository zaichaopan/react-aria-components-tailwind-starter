import React from 'react';
import { Check, Minus } from 'lucide-react';
import { ReactNode } from 'react';
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACCheckboxGroupProps,
  CheckboxProps as RACCheckboxProps,
  CheckboxRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import {
  DescriptionProvider,
  WithDescriptionContext,
} from './Field';

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, 'children'> {
  children?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export function CheckboxGroup({
  orientation = 'vertical',
  ...props
}: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1',
      )}
    >
      {props.children}
    </RACCheckboxGroup>
  );
}

export function CheckboxGroupContent({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={twMerge(
        'flex gap-3 group-orientation-vertical:flex-col ',
        className,
      )}
      {...props}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        className={twMerge(
          'group flex flex-col gap-y-1',
          '[&_[slot=description]]',
          'sm:[&_[slot=description]]:has-[label[data-label-position=left]]:pr-7',
          'sm:[&_[slot=description]]:has-[label[data-label-position=right]]:pl-7',
          '[&_label]:has-[[data-label-position=left]]:justify-between',
          '[&_label]:has-[[slot=description]]:font-medium',
          'has-[label[data-disabled]]:opacity-50',
          className,
        )}
        {...props}
      />
    </DescriptionProvider>
  );
}

interface CheckboxProps extends Omit<RACCheckboxProps, 'children'> {
  children:
    | React.ReactNode
    | ((renderProps: CheckboxRenderProps) => React.ReactNode);
  labelPosition?: 'left' | 'right';
}

export function Checkbox({
  labelPosition = 'right',
  children,
  ...props
}: CheckboxProps) {
  return (
    <WithDescriptionContext>
      {(context) => {
        return (
          <RACCheckbox
            aria-describedby={context?.['aria-describedby']}
            {...props}
            data-label-position={labelPosition}
            className={composeTailwindRenderProps(
              props.className,
              'group flex items-center gap-3 text-base/6 transition sm:text-sm/6',
            )}
          >
            {({ isSelected, isIndeterminate, ...renderProps }) => (
              <>
                {labelPosition === 'left' &&
                  (typeof children === 'function'
                    ? children({
                        isSelected,
                        isIndeterminate,
                        ...renderProps,
                      })
                    : children)}
                <div
                  className={twMerge([
                    'flex flex-shrink-0 items-center justify-center',
                    'size-4 rounded border border-zinc-400/75 shadow-sm transition',
                    'dark:border-[1.5px] dark:border-zinc-600',
                    'invalid:border-destructive',
                    (isSelected || isIndeterminate) &&
                      'border-accent bg-accent/95 dark:border-accent',
                    renderProps.isFocusVisible && focusOutlineStyle,
                  ])}
                >
                  {isIndeterminate ? (
                    <Minus aria-hidden className="h-4 w-4 text-white" />
                  ) : isSelected ? (
                    <Check aria-hidden className="h-4 w-4 text-white" />
                  ) : null}
                </div>

                {labelPosition === 'right' &&
                  (typeof children === 'function'
                    ? children({
                        isSelected,
                        isIndeterminate,
                        ...renderProps,
                      })
                    : children)}
              </>
            )}
          </RACCheckbox>
        );
      }}
    </WithDescriptionContext>
  );
}
