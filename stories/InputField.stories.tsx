import { TextField, Label, Description, FieldError, Input } from '../src/field';
import { docs } from '../.storybook/docs';
import { Form } from '../src/form';
import { Button } from '../src/button';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
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

export const InputFieldDescription = () => {
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

export const DisabledState = () => {
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

export const ReadOnlyState = () => {
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

export const InputWithHints = () => {
  return (
    <div className="flex w-72 flex-col gap-y-12">
      <TextField>
        <Label hint="required">Email</Label>
        <Input type="email" placeholder="your@example.com" />
      </TextField>

      <TextField>
        <Label hint="optional" className="flex gap-x-3">
          Email
        </Label>
        <Input placeholder="your@example.com" />
        <Description>We won't share your email with anyone</Description>
      </TextField>
    </div>
  );
};

export const ValidationErrors = () => {
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
