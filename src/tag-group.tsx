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
import { BadgeColor,getBadgeStyles } from './badge';

export interface TagProps extends AriaTagProps {
  color?: BadgeColor;
  variant?: 'solid';
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

export function Tag({ children, color = 'zinc', variant, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible, isDisabled, isSelected }) => {
          return twMerge(
            getBadgeStyles({ color, variant: isSelected ? 'solid' : variant }),
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
