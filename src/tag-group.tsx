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

const colors = {
  default: '[--tag:var(--color-accent)]',
  success: '[--tag:var(--color-success)]',
  warning: '[--tag:var(--color-warning)]',
  destructive: '[--tag:var(--destructive)]',
} as const;

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
  const tagColor = color ?? groupColor ?? 'default';

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible, isDisabled, isSelected }) =>
          twMerge(
            'flex max-w-fit cursor-default items-center gap-x-1 rounded-md px-2 py-0.5 text-xs/5 font-medium outline-0 transition data-selection-mode:cursor-pointer',
            colors[tagColor],
            isSelected
              ? 'bg-(--tag) text-[lch(from_var(--tag)_calc((49.44_-_l)_*_infinity)_0_0)]'
              : 'bg-(--tag)/15 text-(--tag)',
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
