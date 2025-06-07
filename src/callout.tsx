import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Heading, HeadingProps } from './heading';
import { composeRenderProps, TextProps } from 'react-aria-components';
import { Text } from './text';
import { Button, ButtonProps } from './button';
import { XIcon } from './icons/outline/x';

const CalloutContext = React.createContext<{
  'aria-labelledby': string;
  'aria-describedby': string;
  inline?: boolean;
  center?: boolean;
}>({
  'aria-labelledby': '',
  'aria-describedby': '',
  inline: false,
  center: false,
});

const colors = {
  zinc: [
    '[--callout-color:var(--color-zinc-400)]',
    '[--callout-border:oklch(from_var(--callout-color)_l_c_h_/_25%)]',
    '[--callout-bg:oklch(from_var(--callout-color)_l_c_h_/_5%)]',
    '[--callout-heading:oklch(from_var(--callout-color)_calc(l_*_0.5)_c_h)]',
    'dark:[--callout-heading:oklch(from_var(--callout-color)_calc(l_*1.25)_c_h)]',
    '[--callout-description:oklch(from_var(--callout-color)_calc(l_*_0.75)_c_h)]',
    'dark:[--callout-description:oklch(from_var(--callout-color)_calc(l_*1)_c_h)]',
    '[--callout-icon:oklch(from_var(--callout-color)_calc(l_*_0.95)_c_h)]',
  ],
  red: [
    '[--callout-color:var(--color-red-400)]',
    '[--callout-border:oklch(from_var(--callout-color)_l_c_h_/_20%)]',
    '[--callout-bg:oklch(from_var(--callout-color)_l_c_h_/_10%)]',
    '[--callout-heading:oklch(from_var(--callout-color)_calc(l_*_0.75)_c_h)]',
    '[--callout-description:oklch(from_var(--callout-color)_calc(l_*_0.85)_c_h)]',
    '[--callout-icon:oklch(from_var(--callout-color)_calc(l_*_0.95)_c_h)]',
    '[--link:oklch(from_var(--callout-color)_calc(l_*_0.5)_c_h)]',
    'dark:[--link:oklch(from_var(--callout-color)_calc(l_*_1)_c_h)]',
  ],
  blue: [
    '[--callout-color:var(--color-blue-500)]',
    '[--callout-border:oklch(from_var(--callout-color)_l_c_h_/_20%)]',
    '[--callout-bg:oklch(from_var(--callout-color)_l_c_h_/_5%)]',
    '[--callout-heading:oklch(from_var(--callout-color)_calc(l_*_0.75)_c_h)]',
    '[--callout-description:oklch(from_var(--callout-color)_calc(l_*_0.85)_c_h)]',
    '[--callout-icon:oklch(from_var(--callout-color)_calc(l_*_0.95)_c_h)]',
    '[--link:oklch(from_var(--callout-color)_calc(l_*_0.5)_c_h)]',
    'dark:[--link:oklch(from_var(--callout-color)_calc(l_*_1)_c_h)]',
  ],
  yellow: [
    '[--callout-color:var(--color-yellow-600)]',
    '[--callout-border:oklch(from_var(--callout-color)_l_c_h_/_20%)]',
    '[--callout-bg:oklch(from_var(--callout-color)_l_c_h_/_5%)]',
    '[--callout-heading:oklch(from_var(--callout-color)_calc(l_*_0.75)_c_h)]',
    '[--callout-description:oklch(from_var(--callout-color)_calc(l_*_0.85)_c_h)]',
    '[--callout-icon:oklch(from_var(--callout-color)_calc(l_*_0.95)_c_h)]',
    '[--link:oklch(from_var(--callout-color)_calc(l_*_0.5)_c_h)]',
    'dark:[--link:oklch(from_var(--callout-color)_calc(l_*_1)_c_h)]',
  ],
  green: [
    '[--callout-color:var(--color-green-600)]',
    '[--callout-border:oklch(from_var(--callout-color)_l_c_h_/_20%)]',
    '[--callout-bg:oklch(from_var(--callout-color)_l_c_h_/_5%)]',
    '[--callout-heading:oklch(from_var(--callout-color)_calc(l_*_0.75)_c_h)]',
    '[--callout-description:oklch(from_var(--callout-color)_calc(l_*_0.85)_c_h)]',
    '[--callout-icon:oklch(from_var(--callout-color)_calc(l_*_0.95)_c_h)]',
    '[--link:oklch(from_var(--callout-color)_calc(l_*_0.5)_c_h)]',
    'dark:[--link:oklch(from_var(--callout-color)_calc(l_*_1)_c_h)]',
  ],
};

export type CalloutColor = keyof typeof colors;

type CalloutProps = {
  role?: React.AriaRole | null;
  children: React.ReactNode;
  color?: CalloutColor;
} & ({ inline?: never; center?: never } | { inline: true; center?: boolean }) &
  Omit<React.JSX.IntrinsicElements['div'], 'role'>;

export default function Callout({
  role,
  'aria-label': ariaLabel,
  inline,
  center,
  color,
  className,
  ...props
}: CalloutProps) {
  const labelId = React.useId();

  return (
    <CalloutContext.Provider
      value={{
        'aria-labelledby': labelId,
        inline,
        center,
        'aria-describedby': `des_${labelId}`,
      }}
    >
      <div
        {...props}
        {...(role !== null && { role: role ?? 'note' })}
        {...(ariaLabel
          ? { 'aria-label': ariaLabel }
          : role !== null && { 'aria-labelledby': labelId })}
        {...(role !== null && {
          'aria-describedby': `des_${labelId}`,
        })}
        className={twMerge(
          '[--callout-icon:var(--muted)]',
          '[--callout-border:var(--border)]',

          color
            ? colors[color]
            : [
                '[&:has(>[data-ui=callout-heading])]:[--callout-description:var(--muted)]',
              ],

          'group w-full border-(--callout-border) bg-(--callout-bg)',
          'grid grid-cols-[auto_1fr_auto_auto] px-4 py-2',

          center
            ? [
                'grid-cols-[auto_auto_auto_auto]',
                'sm:flex sm:[&>:first-child]:ms-auto',
                'sm:[&>:last-child:not([data-ui=callout-control])]:me-auto',
                'sm:[&>[data-ui=callout-control]]:ms-auto',
              ]
            : 'rounded-lg border',
          '[&:has([data-ui=callout-heading]+[data-ui=callout-description])]:[--callout-content-row-end:3]',
          className,
        )}
      />
    </CalloutContext.Provider>
  );
}

export function CalloutIcon({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      data-ui="callout-icon"
      className={twMerge(
        'col-start-1',
        'sm:row-start-1',
        'sm:row-end-(--callout-content-row-end)',
        'flex',
        'py-2',
        'me-2',
        '[&_[data-ui=icon]:not([class*=text-])]:text-(--callout-icon)',
        '[&_[data-ui=icon]:not([class*=size-])]:w-5',
        '[&_[data-ui=icon]:not([class*=size-])]:h-[1lh]',
        className,
      )}
    />
  );
}

export function CalloutTitle({
  displayLevel = 3,
  className,
  id,
  ...props
}: Omit<HeadingProps, 'level' | 'elementType'>) {
  const { 'aria-labelledby': ariaLabelledby, inline } =
    React.useContext(CalloutContext);

  return (
    <Heading
      {...props}
      id={id ?? ariaLabelledby}
      elementType="div"
      displayLevel={displayLevel}
      data-ui="callout-heading"
      className={twMerge(
        'col-start-2',
        '-col-end-2',
        inline && ['sm:-col-end-3'],
        'flex gap-x-2 gap-y-1 text-(--callout-heading)',
        '[&:has(+[data-ui=callout-description])]:pb-0',
        '[&+[data-ui=callout-description]]:pt-1',
        'py-2',
        className,
      )}
    />
  );
}

export function CalloutDescription({
  className,
  id,
  ...props
}: Omit<TextProps, 'elementType'>) {
  const { inline, 'aria-describedby': ariaDescribedBy } =
    React.useContext(CalloutContext);

  return (
    <Text
      {...props}
      elementType="div"
      id={id ?? ariaDescribedBy}
      data-ui="callout-description"
      className={twMerge(
        'text-(--callout-description)',
        'col-start-2',
        '-col-end-2 py-2',
        inline && ['sm:-col-end-3'],
        className,
      )}
    />
  );
}

export function CalloutActions({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  const { inline } = React.useContext(CalloutContext);

  return (
    <div
      {...props}
      data-ui="callout-actions"
      className={twMerge(
        'flex flex-wrap gap-2 ps-(--callout-indent)',
        'col-start-2',
        '-col-end-2',
        'py-2',
        '[--description-text:var(--callout-heading,var(--callout-description))]',
        // '[&>[data-variant=plain]:hover]:bg-transparent [&>[data-variant=plain]:hover]:text-(--description-text)',
        // '[&>[data-variant=link]:hover]::text-(--description-text) [&>[data-variant=link]:hover]:decoration-(--description-text)',
        inline && [
          'sm:ps-4',
          'sm:py-0.5',
          'sm:self-start',
          'sm:col-start-3',
          'sm:row-start-1',
          'sm:row-end-(--callout-content-row-end)',
        ],
        className,
      )}
    />
  );
}

export function CalloutControl({
  variant = 'plain',
  ...props
}: Omit<ButtonProps, 'children' | 'tooltip'>) {
  const { 'aria-label': ariaLabel, isIconOnly = true, ...restProps } = props;
  return (
    <div
      data-ui="callout-control"
      className={twMerge(
        '-col-start-1',
        'row-start-1',
        'row-end-(--callout-content-row-end)',
        'ms-2 -me-2 py-1.5 sm:py-0.5',
      )}
    >
      <Button
        {...restProps}
        isIconOnly={isIconOnly}
        variant={variant}
        className={composeRenderProps(props.className, (className) =>
          twMerge(
            'text-(--callout-icon)',
            'hover:bg-transparent',
            'hover:text-(--callout-heading)',
            'px-2 py-1.5 dark:hover:bg-transparent',
            className,
          ),
        )}
      >
        <XIcon aria-label={ariaLabel ?? 'Close'} className="size-4" />
      </Button>
    </div>
  );
}
