import { AlertTriangle } from 'lucide-react';
import {
  Meter as AriaMeter,
  MeterProps as AriaMeterProps,
} from 'react-aria-components';
import { Label } from './Field';
import { composeTailwindRenderProps } from './utils';

export interface MeterProps extends AriaMeterProps {
  label?: string;
}

export function Meter({
  label,
  positive,
  informative,
  ...props
}: MeterProps &
  (
    | {
        positive?: true;
        informative?: never;
      }
    | { positive?: never; informative?: true }
  )) {
  return (
    <AriaMeter
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-1',
      )}
    >
      {({ percentage, valueText }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span
              className={`text-sm ${percentage >= 80 && !positive && !informative && 'text-destructive'}`}
            >
              {percentage >= 80 && !positive && (
                <AlertTriangle
                  aria-label="Alert"
                  className="inline-block h-4 w-4 align-text-bottom"
                />
              )}
              {' ' + valueText}
            </span>
          </div>
          <div className="relative h-2 w-64  rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700">
            <div
              className={`absolute left-0 top-0 h-full rounded-full ${getColor(percentage, { positive, informative })}`}
              style={{ width: percentage + '%' }}
            />
          </div>
        </>
      )}
    </AriaMeter>
  );
}

function getColor(
  percentage: number,
  { positive, informative }: { positive?: boolean; informative?: boolean },
) {
  if (positive) {
    return 'bg-success';
  }

  if (informative) {
    return 'bg-blue-500';
  }

  if (percentage < 70) {
    return 'bg-success';
  }

  if (percentage < 80) {
    return 'bg-yellow-600';
  }

  return 'bg-destructive';
}
