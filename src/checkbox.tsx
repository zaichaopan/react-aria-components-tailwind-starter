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

type CheckboxGroupVariant = {
  orientation?: 'vertical' | 'horizontal';
  labelPlacement?: 'start' | 'end';
} & (
  | { variant?: 'card'; compact?: true }
  | { variant?: 'checkbox'; compact?: never }
);

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, 'children'> {
  children?: ReactNode;
  orientation?: CheckboxGroupVariant['orientation'];
  variant?: CheckboxGroupVariant['variant'];
  labelPlacement?: CheckboxGroupVariant['labelPlacement'];
  compact?: CheckboxGroupVariant['compact'];
}

const CheckboxGroupVariantContext = React.createContext<CheckboxGroupVariant>({
  labelPlacement: 'end',
  orientation: 'vertical',
  variant: 'checkbox',
});

export function CheckboxGroup({
  orientation = 'vertical',
  variant = 'checkbox',
  labelPlacement = 'end',
  compact,
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupVariantContext.Provider
      value={
        variant === 'card'
          ? {
              variant,
              orientation,
              labelPlacement,
              compact,
            }
          : {
              variant,
              orientation,
              labelPlacement,
            }
      }
    >
      <RACCheckboxGroup
        {...props}
        className={composeRenderProps(props.className, (className) => {
          return twMerge(groupBox, className);
        })}
      />
    </CheckboxGroupVariantContext.Provider>
  );
}

export function Checkboxes({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  const { orientation, compact, variant } = React.useContext(
    CheckboxGroupVariantContext,
  );

  return (
    <div
      data-ui="box"
      className={twMerge(
        'isolate',
        'flex flex-col',
        'gap-y-3',
        'has-data-[ui=description]:gap-y-4',
        'has-data-[ui=description]:[&_label]:font-medium',
        orientation === 'horizontal' && [
          'flex-row flex-wrap',
          'gap-x-4 gap-y-2',
        ],
        variant === 'card' && [
          orientation === 'horizontal' && [
            compact ? 'flex-row flex-nowrap' : 'flex-col sm:flex-row',
          ],
          compact ? 'gap-x-0 gap-y-0' : 'gap-x-6, gap-y-2.5',
        ],
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

interface BasicCheckboxProps extends RACCheckboxProps {
  render?: never;
  check?:
    | React.ReactElement
    | null
    | ((props: Partial<CheckboxRenderProps>) => React.ReactNode);
  labelPlacement?: CheckboxGroupProps['labelPlacement'];
}

export interface CustomRenderCheckboxProps
  extends Omit<RACCheckboxProps, 'children'> {
  render:
    | React.ReactElement
    | ((props: CheckboxRenderProps) => React.ReactNode);
  check?: never;
  children?: never;
}

type CheckboxProps = BasicCheckboxProps | CustomRenderCheckboxProps;

function getCheckboxStyle({
  isSelected,
  variant,
  orientation = 'vertical',
  isHovered,
  compact,
}: Partial<CheckboxRenderProps> & {
  variant: CheckboxGroupVariant['variant'];
  orientation?: CheckboxGroupVariant['orientation'];
  compact?: boolean;
}) {
  const style = {
    checkbox: [],
    card: [
      'text-wrap text-balance flex-1 rounded-lg px-4 py-3 items-start',
      '[&>[data-check-indicator]:not([class*=mt-])]:mt-1',
      '[&_[data-ui=icon]:not([class*=size-])]:w-4 [&_[data-ui=icon]:not([class*=size-])]:h-[1lh]',
      'ring ring-border',
      isHovered && !isSelected && 'bg-zinc-50 dark:bg-zinc-800/75',
      '[&_[data-ui=icon]:not([class*=text-])]:text-muted',
      isSelected && [
        '[&_[data-ui=icon]:not([class*=text-])]:text-accent',
        'bg-[color-mix(in_oklab,_var(--accent)_5%,_white)]',
        'dark:bg-[color-mix(in_oklab,_var(--accent)_25%,_black)] border-accent/50',
      ],
      compact
        ? [
            '[&:not(:first-child):not(:last-child)]:rounded-none',
            orientation === 'horizontal' && [
              'first:rounded-e-none',
              'last:rounded-s-none',
              'not-first:ms-px',
            ],

            orientation === 'vertical' && [
              'first:rounded-b-none',
              'last:rounded-t-none',
              'not-first:mt-px',
            ],

            isSelected && [
              'ring-accent/75 dark:ring-ring/50 z-10',
              'bg-[color-mix(in_oklab,_var(--accent)_5%,_white)]',
              'dark:bg-[color-mix(in_oklab,_var(--accent)_25%,_black)] border-accent/50',
            ],
          ]
        : [
            isSelected && ['ring-ring dark:ring-ring/50', 'ring-inset'],
            !isSelected &&
              isHovered && [
                'ring-[oklch(from_var(--border)_calc(l*0.95)_c_h)]  dark:ring-[oklch(from_var(--border)_calc(l*1.2)_c_h)]',
              ],
          ],
    ],
  };

  return style[variant ?? 'checkbox'];
}

export function Checkbox(props: CheckboxProps) {
  const descriptionContext = React.useContext(DescriptionContext);
  const { labelPlacement, orientation, variant, compact } = React.useContext(
    CheckboxGroupVariantContext,
  );

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

              getCheckboxStyle({
                variant: variant,
                orientation,
                compact,
                ...renderProps,
              }),
              className,
            ]);
          },
        )}
      >
        {render}
      </RACCheckbox>
    );
  }

  const { labelPlacement: itemLabelPlacement, check, ...restProps } = props;
  const placement = itemLabelPlacement ?? labelPlacement;
  const noCheckToggle = check === null;

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
            noCheckToggle && [
              renderProps.isFocusVisible &&
                'outline-(var(--checkbox,--ring)) outline-2 outline-offset-2',
            ],
            getCheckboxStyle({
              variant,
              orientation,
              compact,
              ...renderProps,
            }),
            className,
          );
        },
      )}
    >
      {(renderProps) => {
        return (
          <>
            {!noCheckToggle && (
              <CheckToggle
                check={check}
                renderProps={renderProps}
                className={twMerge(placement === 'end' ? 'me-3' : 'ms-3')}
              />
            )}

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
  check?: Exclude<CheckboxProps['check'], null>;
  renderProps?: Partial<CheckboxRenderProps>;
} & Omit<React.JSX.IntrinsicElements['div'], 'children'>;

export function CheckToggle({
  check,
  renderProps,
  className,
  ...props
}: BoxProps) {
  return (
    <div
      {...props}
      data-check-indicator
      className={twMerge([
        '[--__checkbox:var(--checkbox,var(--accent))]',
        '[--__checkbox-size:var(--checkbox-size,max(--spacing(4),--spacing(4.5)))]',
        'sm:[--__checkbox-size:var(--checkbox-size,--spacing(4))]',

        'size-(--__checkbox-size)',

        'flex shrink-0 items-center justify-center rounded-sm shadow',

        '[----check:lch(from_var(--__checkbox)_calc((64.28_-_l)_*_infinity)_0_0)]',
        '[--checkbox-focus-ring:color-mix(in_oklab,_var(--__checkbox)_65%,_var(----check))]',

        // Readonly
        'in-[&:is([data-ui=content],label)[data-readonly=true]]:opacity-50',

        // Focus visible
        'in-[&:is([data-ui=content],label)[data-focus-visible=true]]:outline-(--checkbox-focus-ring)',
        'in-[&:is([data-ui=content],label)[data-focus-visible=true]]:outline-2',
        'in-[&:is([data-ui=content],label)[data-focus-visible=true]]:outline-offset-3',

        renderProps?.isInvalid && 'ring-red-600 dark:ring-red-600',

        'ring-1',
        'ring-(--checkbox-ring)',
        '[--checkbox-ring:var(--color-zinc-400)]/50',
        'dark:[--checkbox-ring:white]/20',

        // Hover
        'in-[&:is([data-ui=content],label)[data-hovered=true]]:[--checkbox-ring:var(--color-zinc-400)]/75',
        'dark:in-[&:is([data-ui=content],label)[data-hovered=true]]:[--checkbox-ring:white]/30',

        // Selected
        'in-[&:is([data-ui=content],label)[data-selected=true]]:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]',
        'in-[&:is([data-ui=content],label)[data-selected=true]]:[--checkbox-ring:color-mix(in_oklab,_var(--__checkbox)_90%,_black)]',
        // 'in-[&:is([data-ui=content],label)[data-selected=true]]:ring-(--checkbox-ring)',
        'dark:in-[&:is([data-ui=content],label)[data-selected=true]]:ring-transparent',
        'in-[&:is([data-ui=content],label)[data-selected=true]]:bg-(--__checkbox)',

        className,
      ])}
    >
      {check && renderProps ? (
        typeof check === 'function' ? (
          check(renderProps)
        ) : (
          check
        )
      ) : (
        <>
          <CheckIcon
            className={twMerge(
              'size-(--__checkbox-size)',
              'hidden text-(----check)',
              renderProps?.isSelected &&
                !renderProps.isIndeterminate &&
                'inline',
              'in-[&[data-ui=content][data-selected=true]]:inline',
            )}
          />

          <MinusIcon
            className={twMerge(
              'size-(--__checkbox-size)',
              'hidden text-(----check)',
              renderProps?.isIndeterminate && 'inline',
            )}
          />
        </>
      )}
    </div>
  );
}
