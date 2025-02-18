import { docs } from '../../.storybook/docs.ts';
import {
  TextField,
  Label,
  Input,
  Description,
  FieldError,
} from '../../src/field.tsx';
import { Form } from '../../src/form.tsx';
import { PasswordInput } from '../../src/password-input.tsx';
import { Button } from '../../src/button.tsx';
import { Heading, SubHeading } from '../../src/heading.tsx';
import { Strong, Text, TextLink } from '../../src/text.tsx';
import { ChevronRightIcon } from '../../src/icons.tsx';
import { Separator } from '../../src/separator.tsx';
import { Checkbox } from '../../src/checkbox.tsx';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const SignIn = () => {
  return (
    <div className="flex min-h-svh flex-col justify-center gap-6 px-2 py-4">
      <img
        className="mx-auto h-10 w-auto"
        src="https://vite.dev/logo.svg"
        alt="Your Company"
      ></img>
      <div className="border-border/50 rounded-xl border p-8 shadow sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <Heading level={2} displayLevel={1} className="text-center">
            Sign in to your account
          </Heading>
          <SubHeading className="text-center">
            Welcome back! Please sign into continue
          </SubHeading>
        </div>

        <Form className="mt-6 flex flex-col space-y-4">
          <TextField isRequired>
            <Label>Email address</Label>
            <Input type="email" />
            <FieldError></FieldError>
          </TextField>

          <TextField isRequired>
            <div className="flex">
              <Label>Password</Label>
              <TextLink className="text-muted ms-auto mb-1 no-underline">
                Forgot password?
              </TextLink>
            </div>
            <PasswordInput />
            <FieldError></FieldError>
          </TextField>

          <Checkbox>Remember me</Checkbox>

          <Button type="submit">
            Continue <ChevronRightIcon />
          </Button>

          <Button variant="outline">Sign in with Google</Button>
        </Form>
      </div>
      <div className="text-center">
        <Text>
          Do you have account?{' '}
          <Strong>
            <TextLink>Register</TextLink>
          </Strong>
        </Text>
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="flex min-h-svh flex-col justify-center gap-6 px-2 py-4">
      <img
        className="mx-auto h-10 w-auto"
        src="https://vite.dev/logo.svg"
        alt="Your Company"
      ></img>
      <div className="border-border/50 rounded-xl border p-8 shadow sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <Heading level={2} displayLevel={1} className="text-center">
            Create account
          </Heading>
          <SubHeading className="text-center">
            Join now to unlock all the features.
          </SubHeading>
        </div>

        <Form className="mt-6 flex flex-col space-y-4">
          <TextField>
            <Label>Name</Label>
            <Input />
          </TextField>

          <TextField isRequired>
            <Label>Email address</Label>
            <Input type="email" />
            <FieldError></FieldError>
          </TextField>

          <TextField isRequired>
            <Label>Password</Label>
            <Description>Must be at least 12 characters in length</Description>
            <PasswordInput />
            <FieldError></FieldError>
          </TextField>

          <TextField isRequired>
            <Label>Confirm password</Label>
            <PasswordInput />
            <FieldError></FieldError>
          </TextField>

          <Button type="submit">
            Continue <ChevronRightIcon />
          </Button>

          <Separator soft className="mt-1" />

          <Text>
            By creating an account you agree to our
            <TextLink>Teams of Services</TextLink> and{' '}
            <TextLink>Privacy Policy</TextLink>.
          </Text>
        </Form>
      </div>
      <div className="text-center">
        <Text>
          Already have an account?{' '}
          <Strong>
            <TextLink>Sign in</TextLink>
          </Strong>
        </Text>
      </div>
    </div>
  );
};

export const ForgotPassword = () => {
  return (
    <div className="flex min-h-svh flex-col justify-center gap-6 px-2 py-4">
      <img
        className="mx-auto h-10 w-auto"
        src="https://vite.dev/logo.svg"
        alt="Your Company"
      ></img>
      <div className="border-border/50 rounded-xl border p-8 shadow sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <Heading level={2} displayLevel={1} className="text-center">
            Forgot your password?
          </Heading>
          <SubHeading>
            Enter your email address below and we'll send you password reset
            instructions
          </SubHeading>
        </div>

        <Form className="mt-6 flex flex-col space-y-4">
          <TextField isRequired>
            <Label>Email address</Label>
            <Input type="email" />
            <FieldError></FieldError>
          </TextField>

          <Button type="submit">Email me reset instructions</Button>

          <Separator soft className="mt-1" />
          <Text>
            <Strong>If you don’t see your reset email</Strong> be sure to check
            your spam filter for an email from support@acme.com
          </Text>
        </Form>
      </div>
      <div className="text-center">
        <Text>
          Back to{' '}
          <Strong>
            <TextLink>Sign in</TextLink>
          </Strong>
        </Text>
      </div>
    </div>
  );
};

export const ResetPassword = () => {
  return (
    <div className="flex min-h-svh flex-col justify-center gap-6 px-2 py-4">
      <img
        className="mx-auto h-10 w-auto"
        src="https://vite.dev/logo.svg"
        alt="Your Company"
      ></img>
      <div className="border-border/50 rounded-xl border p-8 shadow sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <Heading level={2} displayLevel={1} className="text-center">
            Reset password
          </Heading>
          <SubHeading>Please enter your new password below</SubHeading>
        </div>

        <Form className="mt-6 flex flex-col space-y-4">
          <TextField isRequired>
            <Label>Email address</Label>
            <Input type="email" />
            <FieldError></FieldError>
          </TextField>
          <TextField isRequired>
            <Label>Password</Label>
            <PasswordInput />
            <FieldError></FieldError>
          </TextField>
          <TextField isRequired>
            <Label>Confirm password</Label>
            <PasswordInput />
            <FieldError></FieldError>
          </TextField>

          <Button type="submit">Reset password</Button>
        </Form>
      </div>
    </div>
  );
};
