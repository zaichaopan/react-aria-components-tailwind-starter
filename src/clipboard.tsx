import React from 'react';
import { Button, ButtonWithoutAsChildProps } from './button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { TooltipTrigger, Tooltip } from './tooltip';
import { CheckIcon, CopyIcon } from './icons';
import { twMerge } from 'tailwind-merge';

export type ClipboardProps = {
  timeout?: number;
  children: (payload: {
    copied: boolean;
    copy: (value: string) => void;
  }) => React.ReactNode;
};

export function Clipboard({ timeout, children }: ClipboardProps) {
  const { copied, copy } = useCopyToClipboard({ timeout });
  return children({ copied, copy });
}

export function CopyButton({
  copyText,
  label = 'Copy',
  labelCopied = 'Copied to clipboard',
  icon,
  variant = 'plain',
  children,
  ...props
}: {
  copyText: string;
  label?: string;
  labelCopied?: string;
  icon?: JSX.Element;
} & ButtonWithoutAsChildProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Clipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <Button
              variant={variant}
              {...(!children && {
                isIconOnly: true,
              })}
              aria-label={label}
              {...props}
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyText);
                setShowTooltip(false);
              }}
            >
              {children ?? (
                <>
                  {icon ? (
                    React.cloneElement(icon, {
                      className: twMerge(
                        'transition-all',
                        copied
                          ? 'absolute scale-0 opacity-0'
                          : 'scale-100 opacity-100',
                      ),
                    })
                  ) : (
                    <CopyIcon
                      className={twMerge(
                        'transition-all',
                        copied
                          ? 'absolute scale-0 opacity-0'
                          : 'scale-100 opacity-100',
                      )}
                    />
                  )}

                  <CheckIcon
                    className={twMerge(
                      'text-success transition-all',
                      copied
                        ? 'scale-100 opacity-100'
                        : 'absolute  scale-0 opacity-0',
                    )}
                  ></CheckIcon>
                </>
              )}
            </Button>
            <Tooltip>{copied ? labelCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </Clipboard>
  );
}
