import { twMerge } from 'tailwind-merge';
import { Heading } from './heading';

export function Card(props: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col rounded-xl p-4 ring ring-zinc-950/10 dark:ring-white/10',
        'has-data-[ui=card-body]:bg-zinc-50 has-data-[ui=card-body]:p-0.5 dark:has-data-[ui=card-body]:bg-zinc-950',
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
        'text-muted flex items-center gap-4 px-2.5 pt-2 pb-1',
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
      className={twMerge(
        'p-4 text-center text-base/6 sm:text-sm/6',
        className,
      )}
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
        'rounded-[calc(var(--radius-xl)-2px)] border bg-white px-2.5 py-2 text-base/6 sm:text-sm/6 dark:bg-zinc-900',
        className,
      )}
    />
  );
}
