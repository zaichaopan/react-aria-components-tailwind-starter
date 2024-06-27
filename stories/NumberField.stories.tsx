import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import { NumberField, NumberInput } from '../src/NumberField';
import { docs } from '../.storybook/docs';
import { Description, FieldError, Label } from '../src/Field';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: 'NumberField',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/NumberField.html#numberfield" target="_blank">**number field**</a> allows a user to enter a number, and increment or decrement the value using stepper buttons.',
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
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
};

export const Disabled = () => {
  return (
    <NumberField isDisabled>
      <Label>Viewer(s)</Label>

      <NumberInput />
    </NumberField>
  );
};

export const Validation = () => (
  <Form className="flex flex-col items-start gap-2">
    <NumberField maxValue={7} isRequired>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput placeholder="Type a number&hellip;" />
      <FieldError />
    </NumberField>
    <Button type="submit">Submit</Button>
  </Form>
);
