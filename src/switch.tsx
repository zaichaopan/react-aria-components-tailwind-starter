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
        'has-data-[ui=description]:[&_label]:font-medium',
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
          'has-[label[data-label-placement=start]]:[&_[data-ui=description]:not([class*=pe-])]:pe-[calc(theme(width.8)+16px)]',
          'has-[label[data-label-placement=end]]:[&_[data-ui=description]:not([class*=ps-])]:ps-[calc(theme(width.8)+12px)]',
          'has-data-[ui=description]:[&_label]:font-medium',
          'has-[label[data-disabled]]:**:data-[ui=description]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface SwitchProps extends RACSwitchProps {
  labelPlacement?: 'start' | 'end';
  size?: 'lg';
  render?: never;
}

export interface CustomRenderSwitchProps
  extends Omit<RACSwitchProps, 'children'> {
  render: React.ReactElement | ((props: SwitchRenderProps) => React.ReactNode);
  children?: never;
  size?: never;
  labelPlacement?: never;
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

  const { labelPlacement = 'end', size, children, ...restProps } = props;

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
          <SwitchToggle
            className={twMerge([
              'h-6 w-11',
              labelPlacement === 'end' ? 'me-3' : 'ms-3',

              '[&>[data-ui=handle]]:size-5',
              renderProps.isSelected &&
                'rtl:[&>[data-ui=handle]]-translate-x-5 [&>[data-ui=handle]]:translate-x-5',

              size === 'lg'
                ? []
                : [
                    'sm:h-5 sm:w-8',
                    'sm:[&>[data-ui=handle]]:size-4',
                    renderProps.isSelected &&
                      'sm:[&>[data-ui=handle]]:translate-x-3 sm:rtl:[&>[data-ui=handle]]:-translate-x-3',
                  ],
            ])}
            renderProps={renderProps}
          />
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </RACSwitch>
  );
}

type SwitchToggleProps = {
  renderProps?: Partial<SwitchRenderProps>;
} & Omit<React.JSX.IntrinsicElements['div'], 'children'>;

export function SwitchToggle({
  renderProps,
  className,
  ...props
}: SwitchToggleProps) {
  return (
    <div
      {...props}
      data-check-indicator
      className={twMerge(
        'flex h-5 w-8 shrink-0 cursor-default items-center rounded-full bg-zinc-200 p-0.5 ring-1 ring-zinc-300/90 dark:bg-zinc-700 dark:ring-0 dark:inset-ring-1 dark:inset-ring-white/10',

        renderProps?.isReadOnly
          ? 'opacity-50'
          : renderProps?.isHovered &&
              'ring-zinc-400/70 dark:inset-ring-white/15',
        renderProps?.isSelected &&
          'bg-accent dark:bg-accent ring-accent inset-ring-[rgba(255,255,255,0.1)]',
        renderProps?.isDisabled && 'bg-gray-200 dark:bg-zinc-700',
        renderProps?.isFocusVisible &&
          'outline-ring outline-2 outline-offset-3',

        // When it is inside menu item and the item is selected
        'in-[&[data-ui=content][data-hovered=true]]:ring-zinc-400/70',
        'in-[&[data-ui=content][data-hovered=true]]:dark:inset-ring-white/15',


        'in-[&[data-ui=content][data-selected=true]]:bg-accent',
        'in-[&[data-ui=content][data-selected=true]]:dark:bg-accent',
        'in-[&[data-ui=content][data-selected=true]]:ring-accent',
        'in-[&[data-ui=content][data-selected=true]]:inset-ring-[rgba(255,255,255,0.1)]',

        className,
      )}
    >
      <span
        data-ui="handle"
        className={twMerge(
          'size-4',
          'rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.25)] transition-all ease-in-out',

          // When it is inside menu item and the item is selected
          'in-[&[data-ui=content][data-selected=true]]:translate-x-3',
          'in-[&[data-ui=content][data-selected=true]]:rtl:-translate-x-3',
          'in-[&[data-ui=content][data-selected=true]]:bg-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',

          renderProps?.isSelected && [
            'translate-x-3 bg-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)] rtl:-translate-x-3',
          ],
        )}
      />
    </div>
  );
}
