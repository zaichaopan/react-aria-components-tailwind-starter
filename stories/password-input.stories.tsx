import type { Meta } from '@storybook/react';
import { TextField, Label, FieldError } from '../src/field';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { PasswordInput } from '../src/password-input';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof PasswordInput> = {
  title: 'PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: "**PasswordInput** captures password data from user."
      },
      ...docs,
    },
   
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  return (
    <div className="flex py-6 items-center justify-center">
      <Form className="w-1/3">
        <TextField isRequired name="password">
          <Label>Password</Label>
          <PasswordInput placeholder="Password" />
          <FieldError />
        </TextField>

        <Button type="submit" className="self-start">
          Submit
        </Button>
      </Form>
    </div>
  );
};
