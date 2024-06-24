import { twMerge } from 'tailwind-merge';
import { Icon } from './Icon';

export function Spinner({
  className,
  'aria-label': ariaLabel,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <Icon aria-label={ariaLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={twMerge('size-6 animate-spin text-muted', className)}
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </Icon>
  );
}
