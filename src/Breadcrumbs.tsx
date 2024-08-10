import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  BreadcrumbProps,
  BreadcrumbsProps,
  LinkProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Link } from './Link';
import { composeTailwindRenderProps } from './utils';

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={twMerge('flex gap-1', props.className)}
    />
  );
}

export function Breadcrumb({
  className,
  ...props
}: BreadcrumbProps & LinkProps) {
  return (
    <AriaBreadcrumb
      {...props}
      className={composeTailwindRenderProps(
        className as BreadcrumbProps['className'],
        'flex items-center gap-1',
      )}
    >
      <Link
        {...props}
        className="underline underline-offset-2 disabled:opacity-100 [&:not(:hover)]:decoration-muted"
      />
      {props.href && (
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3 text-muted"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </AriaBreadcrumb>
  );
}
