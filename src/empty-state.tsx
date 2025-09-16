import { twMerge } from 'tailwind-merge';
import { TextProps } from 'react-aria-components';
import { Text } from './text';
import { Heading, HeadingProps } from './heading';

export function EmptyState({
  className,
  align = 'center',
  ...props
}: React.JSX.IntrinsicElements['div'] & {
  align?: 'start' | 'center';
}) {
  return (
    <div
      {...props}
      data-align={align}
      className={twMerge(
        '@container mx-auto flex h-full w-full flex-col justify-center gap-1 p-4',
        align === 'start'
          ? 'max-w-96 items-start'
          : 'max-w-prose items-center text-center',
        className,
      )}
    />
  );
}

export function EmptyStateIcon({
  className,
  children,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'mb-2 flex max-w-32 items-center justify-center @md:max-w-40',
        '[&>svg:not([class*=text-])]:text-muted [&>svg]:h-auto [&>svg]:max-w-full [&>svg]:min-w-12',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function EmptyStateTitle({
  className,
  level = 2,
  displayLevel,
  elementType,
  ...props
}: HeadingProps) {
  if (elementType && !displayLevel) {
    displayLevel = 2;
  }

  return (
    <Heading
      {...props}
      displayLevel={displayLevel}
      {...(elementType
        ? { elementType }
        : {
            level: level,
          })}
      className={twMerge('in-data-[align=center]:text-balance', className)}
    />
  );
}

export function EmptyStateDescription({ className, ...props }: TextProps) {
  return (
    <Text
      {...props}
      className={twMerge('in-data-[align=center]:text-balance', className)}
    />
  );
}

export function EmptyStateActions({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-3 flex flex-wrap items-center gap-4 py-2 in-data-[align=center]:justify-center',
        className,
      )}
    />
  );
}