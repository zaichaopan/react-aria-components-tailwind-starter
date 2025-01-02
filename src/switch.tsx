import React from 'react';
import {
  Group,
  GroupProps,
  Switch as RACSwitch,
  SwitchProps as RACSwitchProps,
  SwitchRenderProps,
} from 'react-aria-components';
import {
  composeTailwindRenderProps,
  groupBox,
  groupFocusVisibleOutline,
} from './utils';
import { twMerge } from 'tailwind-merge';
import { DescriptionProvider, DescriptionContext, LabeledGroup } from './field';

export function SwitchGroup({ className, ...props }: GroupProps) {
  return (
    <LabeledGroup>
      <Group
        {...props}
        className={composeTailwindRenderProps(className, groupBox)}
      ></Group>
    </LabeledGroup>
  );
}

export function Switches({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex flex-col',
        // When any switch item has description, apply all `font-medium` to all switch item labels
        '[&_label]:has-[[data-ui=description]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

export function SwitchField({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          'group flex flex-col gap-y-1',
          '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-label-placement=start]]:pe-[calc(theme(width.8)+16px)]',
          '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-label-placement=end]]:ps-[calc(theme(width.8)+12px)]',
          '[&_label]:has-[[data-ui=description]]:font-medium',
          '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface SwitchProps extends RACSwitchProps {
  labelPlacement?: 'start' | 'end';
  render?: never;
}

export interface CustomRenderSwitchProps
  extends Omit<RACSwitchProps, 'children'> {
  render: React.ReactElement | ((props: SwitchRenderProps) => React.ReactNode);
  children?: never;
}

export function Switch({
  className,
  ...props
}: SwitchProps | CustomRenderSwitchProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    const { render, ...restProps } = props;

    return (
      <RACSwitch
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeTailwindRenderProps(className, [
          'group',
          'text-base/6 sm:text-sm/6',
          'disabled:opacity-50',
        ])}
      >
        {render}
      </RACSwitch>
    );
  }

  const { labelPlacement = 'end', children, ...restProps } = props;

  return (
    <RACSwitch
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-label-placement={labelPlacement}
      className={composeTailwindRenderProps(className, [
        'group flex items-center',
        'data-[label-placement=start]:flex-row-reverse',
        'data-[label-placement=start]:justify-between',
        'text-base/6 sm:text-sm/6',
        'disabled:opacity-50',
      ])}
    >
      {(renderProps) => (
        <>
          <div
            className={twMerge(
              'h-5 w-8',
              'flex shrink-0 cursor-default items-center rounded-full px-[1px] shadow-inner',
              labelPlacement === 'end' ? 'me-3' : 'ms-3',
              'bg-zinc-200',
              'dark:bg-transparent',
              'border',

              // readonly
              'group-data-[readonly]:opacity-50',

              // selected
              renderProps.isSelected && [
                'border-accent',
                'dark:border-0',
                'bg-accent',
                'dark:bg-accent',
                'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]',
              ],
              renderProps.isDisabled && ['bg-gray-200', 'dark:bg-zinc-700'],
              renderProps.isFocusVisible && groupFocusVisibleOutline,
            )}
          >
            <span
              data-ui="thumb"
              className={twMerge(
                'size-4',
                'rounded-full bg-white',
                'translate-x-0 transition-all ease-in-out',
                renderProps.isSelected && [
                  'translate-x-3',
                  'rtl:-translate-x-3',
                  'border-accent',
                ],
              )}
            />
          </div>
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </RACSwitch>
  );
}
