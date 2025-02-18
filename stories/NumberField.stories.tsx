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

export const NumberFieldDescription = () => {
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

export const DisabledState = () => {
  return (
    <NumberField isDisabled>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const ReadOnlyState = () => {
  return (
    <NumberField isReadOnly>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const ValidationErrors = () => {
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
