import { ChevronRight } from 'lucide-react';
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
        <ChevronRight className="h-3 w-3 text-gray-600 dark:text-zinc-400" />
      )}
    </AriaBreadcrumb>
  );
}
