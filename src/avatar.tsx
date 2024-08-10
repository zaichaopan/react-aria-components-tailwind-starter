import React from 'react';
import { getInitials, getInitialsToken } from './get-initials';
import { twMerge } from 'tailwind-merge';
import { Icon } from './icon';
import { useImageLoadingStatus } from './hooks/use-image-loading-status';

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

function useAvatarContext() {
  const context = React.useContext(AvatarContext);

  if (!context) {
    throw new Error('<AvatarContext.Provider> is required');
  }

  return context;
}

type AvatarProps = {
  src?: string;
  alt: string;
  colorless?: boolean;
} & JSX.IntrinsicElements['div'];

const avatarStyle =
  'h-full w-full rounded-lg [.rounded-full_&]:rounded-full object-cover fill-current font-medium text-white';

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
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        {status === 'loaded' ? (
          <img
            aria-hidden
            id={avatarId}
            className={avatarStyle}
            src={src}
            alt={alt}
          />
        ) : (
          <InitialAvatar alt={alt} id={avatarId} colorless={colorless} />
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
      viewBox="0 0 24 24"
      className={avatarStyle}
      id={id}
      aria-label={alt}
      style={{
        background: `var(--${token})`,
      }}
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
  'aria-label': string;
};

export const AvatarBadge = ({
  'aria-label': ariaLabel,
  badge,
  ...props
}: AvatarBadgeProps) => {
  const context = useAvatarContext();

  return (
    <span
      aria-hidden
      id={context.badgeId}
      className={twMerge([
        '@[32px]:w-2/5 @[40px]:w-1/3 @[80px]:w-1/4 @[96px]:w-1/4',
        'z-1 absolute bottom-0 right-0 z-10 rounded-full border-2 border-background bg-background',
        'translate-x-[15%] translate-y-[20%]',
        '[.rounded-full_&]:translate-x-[35%] [.rounded-full_&]:translate-y-[5%]',
        '@[40px]:[.rounded-full_&]:translate-x-[15%]',
        '@[80px]:[.rounded-full_&]:-translate-x-[5%] @[80px]:[.rounded-full_&]:-translate-y-[10%]',
        '@[96px]:[.rounded-full_&]:translate-x-[-10%]',
        props.className,
      ])}
    >
      <Icon aria-label={ariaLabel}>{badge}</Icon>
    </span>
  );
};

type AvatarGroupProps = {
  max?: number;
  children?: React.ReactNode;
  avatars: {
    items: Array<Pick<AvatarProps, 'src' | 'alt'>>;
  } & Pick<AvatarProps, 'colorless' | 'className'> &
    JSX.IntrinsicElements['div'];
};

export function AvatarGroup({
  max,
  avatars,
  children,
  ...props
}: AvatarGroupProps) {
  const { items, className, ...avatarProps } = avatars;

  const displayItems = max
    ? items.slice(0, Math.min(max, items.length))
    : items;

  return (
    <div className="flex items-center rounded-lg py-0.5" {...props}>
      <div className="flex items-center -space-x-2 rtl:space-x-reverse">
        {displayItems.map((item, index) => {
          return (
            <Avatar
              {...avatarProps}
              {...item}
              key={index}
              className={twMerge('ring-2 ring-background', className)}
            />
          );
        })}
        {children}
      </div>
    </div>
  );
}
