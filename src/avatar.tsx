import React from 'react';
import { FallbackAvatarProps, getFallbackAvatarDataUrl } from './initials';
import { twMerge } from 'tailwind-merge';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

const sizes = {
  16: '[--size:--spacing(4)]',
  20: '[--size:--spacing(5)]',
  24: '[--size:--spacing(6)]',
  28: '[--size:--spacing(7)]',
  32: '[--size:--spacing(8)] [--badge-size:10px]',
  36: '[--size:--spacing(9)] [--badge-size:10px]',
  40: '[--size:--spacing(10)] [--badge-size:10px]',
  48: '[--size:--spacing(12)] [--badge-size:10px]',
  56: '[--size:--spacing(14)] [--badge-size:10px]',
  64: '[--size:--spacing(16)] [--badge-size:16px]',
  72: '[--size:--spacing(18)] [--badge-size:16px]',
  96: '[--size:--spacing(24)] [--badge-size:20px]',
  120: '[--size:--spacing(30)] [--badge-size:24px] [--badge-gap:3px]',
  128: '[--size:--spacing(34)] [--badge-size:26px] [--badge-gap:3px]',
};

export type AvatarProps = {
  src?: string;
  alt: string;
  size?: keyof typeof sizes;
} & FallbackAvatarProps &
  React.JSX.IntrinsicElements['div'];

export function Avatar({
  className,
  children,
  src,
  alt,
  size = 40,
  fallback = 'initials',
  colorful,
  background,
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
        aria-labelledby={ariaLabelledby}
        role="img"
        className={twMerge([
          'relative isolate flex size-(--size) shrink-0 rounded-lg [--badge-gap:2px] [--badge-size:8px]',
          status === 'loaded' &&
            'dark:outline dark:-outline-offset-1 dark:outline-white/10',
          status === 'loading' && 'skeleton',
          sizes[size],
          className,
        ])}
      >
        <img
          aria-hidden
          id={avatarId}
          src={
            status === 'error'
              ? getFallbackAvatarDataUrl({
                  fallback,
                  alt,
                  ...(colorful === undefined ? { background } : { colorful }),
                })
              : src
          }
          alt={alt}
          className={twMerge(
            'size-full rounded-lg object-cover in-[.rounded-full]:rounded-full',
            '[&:has(+[data-ui=avatar-badge])]:[mask:radial-gradient(circle_at_bottom_calc(var(--badge-size)/2)_right_calc(var(--badge-size)/2),_transparent_calc(var(--badge-size)/2_+_var(--badge-gap)_-_0.25px),_white_calc(var(--badge-size)/2_+_var(--badge-gap)_+_0.25px))]',
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
      data-ui="avatar-badge"
      id={context.badgeId}
      className={twMerge([
        'bg-background absolute end-0 bottom-0 grid size-(--badge-size) place-items-center rounded-full bg-clip-content [&>[data-ui=icon]:not([class*=size-])]:size-full',
        props.className,
      ])}
    >
      {badge}
    </span>
  );
};

type AvatarGroupProps = {
  reverse?: boolean;
} & React.JSX.IntrinsicElements['div'];

export function AvatarGroup({
  reverse = false,
  className,
  ...props
}: AvatarGroupProps & {
  'aria-label': string;
}) {
  return (
    <div
      {...props}
      role="group"
      className={twMerge(
        'isolate flex items-center -space-x-2 rtl:space-x-reverse',
        '[&>[role=img]:not([class*=ring-4])]:ring-2',
        '[&>[role=img]:not([class*=ring-])]:ring-background',
        reverse &&
          'flex-row-reverse justify-end [&>[role=img]:last-of-type]:-me-2',
        className,
      )}
    />
  );
}
