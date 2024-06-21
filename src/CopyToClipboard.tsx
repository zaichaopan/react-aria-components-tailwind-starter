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
  return <>{children({ copied, copy })}</>;
}

export function CopyButton({
  copyText,
  labelBefore = 'Copy',
  labelAfter = 'Copied',
  ...props
}: {
  copyText: string;
  labelBefore?: string;
  labelAfter?: string;
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
              <Icon>
                <Copy strokeWidth="1.5px" aria-label={labelBefore} />
              </Icon>
            </Button>
            <Tooltip>{copied ? labelAfter : labelBefore}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </CopyToClipboard>
  );
}
