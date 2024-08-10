import React from 'react';
import { Button, ButtonWithoutAsChildProps } from './Button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { TooltipTrigger, Tooltip } from './Tooltip';
import { Copy } from 'lucide-react';
import { Icon } from './Icon';

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
              {...props}
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyText);
                setShowTooltip(false);
              }}
            >
              {children ?? (
                <Icon aria-label={label}>
                  <Copy />
                </Icon>
              )}
            </Button>
            <Tooltip>{copied ? labelCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </Clipboard>
  );
}
