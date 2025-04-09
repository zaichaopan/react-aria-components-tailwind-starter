import { ToastAria } from '@react-aria/toast';
import { ToastQueue } from '@react-stately/toast';
import { CalloutColor } from '../callout';

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type Type = 'info' | 'error' | 'success' | 'warning';

export type ToastConfig =
  | {
      position?: Position;
      title?: React.ReactNode;
      description?: React.ReactNode;
      action?: React.ReactNode;
      inline?: true;
      dismissable?: boolean;
      color?: CalloutColor;
      render?: never;
      type?: Type;
    }
  | {
      render: (toast: ToastAria) => React.ReactNode;
      position?: Position;
    };

export const toast = new ToastQueue<ToastConfig>({
  maxVisibleToasts: 5,
});
