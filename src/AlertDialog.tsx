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
  primaryActionLabel: React.ReactNode;
  secondaryActionLabel?: React.ReactNode;
  onCancelAction?: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export function AlertDialog({
  title,
  destructive = false,
  cancelLabel = 'Cancel',
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  onCancelAction,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <Dialog {...props} role="alertdialog">
      {({ close }) => (
        <>
          <DialogHeader level={2}>
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
            <Button plain onPress={chain(onCancelAction, close)}>
              {cancelLabel}
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

            <Button
              color={destructive ? 'destructive' : 'accent'}
              onPress={chain(onPrimaryAction, close)}
            >
              {primaryActionLabel}
            </Button>
          </DialogFooter>
        </>
      )}
    </Dialog>
  );
}
