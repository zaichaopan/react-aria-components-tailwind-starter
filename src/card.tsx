import { twMerge } from 'tailwind-merge';
import { Heading } from './heading';

export function Card(props: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col rounded-xl p-4',
        'shadow-xs ring ring-zinc-950/10 dark:shadow-none dark:ring-white/10',
        'has-data-[ui=card-body]:p-0',
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
        'text-muted [&>[data-ui=icon]]:text-muted flex items-center gap-2 px-4 pt-2 pb-1 [&>[data-ui=icon]]:size-4',
        'bg-zinc-100 dark:bg-zinc-900',
        'rounded-t-xl [&+[data-ui=card-body]]:border-t',
        '[&+[data-ui=card-body]]:rounded-t-none',
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
        'border-t p-4 text-center text-base/6 sm:text-sm/6',
        'bg-zinc-100 dark:bg-zinc-900',
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
        'rounded-xl px-4 py-3 text-base/6 sm:text-sm/6',
        'has-[+[data-ui=card-footer]]:rounded-b-none',
        className,
      )}
    />
  );
}
