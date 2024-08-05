import React from 'react';
import { Button, ButtonWithoutAsChildProps } from './Button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { TooltipTrigger, Tooltip } from './Tooltip';
import { Copy } from 'lucide-react';
import { Icon } from './Icon';

export interface CopyToClipboardProps {
  timeout?: number;
  children: (payload: {
    copied: boolean;
    copy: (value: string) => void;
  }) => React.ReactNode;
}

export function CopyToClipboard({ timeout, children }: CopyToClipboardProps) {
  const { copied, copy } = useCopyToClipboard({ timeout });
  return children({ copied, copy });
}

export function CopyButton({
  copyText,
  label = 'Copy',
  labelCopied = 'Copied',
  ...props
}: {
  copyText: string;
  label?: string;
  labelCopied?: string;
} & Omit<ButtonWithoutAsChildProps, 'outline' | 'unstyle'>) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <CopyToClipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <Button
              {...props}
              plain
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyText);
                setShowTooltip(false);
              }}
            >
              <Icon aria-label={label}>
                <Copy />
              </Icon>
            </Button>
            <Tooltip>{copied ? labelCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </CopyToClipboard>
  );
}
