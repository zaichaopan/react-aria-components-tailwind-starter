import { TextField, Label, FieldError, Description } from '../src/field';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { PasswordInput } from '../src/password-input';
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
    <TextField name="password">
      <Label>Password</Label>
      <PasswordInput placeholder="Password" />
    </TextField>
  );
};

export const PasswordInputDescription = () => {
  return (
    <div className="space-y-12">
      <TextField name="password">
        <Label>Password</Label>
        <Description>Min 8 characters</Description>
        <PasswordInput placeholder="Password" minLength={8} />
      </TextField>
      <TextField name="password" className="max-w-sm">
        <Label>Password</Label>
        <PasswordInput placeholder="Password" minLength={8} />
        <Description>
          Must be at least 8 characters long, include an uppercase letter, a
          number, and a special character.
        </Description>
      </TextField>
    </div>
  );
};

export const DisabledState = () => {
  return (
    <TextField name="password" isDisabled>
      <Label>Password</Label>
      <PasswordInput placeholder="Password" minLength={8} />
      <Description>Min 8 characters</Description>
    </TextField>
  );
};

export const ReadOnlyState = () => {
  return (
    <TextField name="password" isReadOnly>
      <Label>Password</Label>
      <PasswordInput placeholder="Password" minLength={8} />
      <Description>Min 8 characters</Description>
    </TextField>
  );
};

export const ValidationErrors = () => {
  return (
    <Form className="w-72 space-y-4">
      <TextField isRequired name="password">
        <Label>Password</Label>
        <PasswordInput placeholder="Password" minLength={8} />
        <Description>Min 8 characters</Description>
        <FieldError />
      </TextField>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
