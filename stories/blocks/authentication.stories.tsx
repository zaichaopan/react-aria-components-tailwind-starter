import type { Meta } from '@storybook/react';
import { TextField, Label, FieldError, Input } from '../../src/Field';
import { docs } from '../../.storybook/docs';
import { Form } from '../../src/Form';
import { Button } from '../../src/Button';
import { Heading } from '../../src/Heading';
import { PasswordInput } from '../../src/PasswordInput';
import { Link } from '../../src/Link';
import { Strong, Text } from '../../src/Text';
import { Switch } from '../../src/Switch';
import { Separator } from '../../src/Separator';
import { Icon } from '../../src/Icon';

const meta: Meta<typeof TextField> = {
  title: 'Block/Authentication',
  parameters: {
    layout: 'fullscreen',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const SignIn01 = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col p-4 md:w-96">
        <Heading className="mb-10 text-center text-xl">
          Sign in to your account
        </Heading>
        <Form className="gap-6">
          <TextField isRequired>
            <Label>Email address</Label>
            <Input type="email" name="email" />
            <FieldError />
          </TextField>
          <TextField isRequired>
            <div className="flex justify-between">
              <Label>Password</Label>
              <Link>
                <Strong>Forgot password?</Strong>
              </Link>
            </div>

            <PasswordInput />
            <FieldError />
          </TextField>

          <Button type="submit">Sign in</Button>

          <div className="mt-2 flex flex-wrap justify-center">
            <Text>Don’t have an account?</Text>&nbsp;
            <Link>
              <Strong>Create an account</Strong>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export const SignIn02 = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col p-4 md:w-96">
        <Heading className="mb-10 text-center text-xl">
          Sign in to your account
        </Heading>
        <Form>
          <TextField>
            <Label>Email address</Label>
            <Input type="email" name="email" />
          </TextField>
          <TextField>
            <Label>Password</Label>
            <PasswordInput />
          </TextField>
          <div className="flex justify-between">
            <Switch labelPosition="right">Remember me</Switch>
            <Link>
              <Strong>Forgot password?</Strong>
            </Link>
          </div>

          <Button type="submit" className="mt-2">
            Sign in
          </Button>

          <div className="mt-4 flex justify-center">
            <Text>Don’t have an account?</Text>&nbsp;
            <Link className="font-semibold">Create an account</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export const SignIn03 = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col p-4 md:w-96">
        <Heading className="mb-10 text-center text-xl">
          Sign in to your account
        </Heading>
        <Form>
          <TextField>
            <Label>Email address</Label>
            <Input type="email" name="email" />
          </TextField>
          <TextField>
            <Label>Password</Label>
            <PasswordInput />
          </TextField>

          <Button type="submit" className="mt-2">
            Sign in
          </Button>

          <Link className="self-center">
            <Strong>Forgot password?</Strong>
          </Link>

          <div className="mt-4 flex justify-center">
            <Text>Don’t have an account?</Text>&nbsp;
            <Link className="font-semibold">Create an account</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export const SignUp01 = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col p-4 md:w-96">
        <Heading className="text-xl">Sign Up</Heading>
        <Text className="mb-8 mt-2">
          Enter your information to create an account
        </Text>
        <Form>
          <TextField>
            <Label>Email</Label>
            <Input type="email" name="email" />
          </TextField>
          <TextField>
            <Label>Password</Label>
            <PasswordInput name="password" />
          </TextField>

          <Button type="submit" className="mt-2">
            Create an account
          </Button>

          <Separator>or continue with</Separator>

          <div className="flex flex-wrap gap-2">
            <Button outline className="flex-1">
              <Icon>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  ></path>
                </svg>
              </Icon>
              Google
            </Button>
            <Button outline className="flex-1">
              <Icon>
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </Icon>
              Github
            </Button>
          </div>

          <Text className="text-center sm:text-left">
            By signing up, you agree to our <Link>Terms of Service</Link> and{' '}
            <Link>Privacy Policy</Link>.
          </Text>

          <div className="mt-4 flex justify-center">
            <Text>Already have an account?</Text>&nbsp;
            <Link className="font-semibold">Sign in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export const SignUp02 = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col p-4 md:w-96">
        <Heading className="text-xl">Sign Up</Heading>
        <Text className="mb-8 mt-2">
          Enter your information to create an account
        </Text>
        <Form>
          <div className="flex gap-4">
            <TextField className="flex-1">
              <Label>First name</Label>
              <Input name="first_name" />
            </TextField>
            <TextField className="flex-1">
              <Label>Last name</Label>
              <Input name="last_name" />
            </TextField>
          </div>
          <TextField>
            <Label>Email</Label>
            <Input type="email" name="email" />
          </TextField>
          <TextField>
            <Label>Password</Label>
            <PasswordInput name="password" />
          </TextField>

          <Button type="submit" className="mt-2">
            Create an account
          </Button>
          <Button outline>
            <Icon>
              <svg viewBox="0 0 24 24">
                <path
                  d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                  fill="#34A853"
                ></path>
              </svg>
            </Icon>
            Sign up with Google
          </Button>

          <Text  className="text-center sm:text-left">
            By signing up, you agree to our{' '}
            <Link>
              <Strong>Terms of Service</Strong>
            </Link>{' '}
            and <Link>Privacy Policy</Link>.
          </Text>
          <div className="mt-4 flex justify-center">
            <Text>Already have an account?</Text>&nbsp;
            <Link className="font-semibold">Sign in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
