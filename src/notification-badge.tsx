import { twMerge } from 'tailwind-merge';

type DotVariantProps = {
  variant: 'dot';
};

type NumericVariantProps = {
  variant: 'numeric';
  value: number;
  inlined?: boolean;
};

export type NotificationBadgeProps = (DotVariantProps | NumericVariantProps) &
  JSX.IntrinsicElements['span'];

export function NotificationBadge({
  className,
  'aria-label': ariaLabel,
  ...props
}: NotificationBadgeProps) {
  if (props.variant === 'dot') {
    return (
      <>
        <span
          aria-hidden
          className={twMerge(
            'absolute right-1 top-1 flex size-2 rounded-full bg-red-600',
            className,
          )}
          {...props}
        />
        {ariaLabel && (
          <span role="status" className="sr-only">
            {ariaLabel}
          </span>
        )}
      </>
    );
  }

  const { value, variant, inlined, ...rest } = props;

  return (
    <>
      <span
        aria-hidden
        className={twMerge([
          inlined
            ? ''
            : 'absolute right-0 top-0 -translate-y-1.5 translate-x-1',
          ' flex h-4  items-center justify-center rounded-full bg-red-600 text-[0.65rem] text-white',
          props.value > 0 ? (props.value > 9 ? 'w-5' : 'w-4') : 'hidden',
          className,
        ])}
        {...rest}
      >
        {Math.min(props.value, 9)}
        {props.value > 9 ? <span className="pb-0.5">+</span> : null}
      </span>

      {ariaLabel && (
        <span role="status" className="sr-only">
          {ariaLabel}
        </span>
      )}
    </>
  );
}
