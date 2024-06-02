import type { Meta } from '@storybook/react';
import { TextField, Label, FieldError } from '../src/Field';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import { PasswordInput } from '../src/PasswordInput';
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
