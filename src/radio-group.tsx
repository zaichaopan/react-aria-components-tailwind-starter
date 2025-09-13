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
  variant?: 'radio' | 'segment' | 'card' | 'button';
  orientation?: 'vertical' | 'horizontal';
  labelPlacement?: 'start' | 'end';
};

const RadioGroupVariantContext = React.createContext<RadioGroupVariant | null>(
  null,
);

const useRadioGroupVariantContext = () => {
  const {
    labelPlacement = 'end',
    orientation = 'vertical',
    variant = 'radioGroup',
  } = React.useContext(RadioGroupVariantContext) ?? {};

  return {
    labelPlacement,
    orientation,
    variant,
  };
};

export function RadioGroup({
  children,
  variant = 'radio',
  orientation,
  labelPlacement = 'end',
  ...props
}: RACRadioGroupProps & Pick<RadioGroupVariant, 'variant' | 'labelPlacement'>) {
  if (variant === 'segment') {
    orientation = orientation ?? 'horizontal';
  }

  return (
    <RadioGroupVariantContext.Provider
      value={{ variant, orientation, labelPlacement }}
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
  const { variant, orientation } = useRadioGroupVariantContext();

  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex',
        'flex-col',
        'has([data-ui=description]):not([class*=gap-y])]:gap-y-4 gap-y-3',
        orientation === 'horizontal' && ['flex-row flex-wrap gap-x-4 gap-y-2'],
        variant === 'card' && ['gap-x-6, gap-y-6'],
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

const radioStyle = {
  card: {
    base: [
      'flex-1 rounded-lg px-4 py-3 items-start [&>[data-slot=radio]:not([class*=mt-])]:mt-1.5',
      'data-selected:ring-ring',
      'data-selected:ring-2',
      'ring ring-border',
    ],
  },
  segment: {
    base: [
      'flex',
      'justify-center',
      'items-center',
      'flex-1 text-center font-medium rounded-[calc(var(--segment-radius)-var(--segment-padding))]',
      'transition-all ease-in-out',
      'data-selected:bg-white  dark:data-selected:bg-zinc-600',
      '[&:not(:is([data-selected],[data-hovered]))]:text-muted',
      'data-selected:shadow-sm dark:data-selected:shadow-none',
      'data-selected:ring data-selected:ring-zinc-950/10',
      '[&_[data-ui=icon]:not([class*=size-])]:size-4',
    ],
    horizontal: ['px-4 py-1'],
    vertical: ['p-2'],
  },
  button: {
    base: [
      'rounded-md border px-4 py-2 font-semibold',
      'data-selected:border-accent data-selected:bg-accent data-selected:text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
      'data-focus-visible:outline-ring data-focus-visible:outline-2 data-focus-visible:outline-offset-2'
    ],
  },
};

export function Radio(props: RadioProps | CustomRenderRadioProps) {
  const descriptionContext = React.useContext(DescriptionContext);
  const { variant, orientation, labelPlacement } =
    useRadioGroupVariantContext();

  if (props.render !== undefined) {
    const { render, ...restProps } = props;

    return (
      <RACRadio
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeRenderProps(
          props.className,
          (className, { isDisabled, isFocusVisible }) =>
            twMerge(
              isDisabled && 'opacity-50',
              isFocusVisible && 'outline-ring outline-2 outline-offset-3',
              'group text-base/6 sm:text-sm/6',
              variant === 'card' && [radioStyle.card['base']],
              variant === 'segment' && [
                radioStyle.segment['base'],
                radioStyle.segment[orientation],
              ],
              variant === 'button' && [radioStyle.button['base']],
              className,
            ),
        )}
      >
        {render}
      </RACRadio>
    );
  }

  const { radio, ...restProps } = props;

  return (
    <RACRadio
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) =>
          twMerge(
            'group flex items-center text-base/6 sm:text-sm/6',
            orientation === 'horizontal' && 'text-nowrap',
            labelPlacement === 'start' && 'flex-row-reverse justify-between',
            variant === 'card' && [radioStyle.card['base']],
            variant === 'segment' && [
              radioStyle.segment['base'],
              radioStyle.segment[orientation],
            ],
            variant === 'button' && [radioStyle.button['base']],
            isDisabled && 'opacity-50',
            className,
          ),
      )}
    >
      {(renderProps) => {
        return (
          <>
            {variant !== 'button' && (
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
