import { XIcon } from 'lucide-react';
import React from 'react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList,
  TagListProps,
  Text,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Description, Label } from './Field';
import { focusOutlineStyle } from './utils';

const colors = {
  gray: 'bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500',
  green:
    'bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20',
  yellow:
    'bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20',
};

type Color = keyof typeof colors;

const ColorContext = React.createContext<Color>('gray');

export interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  color?: Color;
  label?: string;
  description?: string;
  errorMessage?: string;
}

export interface TagProps extends AriaTagProps {
  color?: Color;
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge('flex flex-col gap-1', props.className)}
    >
      <Label>{label}</Label>
      <ColorContext.Provider value={props.color || 'gray'}>
        <TagList
          items={items}
          renderEmptyState={renderEmptyState}
          className="flex flex-wrap gap-1"
        >
          {children}
        </TagList>
      </ColorContext.Provider>
      {description && <Description>{description}</Description>}
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaTagGroup>
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
        (className, renderProps) => {
          return twMerge(
            'flex max-w-fit cursor-default items-center gap-1 rounded-full border px-3 py-0.5 text-xs transition',
            renderProps.allowsRemoving && 'pr-1',
            colors[color || groupColor],
          
            renderProps.isSelected &&
              'outline-0 border-blue-600 hover:border-blue-600 dark:hover:border-blue-600 bg-blue-600 text-white dark:bg-blue-600 dark:text-white dark:border-blue-600',
              renderProps.isFocusVisible && focusOutlineStyle,
            renderProps.isDisabled && 'opacity-50',
            className,
          );
        },
      )}
    >
      {({ allowsRemoving }) => {
        return (
          <>
            {children}
            {allowsRemoving && (
              <Button
                slot="remove"
                className={composeRenderProps('', (className, renderProps) => {
                  return twMerge(
                    'outline-0 flex cursor-default items-center justify-center rounded-full p-0.5 transition-[background-color] hover:bg-black/10 pressed:bg-black/20 dark:hover:bg-white/10 dark:pressed:bg-white/20',
                    renderProps.isFocusVisible && focusOutlineStyle,
                    className,
                  );
                })}
              >
                <XIcon aria-hidden className="h-3 w-3" />
              </Button>
            )}
          </>
        );
      }}
    </AriaTag>
  );
}
