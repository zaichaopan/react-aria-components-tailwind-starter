import React from 'react';
import { getInitials, getInitialsToken } from './initials';
import { twMerge } from 'tailwind-merge';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

export type AvatarProps = {
  src?: string;
  alt: string;
  colorless?: boolean;
  fallback?: 'initials' | 'icon';
} & React.JSX.IntrinsicElements['div'];

export function Avatar({
  colorless = false,
  className,
  children,
  src,
  alt,
  fallback = 'initials',
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
          'group ring-background @container relative isolate flex size-10 shrink-0 rounded-lg',
          '[&.rounded-full>:is(svg,img)]:rounded-full [&>:is(svg,img)]:size-full [&>:is(svg,img)]:rounded-lg',
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        {status === 'error' ? (
          fallback === 'initials' ? (
            <FallbackInitials alt={alt} id={avatarId} colorless={colorless} />
          ) : (
            <FallbackIcon alt={alt} id={avatarId} colorless={colorless} />
          )
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

type AvatarFallback = {
  alt: string;
  id: string;
  colorless: boolean;
};

function FallbackIcon({ alt, id, colorless }: AvatarFallback) {
  const token = getInitialsToken(alt, colorless);

  return (
    <svg
      aria-hidden
      id={id}
      aria-label={alt}
      fill="currentColor"
      style={{ '--avatar-token': token } as React.CSSProperties}
      className="bg-(--avatar-token) text-zinc-50"
      viewBox="0 0 80 80"
    >
      <g>
        <path d="M 8 80 a 28 24 0 0 1 64 0"></path>
        <circle cx="40" cy="32" r="16"></circle>
      </g>
    </svg>
  );
}

function FallbackInitials({ alt, id, colorless }: AvatarFallback) {
  const initials = getInitials(alt);
  const token = getInitialsToken(alt, colorless);

  return (
    <svg
      aria-hidden
      id={id}
      aria-label={alt}
      fill="currentColor"
      viewBox="0 0 24 24"
      style={{ '--avatar-token': token } as React.CSSProperties}
      className="bg-(--avatar-token) font-medium text-zinc-50"
    >
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        textAnchor="middle"
        dy=".125em"
        fontSize="65%"
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
        'border-background bg-background absolute end-0 bottom-0 z-1 z-10 rounded-full border-2',
        'translate-x-[15%] translate-y-[20%]',
        'in-[.rounded-full]:translate-x-[35%] in-[.rounded-full]:translate-y-[5%] in-[.rounded-full]:rtl:translate-y-[45%]',
        '@-[40px]:in-[.rounded-full]:translate-x-[15%]',
        '@-[64px]:in-[.rounded-full]:-translate-x-[5%] @-[64px]:in-[.rounded-full]:-translate-y-[10%]',
        '@-[128px]:in-[.rounded-full]:translate-x-[-20%]',
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
        'flex items-center -space-x-2 rtl:space-x-reverse',
        '[&>[role=img]:not([class*=ring-4])]:ring-2',
        reverseOverlap &&
          'flex-row-reverse justify-end [&>[role=img]:last-of-type]:-me-2',
        className,
      )}
    />
  );
}
