import React from 'react';
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  ToggleButton as RACToggleButton,
  ToggleButtonProps as RACToggleButtonProps,
  composeRenderProps,
} from 'react-aria-components';
import { focusOutlineStyle } from './utils';
import { X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { VisuallyHidden } from './VisuallyHidden';
import { Icon } from './Icon';
import { AsChildProps, Slot } from './slot';
import { Spinner } from './Spinner';

type NeverExcept<T, K extends keyof T> = {
  [N in keyof Omit<T, K>]?: never;
} & {
  [Key in K]?: T[Key];
};

type Variants = {
  outline: true;
  plain: true;
  unstyle: true;
};

export type Variant =
  | NeverExcept<Variants, 'outline'>
  | NeverExcept<Variants, 'plain'>
  | NeverExcept<Variants, 'unstyle'>;

export type BasicButtonProps = {
  color?: 'accent' | 'success' | 'destructive';
  size?: 'sm' | 'lg';
  isLoading?: boolean;
  loadingLabel?: string;
  isIconOnly?: boolean;
} & Variant;

export type ButtonProps = AsChildProps<RACButtonProps> & BasicButtonProps;

export type ButtonPropsWithoutAsChild = RACButtonProps & BasicButtonProps;

function buttonStyle({ size, color, isIconOnly, ...props }: BasicButtonProps) {
  if (props.unstyle) {
    return 'relative outline-none rounded-lg';
  }

  return [
    // Base
    'group relative inline-flex justify-center items-center whitespace-nowrap rounded-lg outline-none',

    // Disabled
    'disabled:opacity-50',

    // Size
    isIconOnly
      ? [
          // default size
          'p-1.5 size-9',
          size === 'sm' && 'p-1 size-7 rounded-md',
          size === 'lg' && 'size-10',
        ]
      : [
          // default size
          'h-9 px-3 gap-2 text-base/6 sm:text-sm/6 font-semibold',
          size === 'sm' && 'h-7 px-2 gap-1 text-sm/6 sm:text-xs/6',
          size === 'lg' && 'h-10 px-4 gap-2 font-semibold',
        ],

    // Color
    color === 'accent' && 'text-accent',

    color === 'success' && 'text-success',

    color === 'destructive' && 'text-destructive',

    // Variant
    props.outline && ['border bg-transparent shadow-sm hover:bg-hover'],

    props.plain && ['bg-transparent hover:bg-hover'],

    props.outline === undefined &&
      props.plain === undefined && [
        'border dark:border-0',
        'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        'border-accent bg-accent/95 text-white hover:bg-accent/85',
        color === 'success' &&
          'border-success/95 bg-success hover:bg-success/85',
        color === 'destructive' &&
          'border-destructive/95 bg-destructive hover:bg-destructive/85',
      ],

    // Svg
    '[&.h-7_svg]:size-3 [&.size-7_svg]:size-4',
    '[&.h-9_svg]:size-4 [&.size-9_svg]:size-5',
    '[&.h-10_svg]:size-5 [&.size-10_svg]:size-6',
  ];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      children,
      isLoading,
      loadingLabel,
      asChild,
      size,
      color,
      plain,
      unstyle,
      outline,
      isIconOnly,
      ...restProps
    } = props;

    if (asChild) {
      return (
        <Slot
          {...props}
          className={twMerge(
            buttonStyle({
              size,
              color,
              isIconOnly,
              ...({ unstyle, outline, plain } as Variant),
            }),
          )}
        />
      );
    }

    return (
      <>
        <RACButton
          {...restProps}
          ref={ref}
          className={composeRenderProps(
            props.className,
            (className, renderProps) => {
              return twMerge(
                buttonStyle({
                  size,
                  color,
                  isIconOnly,
                  ...({ unstyle, outline, plain } as Variant),
                }),
                renderProps.isFocusVisible && focusOutlineStyle,
                isLoading && 'text-transparent',
                className,
              );
            },
          )}
        >
          {(renderProps) => {
            return (
              <>
                {isLoading ? (
                  <div className="absolute flex h-full items-center justify-center">
                    <Spinner className="text-white" />
                  </div>
                ) : null}
                {typeof children === 'function'
                  ? children(renderProps)
                  : children}
              </>
            );
          }}
        </RACButton>
        <VisuallyHidden>
          <span aria-live="polite">{isLoading ? loadingLabel : ''}</span>
        </VisuallyHidden>
      </>
    );
  },
);

export type ToggleButtonProps = RACToggleButtonProps &
  Exclude<BasicButtonProps, 'isLoading' | 'loadingLabel'>;

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge(
          buttonStyle(props),
          renderProps.isFocusVisible && focusOutlineStyle,
          className,
        ),
      )}
    />
  );
}

export function CloseButton({
  'aria-label': ariaLabel = 'Close',
  ...props
}: ButtonPropsWithoutAsChild & { isIconOnly?: never }) {
  return (
    <Button isIconOnly {...props}>
      <Icon aria-label={ariaLabel}>
        <X strokeWidth={1.5} />
      </Icon>
    </Button>
  );
}
