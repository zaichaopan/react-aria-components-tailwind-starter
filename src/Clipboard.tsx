import React from 'react';
import { Button, ButtonWithoutAsChildProps } from './Button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { TooltipTrigger, Tooltip } from './Tooltip';

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
  labelCopied = 'Copied',
  children,
  ...props
}: {
  copyText: string;
  label?: string;
  labelCopied?: string;
} & ButtonWithoutAsChildProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Clipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <Button
              aria-label={label}
              {...props}
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyText);
                setShowTooltip(false);
              }}
            >
              {children ?? (
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </Button>
            <Tooltip>{copied ? labelCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </Clipboard>
  );
}
