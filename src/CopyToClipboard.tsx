import React from 'react';
import { Button, ButtonPropsWithoutAsChild } from './Button';
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
  labelBeforeCopy = 'Copy',
  labelAfterCopy = 'Copied',
  ...props
}: {
  copyText: string;
  labelBeforeCopy?: string;
  labelAfterCopy?: string;
} & Omit<ButtonPropsWithoutAsChild, 'outline' | 'unstyle'>) {
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
              <Icon aria-label={labelBeforeCopy}>
                <Copy strokeWidth={1.5} />
              </Icon>
            </Button>
            <Tooltip>{copied ? labelAfterCopy : labelBeforeCopy}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </CopyToClipboard>
  );
}
