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
    '[--callout:var(--color-zinc-500)]',
    '[--callout-border:color-mix(in_oklab,_var(--callout)_20%,_white)]',
    'dark:[--callout-border:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    '[--callout-bg:color-mix(in_oklab,_var(--callout)_5%,_white)]',
    'dark:[--callout-bg:color-mix(in_oklab,_var(--callout)_40%,_black)]',
    '[--callout-heading:color-mix(in_oklab,_var(--callout)_30%,_black)]',
    'dark:[--callout-heading:color-mix(in_oklab,_var(--callout)_50%,_white)]',
    '[--callout-description:color-mix(in_oklab,_var(--callout)_95%,_black)]',
    '[--callout-icon:color-mix(in_oklab,_var(--callout)_90%,_black)]',
    '[--link:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    'dark:[--link:color-mix(in_oklab,_var(--callout)_80%,_black)]',
  ],
  red: [
    '[--callout:var(--color-red-500)]',
    '[--callout-border:color-mix(in_oklab,_var(--callout)_30%,_white)]',
    'dark:[--callout-border:color-mix(in_oklab,_var(--callout)_40%,_black)]',
    '[--callout-bg:color-mix(in_oklab,_var(--callout)_10%,_white)]',
    'dark:[--callout-bg:color-mix(in_oklab,_var(--callout)_25%,_black)]',
    '[--callout-heading:color-mix(in_oklab,_var(--callout)_70%,_black)]',
    'dark:[--callout-heading:color-mix(in_oklab,_var(--callout)_85%,_black)]',
    '[--callout-description:color-mix(in_oklab,_var(--callout)_75%,_black)]',
    'dark:[--callout-description:color-mix(in_oklab,_var(--callout)_80%,_black)]',
    '[--callout-icon:color-mix(in_oklab,_var(--callout)_90%,_black)]',
    '[--link:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    'dark:[--link:color-mix(in_oklab,_var(--callout)_80%,_black)]',
  ],
  blue: [
    '[--callout:var(--color-blue-500)]',
    '[--callout-border:color-mix(in_oklab,_var(--callout)_35%,_white)]',
    'dark:[--callout-border:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    '[--callout-bg:color-mix(in_oklab,_var(--callout)_10%,_white)]',
    'dark:[--callout-bg:color-mix(in_oklab,_var(--callout)_25%,_black)]',
    '[--callout-heading:color-mix(in_oklab,_var(--callout)_70%,_black)]',
    'dark:[--callout-heading:color-mix(in_oklab,_var(--callout)_80%,_black)]',
    '[--callout-description:color-mix(in_oklab,_var(--callout)_80%,_black)]',
    'dark:[--callout-description:color-mix(in_oklab,_var(--callout)_75%,_black)]',
    '[--callout-icon:color-mix(in_oklab,_var(--callout)_90%,_black)]',
    '[--link:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    'dark:[--link:color-mix(in_oklab,_var(--callout)_80%,_black)]',
  ],
  yellow: [
    '[--callout:var(--color-yellow-500)]',
    '[--callout-border:color-mix(in_oklab,_var(--callout)_35%,_white)]',
    'dark:[--callout-border:color-mix(in_oklab,_var(--callout)_35%,_black)]',
    '[--callout-bg:color-mix(in_oklab,_var(--callout)_10%,_white)]',
    'dark:[--callout-bg:color-mix(in_oklab,_var(--callout)_25%,_black)]',
    '[--callout-heading:color-mix(in_oklab,_var(--callout)_55%,_black)]',
    'dark:[--callout-heading:color-mix(in_oklab,_var(--callout)_85%,_black)]',
    '[--callout-description:color-mix(in_oklab,_var(--callout)_60%,_black)]',
    'dark:[--callout-description:color-mix(in_oklab,_var(--callout)_75%,_black)]',
    '[--callout-icon:color-mix(in_oklab,_var(--callout)_90%,_black)]',
    '[--link:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    'dark:[--link:color-mix(in_oklab,_var(--callout)_80%,_black)]',
  ],
  green: [
    '[--callout:var(--color-green-500)]',
    '[--callout-border:color-mix(in_oklab,_var(--callout)_40%,_white)]',
    'dark:[--callout-border:color-mix(in_oklab,_var(--callout)_35%,_black)]',
    '[--callout-bg:color-mix(in_oklab,_var(--callout)_10%,_white)]',
    'dark:[--callout-bg:color-mix(in_oklab,_var(--callout)_25%,_black)]',
    '[--callout-heading:color-mix(in_oklab,_var(--callout)_70%,_black)]',
    'dark:[--callout-heading:color-mix(in_oklab,_var(--callout)_90%,_black)]',
    '[--callout-description:color-mix(in_oklab,_var(--callout)_65%,_black)]',
    '[--callout-icon:color-mix(in_oklab,_var(--callout)_90%,_black)]',
    '[--link:color-mix(in_oklab,_var(--callout)_50%,_black)]',
    'dark:[--link:color-mix(in_oklab,_var(--callout)_80%,_black)]',
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
            ? [
                colors[color],
                'dark:selection:bg-(--callout) dark:selection:text-white',
              ]
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
