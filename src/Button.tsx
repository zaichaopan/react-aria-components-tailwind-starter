import React from 'react';
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  ToggleButton as RACToggleButton,
  ToggleButtonProps as RACToggleButtonProps,
  composeRenderProps,
} from 'react-aria-components';
import { focusOutlineStyle } from './utils';
import { ChevronDown, Loader2Icon, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { VisuallyHidden } from './VisuallyHidden';
import { Icon } from './Icon';
import { AsChildProps, Slot } from './slot';

type NeverExcept<T, K extends keyof T> = {
  [N in keyof Omit<T, K>]?: never;
} & {
  [Key in K]?: T[Key];
};

type Variants = {
  outline: true;
  text: true;
  unstyle: true;
};

export type Variant =
  | NeverExcept<Variants, 'outline'>
  | NeverExcept<Variants, 'text'>
  | NeverExcept<Variants, 'unstyle'>;

export type BasicButtonProps = {
  color?: 'accent' | 'success' | 'destructive';
  size?: 'sm' | 'lg';
  isLoading?: boolean;
  loadingLabel?: string;
  noArrow?: boolean;
} & Variant;

export type ButtonProps = AsChildProps<RACButtonProps> & BasicButtonProps;

function buttonStyle({
  size,
  color,
  iconButton,
  ...props
}: BasicButtonProps & {
  iconButton?: boolean;
}) {
  if (props.unstyle) {
    return ['outline-none', 'rounded-lg'];
  }

  return [
    // Base
    'group relative inline-flex items-center justify-center whitespace-nowrap border rounded-lg transition outline-none',

    // Disabled
    'disabled:opacity-50',

    // Size
    iconButton
      ? [
          // default size
          'p-1.5 size-9',
          size === 'sm' && 'p-1 size-7',
          size === 'lg' && 'p-1.5 size-10',
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
    props.outline && ['bg-background shadow-sm hover:bg-hover'],

    props.text && ['border-0 bg-transparent hover:bg-hover'],

    props.outline === undefined &&
      props.text === undefined && [
        'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:border-0',
        'border-accent bg-accent/95 text-white hover:bg-accent/85',
        color === 'success' &&
          'border-success/95 bg-success hover:bg-success/85',
        color === 'destructive' &&
          'border-destructive/95 bg-destructive hover:bg-destructive/85',
      ],

    // Svg
    !iconButton && '[&_svg]:opacity-75',
    !iconButton && '[&.bg-background_svg]:opacity-60',
    '[&.h-7_svg]:size-3 [&.size-7_svg]:size-4',
    '[&.h-9_svg]:size-4 [&.size-9_svg]:size-5',
    '[&.h-10_svg]:size-5 [&.size-10_svg]:size-6',

    // listbox button - select, combobox
    'aria-[haspopup=listbox]:h-7 aria-[haspopup=listbox]:mr-1 aria-[haspopup=listbox]:px-1',
  ];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {  
    const {
      children,
      isLoading,
      loadingLabel,
      asChild,
      noArrow,
      size,
      color,
      text,
      unstyle,
      outline,
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
              ...({ unstyle, outline, text } as Variant),
            }),
          )}
        />
      );
    }

    return (
      <>
        <RACButton
          ref={ref}
          {...restProps}
          className={composeRenderProps(
            props.className,
            (className, renderProps) => {
              return twMerge([
                ...buttonStyle({
                  size,
                  color,
                  ...({ unstyle, outline, text } as Variant),
                }),
                renderProps.isFocusVisible && focusOutlineStyle,
                isLoading && 'text-transparent',
                className,
              ]);
            },
          )}
        >
          <>
            {isLoading ? (
              <div className="absolute flex h-full items-center justify-center">
                <Icon
                  icon={<Loader2Icon className="animate-spin text-white" />}
                />
              </div>
            ) : null}
            {children}

            {!noArrow && (
              <Icon
                icon={
                  <ChevronDown
                    className="hidden group-aria-[haspopup]:block"
                    strokeWidth={1.5}
                  />
                }
              />
            )}
          </>
        </RACButton>
        <VisuallyHidden>
          <span aria-live="polite">{isLoading ? loadingLabel : ''}</span>
        </VisuallyHidden>
      </>
    );
  },
);

export type ToggleButtonProps = RACToggleButtonProps &
  Exclude<BasicButtonProps, 'isLoading' | 'loadingLabel' | 'noArrow'>;

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge([
          ...buttonStyle(props),
          renderProps.isFocusVisible && focusOutlineStyle,
          className,
        ]),
      )}
    />
  );
}

export type IconButtonProps = Omit<RACButtonProps, 'children'> &
  BasicButtonProps & {
    icon: React.ReactNode;
    'aria-label'?: string;
  };

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function Button({ icon, 'aria-label': ariaLabel, ...props }, ref) {
    return (
      <RACButton
        ref={ref}
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge([
              ...buttonStyle({
                iconButton: true,
                ...props,
              }),
              renderProps.isFocusVisible && focusOutlineStyle,
              className,
            ]);
          },
        )}
      >
        <Icon icon={icon} aria-label={ariaLabel}></Icon>
      </RACButton>
    );
  },
);

export function CloseButton({
  'aria-label': ariaLabel,
  ...props
}: Omit<IconButtonProps, 'icon'>) {
  return (
    <IconButton
      {...(props as IconButtonProps)}
      icon={<X strokeWidth={1.5} />}
      aria-label={ariaLabel ?? 'Close'}
    />
  );
}
