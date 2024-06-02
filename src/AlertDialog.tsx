import { ReactNode } from 'react';
import { chain } from 'react-aria';
import { DialogProps } from 'react-aria-components';
import { Button } from './Button';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './Dialog';
import { Text } from './Text';

interface AlertDialogProps extends Omit<DialogProps, 'children'> {
  title: React.ReactNode;
  children?: ReactNode;
  destructive?: boolean;
  cancelLabel?: React.ReactNode;
  primaryActionLabel?: React.ReactNode;
  secondaryActionLabel?: React.ReactNode;
  onCancelAction?: () => void;
  onPrimaryAction?: () => void; 
  onSecondaryAction?: () => void;
}

export function AlertDialog({
  title,
  destructive = false,
  cancelLabel,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  onCancelAction,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <Dialog role="alertdialog" {...props}>
      {({ close }) => (
        <>
          <DialogHeader level={2} noCloseButton>
            {title}
          </DialogHeader>
          {children ? (
            <DialogBody>
              {typeof children === 'string' ? (
                <Text>{children}</Text>
              ) : (
                children
              )}
            </DialogBody>
          ) : null}

          <DialogFooter className={secondaryActionLabel ? 'justify-start' : ''}>
            <Button text onPress={chain(onCancelAction, close)}>
              {cancelLabel || 'Cancel'}
            </Button>
            {secondaryActionLabel ? (
              <Button
                outline
                className="sm:ml-auto"
                onPress={chain(onSecondaryAction, close)}
              >
                {secondaryActionLabel}
              </Button>
            ) : null}

            {primaryActionLabel ? (
              <Button
                color={destructive ? 'destructive' : 'accent'}
                onPress={chain(onPrimaryAction, close)}
              >
                {primaryActionLabel}
              </Button>
            ) : null}
          </DialogFooter>
        </>
      )}
    </Dialog>
  );
}
