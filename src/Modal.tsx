import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export interface ModalOverlayProps extends RACModalOverlayProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export type DrawerProps =
  | { drawer?: never }
  | {
      drawer: true;
      drawerPlacement?: 'left' | 'right';
    };

const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
};

export function Modal({
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  ...props
}: ModalOverlayProps & DrawerProps) {
  const drawer = props.drawer;

  const drawerPlacement = props.drawer
    ? props.drawerPlacement ?? 'left'
    : undefined;

  return (
    <RACModalOverlay
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      {...props}
      className={composeRenderProps(props.className, (_, renderProps) => {
        return twMerge(
          'fixed left-0 top-0 isolate z-20 flex h-[--visual-viewport-height] w-full items-end bg-zinc-950/15 text-center dark:bg-zinc-950/50 sm:items-center',
          drawer
            ? [
                'p-2 [--visual-viewport-vertical-padding:16px]',

                drawerPlacement === 'right' ? 'justify-end ' : 'justify-start',

                renderProps.isEntering &&
                  'duration-200 ease-out animate-in fade-in',
                renderProps.isExiting &&
                  'duration-200 ease-in animate-out fade-out',
              ]
            : [
                'justify-center pt-4 [--visual-viewport-vertical-padding:16px]',
                'sm:p-4 sm:[--visual-viewport-vertical-padding:32px]',

                renderProps.isEntering &&
                  'duration-300 ease-out animate-in fade-in sm:duration-200',
                renderProps.isExiting &&
                  'duration-300 ease-in animate-out fade-out sm:duration-200',
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
              'max-h-full w-full overflow-hidden bg-background text-left align-middle align-middle shadow-lg ring-1 ring-zinc-950/5 dark:bg-secondary  dark:ring-white/10',
              sizes[props.size ?? 'lg'],

              drawer
                ? [
                    'h-full rounded-lg',
                    renderProps.isEntering && [
                      drawerPlacement === 'right'
                        ? 'duration-200 ease-out animate-in slide-in-from-right'
                        : 'duration-200 ease-out animate-in slide-in-from-left',
                    ],
                    renderProps.isExiting && [
                      drawerPlacement === 'right'
                        ? 'duration-200 ease-in animate-out slide-out-to-right'
                        : 'duration-200 ease-in animate-out slide-out-to-left',
                    ],
                  ]
                : [
                    'rounded-t-2xl sm:rounded-lg',
                    renderProps.isEntering &&
                      'duration-300 ease-out animate-in slide-in-from-bottom sm:duration-200 sm:zoom-in-105 sm:slide-in-from-bottom-0',

                    renderProps.isExiting &&
                      'duration-300 ease-in animate-out slide-out-to-bottom sm:duration-200 sm:zoom-out-95 sm:slide-out-to-bottom-0',
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
  size,
  isDismissable = false,
  isKeyboardDismissDisabled = true,
  ...props
}: ModalOverlayProps) {
  return (
    <Modal
      size={size ?? 'md'}
      {...props}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
    />
  );
}

export function CommandModal({ ...props }: ModalOverlayProps) {
  return (
    <RACModalOverlay
      isDismissable
      {...props}
      className="fixed left-0 top-0 isolate z-20 flex h-[--visual-viewport-height] w-full items-start justify-center bg-transparent text-center"
    >
      <RACModal
        {...props}
        className={composeRenderProps(props.className, (className) => {
          return twMerge(
            'max-h-full overflow-hidden bg-background text-left align-middle dark:bg-secondary',
            className,
          );
        })}
      />
    </RACModalOverlay>
  );
}
