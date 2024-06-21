import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import {
  DateRangePickerInput,
  DateRangePicker,
} from '../src/DateRangePicker';
import { Description, FieldError, Label } from '../src/Field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof DateRangePicker> = {
  title: 'DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html#daterangepicker" target="_blank">**date range picker**</a> combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  return (
    <DateRangePicker>
      <Label>Stay duration</Label>
      <DateRangePickerInput />
      <Description>Please enter your stay duration</Description>
    </DateRangePicker>
  );
};

export const Validation = () => {
  return (
    <Form className="flex flex-col items-start gap-2">
      <DateRangePicker isRequired>
        <Label>Stay duration</Label>
        <Description>Please enter your stay duration</Description>
        <DateRangePickerInput />
        <FieldError />
      </DateRangePicker>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
