import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const focusOutlineStyle = [
  'outline outline-2 outline-blue-500 outline-offset-2',
];

export const inputRingStyle = [
  'ring-1 ring-blue-500 border-blue-500',
  'invalid:border-blue-500 group-invalid:border-blue-500',
];

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string | Array<string | undefined>,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
