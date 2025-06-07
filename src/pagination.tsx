import { twMerge } from 'tailwind-merge';
import { getButtonStyles } from './button';
import { Link } from './link';
import { LinkProps } from 'react-aria-components';
import { ChevronLeftIcon } from './icons/outline/chevron-left';
import { ChevronRightIcon } from './icons/outline/chevron-right';

export function Pagination({
  className,
  'aria-label': arialLabel = 'Page navigation',
  ...props
}: React.JSX.IntrinsicElements['nav']) {
  return (
    <nav
      role="navigation"
      aria-label={arialLabel}
      className={twMerge(
        'mx-auto flex w-full justify-center gap-x-2',
        className,
      )}
      {...props}
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
  label = 'Previous',
  ...props
}: LinkProps & { className?: string; label?: string }) {
  return (
    <Link
      {...props}
      className={getButtonStyles({ variant: 'plain' }, [
        'px-3.5 outline-offset-0 hover:no-underline',
        className,
      ])}
    >
      <ChevronLeftIcon />
      {label}
    </Link>
  );
}

export function PaginationNext({
  className,
  label = 'Next',
  ...props
}: LinkProps & { className?: string; label?: string }) {
  return (
    <Link
      {...props}
      className={getButtonStyles({ variant: 'plain' }, [
        'px-3.5 outline-offset-1 hover:no-underline',
        className,
      ])}
    >
      {label}
      <ChevronRightIcon />
    </Link>
  );
}

export function PaginationPage({
  className,
  current,
  'aria-label': arialLabel,
  ...props
}: LinkProps & { className?: string; current?: boolean; children: string }) {
  return (
    <Link
      {...props}
      aria-label={arialLabel ?? `Page ${props.children}`}
      className={getButtonStyles({ variant: 'plain' }, [
        'min-w-9 outline-offset-1 hover:no-underline',
        !current && '[&:not(:hover)]:text-muted',
        className,
      ])}
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
      className={twMerge('[&:not(:hover)]:text-muted h-9 px-3.5', className)}
    >
      &hellip;
    </span>
  );
}
