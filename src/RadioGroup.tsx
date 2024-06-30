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

export function RadioGroup(props: RACRadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1',
      )}
    />
  );
}

export function RadioGroupContent({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col gap-2 group-orientation-horizontal:flex-row group-orientation-horizontal:flex-wrap',
        // When a radio of the group has description, make all labels font-medium if it is not
        '[&_label:not(.font-medium)]:has-[[slot=description]]:font-medium',
        className,
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
  labelPlacement?: 'left' | 'right';
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
                'group flex items-center gap-3 text-base/6 group-orientation-horizontal:text-nowrap disabled:opacity-50 sm:text-sm/6',
              )}
            >
              {props.render}
            </RACRadio>
          );
        }

        const { labelPlacement = 'right', ...restProps } = props;

        return (
          <RACRadio
            {...restProps}
            aria-describedby={context?.['aria-describedby']}
            data-label-position={labelPlacement}
            className={composeTailwindRenderProps(
              className,
              'group flex items-center gap-3 text-base/6 group-orientation-horizontal:text-nowrap disabled:opacity-50 sm:text-sm/6',
            )}
          >
            {(renderProps) => {
              return (
                <>
                  {labelPlacement === 'left' &&
                    (typeof props.children === 'function'
                      ? props.children(renderProps)
                      : props.children)}

                  <div
                    slot="radio"
                    className={twMerge(
                      'h-4 w-4 shrink-0 rounded-full border border-zinc-400/75 shadow-sm transition-all disabled:opacity-75 dark:border-zinc-600',
                      renderProps.isInvalid &&
                        'border-destructive dark:border-destructive',
                      renderProps.isSelected &&
                        'border-[5px] border-accent bg-white dark:border-accent',

                      renderProps.isFocusVisible && focusOutlineStyle,

                      renderProps.isSelected &&
                        renderProps.isFocusVisible &&
                        'border-[5px] border-accent bg-white dark:border-accent',
                    )}
                  />

                  {labelPlacement === 'right' &&
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
