import React from 'react';
import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';

const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-lg',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
  fullWidth: 'w-full',
};

type ModalType =
  | { drawer?: never; placement?: 'center' | 'top' }
  | { drawer: true; placement?: 'left' | 'right' };

type ModalProps = Omit<RACModalOverlayProps, 'className'> & {
  size?: keyof typeof sizes;
  classNames?: {
    modalOverlay?: RACModalOverlayProps['className'];
    modal?: RACModalOverlayProps['className'];
  };
} & ModalType;

export function Modal({ classNames, ...props }: ModalProps) {
  const drawer = props.drawer;
  const placement = props.drawer ? props.placement ?? 'left' : props.placement;

  React.useEffect(() => {
    document
      .querySelector<HTMLElement>(':root')
      ?.style.setProperty(
        '--scrollbar-width',
        `${window.innerWidth - document.documentElement.clientWidth}px`,
      );
  }, []);

  return (
    <RACModalOverlay
      {...props}
      data-ui="modal-overlay"
      className={composeTailwindRenderProps(classNames?.modalOverlay, [
        'fixed left-0 top-0 isolate z-20',
        'h-[--visual-viewport-height] w-full',
        'bg-zinc-950/25 dark:bg-zinc-950/50',
        'flex',
        'text-center',
        'entering:animate-in',
        'entering:fade-in',
        'entering:duration-300',
        'entering:ease-out',

        'exiting:animate-out',
        'exiting:fade-out',
        'exiting:duration-200',
        'exiting:ease-in',

        drawer
          ? [
              'items-start',
              'p-2 [--visual-viewport-vertical-padding:16px]',
              '[&:has([data-placement=right])]:justify-end',
            ]
          : [
              'justify-center',

              placement === 'top'
                ? [
                    'items-start',
                    'pt-16',
                    'pb-4',
                    '[--visual-viewport-vertical-padding:80px]',
                  ]
                : placement === 'center'
                  ? [
                      'items-center',
                      'p-4',
                      '[--visual-viewport-vertical-padding:32px]',
                    ]
                  : [
                      // Default modal style
                      'items-center',
                      '[&:has([role=dialog])]:items-end',
                      '[&:has([role=dialog])]:pt-4',
                      '[&:has([role=dialog])]:[--visual-viewport-vertical-padding:16px]',

                      'sm:[&:has([role=dialog])]:items-center',
                      'sm:[&:has([role=dialog])]:p-4',
                      'sm:[&:has([role=dialog])]:[--visual-viewport-vertical-padding:32px]',
                    ],

              /**
               * Style for stack dialogs
               */
              // First dialog
              '[&:has(~[data-ui=modal-overlay]:not([data-exiting]))>[data-ui=modal]>section]:opacity-75',
              '[&:has(~[data-ui=modal-overlay]:not([data-exiting]))>[data-ui=modal]]:bg-zinc-100',
              'dark:[&:has(~[data-ui=modal-overlay]:not([data-exiting]))>[data-ui=modal]]:bg-zinc-900',

              '[&:has(~[data-ui=modal-overlay])>[data-ui=modal]]:transform-[scale,y]',
              '[&:has(~[data-ui=modal-overlay])>[data-ui=modal]]:ease-in-out',
              '[&:has(~[data-ui=modal-overlay])>[data-ui=modal]]:duration-200',

              // When the nested dialog is not closing
              '[&:has(~[data-ui=modal-overlay]:not([data-exiting]))>[data-ui=modal]]:scale-90',
              '[&:has(~[data-ui=modal-overlay]:not([data-exiting]))>[data-ui=modal]]:translate-y-4',

              // Remove nested dialog overlay background and fade in effect
              '[&:has(~[data-ui=modal-overlay])~[data-ui=modal-overlay]]:bg-transparent',
              '[&:has(~[data-ui=modal-overlay])~[data-ui=modal-overlay]]:fade-in-100',

              // Make both dialogs close immediately
              '[&:has(~[data-ui=modal-overlay])~[data-ui=modal-overlay][data-exiting]]:opacity-0',
              '[&[data-exiting]:has(~[data-ui=modal-overlay])]:opacity-0',
            ],
      ])}
    >
      <RACModal
        {...props}
        data-ui="modal"
        data-placement={placement}
        className={composeTailwindRenderProps(classNames?.modal, [
          'relative max-h-full w-full',
          'text-left align-middle',
          'shadow-lg',
          'bg-white dark:bg-zinc-900',
          'ring-1 ring-zinc-950/5 dark:ring-zinc-800',

          props.size
            ? sizes[props.size]
            : 'sm:has-[[role=alertdialog]]:max-w-md sm:has-[[role=dialog]]:max-w-lg',

          'entering:animate-in',
          'entering:ease-out',
          'entering:duration-200',
          'exiting:animate-out',
          'exiting:ease-in',
          'exiting:duration-200',

          drawer
            ? [
                'h-full',
                'rounded-lg',
                'data-[placement=left]:entering:slide-in-from-left',
                'data-[placement=right]:entering:slide-in-from-right',
                'data-[placement=left]:exiting:slide-out-to-left',
                'data-[placement=right]:exiting:slide-out-to-right',
              ]
            : [
                'rounded-lg',
                'entering:zoom-in-95',
                'exiting:zoom-out-95',

                // Handle layout shift when toggling scroll lock
                props.size !== 'fullWidth' &&
                  'sm:exiting:-me-[var(--scrollbar-width)]',
                'sm:exiting:duration-0',

                !placement && [
                  'has-[[role=dialog]]:rounded-t-lg',
                  'has-[[role=dialog]]:rounded-b-none',
                  'sm:has-[[role=dialog]]:rounded-lg',

                  'has-[[role=dialog]]:entering:zoom-in-100',
                  'has-[[role=dialog]]:entering:slide-in-from-bottom',
                  'sm:has-[[role=dialog]]:entering:zoom-in-95',
                  'sm:has-[[role=dialog]]:entering:slide-in-from-bottom-0',

                  'has-[[role=dialog]]:exiting:zoom-out-100',
                  'has-[[role=dialog]]:exiting:slide-out-to-bottom',
                  'sm:has-[[role=dialog]]:exiting:zoom-out-95',
                  'sm:has-[[role=dialog]]:exiting:slide-out-to-bottom-0',
                ],
              ],
        ])}
      />
    </RACModalOverlay>
  );
}
