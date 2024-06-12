import { CalendarIcon } from 'lucide-react';
import {
  DatePicker as RACDatePicker,
  DatePickerProps as RACDatePickerProps,
  DateValue,
} from 'react-aria-components';
import { IconButton } from './Button';
import { Calendar } from './Calendar';
import { DateInput } from './DateField';
import { Dialog } from './Dialog';
import { InputFieldGroup } from './Field';
import { Popover } from './Popover';
import { composeTailwindRenderProps } from './utils';

export interface DatePickerProps<T extends DateValue>
  extends RACDatePickerProps<T> {}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  return (
    <RACDatePicker
      {...props}
      className={composeTailwindRenderProps(props.className, [
        'group flex flex-col gap-1',
      ])}
    />
  );
}

export function DatePickerInput() {
  return (
    <>
      <InputFieldGroup className="w-auto min-w-[208px]">
        <DateInput className="min-w-[150px] flex-1 px-2 py-1.5 text-sm shadow-sm" />
        <IconButton
          text
          size="sm"
          className="mx-1.5 size-auto rounded p-0.5 outline-offset-0"
          icon={<CalendarIcon className="size-4" />}
        />
      </InputFieldGroup>

      <Popover className="max-w-none" placement="bottom">
        <Dialog className="overflow-auto px-3 py-2">
          <Calendar />
        </Dialog>
      </Popover>
    </>
  );
}
