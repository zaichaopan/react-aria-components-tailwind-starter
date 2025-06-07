import {
  NumberField as RACNumberField,
  NumberFieldProps as RACNumberFieldProps,
  InputProps,
  Group,
} from 'react-aria-components';
import { Input } from './field';
import { composeTailwindRenderProps, inputField } from './utils';
import { Button } from './button';
import { Separator } from './separator';
import { MinusIcon } from './icons/outline/minus';
import { PlusIcon } from './icons/outline/plus';

export interface NumberFieldProps extends RACNumberFieldProps {}

export function NumberField(props: NumberFieldProps) {
  return (
    <RACNumberField
      {...props}
      className={composeTailwindRenderProps(props.className, inputField)}
    />
  );
}

export function NumberInput(props: InputProps) {
  return (
    <Group
      data-ui="control"
      className={[
        'group isolate grid grid-cols-[auto_auto_1fr_auto_auto]',
        '[&>div:has([role=separator])]:h-full',
        '[&>div:has([role=separator])]:z-10',
      ].join(' ')}
    >
      <Button
        slot="decrement"
        isIconOnly
        variant="plain"
        className="z-10 col-start-1 row-start-1 rounded-e-none"
      >
        <MinusIcon />
      </Button>
      <div className="col-start-2 row-start-1">
        <Separator orientation="vertical" className="h-full" />
      </div>

      <Input
        {...props}
        className={composeTailwindRenderProps(props.className, [
          'z-0',
          'col-span-full',
          'row-start-1',
          'px-[calc(theme(size.11)+10px)] sm:px-[calc(theme(size.9)+10px)]',
        ])}
      />

      <div className="-col-end-2 row-start-1">
        <Separator orientation="vertical" className="h-full" />
      </div>

      <Button
        slot="increment"
        className="-col-end-1 row-start-1 rounded-s-none"
        isIconOnly
        variant="plain"
      >
        <PlusIcon />
      </Button>
    </Group>
  );
}
