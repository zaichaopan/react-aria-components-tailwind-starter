import { twMerge } from 'tailwind-merge';
import { TextProps } from 'react-aria-components';
import { Text } from './Text';
import { Heading, HeadingProps } from './Heading';
import { Icon } from './Icon';

export function BlankSlate({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-full w-full flex-1 flex-col items-center justify-center gap-1 p-4 text-center @container',
        className,
      )}
    />
  );
}

export function BlankSlateIcon({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex max-w-32 items-center justify-center @md:max-w-40 [&>svg]:h-auto [&>svg]:max-w-full',
        className,
      )}
    >
      <Icon>{children}</Icon>
    </div>
  );
}

export function BlankSlateHeading({
  className,
  level = 2,
  ...props
}: HeadingProps) {
  return (
    <Heading
      {...props}
      level={level}
      className={twMerge('mt-1 text-balance', className)}
    />
  );
}

export function BlankSlateDescription({ className, ...props }: TextProps) {
  return (
    <Text
      {...props}
      className={twMerge('m-1 max-w-prose text-balance', className)}
    />
  );
}

export function BlankSlateActions({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-3 flex flex-1 flex-col items-center justify-center gap-4 p-2',
        className,
      )}
    />
  );
}
