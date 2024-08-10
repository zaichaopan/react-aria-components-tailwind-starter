import { twMerge } from 'tailwind-merge';

export function Available({
  className,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className={twMerge('text-emerald-600', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
}

export function Busy({ className, ...props }: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className={twMerge('text-red-600', className)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>
  );
}

export function Away({ className, ...props }: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className={twMerge('text-slate-400', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      stroke="currentColor"
      strokeWidth="90"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="256" cy="256" r="213" />
    </svg>
  );
}

export function DoNotDisturb({
  className,
  ...props
}: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      fill="currentColor"
      className={twMerge('text-red-600', className)}
      aria-hidden="true"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10ZM3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
