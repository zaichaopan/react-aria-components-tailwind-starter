import React from 'react';
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  ToggleButton as RACToggleButton,
  ToggleButtonProps as RACToggleButtonProps,
  ToggleButtonGroup as RACToggleButtonGroup,
  ToggleButtonGroupProps,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { AsChildProps, Slot } from './slot';
import { SpinnerIcon } from './icons';
import { NonFousableTooltipTarget, TooltipTrigger } from './tooltip';

type Color = 'accent' | 'success' | 'destructive';

type Size = 'sm' | 'lg';

type Variant = 'solid' | 'outline' | 'plain' | 'unstyle';

export type ButtonStyleProps = {
  color?: Color;
  size?: Size;
  isCustomPending?: boolean;
  isIconOnly?: boolean;
  pendingLabel?: string;
  variant?: Variant;
};

export type ButtonWithAsChildProps = AsChildProps<
  RACButtonProps & {
    tooltip?: React.ReactNode;
    allowTooltipOnDisabled?: boolean;
  }
> &
  ButtonStyleProps;

export type ButtonProps = RACButtonProps &
  ButtonStyleProps & {
    tooltip?: React.ReactNode;
  };

const buttonStyle = ({
  size,
  color,
  isIconOnly,
  variant = 'solid',
  isPending,
  isDisabled,
  isFocusVisible,
  isCustomPending,
}: ButtonStyleProps & {
  isPending?: boolean;
  isCustomPending?: boolean;
  isDisabled?: boolean;
  isFocusVisible?: boolean;
}) => {
  const base = [
    'relative rounded-md',
    isFocusVisible
      ? 'outline outline-2 outline-ring outline-offset-2'
      : 'outline-none',
    isDisabled && 'opacity-50',
  ];

  if (variant === 'unstyle') {
    return base;
  }

  const style = {
    base,
    variant: {
      base: 'group inline-flex gap-x-2 justify-center items-center font-semibold text-base/6 sm:text-sm/6 whitespace-nowrap',
      solid: [
        'border border-black/10 bg-[var(--btn-bg)] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        !isDisabled && 'hover:opacity-90',
      ],
      outline: [
        'border border-zinc-950/10 dark:border-white/15 border-b-zinc-950/15 dark:border-b-white/20 text-[var(--btn-color)] shadow-sm',
        !isDisabled && 'hover:bg-zinc-50 dark:hover:bg-zinc-800',
      ],
      plain: [
        'text-[var(--btn-color)]',
        !isDisabled && 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
      ],
    },
    size: {
      base: '[&_svg[data-ui=icon]:not([class*=size-])]:size-[var(--icon-size)]',
      sm: {
        base: '',
        button:
          'h-8 sm:h-7 [--icon-size:theme(size.3)] text-sm/6 sm:text-xs/6 px-3 sm:px-2.5',
        iconOnly:
          'size-8 sm:size-7 [--icon-size:theme(size.5)] sm:[--icon-size:theme(size.4)]',
      },
      md: {
        // H: 44px, sm:36px
        base: '[--icon-size:theme(size.5)] sm:[--icon-size:theme(size.4)]',
        button: 'px-3.5 sm:px-3 py-2.5 sm:py-1.5',
        // make H: 44px, sm:36px
        iconOnly:
          'p-2.5 sm:p-1.5 [&_svg[data-ui=icon]]:m-0.5 sm:[&_svg[data-ui=icon]]:m-1',
      },
      lg: {
        base: '[--icon-size:theme(size.5)]',
        button: 'px-4 py-2.5',
        iconOnly: 'p-2.5 [&_svg[data-ui=icon]]:m-0.5',
      },
    },
    color: {
      foreground: '[--btn-color:theme(colors.foreground)]',
      accent: '[--btn-color:theme(colors.accent)]',
      destructive: '[--btn-color:theme(colors.destructive)]',
      success: '[--btn-color:theme(colors.success)]',
    },
    iconColor: {
      base: '[&:not(:hover)_svg[data-ui=icon]:not([class*=text-])]:text-[var(--icon-color)]',
      button: {
        solid: '[--icon-color:theme(colors.zinc.300)]',
        outline: '[--icon-color:theme(colors.muted)]',
        plain: '[--icon-color:theme(colors.muted)]',
      },
      iconOnly: {
        solid: '',
        outline: '',
        plain: '',
      },
    },
    backgroundColor: {
      accent: '[--btn-bg:theme(colors.accent)]',
      destructive: '[--btn-bg:theme(colors.destructive)]',
      success: '[--btn-bg:theme(colors.success)]',
    },
  };

  const buttonSize = size ?? 'md';
  const buttonType = isIconOnly ? 'iconOnly' : 'button';

  return [
    style.base,
    style.variant.base,
    style.variant[variant],
    style.size.base,
    style.size[buttonSize].base,
    style.size[buttonSize][buttonType],
    style.color[color ?? 'foreground'],
    style.iconColor.base,
    style.iconColor[buttonType][variant],
    style.backgroundColor[color ?? 'accent'],
    !isCustomPending && isPending && 'text-transparent',
  ];
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonWithAsChildProps
>(function Button(props, ref) {
  if (props.asChild) {
    return (
      <Slot className={twMerge(buttonStyle(props))}>{props.children}</Slot>
    );
  }

  const {
    asChild,
    tooltip,
    allowTooltipOnDisabled,
    children,
    isCustomPending,
    pendingLabel,
    size,
    color,
    variant = 'solid',
    isIconOnly,
    ...buttonProps
  } = props;

  const button = (
    <RACButton
      {...buttonProps}
      ref={ref}
      data-variant={variant}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge([
          buttonStyle({
            size,
            color,
            isIconOnly,
            variant,
            isCustomPending,
            ...renderProps,
          }),
          className,
        ]),
      )}
    >
      {(renderProps) => {
        return (
          <>
            {renderProps.isPending ? (
              <>
                <SpinnerIcon
                  aria-label={pendingLabel}
                  className={twMerge(
                    'absolute',
                    'text-foreground',
                    variant == 'solid' && 'text-zinc-300',
                    isCustomPending ? 'sr-only' : 'flex',
                  )}
                />
                <span
                  className="contents"
                  {...(renderProps.isPending && { 'aria-hidden': true })}
                >
                  {typeof children === 'function'
                    ? children(renderProps)
                    : children}
                </span>
              </>
            ) : typeof children === 'function' ? (
              children(renderProps)
            ) : (
              children
            )}
          </>
        );
      }}
    </RACButton>
  );

  if (tooltip) {
    if (allowTooltipOnDisabled && buttonProps.isDisabled) {
      return (
        <TooltipTrigger>
          <NonFousableTooltipTarget>
            <div className="content">{button}</div>
          </NonFousableTooltipTarget>
          {tooltip}
        </TooltipTrigger>
      );
    }

    return (
      <TooltipTrigger>
        {button}
        {tooltip}
      </TooltipTrigger>
    );
  }

  return button;
});

export function ToggleButton(
  props: RACToggleButtonProps &
    ButtonStyleProps & {
      tooltip?: React.ReactNode;
      allowTooltipOnDisabled?: boolean;
    },
) {
  const {
    variant,
    tooltip,
    allowTooltipOnDisabled,
    size,
    isIconOnly,
    color,
    ...buttonProps
  } = props;

  const toggleButton = (
    <RACToggleButton
      {...buttonProps}
      data-variant={variant}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            buttonStyle({
              variant,
              size,
              isIconOnly,
              color,
              ...renderProps,
            }),
            className,
          );
        },
      )}
    />
  );

  if (tooltip) {
    if (allowTooltipOnDisabled && buttonProps.isDisabled) {
      return (
        <TooltipTrigger>
          <NonFousableTooltipTarget>
            <div className="content">{toggleButton}</div>
          </NonFousableTooltipTarget>
          {tooltip}
        </TooltipTrigger>
      );
    }

    return (
      <TooltipTrigger>
        {toggleButton}
        {tooltip}
      </TooltipTrigger>
    );
  }

  return toggleButton;
}

const buttonGroupStyle = ({
  inline,
  orientation = 'horizontal',
}: {
  inline?: boolean;
  orientation?: 'horizontal' | 'vertical';
}) => {
  const style = {
    base: [
      'group inline-flex w-max items-center',
      '[&>*:not(:first-child):not(:last-child)]:rounded-none',
      '[&>*[data-variant=solid]:not(:first-child)]:border-s-black/15',
    ],
    horizontal: [
      '[&>*:first-child]:rounded-e-none',
      '[&>*:last-child]:rounded-s-none',
      '[&>*:not(:last-child)]:border-e-0',
      inline &&
        'shadow-sm [&>*:not(:first-child)]:border-s-0 [&>*]:shadow-none',
    ],
    vertical: [
      'flex-col',
      '[&>*:first-child]:rounded-b-none',
      '[&>*:last-child]:rounded-t-none',
      '[&>*:not(:last-child)]:border-b-0',

      inline &&
        'shadow-sm [&>*:not(:first-child)]:border-t-0 [&>*]:shadow-none',
    ],
  };

  return [style.base, style[orientation]];
};

export function ToggleButtonGroup({
  inline,
  orientation = 'horizontal',
  ...props
}: ToggleButtonGroupProps & {
  inline?: boolean;
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <RACToggleButtonGroup
      {...props}
      data-ui="button-group"
      className={composeRenderProps(props.className, (className) =>
        twMerge(buttonGroupStyle({ inline, orientation }), className),
      )}
    />
  );
}

export function ButtonGroup({
  className,
  inline,
  orientation = 'horizontal',
  ...props
}: React.JSX.IntrinsicElements['div'] & {
  inline?: boolean;
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <div
      {...props}
      data-ui="button-group"
      className={twMerge(buttonGroupStyle({ inline, orientation }), className)}
    />
  );
}
