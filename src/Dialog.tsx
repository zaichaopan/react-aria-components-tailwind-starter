import {
  DialogProps,
  OverlayTriggerStateContext,
  Dialog as RACDialog,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { Heading, HeadingProps } from './Heading';
import {
  Button,
  ButtonWithoutAsChildProps,
  CloseButton,
  CloseButtonProps,
} from './Button';
import { composeTailwindRenderProps } from './utils';
import { Text } from './Text';

export { DialogTrigger } from 'react-aria-components';

export function AlertDialog({ children, ...props }: DialogProps) {
  return (
    <Dialog {...props} role="alertdialog">
      {children}
    </Dialog>
  );
}

export function Dialog({ role, ...props }: DialogProps) {
  return (
    <RACDialog
      {...props}
      role={role ?? 'dialog'}
      className={twMerge(
        'relative flex max-h-[inherit] flex-col overflow-hidden outline-none',
        props.className,
      )}
    />
  );
}

type DialogHeaderProps = HeadingProps;

export function DialogHeader(props: DialogHeaderProps) {
  const headerRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          '--dialog-header-height',
          `${entry.target.clientHeight}px`,
        );
      }
    });

    observer.observe(header);
    return () => {
      observer.unobserve(header);
    };
  }, []);

  return (
    <div ref={headerRef} className="relative flex px-6 pb-2 pt-6">
      {typeof props.children === 'string' ? (
        <DialogTitle {...props} />
      ) : (
        props.children
      )}
    </div>
  );
}

export function DialogBody(props: JSX.IntrinsicElements['div']) {
  const { className, children, ...rest } = props;
  return (
    <div
      className={twMerge(
        'flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col gap-2 overflow-auto px-6',
        className,
      )}
      {...rest}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </div>
  );
}

export function DialogFooter({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          '--dialog-footer-height',
          `${entry.target.clientHeight}px`,
        );
      }
    });

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <div
      {...props}
      ref={footerRef}
      className={twMerge(
        'mt-auto flex flex-col flex-col-reverse justify-end gap-3 px-6 pb-6 pt-4 sm:flex-row',
        className,
      )}
    />
  );
}

type DialogCloseButtonProps =
  | Omit<CloseButtonProps, 'outline' | 'unstyle' | 'plain'>
  | (ButtonWithoutAsChildProps & {
      children: Exclude<React.ReactNode, null | undefined>;
    });

export function DialogCloseButton(props: DialogCloseButtonProps) {
  const state = React.useContext(OverlayTriggerStateContext)!;

  if (props.children === undefined) {
    const { onPress, className, ...restProps } = props;

    return (
      <CloseButton
        {...restProps}
        plain
        className={composeTailwindRenderProps(
          className,
          'absolute right-4 top-4 p-1.5',
        )}
        onPress={(e) => {
          state.close();
          onPress?.(e);
        }}
      />
    );
  }

  const { onPress, ...restProps } = props;

  if (!restProps.unstyle && !restProps.outline) {
    restProps.plain = true;
  }

  return (
    <Button
      {...restProps}
      onPress={(e) => {
        state.close();
        onPress?.(e);
      }}
    />
  );
}

export function DialogTitle({
  className,
  level = 2,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <Heading
      {...props}
      slot="title"
      level={level}
      className={twMerge('flex flex-1 items-center', className)}
    >
      {children}
    </Heading>
  );
}
