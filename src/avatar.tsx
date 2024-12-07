import React from 'react';
import { getInitials, getInitialsToken } from './get-initials';
import { twMerge } from 'tailwind-merge';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

export type AvatarProps = {
  src?: string;
  alt: string;
  colorless?: boolean;
} & React.JSX.IntrinsicElements['div'];

export function Avatar({
  colorless = false,
  className,
  children,
  src,
  alt,
}: AvatarProps) {
  const badgeId = React.useId();
  const avatarId = React.useId();
  const ariaLabelledby = [avatarId, children ? badgeId : ''].join(' ');
  const status = useImageLoadingStatus(src);

  return (
    <AvatarContext.Provider value={{ badgeId }}>
      <div
        role="img"
        className={twMerge([
          'group relative flex size-10 shrink-0 items-center justify-center rounded-lg @container',
          'outline outline-1 -outline-offset-1 outline-black/5 ring-background dark:outline-white/20',
          '[&.rounded-full>svg]:rounded-full [&>svg]:size-full [&>svg]:rounded-lg',
          '[&.rounded-full>img]:rounded-full [&>img]:size-full [&>img]:rounded-lg',
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        {status === 'error' ? (
          <InitialAvatar alt={alt} id={avatarId} colorless={colorless} />
        ) : (
          <img
            aria-hidden
            id={avatarId}
            src={src}
            alt={alt}
            className="object-cover"
          />
        )}
        {children}
      </div>
    </AvatarContext.Provider>
  );
}

function InitialAvatar({
  alt,
  id,
  colorless,
}: {
  alt: string;
  id: string;
  colorless: boolean;
}) {
  const initials = getInitials(alt);
  const token = getInitialsToken(alt, colorless);

  return (
    <svg
      aria-hidden
      id={id}
      aria-label={alt}
      style={{
        background: `var(--${token})`,
      }}
      fill="currentColor"
      viewBox="0 0 24 24"
      className="font-medium text-white"
    >
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        textAnchor="middle"
        dy=".125em"
        fontSize="60%"
      >
        {initials}
      </text>
    </svg>
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
        '@[32px]:size-2/5 @[40px]:size-1/3 @[64px]:size-1/4 @[128px]:size-1/5',
        'z-1 absolute bottom-0 end-0 z-10 rounded-full border-2 border-background bg-background',
        'translate-x-[15%] translate-y-[20%]',
        '[.rounded-full_&]:translate-x-[35%] [.rounded-full_&]:translate-y-[5%] rtl:[.rounded-full_&]:translate-y-[45%]',
        '@[40px]:[.rounded-full_&]:translate-x-[15%]',
        '@[64px]:[.rounded-full_&]:-translate-x-[5%] @[64px]:[.rounded-full_&]:-translate-y-[10%]',
        '@[128px]:[.rounded-full_&]:translate-x-[-20%]',
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
        'flex items-center -space-x-1 rtl:space-x-reverse',
        '[&>[role=img]:not([class*=ring-4])]:ring-2',
        reverseOverlap &&
          'flex-row-reverse justify-end ps-2 [&>[role=img]:first-of-type]:-ms-1',
        className,
      )}
    />
  );
}
