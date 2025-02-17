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
  buttonArrow?: React.ReactNode;
};

export function MenuButton({
  buttonArrow,
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
            {buttonArrow !== null &&
              (buttonArrow ?? <ChevronDownIcon className="ms-auto" />)}
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
          'min-w-[max(--spacing(36),var(--trigger-width))]',
          'has-[[data-ui=content]_[data-ui=icon]]:min-w-[max(--spacing(48),var(--trigger-width))]',
          'has-[[data-ui=content]_kbd]:min-w-[max(--spacing(11),var(--trigger-width))]',
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
        'max-h-[inherit] overflow-auto outline-hidden',
        'flex flex-col',
        'p-1 has-[header]:pt-0',

        // Header, Menu item style when has selectable items
        '[&_header]:px-2',

        selectedIconPlacement === 'start' &&
          '[&:has(:is([role=menuitemradio],[role=menuitemcheckbox]))_:is(header,[role=menuitem])]:ps-7',

        // Menu item content
        '**:data-[ui=content]:flex-1',
        '**:data-[ui=content]:grid',
        '[&_[data-ui=content]:has([data-ui=label])]:grid-cols-[--spacing(4)_1fr_minmax(--spacing(12),max-content)]',
        '**:data-[ui=content]:items-center',
        '**:data-[ui=content]:gap-x-2',

        // Icon
        '[&_[data-ui=content]:not(:hover)>[data-ui=icon]:not([class*=text-])]:text-muted',
        '[&_[data-ui=content][data-destructive]>[data-ui=icon]]:text-destructive',
        '[&_[data-ui=content][data-destructive]:not(:hover)>[data-ui=icon]]:text-destructive/75',
        '[&_[data-ui=content]>[data-ui=icon]:not([class*=size-])]:size-4',
        '[&_[data-ui=content]>[data-ui=icon]:first-child]:col-start-1',

        // Label
        '**:data-[ui=label]:col-span-full',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=label]]:col-start-2',
        '[&:has([data-ui=kbd])_[data-ui=label]]:-col-end-2',
        '[&:has([data-ui=icon]+[data-ui=label])_[data-ui=content]:not(:has(>[data-ui=label]))]:ps-6',

        // Kbd
        '**:data-[ui=kbd]:col-span-1',
        '**:data-[ui=kbd]:row-start-1',
        '**:data-[ui=kbd]:col-start-3',
        '**:data-[ui=kbd]:justify-self-end',
        '[&_[data-destructive]>[data-ui=kbd]]:text-destructive',

        // Description
        '**:data-[ui=description]:col-span-full',
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
        'my-1 w-[calc(100%-(--spacing(4)))] self-center border-t border-zinc-950/5 dark:border-white/10',
        className,
      )}
    />
  );
}

type MenuItemProps = RACMenuItemProps & {
  destructive?: true;
};

export function MenuItem({ destructive, ...props }: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);

  return (
    <RACMenuItem
      {...props}
      textValue={textValue}
      className={composeRenderProps(
        props.className,
        (className, { isFocused, isDisabled }) => {
          return twMerge([
            'group rounded-sm outline-hidden',
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
                  'in-data-[selected-icon-placement=end]:hidden',
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
                  'in-data-[selected-icon-placement=start]:hidden',
                  isSelected && 'mt-1',
                )}
              >
                {isSelected && <CheckIcon className="size-4" />}
              </span>
            )}

            {/* Submenu indicator */}
            <ChevronRightIcon className="hidden size-4 text-muted group-data-has-submenu:inline-block" />
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
        'not-first:mt-1.5',
        'not-first:border-t',
        'not-first:border-t-border/40',
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
