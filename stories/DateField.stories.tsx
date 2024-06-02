import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import { DateField, DateInput } from '../src/DateField';
import { Description, FieldError, Label } from '../src/Field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof DateField> = {
  title: 'DateField',
  component: DateField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DateField.html#datefield" target="_blank">**date field**</a> allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.',
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
    <DateField>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const Validation = () => (
  <Form className="flex flex-col items-start gap-2">
    <DateField isRequired>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
      <FieldError />
    </DateField>
    <Button type="submit">Submit</Button>
  </Form>
);
