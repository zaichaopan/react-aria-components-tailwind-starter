import React from 'react';
import { IconButtonProps } from './Button';
import { useCopyToClipboard } from './hooks/use-clipboard';
import { IconButton } from './Button';
import { TooltipTrigger, Tooltip } from './Tooltip';
import { Copy } from 'lucide-react';

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
  variant,
  labelBefore = 'Copy',
  labelAfter = 'Copied',
  ...props
}: {
  copyText: string;
  labelBefore?: string;
  labelAfter?: string;
} & Omit<IconButtonProps, 'icon'>) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <CopyToClipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <IconButton
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyText);
                setShowTooltip(false);
              }}
              variant={variant ?? 'text'}
              aria-label={labelBefore}
              icon={<Copy strokeWidth="1.5px" />}
              {...props}
            ></IconButton>
            <Tooltip>{copied ? labelAfter : labelBefore}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </CopyToClipboard>
  );
}
