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
import { Text, TextLink } from '../../src/text.tsx';
import { ChevronRightIcon } from '../../src/icons.tsx';
import { Checkbox } from '../../src/checkbox.tsx';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const SignUp = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div className="rounded-xl border shadow">
            <div className="flex flex-col p-6 text-center">
              <Heading level={2} displayLevel={1}>
                Create account
              </Heading>
              <SubHeading>Join now to unlock all the features.</SubHeading>
            </div>

            <Form method="post" className="p-6 pt-0">
              <div className="flex flex-col gap-6">
                <TextField>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </TextField>

                <TextField>
                  <Label>Password</Label>
                  <PasswordInput />
                  <Description>
                    Must be at least 12 characters in length
                  </Description>
                </TextField>

                <TextField>
                  <Label>Confirm Password</Label>
                  <PasswordInput />
                </TextField>

                <Button type="submit" className="w-full">
                  Sign up
                </Button>
              </div>
              <Text className="-mt-2 text-center">
                By creating an account you agree to our&nbsp;
                <TextLink>Teams of Services</TextLink> and&nbsp;
                <TextLink>Privacy Policy</TextLink>.
              </Text>
            </Form>
          </div>
          <Text className="text-center">
            Already have an account?{' '}
            <TextLink className="underline underline-offset-4">Login</TextLink>
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div className="rounded-xl border shadow">
            <div className="flex flex-col p-6 text-center">
              <Heading level={2} displayLevel={1}>
                Login
              </Heading>
              <SubHeading>Welcome back! Please login continue</SubHeading>
            </div>

            <Form method="post" className="p-6 pt-0">
              <TextField isRequired>
                <Label>Email</Label>
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

              <Button type="submit" className="w-full">
                Continue <ChevronRightIcon />
              </Button>

              <Button variant="outline" className="w-full">
                Sign in with Google
              </Button>
            </Form>
          </div>
          <Text className="px-6 text-center">
            Don&apos;t have an account? <TextLink>Sign up</TextLink>
          </Text>
        </div>
      </div>
    </div>
  );
};

export const ForgotPassword = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div className="rounded-xl border shadow">
            <div className="flex flex-col p-6 text-center">
              <Heading level={2} displayLevel={1}>
                Forgot your password?
              </Heading>
              <SubHeading>
                Enter your email below and we&apos;tll send you password reset
                instructions
              </SubHeading>
            </div>

            <Form method="post" className="p-6 pt-0">
              <TextField isRequired>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                <FieldError></FieldError>
              </TextField>

              <Button type="submit" className="w-full">
                Send reset email
              </Button>
              <Text className="-mt-2 text-center">
                If you don&apos;t see reset email be sure to check your spam
                filter for an email from support@acme.com
              </Text>
            </Form>
          </div>
          <Text className="text-center">
            Back to&nbsp;<TextLink>Login</TextLink>
          </Text>
        </div>
      </div>
    </div>
  );
};

export const ResetPassword = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div className="rounded-xl border shadow">
            <div className="flex flex-col p-6 text-center">
              <Heading level={2} displayLevel={1}>
                Reset your password
              </Heading>
              <SubHeading></SubHeading>
            </div>

            <Form method="post" className="p-6 pt-0">
              <TextField isRequired>
                <Label>Email</Label>
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

              <Button type="submit" className="w-full">
                Reset password
              </Button>
            </Form>
          </div>
          <Text className="text-center">
            Back to&nbsp;<TextLink>Login</TextLink>
          </Text>
        </div>
      </div>
    </div>
  );
};
