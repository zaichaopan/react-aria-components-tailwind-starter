import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const focusOutlineStyle = [
  'outline outline-2 outline-blue-500 outline-offset-2',
  'invalid:outline-destructive group-invalid:outline-destructive',
].join(' ');

export const inputRingStyle = [
  'ring-1 ring-blue-500 border-blue-500',
  'invalid:border-destructive invalid:ring-destructive ',
  // When using ina InputGroup
  'group-invalid:border-destructive group-invalid:ring-1 group-invalid:ring-destructive',
];

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string | Array<string | undefined>,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
