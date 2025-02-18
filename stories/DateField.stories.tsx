import { Button } from '../src/button';
import { Form } from '../src/form';
import { DateField, DateInput } from '../src/date-field';
import { Description, FieldError, Label } from '../src/field';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
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

export const DateFieldDescription = () => {
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

export const DisabledState = () => {
  return (
    <DateField isDisabled>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const ReadOnlyState = () => {
  return (
    <DateField isReadOnly>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
};

export const ValidationErrors = () => (
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
