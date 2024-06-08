import { Check, ChevronRight } from 'lucide-react';
import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuProps as RACMenuProps,
  MenuItemProps,
  composeRenderProps,
  Text,
  Keyboard,
  Separator,
  ButtonProps as RACButtonProps,
} from 'react-aria-components';
import { DropdownSection, DropdownSectionProps } from './ListBox';
import { Popover, PopoverProps } from './Popover';
import { BasicButtonProps, Button } from './Button';
import { twMerge } from 'tailwind-merge';
import { Icon } from './Icon';
import { composeTailwindRenderProps } from './utils';

export { MenuTrigger, SubmenuTrigger } from 'react-aria-components';

export function MenuButton({
  className,
  ...props
}: RACButtonProps & BasicButtonProps) {
  return (
    <Button
      {...props}
      className={composeTailwindRenderProps(className, [
        'gap-1',
        props.unstyle ? '' : 'px-2.5',
      ])}
    />
  );
}

export function MenuPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      showArrow={false}
      className={composeTailwindRenderProps(className, 'min-w-44')}
      {...props}
    />
  );
}

interface MenuProps<T> extends RACMenuProps<T> {
  placement?: PopoverProps['placement'];
}

export function Menu<T extends object>({ className, ...props }: MenuProps<T>) {
  return (
    <RACMenu
      {...props}
      className={twMerge(
        'flex max-h-[inherit] flex-col gap-1.5 overflow-auto outline-none sm:gap-0',
        // When no header
        'p-1.5 has-[header]:pt-0',
        className,
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
        'my-0.5 w-full border-t border-border/75 dark:border-border',
        className,
      )}
    />
  );
}

export function MenuItem({
  icon,
  shortcut,
  description,
  destructive,
  ...props
}: MenuItemProps & {
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  destructive?: true;
}) {
  return (
    <RACMenuItem
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge([
            'group flex cursor-default select-none items-center gap-1 px-3 py-1 text-base/6 outline-none sm:text-sm/6',
            renderProps.isDisabled && 'opacity-50',
            renderProps.isFocused && 'rounded bg-accent/85 text-white',
            destructive && 'text-destructive',
            destructive && renderProps.isFocused && 'bg-destructive/85',
            className,
          ]);
        },
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, isFocused }) => (
          <>
            {selectionMode !== 'none' && (
              <span className="flex w-4 items-center">
                {isSelected && <Check aria-hidden className="h-4 w-4" />}
              </span>
            )}

            <div className="flex flex-1 items-center gap-2 truncate">
              {icon && (
                <span
                  className={twMerge(['text-muted', isFocused && 'text-white'])}
                >
                  {icon}
                </span>
              )}

              <div className="flex flex-1 flex-col">
                <div
                  slot="label"
                  className={twMerge([
                    'flex flex-1 items-center',
                    description && 'font-medium',
                  ])}
                >
                  {children}
                </div>

                {description && (
                  <Text
                    slot="description"
                    className={twMerge([
                      'text-wrap text-xs/5 text-muted',
                      isFocused && 'text-white',
                    ])}
                  >
                    {description}
                  </Text>
                )}
              </div>
              {shortcut && (
                <Keyboard
                  className={twMerge([
                    'font-sans text-sm/6 text-muted',
                    isFocused && 'text-white',
                  ])}
                >
                  {shortcut}
                </Keyboard>
              )}
            </div>

            <Icon
              icon={
                <ChevronRight
                  strokeWidth="1.5"
                  className={twMerge([
                    'hidden h-4 w-4 text-muted group-data-[has-submenu]:inline-block',
                    isFocused && 'text-white',
                  ])}
                />
              }
            ></Icon>
          </>
        ),
      )}
    </RACMenuItem>
  );
}

export function MenuSection<T extends object>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
