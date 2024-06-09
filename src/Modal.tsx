import {
  ModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
  composeRenderProps,
  ModalRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export interface ModalOverlayProps extends RACModalOverlayProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export type DrawerProps =
  | { drawer?: never }
  | {
      drawer: true;
      drawPlacement?: 'left' | 'right';
    };

const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
};

function getModalOverlayStyle(props: DrawerProps) {
  if (props.drawer) {
    return [
      props.drawPlacement === 'right'
        ? 'p-2 [--visual-viewport-vertical-padding:16px] justify-end'
        : 'p-2 [--visual-viewport-vertical-padding:16px] justify-start',
    ];
  }

  return 'justify-center pt-4 [--visual-viewport-vertical-padding:16px] sm:p-4 sm:[--visual-viewport-vertical-padding:32px]';
}

function getModalAnimateStyle(props: ModalRenderProps & DrawerProps) {
  if (props.drawer) {
    if (props.isEntering) {
      return props.drawPlacement === 'right'
        ? 'duration-200 ease-out animate-in slide-in-from-right'
        : 'duration-200 ease-out animate-in slide-in-from-left';
    }

    if (props.isExiting) {
      return props.drawPlacement === 'right'
        ? 'duration-200 ease-in animate-out slide-out-to-right'
        : 'duration-200 ease-in animate-out slide-out-to-left';
    }

    return;
  }

  if (props.isEntering) {
    return [
      'slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-105 animate-in ease-out duration-300 sm:duration-200',
    ];
  }

  if (props.isExiting) {
    return 'slide-out-to-bottom sm:slide-out-to-bottom-0 animate-out sm:zoom-out-95 ease-in duration-300 sm:duration-200';
  }
}

export function Modal({
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  ...props
}: ModalOverlayProps & DrawerProps) {
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'fixed left-0 top-0 isolate z-20 flex h-[--visual-viewport-height] w-full items-end bg-zinc-950/15 text-center dark:bg-zinc-950/50 sm:items-center',
            renderProps.isEntering && [
              props.drawer ? 'duration-200' : 'duration-300 sm:duration-200',
              'ease-out animate-in fade-in',
            ],
            renderProps.isExiting && [
              props.drawer ? 'duration-200' : 'duration-300 sm:duration-200',
              'ease-in animate-out fade-out',
            ],
            getModalOverlayStyle(props),
            className,
          );
        },
      )}
    >
      <RACModal
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge(
              'max-h-full w-full overflow-hidden bg-background text-left align-middle shadow-lg ring-1 ring-zinc-950/5 dark:bg-secondary dark:ring-white/10',
              sizes[props.size ?? 'lg'],
              props.drawer ? 'h-full rounded-xl' : 'rounded-t-xl sm:rounded-xl',
              getModalAnimateStyle({ ...renderProps, ...props }),
              className,
            );
          },
        )}
      />
    </ModalOverlay>
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
