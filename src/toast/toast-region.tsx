import React from 'react';
import { createPortal } from 'react-dom';
import { useToastQueue } from '@react-stately/toast';
import type { AriaToastRegionProps, ToastAria } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useToastRegion } from '@react-aria/toast';
import type { AriaToastProps } from '@react-aria/toast';
import { useToast } from '@react-aria/toast';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { toast, ToastConfig } from './toast-queue';
import Callout, {
  CalloutActions,
  CalloutControl,
  CalloutDescription,
  CalloutTitle,
  CalloutIcon,
} from '../callout';
import { InformationCircleIcon } from '../icons/outline/information-circle';
import { ExclamationCircleIcon } from '../icons/outline/exclamation-circle';
import { CheckCircleIcon } from '../icons/outline/check-circle';
import { ExclamationTriangleIcon } from '../icons/outline/exclamation-triangle';

interface ToastRegionProps extends AriaToastRegionProps {
  state: ToastState<ToastConfig>;
}

interface ToastProps extends AriaToastProps<ToastConfig> {
  state: ToastState<ToastConfig>;
}

function ToastRegion({ state, ...props }: ToastRegionProps) {
  const ref = React.useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  const position = state.visibleToasts[0].content.position ?? 'bottom-right';

  let className = 'bottom-6 right-6';
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
      data-position={position}
      ref={ref}
      className={twMerge(
        'group toast-region fixed isolate z-20 flex flex-col gap-2 outline-hidden',
        className,
      )}
    >
      {state.visibleToasts.map((toast) => {
        return <Toast key={toast.key} toast={toast} state={state} />;
      })}
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
  const toast: Omit<ToastAria, 'closeButtonProps'> & {
    closeButtonProps: Omit<AriaButtonProps, 'children'>;
  } = useToast(props, state, ref);

  if (props.toast.content.render !== undefined) {
    return (
      <div
        {...toast.toastProps}
        ref={ref}
        className={twMerge(
          'relative isolate flex',
          'group-data-[position=top-left]:w-[min(85vw,360px)]',
          'group-data-[position=top-right]:w-[min(85vw,360px)]',
          'group-data-[position=bottom-left]:w-[min(85vw,360px)]',
          'group-data-[position=bottom-right]:w-[min(85vw,360px)]',
        )}
      >
        {props.toast.content.render(toast)}
      </div>
    );
  }

  const { color, type, title, description, dismissable, inline, action } =
    props.toast.content;

  let calloutColor = color;

  if (!calloutColor) {
    switch (type) {
      case 'info':
        calloutColor = 'blue';
        break;
      case 'success':
        calloutColor = 'green';
        break;
      case 'warning':
        calloutColor = 'yellow';
        break;
      case 'error':
        calloutColor = 'red';
        break;
    }
  }

  return (
    <div
      {...toast.toastProps}
      ref={ref}
      className={twMerge(
        'relative isolate flex bg-background',
        'group-data-[position=top-left]:w-[min(85vw,360px)]',
        'group-data-[position=top-right]:w-[min(85vw,360px)]',
        'group-data-[position=bottom-left]:w-[min(85vw,360px)]',
        'rounded-xl group-data-[position=bottom-right]:w-[min(85vw,360px)]',
      )}
    >
      <Callout role={null} color={calloutColor} inline={inline}>
        {dismissable !== false && (
          <CalloutControl slot="close" {...toast.closeButtonProps} />
        )}
        {type === 'info' && (
          <CalloutIcon>
            <InformationCircleIcon />
          </CalloutIcon>
        )}
        {type === 'error' && (
          <CalloutIcon>
            <ExclamationCircleIcon/>
          </CalloutIcon>
        )}
        {type === 'warning' && (
          <CalloutIcon>
            <ExclamationTriangleIcon />
          </CalloutIcon>
        )}
        {type === 'success' && (
          <CalloutIcon>
            <CheckCircleIcon />
          </CalloutIcon>
        )}
        {title ? (
          <CalloutTitle {...toast.titleProps}>{title}</CalloutTitle>
        ) : null}
        {description ? (
          <CalloutDescription {...toast.descriptionProps}>
            {description}
          </CalloutDescription>
        ) : null}
        {action ? <CalloutActions>{action}</CalloutActions> : null}
      </Callout>
    </div>
  );
}
