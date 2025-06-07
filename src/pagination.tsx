import { twMerge } from 'tailwind-merge';
import { ButtonVariant, getButtonStyles } from './button';
import { Link } from './link';
import { LinkProps } from 'react-aria-components';
import { ChevronLeftIcon } from './icons/outline/chevron-left';
import { ChevronRightIcon } from './icons/outline/chevron-right';

export function Pagination({
  className,
  'aria-label': arialLabel = 'Page navigation',
  ...props
}: React.JSX.IntrinsicElements['nav'] & {
  compact?: boolean;
}) {
  return (
    <nav
      {...props}
      role="navigation"
      aria-label={arialLabel}
      className={twMerge('flex items-center justify-center gap-x-2', className)}
    />
  );
}

export function PaginationList({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div {...props} className={twMerge('hidden gap-x-1 sm:flex', className)} />
  );
}

export function PaginationPrevious({
  className,
  isIconOnly,
  variant = 'plain',
  children,
  ...props
}: LinkProps & {
  className?: string;
  isIconOnly?: boolean;
  variant?: ButtonVariant;
}) {
  return (
    <Link
      {...props}
      className={getButtonStyles({ variant, isIconOnly }, [
        'px-3.5 outline-offset-0 hover:no-underline',
        className,
      ])}
    >
      {children ? (
        children
      ) : (
        <>
          <ChevronLeftIcon />
          Previous
        </>
      )}
    </Link>
  );
}

export function PaginationNext({
  className,
  isIconOnly = false,
  variant = 'plain',
  children,
  ...props
}: LinkProps & {
  className?: string;
  isIconOnly?: boolean;
  variant?: ButtonVariant;
}) {
  return (
    <Link
      {...props}
      className={getButtonStyles({ variant, isIconOnly }, [
        'px-3.5 outline-offset-1 hover:no-underline',
        className,
      ])}
    >
      {children ? (
        children
      ) : (
        <>
          Next
          <ChevronRightIcon />
        </>
      )}
    </Link>
  );
}

export function PaginationPage({
  className,
  current,
  'aria-label': arialLabel,
  variant = 'outline',
  ...props
}: LinkProps & {
  className?: string;
  current?: boolean;
  children: string;
  variant?: ButtonVariant;
}) {
  return (
    <Link
      {...props}
      aria-label={arialLabel ?? `Page ${props.children}`}
      className={getButtonStyles(
        { variant: current ? variant : 'plain', isIconOnly: true },
        [
          'min-w-9 outline-offset-1 hover:no-underline',
          !current && 'not-hover:text-muted',
          className,
        ],
      )}
    />
  );
}

export function PaginationGap({
  className,
  ...props
}: React.JSX.IntrinsicElements['span']) {
  return (
    <span
      {...props}
      aria-hidden
      className={twMerge('not-hover:text-muted h-9 px-3.5', className)}
    >
      &hellip;
    </span>
  );
}
