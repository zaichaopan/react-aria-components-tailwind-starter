import type { Meta } from '@storybook/react';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { TimeField } from '../src/time-field';
import { Description, FieldError, Label } from '../src/field';
import { DateInput } from '../src/date-field';
import { docs } from '../.storybook/docs';

const meta: Meta = {
  title: 'Time field',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TimeField.html" target="_blank">**time field**</a> allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <TimeField>
      <Label>Appointment time</Label>
      <DateInput />
    </TimeField>
  );
};

export const TimeFieldWithDescription = () => {
  return (
    <div className="space-y-12">
      <TimeField>
        <Label>Appointment time</Label>
        <Description>The specific time scheduled for your meeting</Description>
        <DateInput />
      </TimeField>
      <TimeField>
        <Label>Appointment time</Label>
        <DateInput />
        <Description>The specific time scheduled for your meeting</Description>
      </TimeField>
    </div>
  );
};

export const TimeFieldWithDisabledState = () => {
  return (
    <TimeField isDisabled>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
};

export const TimeFieldWithReadonlyState = () => {
  return (
    <TimeField isReadOnly>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
};

export const TimeFieldWithValidation = () => (
  <Form>
    <TimeField isRequired>
      <Label>Appointment time</Label>
      <Description>The specific time scheduled for your meeting</Description>
      <DateInput />
      <FieldError></FieldError>
    </TimeField>
    <Button type="submit">Submit</Button>
  </Form>
);
