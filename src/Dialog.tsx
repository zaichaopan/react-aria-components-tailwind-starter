import {
  DialogProps,
  OverlayTriggerStateContext,
  Dialog as RACDialog,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { Heading, HeadingProps } from './Heading';
import { CloseButton } from './Button';

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

type DialogHeaderProps = HeadingProps & {
  noCloseButton?: true;
};

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

      {!props.noCloseButton && <DialogCloseButton />}
    </div>
  );
}

export function DialogBody(props: JSX.IntrinsicElements['div']) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        'flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col gap-2 overflow-auto px-6',
        className,
      )}
      {...otherProps}
    />
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
      ref={footerRef}
      className={twMerge(
        'mt-auto flex flex-col flex-col-reverse justify-end gap-3 px-6 pb-6 pt-4 sm:flex-row',
        className,
      )}
      {...props}
    />
  );
}

export function DialogCloseButton() {
  const state = React.useContext(OverlayTriggerStateContext)!;

  return (
    <CloseButton
      text
      className="absolute right-4 top-4 p-1.5 text-muted"
      onPress={() => state.close()}
    />
  );
}

export function DialogTitle({
  className,
  noCloseButton,
  level = 2,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <Heading
      slot="title"
      level={level}
      className={twMerge(
        'flex flex-1 items-center',
        !noCloseButton && 'pr-14',
        className,
      )}
      {...props}
    >
      {children}
    </Heading>
  );
}
