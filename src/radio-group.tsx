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

const RadioGroupVariantContext = React.createContext<RadioGroupVariant | null>(
  null,
);

const useRadioGroupVariantContext = () => {
  const {
    labelPlacement = 'end',
    orientation = 'vertical',
    variant = 'radio',
    compact = false,
  } = React.useContext(RadioGroupVariantContext) ?? {};

  return {
    labelPlacement,
    orientation,
    variant,
    compact,
  } as RadioGroupVariant;
};

export function RadioGroup({
  children,
  variant = 'radio',
  orientation,
  labelPlacement = 'end',
  compact,
  ...props
}: RACRadioGroupProps & Exclude<RadioGroupVariant, 'orientation'>) {
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
        'flex',
        'flex-col',
        'gap-y-3',
        'has-data-[ui=description]:gap-y-4',
        'has-data-[ui=description]:[&_label]:font-medium',
        orientation === 'horizontal' && ['flex-row flex-wrap gap-x-4 gap-y-2'],
        variant === 'card' && [
          orientation === 'horizontal' && [
            compact ? 'flex-row flex-nowrap' : 'flex-col sm:flex-row',
          ],
          compact ? 'gap-x-0 gap-y-0' : 'gap-x-6, gap-y-6',
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
      'flex-1 rounded-lg px-4 py-3 items-start [&>[data-slot=radio]:not([class*=mt-])]:mt-1.5',
      '[&_[data-ui=icon]:not([class*=size-])]:w-4',
      '[&_[data-ui=icon]:not([class*=size-])]:h-[1lh]',
      isSelected
        ? '[&_[data-ui=icon]:not([class*=text-])]:text-foreground'
        : '[&_[data-ui=icon]:not([class*=text-])]:text-muted',
      compact
        ? [
            '[&:not(:first-child):not(:last-child)]:rounded-none',
            orientation === 'horizontal' && [
              'first:rounded-e-none',
              'last:rounded-s-none',
              'border-t border-b',
              'not-first:border-e',
              'not-last:border-s',
              '[&:has(+label[data-selected]:last-child)]:border-e-accent/50',
              isSelected && '[&:first-child+label]:border-s-accent/50',
            ],

            orientation === 'vertical' && [
              'border-s border-e',
              'first:rounded-b-none',
              'last:rounded-t-none',
              'not-first:border-b',
              'not-last:border-t',
              '[&:has(+label[data-selected]:last-child)]:border-b-accent/50',
              isSelected && '[&:first-child+label]:border-t-accent/50',
            ],

            isSelected && [
              'bg-[color-mix(in_oklab,_var(--accent)_5%,_white)]',
              'dark:bg-[color-mix(in_oklab,_var(--accent)_25%,_black)] border-accent/50',
            ],
          ]
        : [
            'ring ring-border',
            isSelected && ['ring-ring', 'ring-inset', 'ring-1'],
          ],
    ],
    segment: [
      'flex',
      'justify-center',
      'items-center',
      'flex-1 text-center font-medium rounded-[calc(var(--segment-radius)-var(--segment-padding))]',
      'transition-all ease-in-out',
      '[&_[data-ui=icon]:not([class*=size-])]:size-4',
      isSelected && [
        'bg-white dark:bg-zinc-600',
        'shadow-sm dark:shadow-none',
        'ring ring-zinc-950/10',
      ],
      !isSelected && !isHovered && 'text-muted',

      orientation === 'horizontal' && ['px-4 py-1'],
      orientation === 'vertical' && ['p-2'],
    ],
  };

  return style[variant ?? 'radio'];
}

export function Radio(props: RadioProps | CustomRenderRadioProps) {
  const descriptionContext = React.useContext(DescriptionContext);
  const { variant, orientation, labelPlacement, compact } =
    useRadioGroupVariantContext();

  if (props.render !== undefined) {
    const { render, ...restProps } = props;

    return (
      <RACRadio
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeRenderProps(
          props.className,
          (className, renderProps) =>
            twMerge(
              'group text-base/6 sm:text-sm/6',
              renderProps.isDisabled && 'opacity-50',
              renderProps.isFocusVisible &&
                'outline-ring outline-2 outline-offset-3',
              getRadioStyle({
                variant,
                orientation,
                compact,
                ...renderProps,
              }),
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
      aria-describedby={descriptionContext?.['aria-describedby']}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge(
          'group flex items-center text-base/6 sm:text-sm/6',
          orientation === 'horizontal' && 'text-nowrap',
          labelPlacement === 'start' && 'flex-row-reverse justify-between',
          getRadioStyle({
            variant,
            orientation,
            compact,
            ...renderProps,
          }),
          renderProps.isDisabled && 'opacity-50',
          noRadioToggle && [
            renderProps.isFocusVisible &&
              'outline-ring outline-2 outline-offset-2',
          ],
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
  radio?: Exclude<RadioProps['radio'], null>;
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
              'size-2 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.25)] dark:bg-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',

            // when it is inside menu item and the item is selected
            'in-[&[data-ui=content][data-selected=true]]:size-2',
            'in-[&[data-ui=content][data-selected=true]]:bg-white',
            'in-[&[data-ui=content][data-selected=true]]:shadow-[0_1px_1px_rgba(0,0,0,0.25)] dark:bg-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
          )}
        ></div>
      )}
    </div>
  );
}
