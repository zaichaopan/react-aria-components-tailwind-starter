import { twMerge } from 'tailwind-merge';
import { Heading } from './heading';

export function Card(props: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col',
        '[--border-radius:var(--radius-xl)] [--card-padding:--spacing(0.5)]',
        'rounded-(--border-radius) p-(--card-padding)',
        'bg-zinc-100/65 dark:bg-[oklch(from_var(--background)_calc(l*1.4)_c_h)]',
        props.className,
      )}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <Heading
      {...props}
      data-ui="card-header"
      displayLevel={3}
      elementType="div"
      className={twMerge(
        '[&>[data-ui=icon]:not([class*=text-])]:text-muted flex items-center gap-2 px-4 pt-2 pb-1 [&>[data-ui=icon]]:size-4',
        className,
      )}
    />
  );
}

export function CardFooter({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      data-ui="card-footer"
      className={twMerge('p-4 text-base/6 sm:text-sm/6', className)}
    />
  );
}

export function CardBody({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      data-ui="card-body"
      className={twMerge(
        'rounded-[calc(var(--border-radius)-var(--card-padding))]',
        'bg-background px-4 py-3 text-base/6 sm:text-sm/6',
        'shadow-sm ring ring-zinc-950/4 dark:shadow-none dark:ring-white/4',

        'dark:bg-[oklch(from_var(--background)_calc(l*1.2)_c_h)]',
        className,
      )}
    />
  );
}
