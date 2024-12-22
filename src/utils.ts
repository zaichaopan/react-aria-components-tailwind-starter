import { composeRenderProps } from 'react-aria-components';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string | ClassNameValue,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}

export const focusVisibleOutline = [
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-blue-500',
  'focus-visible:outline-offset-2',
].join(' ');

export const groupFocusVisibleOutline = [
  'group-focus-visible:outline',
  'group-focus-visible:outline-2',
  'group-focus-visible:outline-blue-500',
  'group-focus-visible:outline-offset-2',
].join(' ');

export const dropTargetOutline = [
  'drop-target:outline',
  'drop-target:outline-2',
  'drop-target:outline-blue-500',
  'drop-target:outline-offset-2',
].join(' ');

export const focusRing = [
  'focus:ring-1',
  'focus:ring-inset',
  'focus:ring-blue-500',
  'focus:border-blue-500',
  'focus:invalid:border-blue-500',
  'focus:group-invalid:border-blue-500',
].join(' ');

export const focusVisibleRing = [
  'focus-visible:ring-1',
  'focus-visible:ring-inset',
  'focus-visible:ring-blue-500',
  'focus-visible:border-blue-500',
  'focus-visible:invalid:border-blue-500',
  'focus-visible:group-invalid:border-blue-500',
].join(' ');

export const focusWithinRing = [
  'focus-within:ring-1',
  'focus-within:ring-inset',
  'focus-within:ring-blue-500',
  'focus-within:border-blue-500',
  'focus-within:invalid:border-blue-500',
  'focus-within:group-invalid:border-blue-500',
].join(' ');

// RAC uses `slot=*`. We use `data-ui=* to avoid potential conflict
export const inputField = [
  'group',
  // Label style
  '[&_[data-ui=label]:not([class*=mb-])]:mb-1',
  '[&_[data-ui=label]:not([class*=mb-]):has(+:is(input,textarea,[data-ui=control]))]:mb-2',

  // Description style
  '[&>:is(input,[data-ui=control])+[data-ui=description]:not([class*=mt-])]:mt-2',
  '[&>textarea+[data-ui=description]:not([class*=mt-])]:mt-0.5',
  '[&_[data-ui=description]:not([class*=mb-]):has(+:is(input,textarea,[data-ui=control]))]:mb-3',

  // Error
  '[&>:is(input,textarea,[data-ui=control])+[data-ui=errorMessage]:not([class*=mt-])]:mt-2',
  '[&:has([data-ui=description]+[data-ui=errorMessage])_[data-ui=errorMessage]]:mt-1',
].join(' ');

export const groupBox = [
  'group flex flex-col',

  // Group description style
  '[&_[data-ui=description]:not([class*=mt-]):has(+[data-ui=box])]:mt-1',
  '[&_[data-ui=description]:not([class*=mt-]):has(+[data-ui=box])]:mb-4',

  // Group box style
  '[&:not(:has([data-ui=description]+[data-ui=box]))>[data-ui=box]]:mt-3',

  '[&:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:not([class*=gap-])]:gap-y-3',

  // Box item description inside
  '[&:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:has([data-ui=description]):not([class*=gap-y])]:gap-y-4',

  // Horizontal
  '[&[data-orientation=horizontal]:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:not([class*=gap-x-])]:gap-x-4',
  '[&[data-orientation=horizontal]:has(:is([type=checkbox],[type=radio],[role=switch]))_[data-ui=box]:not([class*=gap-y-])]:gap-y-2',

  // Error
  '[&:has([data-ui=box]+[data-ui=errorMessage])_[data-ui=errorMessage]]:mt-2',
].join(' ');

// Chevron down as select box indicator
export const selectBoxIndicator = [
  'after:pointer-events-none',
  'after:absolute',
  'after:border-muted',
  'hover:after:border-foreground',
  "after:content-['']",
  'after:size-[8px] after:sm:size-[6.5px]',
  'after:border-b-[1.5px] after:border-r-[1.5px]',
  'after:bottom-[55%] after:end-2.5 after:-translate-x-1/2 after:translate-y-1/2 after:rotate-45 rtl:after:translate-x-1.5',
].join(' ');

export const displayLevels = {
  1: 'font-semibold text-2xl',
  2: 'font-semibold text-base',
  3: 'font-medium text-base sm:text-sm/6',
};

export type DisplayLevel = keyof typeof displayLevels;
