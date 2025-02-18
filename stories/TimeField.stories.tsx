import { Form } from '../src/form';
import { Button } from '../src/button';
import { TimeField } from '../src/time-field';
import { Description, FieldError, Label } from '../src/field';
import { DateInput } from '../src/date-field';
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
    <TimeField>
      <Label>Appointment time</Label>
      <DateInput />
    </TimeField>
  );
};

export const TimeFieldDescription = () => {
  return (
    <div className="space-y-12">
      <TimeField>
        <Label>Appointment time</Label>
        <Description>The specific time scheduled for your meeting</Description>
        <DateInput />
      </TimeField>
      <TimeField>
        <Label>Appointment time</Label>
        <DateInput />
        <Description>The specific time scheduled for your meeting</Description>
      </TimeField>
    </div>
  );
};

export const DisabledState = () => {
  return (
    <TimeField isDisabled>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
};

export const ReadonlyState = () => {
  return (
    <TimeField isReadOnly>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
};

export const ValidationError = () => (
  <Form>
    <TimeField isRequired>
      <Label>Appointment time</Label>
      <Description>The specific time scheduled for your meeting</Description>
      <DateInput />
      <FieldError></FieldError>
    </TimeField>
    <Button type="submit">Submit</Button>
  </Form>
);
