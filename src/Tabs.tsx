import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
  composeRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';

export function Tabs({
  variant,
  ...props
}: TabsProps &
  (
    | { variant?: 'underline' | 'pills' }
    | {
        variant: 'segment';
        orientation?: never;
      }
  )) {
  return (
    <RACTabs
      {...props}
      data-variant={variant ?? 'underline'}
      keyboardActivation="manual"
      className={composeTailwindRenderProps(
        props.className,
        'group flex overflow-hidden orientation-horizontal:flex-col orientation-vertical:flex-row',
      )}
    />
  );
}

export function TabList<T extends object & { title: string; id: string }>(
  props: TabListProps<T>,
) {
  return (
    <div className="flex overflow-auto p-1">
      <RACTabList
        {...props}
        className={composeTailwindRenderProps(props.className, [
          'flex',
          'text-base/6 sm:text-sm/6',
          // horizontal
          'orientation-horizontal:whitespace-nowrap',

          // vertical
          'orientation-vertical:flex-col',

          // underline horizontal
          'group-data-[variant=underline]:orientation-horizontal:gap-4',
          'group-data-[variant=underline]:orientation-horizontal:border-b',
          'group-data-[variant=underline]:orientation-horizontal:w-full',

          // underline vertical
          'group-data-[variant=underline]:orientation-vertical:border-l',
          'group-data-[variant=underline]:orientation-vertical:self-start',

          // pills horizontal
          'group-data-[variant=pills]:orientation-horizontal:gap-4',

          // segment
          'group-data-[variant=segment]:gap-1',
          'group-data-[variant=segment]:rounded-xl',
          'group-data-[variant=segment]:bg-zinc-100/75',
          'group-data-[variant=segment]:p-1',
          'group-data-[variant=segment]:dark:border-border',
          'group-data-[variant=segment]:dark:bg-popover',
        ])}
      />
    </div>
  );
}

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex-1 p-1 outline-0',
      )}
    />
  );
}

export function Tab(props: TabProps) {
  return (
    <RACTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge(
          'relative flex items-center rounded p-1 outline-none outline-0 transition',
          // disable
          'disabled:opacity-50',

          // hover
          '[&:not([data-selected])]:text-muted [&:not([data-selected])]:hover:text-foreground',

          // underline
          'group-data-[variant=underline]:font-medium',
          'group-data-[variant=underline]:outline-offset-0',
          'group-data-[variant=underline]:before:absolute',
          'group-data-[variant=underline]:before:bg-accent',
          'group-data-[variant=underline]:group-orientation-horizontal:before:bottom-[-1.5px]',
          'group-data-[variant=underline]:group-orientation-horizontal:before:w-full',
          'group-data-[variant=underline]:group-orientation-horizontal:before:inset-x-0',
          'group-data-[variant=underline]:group-orientation-horizontal:selected:before:h-[2px]',

          'group-data-[variant=underline]:group-orientation-vertical:before:inset-y-0',
          'group-data-[variant=underline]:group-orientation-vertical:before:selected:bg-accent',
          'group-data-[variant=underline]:group-orientation-vertical:before:selected:left-[-1.5px]',
          'group-data-[variant=underline]:group-orientation-vertical:before:selected:w-[2px]',

          // pill
          'group-data-[variant=pills]:flex',
          'group-data-[variant=pills]:items-center',
          'group-data-[variant=pills]:rounded-md',
          'group-data-[variant=pills]:px-3',
          'group-data-[variant=pills]:py-1.5',
          'group-data-[variant=pills]:font-medium',
          'group-data-[variant=pills]:selected:bg-accent',
          'group-data-[variant=pills]:selected:text-white',

          // segment
          'group-data-[variant=segment]:border',
          'group-data-[variant=segment]:border-transparent',
          'group-data-[variant=segment]:text-muted',
          'group-data-[variant=segment]:flex-1',
          'group-data-[variant=segment]:justify-center',
          'group-data-[variant=segment]:px-8',
          'group-data-[variant=segment]:selected:bg-background',
          'group-data-[variant=segment]:font-medium',
          'group-data-[variant=segment]:selected:text-foreground',
          'group-data-[variant=segment]:selected:shadow-sm',
          'group-data-[variant=segment]:selected:border-border/65',
          'dark:group-data-[variant=segment]:selected:border-border',
          'group-data-[variant=segment]:selected:rounded-[calc(theme(borderRadius.xl)-4px)]',
          renderProps.isFocusVisible && focusOutlineStyle,
          className,
        ),
      )}
    />
  );
}
