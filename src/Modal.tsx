import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export interface ModalOverlayProps extends RACModalOverlayProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animate?: boolean;
}

export type DrawerProps =
  | { drawer?: never }
  | {
      drawer: true;
      drawerPlacement?: 'left' | 'right';
    };

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
};

export function Modal({
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  animate = true,
  ...props
}: ModalOverlayProps & DrawerProps) {
  const drawer = props.drawer;

  const drawerPlacement = props.drawer
    ? props.drawerPlacement ?? 'left'
    : undefined;

  return (
    <RACModalOverlay
      {...props}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      className={composeRenderProps(props.className, (_, renderProps) => {
        return twMerge(
          'h-[--visual-viewport-height] w-full bg-zinc-950/15 dark:bg-zinc-950/50',
          'fixed left-0 top-0 isolate z-20 flex text-center',
          'items-end sm:items-center',
          drawer
            ? [
                'p-2 [--visual-viewport-vertical-padding:16px]',

                drawerPlacement === 'left' ? 'justify-start ' : 'justify-end',

                renderProps.isEntering &&
                  'duration-200 ease-out animate-in fade-in',

                renderProps.isExiting &&
                  'duration-200 ease-in animate-out fade-out',
              ]
            : [
                'justify-center',
                'pt-4 [--visual-viewport-vertical-padding:16px]',
                'sm:p-4 sm:[--visual-viewport-vertical-padding:32px]',

                renderProps.isEntering &&
                  'duration-200 ease-out animate-in fade-in',

                renderProps.isExiting &&
                  'duration-200 ease-in animate-out fade-out',
              ],
        );
      })}
    >
      <RACModal
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge(
              'max-h-full w-full overflow-hidden text-left align-middle shadow-lg',
              'bg-background ring-1 ring-zinc-950/5 dark:bg-secondary dark:ring-white/10',

              sizes[props.size ?? 'lg'],

              drawer
                ? [
                    'h-full rounded-lg',
                    animate &&
                      renderProps.isEntering && [
                        drawerPlacement === 'left'
                          ? 'duration-200 ease-out animate-in slide-in-from-left'
                          : 'duration-200 ease-out animate-in slide-in-from-right',
                      ],
                    animate &&
                      renderProps.isExiting && [
                        drawerPlacement === 'left'
                          ? 'duration-200 ease-in animate-out slide-out-to-left'
                          : 'duration-200 ease-in animate-out slide-out-to-right',
                      ],
                  ]
                : [
                    'rounded-t-2xl sm:rounded-lg',
                    animate &&
                      renderProps.isEntering &&
                      'duration-200 ease-out animate-in slide-in-from-bottom sm:zoom-in-105 sm:slide-in-from-bottom-0',

                    animate &&
                      renderProps.isExiting &&
                      'duration-200 ease-in animate-out slide-out-to-bottom sm:zoom-out-95 sm:slide-out-to-bottom-0',
                  ],
              className,
            );
          },
        )}
      />
    </RACModalOverlay>
  );
}

export function AlertModal({
  size = 'md',
  isDismissable = false,
  ...props
}: ModalOverlayProps) {
  return <Modal {...props} size={size} isDismissable={isDismissable} />;
}
