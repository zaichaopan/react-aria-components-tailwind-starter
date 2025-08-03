import { twMerge } from 'tailwind-merge';
import { Link, LinkProps } from './link';
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
  variant = 'plain',
  children,
  ...props
}: Omit<LinkProps, 'isIconOnly'> & {
  className?: string;
  isIconOnly?: boolean;
}) {
  return (
    <Link
      {...props}
      variant={variant}
      className={twMerge('px-3.5 outline-offset-0', className)}
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
  variant = 'plain',
  children,
  ...props
}: Omit<LinkProps, 'isIconOnly'> & {
  className?: string;
  isIconOnly?: boolean;
}) {
  return (
    <Link
      {...props}
      variant={variant}
      className={twMerge('px-3.5 outline-offset-1', className)}
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
}: Omit<LinkProps, 'isIconOnly'> & {
  className?: string;
  current?: boolean;
  children: string;
}) {
  variant = current ? variant : 'plain';

  return (
    <Link
      {...props}
      variant={variant}
      isIconOnly
      aria-label={arialLabel ?? `Page ${props.children}`}
      className={twMerge('min-w-9 outline-offset-1', className)}
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
