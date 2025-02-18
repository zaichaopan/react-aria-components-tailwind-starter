import { Form } from '../src/form';
import { Button } from '../src/button';
import {
  TextField,
  Label,
  TextArea,
  Description,
  FieldError,
} from '../src/field';
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
    <TextField className="sm:w-80">
      <Label>Bio</Label>
      <TextArea placeholder="Tell us a little bit about yourself" />
      <FieldError />
    </TextField>
  );
};

export const TextareaDescription = () => {
  return (
    <div className="space-y-12">
      <TextField>
        <Label>Bio</Label>
        <Description>
          You can <span className="text-foreground">@mention</span> other users
          and organizations to link to them.
        </Description>
        <TextArea placeholder="Tell us a little bit about yourself" />
      </TextField>
      <TextField>
        <Label>Bio</Label>
        <TextArea placeholder="Tell us a little bit about yourself" />
        <Description>
          You can <span className="text-foreground">@mention</span> other users
          and organizations to link to them.
        </Description>
      </TextField>
    </div>
  );
};

export const DisabledState = () => {
  return (
    <TextField isDisabled>
      <Label>Bio</Label>
      <Description>
        You can <span className="text-foreground">@mention</span> other users
        and organizations to link to them.
      </Description>
      <TextArea placeholder="Tell us a little bit about yourself" />
    </TextField>
  );
};

export const ReadOnlyState = () => {
  return (
    <TextField isReadOnly>
      <Label>Bio</Label>
      <Description>
        You can <span className="text-foreground">@mention</span> other users
        and organizations to link to them.
      </Description>
      <TextArea placeholder="Tell us a little bit about yourself" />
    </TextField>
  );
};

export const ValidationErrors = () => {
  return (
    <Form className="space-y-3">
      <TextField isRequired>
        <Label>Bio</Label>
        <Description>
          You can <span className="text-foreground">@mention</span> other users
          and organizations to link to them.
        </Description>
        <TextArea placeholder="Tell us a little bit about yourself" />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
