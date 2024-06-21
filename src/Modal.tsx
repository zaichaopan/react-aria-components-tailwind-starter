import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
};

type Size = keyof typeof sizes;

type DrawerProps =
  | { drawer?: never }
  | {
      drawer: true;
      placement?: 'left' | 'right';
    };

type ClassNames = {
  modalOverlay?: RACModalOverlayProps['className'];
  modal?: RACModalOverlayProps['className'];
};

type ModalProps = Omit<RACModalOverlayProps, 'className'> & {
  size?: Size;
  animate?: boolean;
  classNames?: ClassNames;
} & DrawerProps;

export function Modal({
  isDismissable = true,
  animate = true,
  classNames,
  ...props
}: ModalProps) {
  const drawer = props.drawer;

  const placement = props.drawer ? props.placement ?? 'left' : undefined;

  return (
    <RACModalOverlay
      {...props}
      isDismissable={isDismissable}
      className={composeRenderProps(
        classNames?.modalOverlay,
        (_, renderProps) => {
          return twMerge(
            'fixed left-0 top-0 isolate z-20',
            'h-[--visual-viewport-height] w-full',
            'bg-zinc-950/15 dark:bg-zinc-950/50',
            'flex items-end text-center sm:items-center',
            drawer
              ? [
                  'p-2 [--visual-viewport-vertical-padding:16px]',

                  placement === 'left' ? 'justify-start ' : 'justify-end',

                  renderProps.isEntering &&
                    'duration-200 ease-out animate-in fade-in',

                  renderProps.isExiting &&
                    'duration-200 ease-in animate-out fade-out',
                ]
              : [
                  'justify-center',
                  'pt-4 [--visual-viewport-vertical-padding:16px] sm:p-4 sm:[--visual-viewport-vertical-padding:32px]',

                  renderProps.isEntering &&
                    'duration-200 ease-out animate-in fade-in',

                  renderProps.isExiting &&
                    'duration-200 ease-in animate-out fade-out',
                ],
          );
        },
      )}
    >
      <RACModal
        {...props}
        className={composeRenderProps(
          classNames?.modal,
          (className, renderProps) => {
            return twMerge(
              'max-h-full w-full overflow-hidden text-left align-middle shadow-lg',
              'bg-background dark:bg-secondary',
              'ring-1 ring-zinc-950/5  dark:ring-white/10',
              sizes[props.size ?? 'lg'],

              drawer
                ? [
                    'h-full rounded-lg',
                    animate &&
                      renderProps.isEntering && [
                        placement === 'left'
                          ? 'duration-200 ease-out animate-in slide-in-from-left'
                          : 'duration-200 ease-out animate-in slide-in-from-right',
                      ],
                    animate &&
                      renderProps.isExiting && [
                        placement === 'left'
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
}: ModalProps) {
  return <Modal {...props} size={size} isDismissable={isDismissable} />;
}
