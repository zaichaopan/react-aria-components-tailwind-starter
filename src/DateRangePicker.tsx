import { CalendarIcon } from 'lucide-react';
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
} from 'react-aria-components';
import { IconButton } from './Button';
import { DateInput } from './DateField';
import { Dialog } from './Dialog';
import { InputFieldGroup } from './Field';
import { Popover } from './Popover';
import { RangeCalendar } from './RangeCalendar';
import { composeTailwindRenderProps } from './utils';

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {}

export function DateRangePicker<T extends DateValue>({
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'group flex flex-col gap-1',
      ])}
    />
  );
}

export function DateRangePickerInput() {
  return (
    <>
      <InputFieldGroup className="w-auto min-w-[208px]">
        <DateInput slot="start" className="min-w-fit px-2 py-1.5 text-sm" />
        <span
          aria-hidden="true"
          className="text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600"
        >
          –
        </span>
        <DateInput
          slot="end"
          className="min-w-fit flex-1 px-2 py-1.5 text-sm"
        />
        <IconButton
          text
          size="sm"
          className="ml-1.5 mr-1 p-0.5 outline-offset-0"
          icon={<CalendarIcon />}
        />
      </InputFieldGroup>
      <Popover className="max-w-none" placement="bottom">
        <Dialog className="overflow-auto px-3 py-2">
          <RangeCalendar />
        </Dialog>
      </Popover>
    </>
  );
}
