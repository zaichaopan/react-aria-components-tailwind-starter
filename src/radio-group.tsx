import React from 'react';
import {
  composeRenderProps,
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps as RACRadioProps,
  RadioRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { DescriptionContext, DescriptionProvider } from './field';
import { composeTailwindRenderProps, groupBox } from './utils';

export function RadioGroup(props: RACRadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(props.className, groupBox)}
    />
  );
}

export function Radios({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex',
        'flex-col',
        'group-aria-[orientation=horizontal]:flex-row',
        'group-aria-[orientation=horizontal]:flex-wrap',
        // When any radio item has description, apply all `font-medium` to all radio item labels
        'has-data-[ui=description]:[&_label]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

export function RadioField({
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
          'has-data-[label-placement=start]:[&_label]:justify-between',
          'has-[label[data-label-placement=start]]:[&_[data-ui=description]:not([class*=pe-])]:pe-16',
          'has-[label[data-label-placement=end]]:[&_[data-ui=description]:not([class*=ps-])]:ps-7',
          'has-[label[data-disabled]]:**:data-[ui=description]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

export interface RadioProps extends RACRadioProps {
  labelPlacement?: 'start' | 'end';
  render?: never;
}

export interface CustomRenderRadioProps
  extends Omit<RACRadioProps, 'children'> {
  render: React.ReactElement | ((props: RadioRenderProps) => React.ReactNode);
  children?: never;
}

export function Radio(props: RadioProps | CustomRenderRadioProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    const { render, ...restProps } = props;

    return (
      <RACRadio
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeRenderProps(
          props.className,
          (className, { isDisabled }) =>
            twMerge(
              'group text-base/6 sm:text-sm/6',
              isDisabled && 'opacity-50',
              className,
            ),
        )}
      >
        {render}
      </RACRadio>
    );
  }

  const { labelPlacement = 'end', ...restProps } = props;

  return (
    <RACRadio
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-label-placement={labelPlacement}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) =>
          twMerge(
            'group flex items-center text-base/6 sm:text-sm/6',
            'group-aria-[orientation=horizontal]:text-nowrap',
            labelPlacement === 'start' && 'flex-row-reverse justify-between',
            isDisabled && 'opacity-50',
            className,
          ),
      )}
    >
      {(renderProps) => {
        return (
          <>
            <div
              slot="radio"
              className={twMerge(
                'border border-[lch(from_var(--color-border)_calc(l*var(--contrast))_c_h)] [--contrast:0.9] dark:[--contrast:1.35]',
                'grid size-4 shrink-0 place-content-center rounded-full',
                labelPlacement === 'end' ? 'me-3' : 'ms-3',
                renderProps.isReadOnly && 'opacity-50',
                renderProps.isInvalid &&
                  'border-destructive dark:border-destructive',
                renderProps.isSelected && 'border-accent bg-accent',
                renderProps.isFocusVisible &&
                  'outline-ring outline outline-2 outline-offset-2',
              )}
            >
              <div
                className={twMerge(
                  'rounded-full',
                  renderProps.isSelected && 'size-1.5 bg-white',
                )}
              ></div>
            </div>

            {typeof props.children === 'function'
              ? props.children(renderProps)
              : props.children}
          </>
        );
      }}
    </RACRadio>
  );
}
