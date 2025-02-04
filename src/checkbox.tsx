import React, { ReactNode } from 'react';
import {
  CheckboxRenderProps,
  composeRenderProps,
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACCheckboxGroupProps,
  CheckboxProps as RACCheckboxProps,
} from 'react-aria-components';
import { groupBox } from './utils';
import { twMerge } from 'tailwind-merge';
import { DescriptionContext, DescriptionProvider } from './field';
import { CheckIcon, MinusIcon } from './icons';

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, 'children'> {
  children?: ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

export function CheckboxGroup({
  orientation = 'vertical',
  ...props
}: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      data-orientation={orientation}
      className={composeRenderProps(props.className, (className) => {
        return twMerge(groupBox, className);
      })}
    />
  );
}

export function Checkboxes({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex flex-col',
        'group-data-[orientation=horizontal]:flex-row',
        'group-data-[orientation=horizontal]:flex-wrap',
        '[&_label]:has-[[data-ui=description]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          'group flex flex-col gap-y-1',
          '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-label-placement=start]]:pe-16',
          '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-label-placement=end]]:ps-7',
          '[&_label]:has-[[data-ui=description]]:font-medium',
          '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface CheckboxProps extends RACCheckboxProps {
  labelPlacement?: 'start' | 'end';
  render?: never;
}

export interface CustomRenderCheckboxProps
  extends Omit<RACCheckboxProps, 'children'> {
  render:
    | React.ReactElement
    | ((props: CheckboxRenderProps) => React.ReactNode);
  children?: never;
}

export function Checkbox(props: CheckboxProps | CustomRenderCheckboxProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    const { render, ...restProps } = props;

    return (
      <RACCheckbox
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeRenderProps(
          props.className,
          (className, renderProps) =>
            twMerge([
              'group',
              'text-base/6 sm:text-sm/6',
              renderProps.isDisabled && 'opacity-50',
              className,
            ]),
        )}
      >
        {render}
      </RACCheckbox>
    );
  }

  const { labelPlacement = 'end', ...restProps } = props;

  return (
    <RACCheckbox
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-label-placement={labelPlacement}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'group flex items-center text-base/6 group-data-[orientation=horizontal]:text-nowrap sm:text-sm/6',
            labelPlacement === 'start' && 'flex-row-reverse justify-between',
            renderProps.isDisabled && 'opacity-50',
            className,
          );
        },
      )}
    >
      {(renderProps) => {
        return (
          <>
            <div
              className={twMerge([
                'flex shrink-0 items-center justify-center rounded',
                'size-[1.125rem] sm:size-4',
                'border border-zinc-400/75 dark:border-[1.5px] dark:border-zinc-600',
                labelPlacement === 'end' ? 'me-3' : 'ms-3',
                renderProps.isReadOnly && 'opacity-50',
                renderProps.isInvalid &&
                  'border-destructive dark:border-destructive',
                (renderProps.isSelected || renderProps.isIndeterminate) &&
                  'border border-accent bg-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:border-0 dark:border-accent',
                renderProps.isFocusVisible &&
                  'outline-ring outline outline-2 outline-offset-2',
              ])}
            >
              {renderProps.isIndeterminate ? (
                <MinusIcon className="size-4 text-white sm:size-3.5" />
              ) : renderProps.isSelected ? (
                <CheckIcon className="size-4 text-white sm:size-3.5" />
              ) : null}
            </div>

            {typeof props.children === 'function'
              ? props.children(renderProps)
              : props.children}
          </>
        );
      }}
    </RACCheckbox>
  );
}
