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

type SwitchGroupVariant = {
  labelPlacement?: 'start' | 'end';
};

const SwitchGroupVariantContext =
  React.createContext<SwitchGroupVariant | null>(null);

const useSwitchGroupVariantContext = () => {
  const { labelPlacement = 'end' } =
    React.useContext(SwitchGroupVariantContext) ?? {};

  return {
    labelPlacement,
  } as SwitchGroupVariant;
};

export function SwitchGroup({
  labelPlacement = 'end',
  ...props
}: GroupProps & SwitchGroupVariant) {
  return (
    <SwitchGroupVariantContext.Provider value={{ labelPlacement }}>
      <LabeledGroup>
        <Group
          {...props}
          className={composeTailwindRenderProps(props.className, groupBox)}
        ></Group>
      </LabeledGroup>
    </SwitchGroupVariantContext.Provider>
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
        'gap-y-3',
        'has-data-[ui=description]:gap-y-4',
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
  const { labelPlacement } = useSwitchGroupVariantContext();

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

  const {
    labelPlacement: itemLabelPlacement,
    size,
    children,
    ...restProps
  } = props;
  const placement = itemLabelPlacement ?? labelPlacement;

  return (
    <RACSwitch
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-label-placement={placement}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) =>
          twMerge(
            'group flex items-center text-base/6 sm:text-sm/6',
            placement === 'start' && 'flex-row-reverse justify-between',
            isDisabled && 'opacity-50',
            className,
          ),
      )}
    >
      {(renderProps) => (
        <>
          <SwitchToggle
            className={twMerge([placement === 'end' ? 'me-3' : 'ms-3'])}
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
        '[--__thumb-size:var(--thumb-size,--spacing(4))]',
        '[--__switch-bg:var(--switch-bg,var(--accent))]',
        'h-[calc(var(--__thumb-size)+calc(--spacing(0.5)*2))]',
        'w-[calc(calc(var(--__thumb-size)+calc(--spacing(0.5)))*2)]',
        'flex shrink-0 items-center rounded-full p-0.5',

        '[--handle-selected:lch(from_var(--__switch-bg)_calc((64.28_-_l)_*_infinity)_0_0)]',
        '[--switch-focus-ring:color-mix(in_oklab,_var(--__switch-bg)_65%,_var(--handle-selected))]',

        // Readonly
        'in-[&:is([data-ui=content],label)[data-readonly=true]]:opacity-50',

        // Focus visible
        'in-[&:is([data-ui=content],label)[data-focus-visible=true]]:outline-(--switch-focus-ring)',
        'in-[&:is([data-ui=content],label)[data-focus-visible=true]]:outline-2',
        'in-[&:is([data-ui=content],label)[data-focus-visible=true]]:outline-offset-3',

        'ring-1',
        'ring-(--switch-ring)',
        '[--switch-ring:var(--color-zinc-400)]/50',

        // When hover
        'in-[&:is([data-ui=content],label)[data-hovered=true]]:[--switch-ring:var(--color-zinc-400)]/75',

        // When selected
        'in-[&:is([data-ui=content],label)[data-selected=true]]:[--switch-ring:color-mix(in_oklab,_var(--__switch-bg)_90%,_black)]',

        // Dark
        // Use inset ring
        'dark:ring-0',
        'dark:inset-ring-1',
        'dark:inset-ring-white/10',
        // When hover
        'dark:in-[&:is([data-ui=content],label)[data-hovered=true]]:inset-ring-white/30',
        // When selected
        'dark:in-[&:is([data-ui=content],label)[data-selected=true]]:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]',

        // Bg
        'bg-zinc-200 dark:bg-zinc-700',

        // Selected
        'in-[&:is([data-ui=content],label)[data-selected=true]]:bg-(--__switch-bg)',
        'in-[&:is([data-ui=content],label)[data-selected=true]]:dark:bg-(--__switch-bg)',
        'in-[&:is([data-ui=content],label)[data-selected=true]]:ring-(--switch-ring)',
        className,
      )}
    >
      <span
        data-ui="handle"
        className={twMerge(
          'size-(--__thumb-size)',
          'rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.25)] transition-all ease-in-out',
          // When it is inside menu item and the item is selected
          'in-[&:is([data-ui=content],label)[data-selected=true]]:translate-x-(--__thumb-size)',
          'in-[&:is([data-ui=content],label)[data-selected=true]]:rtl:-translate-x-(--__thumb-size)',
          'in-[&:is([data-ui=content],label)[data-selected=true]]:bg-(--handle-selected)',
        )}
      />
    </div>
  );
}
