import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import {
  DatePicker,
  DatePickerButton,
  DatePickerInput,
} from '../src/DatePicker';
import { docs } from '../.storybook/docs';
import { Description, FieldError, Label } from '../src/Field';
import { today, getLocalTimeZone } from '@internationalized/date';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DatePicker.html" target="_bank">**date picker**</a> combines a DateField and a Calendar popover to allow users to enter or select a date and time value.',
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
    <DatePicker>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput></DatePickerInput>
    </DatePicker>
  );
};

export const Validation = () => (
  <Form className="flex flex-col items-start gap-2">
    <DatePicker isRequired>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput></DatePickerInput>
      <FieldError />
    </DatePicker>
    <Button type="submit" outline>
      Submit
    </Button>
  </Form>
);

export const DatePickerButtons = () => {
  return (
    <DatePicker defaultValue={today(getLocalTimeZone())}>
      <Label>Event date</Label>
      <Description>Please pick the event date</Description>
      <DatePickerButton />
      <FieldError />
    </DatePicker>
  );
};
