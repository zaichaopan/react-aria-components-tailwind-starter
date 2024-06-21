import React from 'react';
import { Button, BasicButtonProps, Variant } from './Button';
import { ButtonProps as RACButtonProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps } from './utils';
import { ChevronDown } from 'lucide-react';
import { Icon } from './Icon';

export type SplitButtonGroupProps = JSX.IntrinsicElements['div'] & {
  color?: BasicButtonProps['color'];
} & Variant;

const SplitButtonContext = React.createContext<SplitButtonGroupProps | null>(
  null,
);

function useSplitButtonContext() {
  const context = React.useContext(SplitButtonContext);

  if (!context) {
    throw Error('<SplitButtonContext.Provider> is required');
  }

  return context;
}

export function SplitButtonGroup({
  className,
  color,
  children,
  plain,
  unstyle,
  outline,
  ...props
}: SplitButtonGroupProps) {
  return (
    <SplitButtonContext.Provider
      value={{ ...({ plain, outline, unstyle } as Variant), color }}
    >
      <div {...props} className={twMerge('flex gap-0', className)}>
        <>{children}</>
      </div>
    </SplitButtonContext.Provider>
  );
}

export function SplitButton(props: RACButtonProps) {
  const context = useSplitButtonContext();
  return (
    <Button
      {...props}
      {...(context as RACButtonProps)}
      className={composeTailwindRenderProps(
        props.className,

        [
          'rounded-r-none',
          '-mr-[0.5px] rounded-r-none',
          "after:absolute after:right-0 after:top-0 after:h-full after:border-l-[1.5px] after:border-l-border after:content-['']",
          'border-r-0',
          context.outline
            ? 'after:border-l'
            : 'after:border-l-2 after:border-l-white/20 dark:after:border-black/20',
        ],
      )}
    />
  );
}

export function SplitButtonMenuTrigger({
  'aria-label': ariaLabel,
  ...props
}: RACButtonProps) {
  const context = useSplitButtonContext();

  return (
    <Button
      {...props}
      {...(context as RACButtonProps)}
      color={context.color}
      className={composeTailwindRenderProps(
        props.className,
        'w-7 min-w-fit rounded-l-none border-l-0',
      )}
    >
      <Icon aria-label={ariaLabel}>
        <ChevronDown />
      </Icon>
    </Button>
  );
}
