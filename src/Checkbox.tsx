import { Check, Minus } from 'lucide-react';
import { ReactNode } from 'react';
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACCheckboxGroupProps,
  CheckboxProps as RACCheckboxProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { DescriptionProvider, WithDescriptionContext } from './Field';
import { Icon } from './Icon';

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, 'children'> {
  children?: ReactNode;
}

export function CheckboxGroup({ ...props }: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'group flex flex-col gap-2',
        // When a checkbox of the group has description, make all labels font-medium inside the group if it is not
        '[&_label:not(.font-medium)]:has-[[slot=description]]:font-medium',
      ])}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        className={twMerge(
          'group flex flex-col gap-y-1',
          'sm:[&_[slot=description]]:has-[label[data-label-position=left]]:pr-7',
          'sm:[&_[slot=description]]:has-[label[data-label-position=right]]:pl-7',
          '[&_label]:has-[[data-label-position=left]]:justify-between',
          // When the checkbox has description, make the label font-medium
          '[&_label]:has-[[slot=description]]:font-medium',
          // When the checkbox is disabled
          '[&_[slot=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface CheckboxProps extends RACCheckboxProps {
  labelPosition?: 'left' | 'right';
}

export function Checkbox({
  labelPosition = 'right',
  children,
  ...props
}: CheckboxProps) {
  return (
    <WithDescriptionContext>
      {(context) => {
        return (
          <RACCheckbox
            {...props}
            aria-describedby={context?.['aria-describedby']}
            data-label-position={labelPosition}
            className={composeTailwindRenderProps(
              props.className,
              'group flex items-center gap-3 text-base/6 transition disabled:opacity-50 sm:text-sm/6',
            )}
          >
            {(renderProps) => (
              <>
                {labelPosition === 'left' &&
                  (typeof children === 'function'
                    ? children(renderProps)
                    : children)}
                <div
                  className={twMerge([
                    'flex flex-shrink-0 items-center justify-center',
                    'size-4 rounded border border-zinc-400/75 shadow-sm transition',
                    'dark:border-[1.5px] dark:border-zinc-600',
                    renderProps.isInvalid &&
                      'border-destructive dark:border-destructive',
                    (renderProps.isSelected || renderProps.isIndeterminate) &&
                      'border-accent bg-accent/95 dark:border-accent',
                    renderProps.isFocusVisible && focusOutlineStyle,
                  ])}
                >
                  {renderProps.isIndeterminate ? (
                    <Icon>
                      <Minus className="size-4 text-white" />
                    </Icon>
                  ) : renderProps.isSelected ? (
                    <Icon>
                      <Check className="size-4 text-white" />
                    </Icon>
                  ) : null}
                </div>

                {labelPosition === 'right' &&
                  (typeof children === 'function'
                    ? children(renderProps)
                    : children)}
              </>
            )}
          </RACCheckbox>
        );
      }}
    </WithDescriptionContext>
  );
}
