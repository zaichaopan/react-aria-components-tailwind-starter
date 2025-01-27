import React from 'react';
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
import { XIcon } from './icons';

const colors = ({ isSelected }: { isSelected: boolean }) => {
  return {
    default: [
      'bg-zinc-100',
      'text-zinc-700',
      'dark:bg-white/10',
      'dark:text-zinc-400',
      isSelected && 'bg-zinc-700 text-white dark:g-white/20',
    ],
    success: [
      'bg-success/15',
      'text-success',
      'dark:bg-success/20',
      isSelected && 'bg-success dark:bg-success text-white',
    ],
    warning: [
      'bg-warning/15',
      'text-warning',
      'dark:bg-warning/20',
      isSelected && 'bg-warning dark:bg-warning text-white',
    ],
    destructive: [
      'bg-destructive/15',
      'text-destructive',
      'dark:bg-destructive/20',
      isSelected && 'bg-destructive dark:bg-destructive text-white',
    ],
  };
};

type Color = keyof ReturnType<typeof colors>;

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
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible, isDisabled, isSelected }) =>
          twMerge(
            'flex max-w-fit cursor-default items-center gap-x-1 rounded px-2 py-0.5 text-xs/5 font-semibold outline-0 transition',
            '[&[data-selection-mode]]:cursor-pointer',
            colors({ isSelected })[color || groupColor],
            isFocusVisible && 'outline-ring outline outline-2 outline-offset-1',
            isDisabled && 'opacity-50',
            className,
          ),
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
                        'outline-ring outline outline-2 outline-offset-2',
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
