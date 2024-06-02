import type { Meta } from '@storybook/react';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import {
  TextField,
  Label,
  TextArea,
  Description,
  FieldError,
} from '../src/Field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof TextField> = {
  title: 'TextArea',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-spectrum/TextArea.html#textarea" target="_blank">**TextAreas**</a> are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.',
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
    <TextField className="w-full sm:w-96 ">
      <Label>Comment</Label>
      <TextArea placeholder="Enter your comments here..." />
    </TextField>
  );
};

export const WithDescription = () => {
  return (
    <div className="m-auto flex w-full flex-col  items-center justify-center sm:w-96">
      <TextField>
        <Label>Comment</Label>
        <Description>
          Please share your thoughts, feedback, or any additional information in
          the space below.
        </Description>
        <TextArea />
      </TextField>
    </div>
  );
};

export const WithValidation = () => {
  return (
    <Form className="m-auto flex w-full flex-col items-center justify-center sm:w-96">
      <TextField isRequired>
        <Label>Comment</Label>
        <Description>
          Please share your thoughts, feedback, or any additional information in
          the space below.
        </Description>
        <TextArea />
        <FieldError />
      </TextField>

      <Button type="submit" outline className="self-start">
        Submit
      </Button>
    </Form>
  );
};
