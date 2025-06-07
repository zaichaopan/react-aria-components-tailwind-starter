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
import { Button } from '../../src/button';
import { Heading, SubHeading } from '../../src/heading.tsx';
import { Text, TextLink } from '../../src/text.tsx';
import { Checkbox } from '../../src/checkbox.tsx';
import { Separator } from '../../src/separator.tsx';
import { Icon } from '../../src/icon.tsx';

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
        <div className="flex flex-col">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div className="">
            <div className="flex flex-col p-6 text-center">
              <Heading level={2} displayLevel={1}>
                Create account
              </Heading>
              <SubHeading>Join now to unlock all the features.</SubHeading>
            </div>

            <Form method="post" className="p-6 pt-0">
              <Button className="w-full" variant="outline">
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffc107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    ></path>
                    <path
                      fill="#ff3d00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    ></path>
                    <path
                      fill="#1976d2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    ></path>
                  </svg>
                </Icon>
                Continue with Google
              </Button>
              <Separator soft>
                <Text className='mx-2'>or</Text>
              </Separator>

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

              <TextField className="[--space:--spacing(8)]">
                <Label>Confirm Password</Label>
                <PasswordInput />
              </TextField>

              <Button type="submit" className="w-full [--space:--spacing(4)]">
                Sign up
              </Button>

              <Text className="text-center">
                By creating an account you agree to our&nbsp;
                <TextLink>Teams of Services</TextLink> and&nbsp;
                <TextLink>Privacy Policy</TextLink>.
              </Text>

              <Text className="text-center">
                Already have an account?{' '}
                <TextLink className="underline">
                  Login
                </TextLink>
              </Text>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div>
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

              <Button type="submit" className="w-full [--space:--spacing(4)]">
                Login
              </Button>

              <Button variant="outline" className="w-full">
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffc107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    ></path>
                    <path
                      fill="#ff3d00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    ></path>
                    <path
                      fill="#1976d2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    ></path>
                  </svg>
                </Icon>{' '}
                Login with Google
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
        <div className="flex flex-col">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div>
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
              <TextField isRequired className="[--space:--spacing(4)]">
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
              <Text className="text-center">
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
        <div className="flex flex-col">
          <img
            className="mx-auto h-10 w-auto"
            src="https://vite.dev/logo.svg"
            alt="Your Company"
          />
          <div>
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
              <TextField isRequired className="[--space:--spacing(8)]">
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
