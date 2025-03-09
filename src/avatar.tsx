import React from 'react';
import { getFallbackAvatarDataUrl } from './initials';
import { twMerge } from 'tailwind-merge';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

export type AvatarProps = {
  src?: string;
  alt: string;
  colorful?: boolean;
  fallback?: 'initials' | 'icon';
} & React.JSX.IntrinsicElements['div'];

export function Avatar({
  colorful = false,
  className,
  children,
  src,
  alt,
  fallback = 'initials',
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
          'group ring-background @container relative isolate flex size-10 shrink-0 rounded-lg',
          '[&.rounded-full>img]:rounded-full [&>img]:size-full [&>img]:rounded-lg',
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        <img
          aria-hidden
          id={avatarId}
          src={
            status === 'error'
              ? getFallbackAvatarDataUrl({ fallback, alt, colorful })
              : src
          }
          alt={alt}
          className="object-cover"
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
      id={context.badgeId}
      className={twMerge([
        'grid place-items-center',
        'bg-background border-background rounded-full border-2 @[128px]:border-4',

        '[&>[data-ui=icon]:not([class*=size-])]:size-full',

        // size
        '@[28px]:[--badge-size:45%]',
        '@[32px]:[--badge-size:40%]',
        '@[40px]:[--badge-size:33.33%]',
        '@[64px]:[--badge-size:25%]',
        '@[128px]:[--badge-size:20%]',
        'size-(--badge-size,55%)',

        // position
        'absolute end-0 bottom-0 z-10',
        '[--badge-x:2px]',
        '@-[64px]:in-[.rounded-full]:[--badge-x:-5%]',
        '@-[128px]:in-[.rounded-full]:[--badge-x:-20%]',
        '@-[128px]:[--badge-x:15%]',
        'translate-x-(--badge-x)',

        '[--badge-y:4px]',
        '@-[64px]:in-[.rounded-full]:[--badge-y:-10%]',
        '@-[128px]:in-[.rounded-full]:[--badge-y:-20%]',
        'translate-y-(--badge-y)',

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
