import React from 'react';
import { createPortal } from 'react-dom';
import { useToastQueue } from '@react-stately/toast';
import type { AriaToastRegionProps, ToastAria } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useToastRegion } from '@react-aria/toast';
import type { AriaToastProps } from '@react-aria/toast';
import { useToast } from '@react-aria/toast';
import {
  ButtonProps as AriaButtonProps,
  composeRenderProps,
} from 'react-aria-components';
import { Button, ButtonProps } from '../button';
import { twMerge } from 'tailwind-merge';
import { toast, ToastConfig } from './toast-queue';
import {
  CircleCheckIcon,
  CircleInfoIcon,
  CircleXIcon,
  OctagonAlertIcon,
  XIcon,
} from '../icons';

interface ToastRegionProps extends AriaToastRegionProps {
  state: ToastState<ToastConfig>;
}

interface ToastProps extends AriaToastProps<ToastConfig> {
  state: ToastState<ToastConfig>;
}

function ToastRegion({ state, ...props }: ToastRegionProps) {
  const ref = React.useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  const position =
    state.visibleToasts[state.visibleToasts.length - 1].content.position ??
    'bottom-right';

  let className = 'bottom-6 right-6 anim ';
  switch (position) {
    case 'bottom-left':
      className = 'bottom-6 left-6';
      break;
    case 'bottom-center':
      className = 'bottom-6 left-1/2 -translate-x-1/2';
      break;
    case 'top-left':
      className = 'top-6 left-6 ';
      break;
    case 'top-center':
      className = 'top-6 left-1/2 -translate-x-1/2';
      break;
    case 'top-right':
      className = 'top-6 right-6';
      break;

    default:
      break;
  }

  return (
    <div
      {...regionProps}
      ref={ref}
      className={twMerge(
        'toast-region fixed isolate z-20 flex flex-col gap-2 outline-none',
        className,
      )}
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}

export function GlobalToastRegion(props: AriaToastRegionProps) {
  const state = useToastQueue<ToastConfig>(toast);

  return state.visibleToasts.length > 0
    ? createPortal(<ToastRegion {...props} state={state} />, document.body)
    : null;
}

function Toast({ state, ...props }: ToastProps) {
  const ref = React.useRef(null);
  const {
    toastProps,
    titleProps,
    closeButtonProps,
    descriptionProps,
  }: Omit<ToastAria, 'closeButtonProps'> & {
    closeButtonProps: Omit<AriaButtonProps, 'children'>;
  } = useToast(props, state, ref);

  let enteringClassName = '';
  const position = props.toast.content.position ?? 'bottom-right';

  switch (position) {
    case 'bottom-right':
    case 'top-right':
      enteringClassName =
        props.toast.animation === 'entering'
          ? 'duration-200 slide-in-from-right animate-in ease-out'
          : '';
      break;
    case 'bottom-left':
    case 'top-left':
      enteringClassName =
        props.toast.animation === 'entering'
          ? 'duration-200 slide-in-from-left animate-in ease-out'
          : '';
      break;
    case 'bottom-center':
    case 'top-center':
      enteringClassName =
        props.toast.animation === 'entering'
          ? 'duration-200 slide-in-from-top animate-in ease-out'
          : '';
      break;
    default:
      break;
  }

  const type = props.toast.content.type;

  return (
    <div
      {...toastProps}
      ref={ref}
      className={twMerge(
        'relative isolate flex w-[min(85vw,360px)] space-x-1 rounded-lg shadow-sm transition',
        'flex flex-1 rounded-ld bg-zinc-900 outline-none',
        type ? 'px-2.5' : 'px-4',
        'py-2.5',
        !props.toast.content.render &&
          'border border-zinc-950 dark:border-zinc-800',
        enteringClassName,
      )}
    >
      {props.toast.content.render ? (
        props.toast.content.render()
      ) : (
        <>
          <div className="flex flex-1 items-center space-x-2.5 self-center">
            {type === 'info' && (
              <CircleInfoIcon className="mt-1 size-5 self-start text-blue-500" />
            )}

            {type === 'error' && (
              <CircleXIcon className="mt-1 size-5 self-start text-destructive" />
            )}

            {type === 'warning' && (
              <OctagonAlertIcon className="mt-1 size-5 self-start text-warning" />
            )}

            {type === 'success' && (
              <CircleCheckIcon className="mt-1 size-5 self-start text-success" />
            )}

            <div className="flex flex-1 flex-col space-y-0.5 text-base/6 sm:text-sm/6">
              {props.toast.content.title ? (
                <div
                  {...titleProps}
                  className={twMerge(
                    props.toast.content.description &&
                      'text-sm/6 font-medium text-zinc-50',
                  )}
                >
                  {props.toast.content.title}
                </div>
              ) : null}

              {props.toast.content.description ? (
                <div
                  {...descriptionProps}
                  className="text-base/5 text-zinc-400  sm:text-sm/5"
                >
                  {props.toast.content.description}
                </div>
              ) : null}

              {props.toast.content.action ? (
                <div className="flex flex-wrap gap-1 py-1">
                  {props.toast.content.action}
                </div>
              ) : null}
            </div>
          </div>
          {props.toast.content.dismissable !== false && (
            <Button
              size="sm"
              isIconOnly
              variant="plain"
              {...closeButtonProps}
              className="p rounded text-zinc-400 hover:bg-transparent hover:text-zinc-50"
            >
              <XIcon aria-label="Close" />
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export function ToastAction({
  variant = 'unstyle',
  ...props
}: ButtonProps) {
  return (
    <Button
      {...props}
      variant={variant}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('text-base/6 text-zinc-50 sm:text-sm/6', className);
      })}
    />
  );
}
