import React from 'react';
import { createPortal } from 'react-dom';
import { useToastQueue } from '@react-stately/toast';
import type { AriaToastRegionProps, ToastAria } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useToastRegion } from '@react-aria/toast';
import type { AriaToastProps } from '@react-aria/toast';
import { useToast } from '@react-aria/toast';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { CloseButton } from '../Button';
import { twMerge } from 'tailwind-merge';
import { toast, ToastConfig } from './toast-queue';
import { AlertOctagon, AlertTriangle, CheckCircle2 } from 'lucide-react';

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
  const { toastProps, titleProps, closeButtonProps, descriptionProps }: Omit<ToastAria, 'closeButtonProps'> & {
    closeButtonProps: Omit<AriaButtonProps, 'children'>;
  } =
    useToast(props, state, ref);

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
    <div {...toastProps} ref={ref} className="flex flex-1 bg-background rounded-md">
      <div
        className={twMerge(
          'toast flex w-[min(85vw,360px)] gap-1 rounded-md border px-3 py-2 shadow-sm transition',
          type === undefined &&
            !props.toast.content.render &&
            'border-border/75 bg-background dark:border-border',
          type === 'error' && 'border-destructive/20 bg-destructive/10',
          type === 'warning' && 'border-yellow-700/20 bg-yellow-700/10',
          type === 'success' && 'border-success/20 bg-success/10',
          enteringClassName,
        )}
      >
        {props.toast.content.render ? (
          props.toast.content.render()
        ) : (
          <>
            <div className="flex flex-1 items-center gap-2 self-center">
              {type === 'error' && (
                <AlertOctagon className="mt-1 flex size-5 self-start text-destructive" />
              )}

              {type === 'warning' && (
                <AlertTriangle className="mt-1 flex size-5 self-start text-yellow-700" />
              )}

              {type === 'success' && (
                <CheckCircle2 className="mt-1 flex size-5 self-start text-success" />
              )}

              <div className="flex flex-1 flex-col gap-1 text-sm/6">
                {props.toast.content.title ? (
                  <div
                    {...titleProps}
                    className={twMerge(
                      props.toast.content.description && 'font-medium',
                    )}
                  >
                    {props.toast.content.title}
                  </div>
                ) : null}

                {props.toast.content.description ? (
                  <div {...descriptionProps}>
                    {props.toast.content.description}
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )}

        <CloseButton
          plain
          size="sm"
          {...closeButtonProps}
          className={twMerge(
            'rounded',
            'hover:bg-transparent',
            type === 'warning' && 'text-yellow-700',
            type === 'error' && 'text-destructive',
            type === 'success' && 'text-success',
          )}
        />
      </div>
    </div>
  );
}
