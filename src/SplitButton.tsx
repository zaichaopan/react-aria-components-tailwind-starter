import React from 'react';
import { Button, BasicButtonProps, Variant } from './Button';
import { ButtonProps as RACButtonProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export type SplitButtonGroupProps = JSX.IntrinsicElements['div'] & {
  color?: BasicButtonProps['color'];
} & Variant;

const SplitButtonGroupContext =
  React.createContext<SplitButtonGroupProps | null>(null);

function useSplitButtonGroupContext() {
  const context = React.useContext(SplitButtonGroupContext);

  if (!context) {
    throw Error('SplitButtonGroupContext is required');
  }

  return context;
}

export function SplitButtonGroup({
  className,
  color,
  children,
  text,
  unstyle,
  outline,
  ...props
}: SplitButtonGroupProps) {
  return (
    <SplitButtonGroupContext.Provider
      value={{ ...({ text, outline, unstyle } as Variant), color }}
    >
      <div {...props} className={twMerge('flex gap-0', className)}>
        <>{children}</>
      </div>
    </SplitButtonGroupContext.Provider>
  );
}

export function SplitButton(props: RACButtonProps) {
  const context = useSplitButtonGroupContext();
  return (
    <Button
      className={twMerge(
        '-mr-[0.5px] rounded-r-none',
        "after:absolute after:right-0 after:top-0 after:h-full after:border-l-[1.5px] after:border-l-border after:content-['']",
        'border-r-0',
        !context.outline &&
          'after:border-l-2 after:border-l-white/20 dark:after:border-black/20',
      )}
      {...props}
      {...(context as RACButtonProps)}
    />
  );
}

export function SplitButtonMenuTriggerButton({
  'aria-label': ariaLabel,
  ...props
}: RACButtonProps) {
  const context = useSplitButtonGroupContext();

  return (
    <Button
      aria-label={ariaLabel}
      color={context.color}
      className={twMerge('min-w-fit rounded-l-none border-l-0 px-1.5')}
      {...props}
      {...(context as RACButtonProps)}
    ></Button>
  );
}
