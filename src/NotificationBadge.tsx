import { twMerge } from 'tailwind-merge';

export type NotificationBadgeProps =
  | {
      show: boolean;
    }
  | {
      count: number;
      show?: never;
    };

export function NotificationBadge(props: NotificationBadgeProps) {
  if (props.show) {
    return (
      <span
        aria-hidden
        className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600"
      />
    );
  }

  if (props.show === undefined && props.count !== 0) {
    return (
      <span
        aria-hidden
        className={twMerge([
          'text-whit absolute right-0 top-0 flex h-4 -translate-y-1.5 translate-x-1 items-center justify-center rounded-full bg-red-600 text-[0.65rem] text-white',
          props.count > 9 ? ' w-5' : 'w-4',
        ])}
      >
        {Math.min(props.count, 9)}{' '}
        {props.count > 9 ? <span className="pb-0.5">+</span> : null}
      </span>
    );
  }

  return null;
}


