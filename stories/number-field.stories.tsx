import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { Form } from '../src/form';
import { NumberField, NumberInput } from '../src/number-field';
import { docs } from '../.storybook/docs';
import { Description, FieldError, Label } from '../src/field';

const meta: Meta = {
  component: NumberField,
  title: 'Number field',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/NumberField.html#numberfield" target="_blank">**number field**</a> allows a user to enter a number, and increment or decrement the value using stepper buttons.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
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

export const NumberFieldWithDescription = () => {
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

export const NumberFieldWithWithDisabledState = () => {
  return (
    <NumberField isDisabled>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const NumberFieldWithWithReadonlyState = () => {
  return (
    <NumberField isReadOnly>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const NumberFieldWithValidation = () => {
  return (
    <Form className='space-y-4'>
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
