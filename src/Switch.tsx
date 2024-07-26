import {
  Switch as RACSwitch,
  SwitchProps as RACSwitchProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, focusOutlineStyle } from './utils';
import { twMerge } from 'tailwind-merge';
import { DescriptionProvider, WithDescriptionContext } from './Field';

export function SwitchField({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        className={twMerge(
          'group flex flex-col gap-y-1',
          'sm:[&_[slot=description]]:has-[label[data-label-position=left]]:pr-[4rem]',
          'sm:[&_[slot=description]]:has-[label[data-label-position=right]]:pl-[3rem]',
          '[&_label]:has-[[data-label-position=left]]:justify-between',
          // When the radio has description, make the label font-medium
          '[&_label]:has-[[slot=description]]:font-medium',
          // When the switch is disabled
          '[&_[slot=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

interface SwitchProps extends RACSwitchProps {
  labelPosition?: 'left' | 'right';
}

export function Switch({
  labelPosition = 'left',
  children,
  ...props
}: SwitchProps) {
  return (
    <WithDescriptionContext>
      {(context) => {
        return (
          <RACSwitch
            {...props}
            aria-describedby={context?.['aria-describedby']}
            data-label-position={labelPosition}
            className={composeTailwindRenderProps(
              props.className,
              'group flex items-center gap-4 text-base/6 transition disabled:opacity-50 sm:text-sm/6',
            )}
          >
            {(renderProps) => (
              <>
                {labelPosition === 'left' &&
                  (typeof children === 'function'
                    ? children(renderProps)
                    : children)}

                <div
                  className={twMerge(
                    'flex h-5 w-8 shrink-0 cursor-default items-center rounded-full border shadow-inner transition duration-200 ease-in-out',

                    'border-zinc-300 bg-zinc-200 px-0.5 dark:border-zinc-600 dark:bg-background',
                    // selected
                    'group-selected:border-zinc-50 group-selected:bg-accent/90 group-selected:dark:border-zinc-800',
                    // disabled
                    'group:disabled:bg-gray-200 group:disabled:dark:bg-zinc-700',
                    renderProps.isFocusVisible && focusOutlineStyle,
                  )}
                >
                  <span className="h-[0.85rem] w-[0.85rem] translate-x-0 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out group-selected:translate-x-[90%]" />
                </div>

                {labelPosition === 'right' &&
                  (typeof children === 'function'
                    ? children(renderProps)
                    : children)}
              </>
            )}
          </RACSwitch>
        );
      }}
    </WithDescriptionContext>
  );
}
