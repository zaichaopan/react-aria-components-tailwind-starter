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
  variant?: 'checkbox' | 'card' | 'button';
  labelPlacement?: 'start' | 'end';
}

type CheckBoxGroupVariant = Pick<
  CheckboxGroupProps,
  'orientation' | 'variant' | 'labelPlacement'
>;

const CheckboxVariantContext = React.createContext<CheckBoxGroupVariant | null>(
  null,
);

const useCheckboxGroupVariantContext = () => {
  const {
    labelPlacement = 'end',
    orientation = 'vertical',
    variant = 'checkbox',
  } = React.useContext(CheckboxVariantContext) ?? {};

  return {
    labelPlacement,
    orientation,
    variant,
  };
};

export function CheckboxGroup({
  orientation = 'vertical',
  variant = 'checkbox',
  labelPlacement = 'end',
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxVariantContext.Provider
      value={{ variant, orientation, labelPlacement }}
    >
      <RACCheckboxGroup
        {...props}
        className={composeRenderProps(props.className, (className) => {
          return twMerge(groupBox, className);
        })}
      />
    </CheckboxVariantContext.Provider>
  );
}

export function Checkboxes({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  const { orientation } = useCheckboxGroupVariantContext();
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex flex-col',
        orientation === 'horizontal' && [
          'flex-row flex-wrap',
          'gap-x-4 gap-y-2',
          'has([data-ui=description]):not([class*=gap-y])]:gap-y-4',
        ],
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

interface CheckboxProps extends RACCheckboxProps {
  render?: never;
  labelPlacement?: CheckboxGroupProps['labelPlacement'];
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
  const { labelPlacement, orientation } = useCheckboxGroupVariantContext();

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

  const { labelPlacement: itemLabelPlacement, ...restProps } = props;
  const placement = itemLabelPlacement ?? labelPlacement;

  return (
    <RACCheckbox
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-label-placement={labelPlacement}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'group flex items-center text-base/6 sm:text-sm/6',
            orientation === 'horizontal' && ['text-nowrap'],
            placement === 'start' && 'flex-row-reverse justify-between',
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
              renderProps={renderProps}
              className={twMerge(
                placement === 'end' ? 'me-3' : 'ms-3',
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

type BoxProps = {
  renderProps?: Partial<CheckboxRenderProps>;
} & Omit<React.JSX.IntrinsicElements['div'], 'children'>;

export function CheckToggle({ renderProps, className, ...props }: BoxProps) {
  return (
    <div
      {...props}
      data-check-indicator
      className={twMerge([
        'size-4',
        'flex shrink-0 items-center justify-center rounded-sm shadow ring ring-zinc-950/15 dark:ring-white/20',
        renderProps?.isReadOnly
          ? 'opacity-50'
          : renderProps?.isHovered && 'ring-zinc-950/25 dark:ring-white/25',
        renderProps?.isSelected || renderProps?.isIndeterminate
          ? 'ring-accent bg-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:ring-0'
          : 'dark:bg-white/5 dark:[--contract:1.05]',

        renderProps?.isInvalid && 'ring-red-600 dark:ring-red-600',
        renderProps?.isFocusVisible &&
          'outline-ring outline-2 outline-offset-3',

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
          renderProps?.isSelected && !renderProps.isIndeterminate && 'inline',
          'in-[&[data-ui=content][data-selected=true]]:inline',
        )}
      />

      <MinusIcon
        className={twMerge(
          'hidden size-4 text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
          renderProps?.isIndeterminate && 'inline',
        )}
      />
    </div>
  );
}
