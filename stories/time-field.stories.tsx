import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/button';
import { TimeField } from '../src/time-field';
import { Description, FieldError, Label } from '../src/field';
import { DateInput } from '../src/date-field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof TimeField> = {
  title: 'TimeField',
  component: TimeField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TimeField.html" target="_blank">**time field**</a> allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.',
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
    <TimeField>
      <Label>Appointment time</Label>
      <DateInput />
    </TimeField>
  );
};

export const WithDescription = () => {
  return (
    <TimeField>
      <Label>Appointment time</Label>
      <Description>The specific time scheduled for your meeting</Description>
      <DateInput />
    </TimeField>
  );
};

export const WithValidation = () => (
  <Form className="flex flex-col items-start gap-2">
    <TimeField isRequired>
      <Label>Appointment time</Label>
      <Description>The specific time scheduled for your meeting</Description>
      <DateInput />
      <FieldError></FieldError>
    </TimeField>
    <Button type="submit">Submit</Button>
  </Form>
);
