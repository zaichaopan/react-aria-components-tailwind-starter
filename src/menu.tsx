import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuProps as RACMenuProps,
  MenuItemProps as RACMenuItemProps,
  composeRenderProps,
  Separator,
  Header,
  MenuSectionProps as RACMenuSectionProps,
  MenuSection as RACMenuSection,
  Collection,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Popover, PopoverProps } from './popover';
import { Button, ButtonProps } from './button';
import { composeTailwindRenderProps } from './utils';
import { Small } from './text';
import { CheckIcon, ChevronDownIcon, ChevronRightIcon } from './icons';

export { MenuTrigger, SubmenuTrigger } from 'react-aria-components';

type MenuButtonProps = ButtonProps & {
  noIndicator?: boolean;
};

export function MenuButton({
  noIndicator,
  variant = 'outline',
  children,
  ...props
}: MenuButtonProps) {
  return (
    <Button {...props} variant={variant}>
      {(renderProps) => {
        return (
          <>
            {typeof children === 'function' ? children(renderProps) : children}
            {!noIndicator && <ChevronDownIcon className='ms-auto' />}
          </>
        );
      }}
    </Button>
  );
}

export function MenuPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(
        className,
        twMerge(
          'dark:bg-zinc-800',
          'dark:ring-zinc-700',
          'max-w-72',
          'rounded-md',
          'min-w-[max(theme(spacing[36]),var(--trigger-width))]',
          'has-[[data-ui=content]_[data-ui=icon]]:min-w-[max(theme(spacing[48]),var(--trigger-width))]',
          'has-[[data-ui=content]_kbd]:min-w-[max(theme(spacing[11]),var(--trigger-width))]',
        ),
      )}
    />
  );
}

type MenuProps<T> = RACMenuProps<T> & {
  selectedIconPlacement?: 'start' | 'end';
};

export function Menu<T extends object>({
  selectedIconPlacement = 'end',
  ...props
}: MenuProps<T>) {
  return (
    <RACMenu
      {...props}
      data-selected-icon-placement={selectedIconPlacement}
      className={twMerge(
        'max-h-[inherit] overflow-auto outline-none',
        'flex flex-col',
        'p-1 has-[header]:pt-0',

        // Header, Menu item style when has selectable items
        '[&_header]:px-2',

        selectedIconPlacement === 'start' &&
          '[&:has(:is([role=menuitemradio],[role=menuitemcheckbox]))_:is(header,[role=menuitem])]:ps-7',

        // Menu item content
        '[&_[data-ui=content]]:flex-1',
        '[&_[data-ui=content]]:grid',
        '[&_[data-ui=content]:has([data-ui=label])]:grid-cols-[theme(spacing[4])_1fr_minmax(theme(spacing[12]),max-content)]',
        '[&_[data-ui=content]]:items-center',
        '[&_[data-ui=content]]:gap-x-2',

        // Icon
        '[&_[data-ui=content]:not(:hover)>[data-ui=icon]:not([class*=text-])]:text-muted',
        '[&_[data-ui=content][data-destructive]>[data-ui=icon]]:text-destructive',
        '[&_[data-ui=content][data-destructive]:not(:hover)>[data-ui=icon]]:text-destructive/75',
        '[&_[data-ui=content]>[data-ui=icon]:not([class*=size-])]:size-4',
        '[&_[data-ui=content]>[data-ui=icon]:first-child]:col-start-1',

        // Label
        '[&_[data-ui=label]]:col-span-full',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=label]]:col-start-2',
        '[&:has([data-ui=kbd])_[data-ui=label]]:-col-end-2',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=content]:not(:has(>[data-ui=label]))]:ps-6',

        // Kbd
        '[&_[data-ui=kbd]]:col-span-1',
        '[&_[data-ui=kbd]]:row-start-1',
        '[&_[data-ui=kbd]]:col-start-3',
        '[&_[data-ui=kbd]]:justify-self-end',
        '[&_[data-destructive]>[data-ui=kbd]]:text-destructive',

        // Description
        '[&_[data-ui=description]]:col-span-full',
        '[&:has([data-ui=kbd])_[data-ui=description]]:-col-end-2',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=description]]:col-start-2',
        props.className,
      )}
    />
  );
}

export function SubMenu<T extends object>(
  props: MenuProps<T> & { 'aria-label': string },
) {
  return <Menu {...props} />;
}

export function MenuSeparator({ className }: { className?: string }) {
  return (
    <Separator
      className={twMerge(
        'my-1 w-[calc(100%-theme(spacing[4]))] self-center border-t border-zinc-950/5 dark:border-white/10',
        className,
      )}
    />
  );
}

type MenuItemProps = RACMenuItemProps & {
  destructive?: true;
};

export function MenuItem({ destructive, ...props }: MenuItemProps) {
  return (
    <RACMenuItem
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocused, isDisabled }) => {
          return twMerge([
            'group rounded outline-none',
            'flex items-center gap-x-1.5',
            'px-2 py-2.5 sm:py-1.5',
            'text-base/6 sm:text-sm/6',
            isDisabled && 'opacity-50',
            isFocused && 'bg-zinc-100 dark:bg-zinc-700',
            destructive && 'text-destructive',
            className,
          ]);
        },
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected }) => (
          <>
            {selectionMode !== 'none' && (
              <span
                data-ui="icon"
                className={twMerge(
                  'flex w-4 self-start',
                  '[[data-selected-icon-placement=end]_&]:hidden',
                  isSelected && 'mt-1',
                )}
              >
                {isSelected && <CheckIcon className="size-4" />}
              </span>
            )}

            <div
              data-ui="content"
              data-destructive={destructive ? destructive : undefined}
            >
              {children}
            </div>
            {selectionMode !== 'none' && (
              <span
                data-ui="icon"
                className={twMerge(
                  'flex w-4 self-start',
                  '[[data-selected-icon-placement=start]_&]:hidden',
                  isSelected && 'mt-1',
                )}
              >
                {isSelected && <CheckIcon className="size-4" />}
              </span>
            )}

            {/* Submenu indicator */}
            <ChevronRightIcon className="hidden size-4 text-muted group-data-[has-submenu]:inline-block" />
          </>
        ),
      )}
    </RACMenuItem>
  );
}

export function MenuItemLabel({
  className,
  ...props
}: React.JSX.IntrinsicElements['span']) {
  return (
    <span
      slot="label"
      data-ui="label"
      className={twMerge('truncate', className)}
      {...props}
    />
  );
}

export function MenuItemDescription({
  className,
  ...props
}: React.JSX.IntrinsicElements['span']) {
  return (
    <Small
      slot="description"
      data-ui="description"
      className={className}
      {...props}
    />
  );
}

export interface MenuSectionProps<T> extends RACMenuSectionProps<T> {
  title?: string | React.ReactNode;
}

export function MenuSection<T extends object>({
  className,
  ...props
}: MenuSectionProps<T>) {
  return (
    <RACMenuSection
      {...props}
      className={twMerge(
        '[&:not(:first-child)]:mt-1.5',
        '[&:not(:first-child)]:border-t',
        '[&:not(:first-child)]:border-t-border/40',
        className,
      )}
    >
      <Header
        className={twMerge(
          'sticky inset-0 z-10',
          'pt-2',
          'truncate text-xs/6 text-muted',
          'bg-white dark:bg-zinc-800',
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </RACMenuSection>
  );
}
