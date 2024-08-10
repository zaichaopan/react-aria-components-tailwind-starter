import type { Meta } from '@storybook/react';
import { TextField, Label, Description, FieldError, Input } from '../src/field';
import { docs } from '../.storybook/docs';
import { Form } from '../src/form';
import { Button } from '../src/button';

const meta: Meta = {
  title: 'Text Field (Input)',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TextField.html#textfield" target="_blank">**text field**</a> allows a user to enter a plain text value with a keyboard. More input <a href="./?path=/story/origin-ui-inputs--inputs" target="_blank">**examples**</a>',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <TextField className="w-full sm:w-80" name="email" type="email">
      <Label>Email address</Label>
      <Input />
    </TextField>
  );
};

export const TextInputWithDescription = () => {
  return (
    <div className="space-y-12">
      <TextField name="email" type="email">
        <Label>Email address</Label>
        <Description>
          Enter an email for us to contact you about your order.
        </Description>
        <Input />
      </TextField>

      <TextField name="email" type="email">
        <Label>Email address</Label>

        <Input />
        <Description>
          Enter an email for us to contact you about your order.
        </Description>
      </TextField>
    </div>
  );
};

export const TextInputWithDisabledState = () => {
  return (
    <TextField name="email" type="email" isDisabled>
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input placeholder="you@example.com" />
    </TextField>
  );
};

export const TextInputWithReadonlyState = () => {
  return (
    <TextField name="email" type="email" isReadOnly>
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input placeholder="you@example.com" />
    </TextField>
  );
};

export const TextInputWithValidation = () => {
  return (
    <Form>
      <TextField isRequired>
        <Label>Email address</Label>
        <Description>
          Enter an email for us to contact you about your order.
        </Description>
        <Input />
        <FieldError></FieldError>
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
