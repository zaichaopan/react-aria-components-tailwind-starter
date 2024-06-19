import {
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Modal as RACModal,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export function CommandModal({ ...props }: RACModalOverlayProps) {
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
            'max-h-full overflow-hidden text-left align-middle',
            className,
          );
        })}
      />
    </RACModalOverlay>
  );
}
