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

type RadioGroupVariant = {
  orientation?: 'vertical' | 'horizontal';
  labelPlacement?: 'start' | 'end';
} & (
  | {
      variant?: 'card';
      compact?: true;
    }
  | {
      variant?: 'radio' | 'segment';
      compact?: never;
    }
);

const RadioGroupVariantContext = React.createContext<RadioGroupVariant>({
  labelPlacement: 'end',
  orientation: 'vertical',
  variant: 'radio',
});

const useRadioGroupVariantContext = () => {
  return React.useContext(RadioGroupVariantContext) ?? {};
};

export function RadioGroup({
  children,
  variant = 'radio',
  orientation,
  labelPlacement = 'end',
  compact,
  ...props
}: RACRadioGroupProps & Exclude<RadioGroupVariant, 'variant'>) {
  if (variant === 'segment') {
    orientation = orientation ?? 'horizontal';
  }

  return (
    <RadioGroupVariantContext.Provider
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
      <RACRadioGroup
        {...props}
        orientation={orientation}
        className={composeTailwindRenderProps(props.className, [
          groupBox,
          variant === 'segment' && [
            orientation === 'vertical' && ['items-start'],
            '[--segment-padding:--spacing(0.5)]',
            '[--segment-radius:var(--radius-lg)]',
          ],
        ])}
      >
        {children}
      </RACRadioGroup>
    </RadioGroupVariantContext.Provider>
  );
}

export function Radios({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  const { variant, orientation, compact } = useRadioGroupVariantContext();

  return (
    <div
      data-ui="box"
      className={twMerge(
        'isolate',
        'flex',
        'flex-col',
        'gap-y-3',
        'has-data-[ui=description]:gap-y-4',
        'has-data-[ui=description]:[&_label]:font-medium',
        orientation === 'horizontal' && ['flex-row flex-wrap gap-x-4 gap-y-2'],
        variant === 'card' && [
          compact ? ['gap-x-0 gap-y-0'] : ['gap-x-6, gap-y-2.5'],

          orientation === 'horizontal' && [
            compact ? 'flex-row flex-nowrap' : 'flex-col sm:flex-row',
          ],
        ],
        variant === 'segment' && [
          'bg-zinc-100 p-0.5 dark:bg-zinc-800',
          'rounded-(--segment-radius)',
          orientation === 'horizontal' && ['min-w-sm'],
        ],
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
  const { labelPlacement } = useRadioGroupVariantContext();

  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          'group flex flex-col gap-y-1 has-[label[data-disabled]]:**:data-[ui=description]:opacity-50',
          labelPlacement === 'start' && [
            '[&_[data-ui=description]:not([class*=pe-])]:pe-16 [&_label]:justify-between',
          ],
          labelPlacement === 'end' && [
            '[&_[data-ui=description]:not([class*=ps-])]:ps-7',
          ],
          className,
        )}
      />
    </DescriptionProvider>
  );
}

export interface RadioProps extends RACRadioProps {
  radio?:
    | React.ReactElement
    | null
    | ((props: Partial<RadioRenderProps>) => React.ReactNode);
  render?: never;
}

export interface CustomRenderRadioProps
  extends Omit<RACRadioProps, 'children'> {
  render:
    | string
    | React.ReactElement
    | ((props: RadioRenderProps) => React.ReactNode);
  radio?: never;
  children?: never;
}

function getRadioStyle({
  isSelected,
  isHovered,
  variant,
  orientation = 'vertical',
  compact,
}: Partial<RadioRenderProps> & {
  variant: RadioGroupVariant['variant'];
  orientation?: RadioGroupVariant['orientation'];
  compact?: boolean;
}) {
  const style = {
    radio: [],
    card: [
      'text-wrap text-balance flex-1 rounded-lg px-4 py-3 items-start [&>[data-slot=radio]:not([class*=mt-])]:mt-1.5',
      '[&_[data-ui=icon]:not([class*=size-])]:w-4',
      '[&_[data-ui=icon]:not([class*=size-])]:h-[1lh]',
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
    segment: [
      'flex',
      'justify-center',
      'items-center',
      'flex-1 text-center font-medium rounded-[calc(var(--segment-radius)-var(--segment-padding))]',
      'transition-all ease-in-out',

      isSelected && [
        'bg-white dark:bg-zinc-700/80',
        'shadow-sm dark:shadow-none',
        'ring ring-zinc-950/10',
      ],

      !isSelected && !isHovered && ['text-muted'],

      '[&_[data-ui=icon]:not([class*=size-])]:size-4',
      orientation === 'horizontal' && ['px-4 py-1'],
      orientation === 'vertical' && ['p-2'],
    ],
  };

  return style[variant ?? 'radio'];
}

export function Radio(props: RadioProps | CustomRenderRadioProps) {
  const descriptionContext = React.useContext(DescriptionContext);
  const { variant, compact, orientation, labelPlacement } =
    useRadioGroupVariantContext();

  if (props.render !== undefined) {
    const { render, radio, ...restProps } = props;

    return (
      <RACRadio
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeRenderProps(
          props.className,
          (className, renderProps) =>
            twMerge(
              renderProps.isDisabled && 'opacity-50',
              renderProps.isFocusVisible &&
                'outline-ring outline-2 outline-offset-3',
              'group text-base/6 sm:text-sm/6',

              getRadioStyle({ variant, orientation, compact, ...renderProps }),
              className,
            ),
        )}
      >
        {render}
      </RACRadio>
    );
  }

  const { radio, ...restProps } = props;
  const noRadioToggle = radio === null;

  return (
    <RACRadio
      {...restProps}
      data-ui="radio-label"
      aria-describedby={descriptionContext?.['aria-describedby']}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge(
          'group flex items-center text-base/6 sm:text-sm/6',
          orientation === 'horizontal' && 'text-nowrap',
          labelPlacement === 'start' && 'flex-row-reverse justify-between',
          renderProps.isDisabled && 'opacity-50',
          noRadioToggle && [
            renderProps.isFocusVisible &&
              'outline-ring outline-2 outline-offset-2',
          ],
          getRadioStyle({ variant, orientation, compact, ...renderProps }),
          className,
        ),
      )}
    >
      {(renderProps) => {
        return (
          <>
            {!noRadioToggle && (
              <RadioToggle
                data-slot="radio"
                radio={radio}
                renderProps={renderProps}
                className={twMerge(
                  labelPlacement === 'end' ? 'me-3' : 'ms-3',
                  !radio && 'size-4.5 sm:size-4',
                )}
              />
            )}

            {typeof props.children === 'function'
              ? props.children(renderProps)
              : props.children}
          </>
        );
      }}
    </RACRadio>
  );
}

type RadioBoxProps = Partial<RadioRenderProps> & {
  radio?: RadioProps['radio'];
  renderProps?: Partial<RadioRenderProps>;
} & Omit<React.JSX.IntrinsicElements['div'], 'children'>;

export function RadioToggle({
  radio,
  renderProps,
  className,
  ...props
}: RadioBoxProps) {
  return (
    <div
      {...props}
      data-check-indicator
      className={twMerge(
        'grid shrink-0 place-content-center rounded-full shadow-sm ring ring-zinc-950/15 dark:shadow-none dark:ring-white/20',
        radio ? '' : 'size-4',

        renderProps?.isReadOnly
          ? 'opacity-50'
          : renderProps?.isHovered && 'ring-zinc-950/25 dark:ring-white/25',
        renderProps?.isSelected
          ? 'bg-accent ring-accent dark:ring-accent'
          : 'dark:bg-white/5 dark:[--contract:1.1]',

        // When it is inside menu item and the item is selected
        'in-[&[data-ui=content][data-hovered=true]]:ring-zinc-950/25',
        'in-[&[data-ui=content][data-hovered=true]]:dark:ring-white/25',

        'in-[&[data-ui=content][data-selected=true]]:bg-accent',
        'in-[&[data-ui=content][data-selected=true]]:dark:bg-accent',
        'in-[&[data-ui=content][data-selected=true]]:ring-accent',
        'in-[&[data-ui=content][data-selected=true]]:dark:ring-accent',

        renderProps?.isInvalid && 'ring-red-600 dark:ring-red-600',
        renderProps?.isFocusVisible &&
          'outline-ring outline-2 outline-offset-3',
        className,
      )}
    >
      {radio && renderProps ? (
        typeof radio === 'function' ? (
          radio(renderProps)
        ) : (
          radio
        )
      ) : (
        <div
          className={twMerge(
            'rounded-full',
            renderProps?.isSelected &&
              'size-2 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.25)] dark:bg-[lch(from_var(--accent)_calc((49.44-l)*infinity)_0_0)]',

            // when it is inside menu item and the item is selected
            'in-[&[data-ui=content][data-selected=true]]:size-2',
            'in-[&[data-ui=content][data-selected=true]]:bg-white',
            'in-[&[data-ui=content][data-selected=true]]:shadow-[0_1px_1px_rgba(0,0,0,0.25)] dark:bg-[lch(from_var(--accent)_calc((49.44-l)*infinity)_0_0)]',
          )}
        ></div>
      )}
    </div>
  );
}
