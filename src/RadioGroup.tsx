import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps as RACRadioProps,
  RadioRenderProps,
} from 'react-aria-components';
import { DescriptionProvider, WithDescriptionContext } from './Field';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export function RadioGroup(props: Omit<RACRadioGroupProps, 'orientation'>) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-2',
      )}
    />
  );
}

export function RadioField({
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
          // When the radio has description, make the label font-medium
          '[&_label]:has-[[slot=description]]:font-medium',
          // When the radio is disabled
          '[&_[slot=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

export interface RadioProps extends RACRadioProps {
  labelPosition?: 'left' | 'right';
  render?: never;
}

export interface CustomRenderRadioProps
  extends Omit<RACRadioProps, 'children'> {
  render: (props: RadioRenderProps) => React.ReactNode;
  children?: never;
}

export function Radio({
  className,
  ...props
}: RadioProps | CustomRenderRadioProps) {
  return (
    <WithDescriptionContext>
      {(context) => {
        if (props.render) {
          return (
            <RACRadio
              {...props}
              aria-describedby={context?.['aria-describedby']}
              className={composeTailwindRenderProps(
                className,
                'group flex items-center gap-3 text-base/6 disabled:opacity-50 sm:text-sm/6',
              )}
            >
              {props.render}
            </RACRadio>
          );
        }

        const { labelPosition = 'right', ...restProps } = props;

        return (
          <RACRadio
            {...restProps}
            aria-describedby={context?.['aria-describedby']}
            data-label-position={labelPosition}
            className={composeTailwindRenderProps(
              className,
              'group flex items-center gap-3 text-base/6 disabled:opacity-50 sm:text-sm/6',
            )}
          >
            {(renderProps) => {
              return (
                <>
                  {labelPosition === 'left' &&
                    (typeof props.children === 'function'
                      ? props.children(renderProps)
                      : props.children)}

                  <div
                    slot="radio"
                    className={twMerge(
                      'h-4 w-4 shrink-0 rounded-full border shadow-sm transition-all disabled:opacity-75',
                      ' border-zinc-400/75 dark:border-zinc-600',
                      renderProps.isInvalid &&
                        'border-destructive dark:border-destructive',
                      renderProps.isSelected && [
                        'border-[5px] border-accent/95 bg-white dark:border-accent/95',
                        'ring-1 ring-accent',
                      ],

                      renderProps.isFocusVisible && focusOutlineStyle,
                      renderProps.isSelected &&
                        renderProps.isFocusVisible &&
                        'border-[5px] border-accent bg-white dark:border-accent',
                    )}
                  />

                  {labelPosition === 'right' &&
                    (typeof props.children === 'function'
                      ? props.children(renderProps)
                      : props.children)}
                </>
              );
            }}
          </RACRadio>
        );
      }}
    </WithDescriptionContext>
  );
}
