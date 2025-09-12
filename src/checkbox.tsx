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
import { MinusIcon } from './icons/outline/minus';
import { CheckIcon } from './icons/outline/check';

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
        'has-data-[ui=description]:[&_label]:font-medium',
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
          'has-[label[data-label-placement=start]]:[&_[data-ui=description]:not([class*=pe-])]:pe-16',
          'has-[label[data-label-placement=end]]:[&_[data-ui=description]:not([class*=ps-])]:ps-7',
          'has-data-[ui=description]:[&_label]:font-medium',
          'has-[label[data-disabled]]:**:data-[ui=description]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

type LabelPlacement = 'start' | 'end';

interface CheckboxProps extends RACCheckboxProps {
  labelPlacement?: LabelPlacement;
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
          (className, renderProps) => {
            return twMerge([
              'group',
              'text-base/6 sm:text-sm/6',
              renderProps.isDisabled && 'opacity-50',
              renderProps.isFocusVisible &&
                'outline-ring flex outline-2 outline-offset-3',
              className,
            ]);
          },
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
            <CheckToggle
              {...renderProps}
              className={twMerge(
                labelPlacement === 'end' ? 'me-3' : 'ms-3',
                'size-4.5 sm:size-4',
              )}
            />

            {typeof props.children === 'function'
              ? props.children(renderProps)
              : props.children}
          </>
        );
      }}
    </RACCheckbox>
  );
}

type BoxProps = Partial<CheckboxRenderProps> &
  Omit<React.JSX.IntrinsicElements['div'], 'children'>;

export function CheckToggle({
  isReadOnly,
  isHovered,
  isSelected,
  isIndeterminate,
  isInvalid,
  isFocusVisible,
  className,
  ...props
}: BoxProps) {
  return (
    <div
      {...props}
      data-check-indicator
      className={twMerge([
        'size-4',
        'flex shrink-0 items-center justify-center rounded-sm shadow ring ring-zinc-950/15 dark:ring-white/20',
        isReadOnly
          ? 'opacity-50'
          : isHovered && 'ring-zinc-950/25 dark:ring-white/25',
        isSelected || isIndeterminate
          ? 'ring-accent bg-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:ring-0'
          : 'dark:bg-white/5 dark:[--contract:1.05]',

        isInvalid && 'ring-red-600 dark:ring-red-600',
        isFocusVisible && 'outline-ring outline-2 outline-offset-3',

        // when used in menu item as the selected indicator
        'in-[&[data-ui=content][data-hovered=true]]:ring-zinc-950/25',
        'in-[&[data-ui=content][data-hovered=true]]:dark:ring-white/25',
        'in-[&[data-ui=content][data-selected=true]]:ring-accent',
        'in-[&[data-ui=content][data-selected=true]]:dark:ring-0',
        'in-[&[data-ui=content][data-selected=true]]:bg-accent',
        'in-[&[data-ui=content][data-selected=true]]:dark:bg-accent',
        'in-[&[data-ui=content][data-selected=true]]:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',

        className,
      ])}
    >
      <CheckIcon
        className={twMerge(
          'hidden size-4 text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
          isSelected && !isIndeterminate && 'inline',
          'in-[&[data-ui=content][data-selected=true]]:inline',
        )}
      />

      <MinusIcon
        className={twMerge(
          'hidden size-4 text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
          isIndeterminate && 'inline',
        )}
      />
    </div>
  );
}
