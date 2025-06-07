import React from 'react';
import { Button, ButtonProps } from './button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { TooltipTrigger, Tooltip } from './tooltip';
import { CheckIcon } from './icons/outline/check';
import { CopyIcon } from './icons/outline/copy';
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

export type CopyButtonProps = (
  | {
      label?: string;
      labelAfterCopied?: string;
      children?: never;
    }
  | {
      label?: never;
      labelAfterCopied?: never;
      children?: React.ReactNode;
    }
) & {
  copyValue: string;
  icon?: React.JSX.Element;
} & Omit<ButtonProps, 'tooltip' | 'children' | 'isIconOnly'>;

export function CopyButton({
  copyValue,
  icon,
  variant,
  ...props
}: CopyButtonProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  if (props.children) {
    const { children, ...rest } = props;
    return (
      <Clipboard>
        {({ copied, copy }) => {
          return (
            <Button
              {...rest}
              variant={variant ?? 'outline'}
              onPress={() => {
                copy(copyValue);
              }}
            >
              <>
                {icon ? (
                  React.cloneElement(icon, {
                    className: twMerge(
                      'transition-all',
                      copied
                        ? 'absolute left-3.5 scale-0 opacity-0'
                        : 'scale-100 opacity-100',
                    ),
                  })
                ) : (
                  <CopyIcon
                    className={twMerge(
                      'transition-all',
                      copied
                        ? 'absolute left-3.5 scale-0 opacity-0'
                        : 'scale-100 opacity-100',
                    )}
                  />
                )}
                <CheckIcon
                  className={twMerge(
                    'text-green-600 transition-all',
                    copied
                      ? 'scale-100 opacity-100'
                      : 'absolute left-3.5 scale-0 opacity-0',
                  )}
                />
                {children}
              </>
            </Button>
          );
        }}
      </Clipboard>
    );
  }

  const { label = 'Copy', labelAfterCopied = 'Copied', ...rest } = props;

  return (
    <Clipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <Button
              {...rest}
              variant={variant ?? 'plain'}
              isIconOnly
              aria-label={label}
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyValue);
                setShowTooltip(false);
              }}
            >
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
                    'text-green-600 transition-all',
                    copied
                      ? 'scale-100 opacity-100'
                      : 'absolute scale-0 opacity-0',
                  )}
                />
              </>
            </Button>
            <Tooltip>{copied ? labelAfterCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </Clipboard>
  );
}
