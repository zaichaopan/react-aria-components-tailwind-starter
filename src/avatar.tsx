import React from 'react';
import { FallbackAvatarProps, getFallbackAvatarDataUrl } from './initials';
import { twMerge } from 'tailwind-merge';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

export type AvatarProps = {
  src?: string;
  alt: string;
} & FallbackAvatarProps &
  React.JSX.IntrinsicElements['div'];

export function Avatar({
  className,
  children,
  src,
  alt,
  fallback = 'initials',
  colorful,
  fallbackBackground,
  ...props
}: AvatarProps) {
  const badgeId = React.useId();
  const avatarId = React.useId();
  const ariaLabelledby = [avatarId, children ? badgeId : ''].join(' ');
  const status = useImageLoadingStatus(src);

  return (
    <AvatarContext.Provider value={{ badgeId }}>
      <div
        {...props}
        role="img"
        className={twMerge([
          'group ring-background @container relative isolate flex size-10 shrink-0',
          '[--border-radius:var(--radius-lg)]',
          '[&.rounded-full]:[--border-radius:calc(infinity_*_1px)]',
          'rounded-[radius:var(--border-radius)]',
          '[&>img]:rounded-[var(--border-radius)]',
          '[&>img]:size-full',
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        <img
          aria-hidden
          id={avatarId}
          src={
            status === 'error'
              ? getFallbackAvatarDataUrl({
                  fallback,
                  alt,
                  ...(colorful === undefined
                    ? { fallbackBackground }
                    : { colorful }),
                })
              : src
          }
          alt={alt}
          className={twMerge(
            'object-cover',
            // size
            '[--badge-size:8px] [&+[data-ui=badge]]:[--badge-size:8px]',
            '@[32px]:[--badge-size:10px] @[32px]:[&+[data-ui=badge]]:[--badge-size:10px]',
            '@[48px]:[--badge-size:12px] @[48px]:[&+[data-ui=badge]]:[--badge-size:12px]',
            '@[64px]:[--badge-size:16px] @[64px]:[&+[data-ui=badge]]:[--badge-size:16px]',
            '@[96px]:[--badge-size:20px] @[96px]:[&+[data-ui=badge]]:[--badge-size:20px]',
            '@[120px]:[--badge-size:24px] @[120px]:[&+[data-ui=badge]]:[--badge-size:24px]',
            '@[128px]:[--badge-size:26px] @[128px]:[&+[data-ui=badge]]:[--badge-size:26px]',
            '[--badge-gap:2px]',
            '@[120px]:[--badge-gap:3px]',
            '[&:has(+[data-ui=badge])]:[mask:radial-gradient(circle_at_bottom_calc(var(--badge-size)/2)_right_calc(var(--badge-size)/2),_transparent_calc(var(--badge-size)/2_+_var(--badge-gap)_-_0.25px),_white_calc(var(--badge-size)/2_+_var(--badge-gap)_+_0.25px))]',
            '[&+[data-ui=badge]:not([class*=size-])]:size-(--badge-size)',
            '[&+[data-ui=badge]>[data-ui=icon]:not([class*=size-])]:size-full',
          )}
        />
        {children}
      </div>
    </AvatarContext.Provider>
  );
}

type AvatarBadgeProps = {
  className?: string;
  badge: React.ReactNode;
};

export const AvatarBadge = ({ badge, ...props }: AvatarBadgeProps) => {
  const context = React.useContext(AvatarContext);

  if (!context) {
    throw new Error('<AvatarContext.Provider> is required');
  }

  return (
    <span
      aria-hidden
      data-ui="badge"
      id={context.badgeId}
      className={twMerge([
        'bg-background absolute end-0 bottom-0 grid place-items-center rounded-full bg-clip-content',
        props.className,
      ])}
    >
      {badge}
    </span>
  );
};

type AvatarGroupProps = {
  reverseOverlap?: boolean;
} & React.JSX.IntrinsicElements['div'];

export function AvatarGroup({
  reverseOverlap = false,
  className,
  ...props
}: AvatarGroupProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'isolate flex items-center -space-x-2 rtl:space-x-reverse',
        '[&>[role=img]:not([class*=ring-4])]:ring-2',
        reverseOverlap &&
          'flex-row-reverse justify-end [&>[role=img]:last-of-type]:-me-2',
        className,
      )}
    />
  );
}
