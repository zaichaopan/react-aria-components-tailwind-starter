import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  composeRenderProps,
  TagList as RACTagList,
  TagListProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps } from './utils';
import { XIcon } from './icons/outline/x';

const colors = {
  white: [
    'border',
    '[:is([data-selected=true],[data-variant=solid])]:border-accent',
    '[:is([data-selected=true],[data-variant=solid])]:bg-accent',
    '[:is([data-selected=true],[data-variant=solid])]:text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
  ],
  zinc: [
    'bg-zinc-500/10  text-zinc-700',
    'dark:bg-white/15 dark:text-zinc-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-zinc-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-zinc-600',
  ],
  red: [
    'bg-red-500/15 text-red-700',
    'dark:bg-red-500/15 dark:text-red-500',
    '[:is([data-selected=true],[data-variant=solid])]:bg-red-600',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-red-700',
  ],
  orange: [
    'bg-orange-500/15 text-orange-700',
    'dark:bg-orange-500/10 dark:text-orange-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-orange-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-orange-600',
  ],
  amber: [
    'bg-amber-500/15 text-amber-700',
    'dark:bg-amber-400/10 dark:text-amber-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-amber-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-amber-600',
  ],
  yellow: [
    'bg-yellow-500/15 text-yellow-700',
    'dark:bg-yellow-400/10 dark:text-yellow-300',
    '[:is([data-selected=true],[data-variant=solid])]:bg-yellow-600',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-yellow-600',
  ],
  lime: [
    'bg-lime-500/15 text-lime-700',
    'dark:bg-lime-400/10 dark:text-lime-300',
    '[:is([data-selected=true],[data-variant=solid])]:bg-lime-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-lime-600',
  ],
  green: [
    'bg-green-500/15 text-green-700',
    'dark:bg-green-500/10 dark:text-green-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-green-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-green-600',
  ],
  emerald: [
    'bg-emerald-500/15 text-emerald-700',
    'dark:bg-emerald-500/10 dark:text-emerald-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-emerald-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-emerald-600',
  ],
  teal: [
    'bg-teal-500/15',
    'text-teal-700',
    'dark:bg-teal-500/10',
    'dark:text-teal-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-teal-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-teal-600',
  ],
  cyan: [
    'bg-cyan-500/15 text-cyan-700',
    'dark:bg-cyan-500/10 dark:text-cyan-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-cyan-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-cyan-600',
  ],
  sky: [
    'bg-sky-500/15 text-sky-700',
    'dark:bg-sky-500/10 dark:text-sky-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-sky-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-sky-600',
  ],
  blue: [
    'bg-blue-500/15 text-blue-700',
    'dark:bg-blue-500/10 dark:text-blue-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-blue-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-blue-600',
  ],
  indigo: [
    'bg-indigo-500/15 text-indigo-700',
    'dark:bg-indigo-500/10 dark:text-indigo-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-indigo-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-indigo-600',
  ],
  violet: [
    'bg-violet-500/15 text-violet-700',
    'dark:bg-violet-500/10 dark:text-violet-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-violet-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-violet-600',
  ],
  purple: [
    'bg-purple-500/15 text-purple-700',
    'dark:bg-purple-500/10 dark:text-purple-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-purple-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-purple-600',
  ],
  fuchsia: [
    'bg-fuchsia-500/15 text-fuchsia-700',
    'dark:bg-fuchsia-500/10 dark:text-fuchsia-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-fuchsia-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-fuchsia-600',
  ],
  pink: [
    'bg-pink-500/15 text-pink-700',
    'dark:bg-pink-500/10 dark:text-pink-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-fuchsia-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-fuchsia-600',
  ],
  rose: [
    'bg-rose-500/15 text-rose-700',
    'dark:bg-rose-500/10 dark:text-rose-400',
    '[:is([data-selected=true],[data-variant=solid])]:bg-rose-700',
    'dark:[:is([data-selected=true],[data-variant=solid])]:bg-rose-600',
  ],
};

type Color = keyof typeof colors;

export interface TagProps extends AriaTagProps {
  color?: Color;
}

export function TagGroup(props: AriaTagGroupProps) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge('flex flex-col gap-1', props.className)}
    />
  );
}

export function TagList<T extends object>(props: TagListProps<T>) {
  return (
    <RACTagList
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'flex flex-wrap gap-1 rounded-md',
        'focus-visible:ring-ring ring-offset-2 outline-0 focus-visible:ring-2',
      ])}
    />
  );
}

export function Tag({ children, color = 'zinc', ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible, isDisabled }) => {
          return twMerge(
            'flex max-w-fit cursor-default items-center gap-x-1 rounded-md px-2 py-0.5 text-xs/5 font-medium outline-0 transition data-selection-mode:cursor-pointer',
            'data-[selected=true]:text-white dark:data-[selected=true]:text-white',
            colors[color],
            isFocusVisible && 'outline-ring outline-2 outline-offset-1',
            isDisabled && 'opacity-50',
            className,
          );
        },
      )}
    >
      {(renderProps) => {
        return (
          <>
            {typeof children === 'function' ? children(renderProps) : children}
            {renderProps.allowsRemoving && (
              <Button
                slot="remove"
                className={composeRenderProps(
                  '',
                  (className, { isPressed, isHovered, isFocusVisible }) =>
                    twMerge(
                      'flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color]',
                      isHovered && 'pressed: bg-black/10 dark:bg-white/10',
                      isPressed && 'bg-black/20 dark:bg-white/20',
                      isFocusVisible &&
                        'outline-ring outline-2 outline-offset-2',
                      className,
                    ),
                )}
              >
                <XIcon className="size-3"></XIcon>
              </Button>
            )}
          </>
        );
      }}
    </AriaTag>
  );
}
