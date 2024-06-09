import { ToastQueue } from '@react-stately/toast';

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type Type = 'error' | 'success' | 'warning';

export type ToastConfig =
  | {
      title: string;
      description?: string;
      position?: Position;
      render?: never;
      type?: Type;
    }
  | {
      render: () => React.ReactNode;
      position?: Position;
      type?: Type;
    };

export const toast = new ToastQueue<ToastConfig>({
  maxVisibleToasts: 5,
});
