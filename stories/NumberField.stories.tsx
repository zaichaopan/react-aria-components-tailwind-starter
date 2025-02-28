import { Button } from '../src/button';
import { Form } from '../src/form';
import { NumberField, NumberInput } from '../src/number-field';
import { docs } from '../.storybook/docs';
import { Description, FieldError, Label } from '../src/field';

const meta = {
  component: NumberField,
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <NumberInput />
    </NumberField>
  );
};

export const WithDescription = () => {
  return (
    <div className="space-y-12">
      <NumberField maxValue={7}>
        <Label>Viewer(s)</Label>
        <Description>Maximum of 7</Description>
        <NumberInput />
      </NumberField>

      <NumberField maxValue={7}>
        <Label>Viewer(s)</Label>
        <NumberInput />
        <Description>Maximum of 7</Description>
      </NumberField>
    </div>
  );
};

export const WithDisabledState = () => {
  return (
    <NumberField isDisabled>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const WithReadOnlyState = () => {
  return (
    <NumberField isReadOnly>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const WithValidation = () => {
  return (
    <Form className="space-y-4">
      <NumberField maxValue={7} isRequired>
        <Label>Viewer(s)</Label>
        <Description>Maximum of 7</Description>
        <NumberInput placeholder="Type a number&hellip;" />
        <FieldError />
      </NumberField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
