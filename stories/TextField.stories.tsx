import type { Meta } from '@storybook/react';
import {
  TextField,
  Label,
  Description,
  FieldError,
  Input,
  InputFieldGroup,
} from '../src/Field';
import { docs } from '../.storybook/docs';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import { Search } from 'lucide-react';
import { Icon } from '../src/Icon';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TextField.html#textfield" target="_blank">**text field**</a> allows a user to enter a plain text value with a keyboard.',
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
    <TextField className="w-full sm:w-80" name="email" type="email">
      <Label>Email address</Label>
      <Input />
    </TextField>
  );
};

export const WithDescription = () => {
  return (
    <TextField className="w-full sm:w-96" name="email" type="email">
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input />
    </TextField>
  );
};

export const WithIcon = () => {
  return (
    <TextField className="w-full sm:w-96" name="email" type="email">
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>

      <InputFieldGroup role="presentation">
        <Icon icon={<Search className="ml-2 size-4" strokeWidth={1.5} />} />
        <Input placeholder="Search..." />
      </InputFieldGroup>
    </TextField>
  );
};

export const WithValidation = () => {
  return (
    <Form className="flex flex-col gap-6">
      <TextField isRequired>
        <Label>Email address</Label>
        <Description>
          Enter an email for us to contact you about your order.
        </Description>

        <InputFieldGroup role="presentation">
          <Icon icon={<Search className="ml-2 size-4" strokeWidth={1.5} />} />
          <Input placeholder="Search..." />
        </InputFieldGroup>

        <FieldError></FieldError>
      </TextField>
      <Button type="submit" className="self-start">
        Submit
      </Button>
    </Form>
  );
};
