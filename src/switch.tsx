import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  composeRenderProps,
  Group,
  GroupProps,
  Switch as RACSwitch,
  SwitchProps as RACSwitchProps,
  SwitchRenderProps,
} from 'react-aria-components';
import { groupBox, composeTailwindRenderProps } from './utils';
import { DescriptionProvider, DescriptionContext, LabeledGroup } from './field';

export function SwitchGroup(props: GroupProps) {
  return (
    <LabeledGroup>
      <Group
        {...props}
        className={composeTailwindRenderProps(props.className, groupBox)}
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
      {...props}
      data-ui="box"
      className={twMerge(
        'flex flex-col',
        // When any switch item has description, apply all `font-medium` to all switch item labels
        '[&_label]:has-[[data-ui=description]]:font-medium',
        className,
      )}
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

export function Switch(props: SwitchProps | CustomRenderSwitchProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    const { render, ...restProps } = props;

    return (
      <RACSwitch
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeRenderProps(
          props.className,
          (className, { isDisabled }) =>
            twMerge(
              'group text-base/6 sm:text-sm/6',
              isDisabled && 'opacity-50',
              className,
            ),
        )}
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
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) =>
          twMerge(
            'group flex items-center text-base/6 sm:text-sm/6',
            labelPlacement === 'start' && 'flex-row-reverse justify-between',
            isDisabled && 'opacity-50',
            className,
          ),
      )}
    >
      {(renderProps) => (
        <>
          <div
            className={twMerge(
              'h-5 w-8',
              'flex shrink-0 cursor-default items-center rounded-full px-[1px] shadow-inner',
              'bg-zinc-200 dark:bg-transparent',
              'border',
              labelPlacement === 'end' ? 'me-3' : 'ms-3',
              renderProps.isReadOnly && 'opacity-50',
              renderProps.isSelected &&
                'border-black/10 bg-accent dark:bg-accent',
              renderProps.isDisabled && 'bg-gray-200 dark:bg-zinc-700',
              renderProps.isFocusVisible &&
                'outline outline-2 outline-offset-2 outline-ring',
            )}
          >
            <span
              data-ui="thumb"
              className={twMerge(
                'size-4 rounded-full bg-white transition-all ease-in-out',
                renderProps.isSelected
                  ? 'translate-x-3 border-accent rtl:-translate-x-3'
                  : 'translate-x-0',
              )}
            />
          </div>
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </RACSwitch>
  );
}
