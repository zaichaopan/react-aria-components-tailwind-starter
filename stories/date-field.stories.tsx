import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { Form } from '../src/form';
import { DateField, DateInput } from '../src/date-field';
import { Description, FieldError, Label } from '../src/field';
import { docs } from '../.storybook/docs';

const meta: Meta = {
  title: 'Date field',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DateField.html#datefield" target="_blank">**date field**</a> allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <DateField>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  );
};

export const DateFieldWithDescription = () => {
  return (
    <div className="space-y-12">
      <DateField>
        <Label>Birth date</Label>
        <Description>Please enter your birth date</Description>
        <DateInput />
      </DateField>

      <DateField>
        <Label>Birth date</Label>
        <DateInput />
        <Description>Please enter your birth date</Description>
      </DateField>
    </div>
  );
};

export const DateFieldWithDisabledState = () => {
  return (
    <DateField isDisabled>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const DateFieldWithReadonlyState = () => {
  return (
    <DateField isReadOnly>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const DateFieldWithValidation = () => (
  <Form className="flex flex-col items-start space-y-4">
    <DateField isRequired>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
      <FieldError />
    </DateField>
    <Button type="submit">Submit</Button>
  </Form>
);
