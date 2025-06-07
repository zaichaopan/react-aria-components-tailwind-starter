import {
  Meter as AriaMeter,
  MeterProps as AriaMeterProps,
} from 'react-aria-components';
import { Label } from './field';
import { composeTailwindRenderProps } from './utils';
import { ExclamationTriangleIcon } from './icons/outline/exclamation-triangle';

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
        'flex flex-col gap-2',
      )}
    >
      {({ percentage, valueText }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span
              className={`text-sm ${percentage >= 80 && !positive && !informative && 'text-red-600'}`}
            >
              {percentage >= 80 && !positive && (
                <ExclamationTriangleIcon className="inline-block size-5 align-text-bottom" />
              )}
              {' ' + valueText}
            </span>
          </div>
          <div className="relative h-2 w-64 rounded-full bg-zinc-200 outline -outline-offset-1 outline-transparent dark:bg-zinc-700">
            <div
              className={`absolute top-0 left-0 h-full rounded-full ${getColor(percentage, { positive, informative })}`}
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
    return 'bg-green-600';
  }

  if (informative) {
    return 'bg-blue-600';
  }

  if (percentage < 70) {
    return 'bg-green-600';
  }

  if (percentage < 80) {
    return 'bg-yellow-600';
  }

  return 'bg-red-600';
}
