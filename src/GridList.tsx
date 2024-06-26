import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  Button,
  GridListItemProps,
  GridListProps,
} from 'react-aria-components';
import { Checkbox } from './Checkbox';
import {
  composeTailwindRenderProps,
  focusOutlineStyle,
} from './utils';
import { twMerge } from 'tailwind-merge';

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return (
    <AriaGridList
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'relative overflow-auto rounded-lg border p-1',
      )}
    >
      {children}
    </AriaGridList>
  );
}

export function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaGridListItem
      textValue={textValue}
      {...props}
      className={(renderProps) => {
        return twMerge(
          'relative -mb-px flex cursor-default select-none gap-3 px-2 py-2 text-sm rounded-md ',
          renderProps.isFocusVisible && [focusOutlineStyle, '-outline-offset-2'],
          renderProps.isSelected ? 'z-20 hover:bg-hover' : 'hover:bg-hover',
          renderProps.isDisabled && 'opacity-50',
        );
      }}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  );
}
