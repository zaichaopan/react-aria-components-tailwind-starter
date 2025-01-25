import React from 'react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList as RACTagList,
  TagListProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps, focusVisibleOutline } from './utils';
import { XIcon } from './icons';

const colors = {
  default: [
    'bg-zinc-100',
    'text-zinc-700',
    'dark:bg-white/10',
    'dark:text-zinc-400',
    'selected:bg-zinc-700',
    'selected:text-white',
    'dark:selected:bg-white/20',
  ],
  success: [
    'bg-success/15',
    'text-success',
    'dark:bg-success/20',
    'selected:bg-success',
    'selected:dark:bg-success',
    'selected:text-white',
  ],
  warning: [
    'bg-warning/15',
    'text-warning',
    'dark:bg-warning/20',
    'selected:bg-warning',
    'selected:dark:bg-warning',
    'selected:text-white',
  ],
  destructive: [
    'bg-destructive/15',
    'text-destructive',
    'dark:bg-destructive/20',
    'selected:bg-destructive',
    'selected:dark:bg-destructive',
    'selected:text-white',
  ],
};

type Color = keyof typeof colors;

const ColorContext = React.createContext<Color>('default');

export interface TagGroupProps extends AriaTagGroupProps {
  color?: Color;
}

export interface TagProps extends AriaTagProps {
  color?: Color;
}

export function TagGroup({ children, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge('flex flex-col gap-1', props.className)}
    >
      <ColorContext.Provider value={props.color || 'default'}>
        {children}
      </ColorContext.Provider>
    </AriaTagGroup>
  );
}

export function TagList<T extends object>(props: TagListProps<T>) {
  return (
    <RACTagList
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-wrap gap-1',
      )}
    />
  );
}

export function Tag({ children, color, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  const groupColor = React.useContext(ColorContext);

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'flex max-w-fit cursor-default items-center gap-x-1 rounded px-2 py-0.5 text-xs/5 font-semibold outline-0 transition',
        '[&[data-selection-mode]]:cursor-pointer',
        colors[color || groupColor],
        focusVisibleOutline,
        'focus-visible:outline-offset-1',
        'disabled:opacity-50',
      ])}
    >
      {(renderProps) => {
        return (
          <>
            {typeof children === 'function' ? children(renderProps) : children}
            {renderProps.allowsRemoving && (
              <Button
                slot="remove"
                className={composeTailwindRenderProps('', [
                  'flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color] hover:bg-black/10 pressed:bg-black/20 dark:hover:bg-white/10 dark:pressed:bg-white/20',
                  focusVisibleOutline,
                ])}
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
