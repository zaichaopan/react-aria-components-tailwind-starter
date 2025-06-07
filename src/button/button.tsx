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
import { SpinnerIcon } from '../icons/outline/spinner';
import { NonFousableTooltipTarget, Tooltip, TooltipTrigger } from '../tooltip';
import {
  ButtonStyleProps,
  getButtonGroupStyles,
  getButtonStyles,
} from './button.styles';

export type ButtonProps = RACButtonProps &
  ButtonStyleProps & {
    tooltip?: string | React.ReactElement;
    allowTooltipOnDisabled?: boolean;
  };

const StyledButton = React.forwardRef<
  HTMLButtonElement,
  ButtonStyleProps & RACButtonProps
>(function Button(props, ref) {
  const {
    children,
    isCustomPending,
    pendingLabel,
    size,
    color,
    variant = 'solid',
    isIconOnly,
    ...buttonProps
  } = props;

  return (
    <RACButton
      {...buttonProps}
      ref={ref}
      data-variant={variant}
      className={composeRenderProps(props.className, (className, renderProps) =>
        getButtonStyles(
          {
            size,
            color,
            isIconOnly,
            variant,
            isCustomPending,
            ...renderProps,
          },
          className,
        ),
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
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { tooltip, allowTooltipOnDisabled, ...buttonProps } = props;

    if (tooltip) {
      if (allowTooltipOnDisabled && buttonProps.isDisabled) {
        return (
          <TooltipTrigger>
            <NonFousableTooltipTarget>
              <div className="content">
                <StyledButton {...buttonProps} ref={ref} />
              </div>
            </NonFousableTooltipTarget>
            {typeof tooltip === 'string' ? (
              <Tooltip>{tooltip}</Tooltip>
            ) : (
              tooltip
            )}
          </TooltipTrigger>
        );
      }

      return (
        <TooltipTrigger>
          <StyledButton {...buttonProps} ref={ref} />
          {typeof tooltip === 'string' ? <Tooltip>{tooltip}</Tooltip> : tooltip}
        </TooltipTrigger>
      );
    }

    return <StyledButton {...buttonProps} ref={ref} />;
  },
);

function StyledToggleButton(props: RACToggleButtonProps & ButtonStyleProps) {
  const { variant, size, isIconOnly, color, ...buttonProps } = props;

  return (
    <RACToggleButton
      {...buttonProps}
      data-variant={variant}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return getButtonStyles(
            {
              variant,
              size,
              isIconOnly,
              color,
              ...renderProps,
            },
            className,
          );
        },
      )}
    />
  );
}

export function ToggleButton(
  props: RACToggleButtonProps &
    ButtonStyleProps & {
      tooltip?: React.ReactNode;
      allowTooltipOnDisabled?: boolean;
    },
) {
  const { tooltip, allowTooltipOnDisabled, ...buttonProps } = props;

  if (tooltip) {
    if (allowTooltipOnDisabled && buttonProps.isDisabled) {
      return (
        <TooltipTrigger>
          <NonFousableTooltipTarget>
            <div className="content">
              <StyledToggleButton {...buttonProps} />
            </div>
          </NonFousableTooltipTarget>
          {tooltip}
        </TooltipTrigger>
      );
    }

    return (
      <TooltipTrigger>
        <StyledToggleButton {...buttonProps} />
        {tooltip}
      </TooltipTrigger>
    );
  }

  return <StyledToggleButton {...buttonProps} />;
}

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
        getButtonGroupStyles({ inline, orientation }, className),
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
      className={getButtonGroupStyles({ inline, orientation }, className)}
    />
  );
}
