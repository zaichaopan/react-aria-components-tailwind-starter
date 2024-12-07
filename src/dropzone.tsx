import { DropZoneProps, DropZone as RACDropZone } from 'react-aria-components';
import {
  composeTailwindRenderProps,
  dropTargetOutline,
  focusVisibleOutline,
} from './utils';

export function DropZone(props: DropZoneProps) {
  return (
    <RACDropZone
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'sm:min-w-96',
        'flex flex-shrink-0 flex-col items-center justify-center rounded-md',
        'border border-dashed p-2',
        focusVisibleOutline,
        'drop-target:border-solid',
        'drop-target:bg-accent/20 drop-target:dark:bg-accent/75',
        'disabled:opacity-50',
        dropTargetOutline,
      ])}
    />
  );
}
