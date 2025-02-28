import { Form } from '../src/form';
import { Button } from '../src/button';
import {
  DatePicker,
  DatePickerButton,
  DatePickerInput,
} from '../src/date-picker';
import { docs } from '../.storybook/docs';
import { Description, FieldError, Label } from '../src/field';
import {
  today,
  getLocalTimeZone,
  isWeekend,
  parseDate,
} from '@internationalized/date';
import { useLocale } from 'react-aria-components';

const meta = {
  parameters: {
    layout: 'centered',
    docs
  }
};

export default meta;

export const BasicExample = () => {
  return (
    <DatePicker>
      <Label>Event date</Label>
      <DatePickerInput></DatePickerInput>
    </DatePicker>
  );
};

export const WithDescription = () => {
  return (
    <div className="space-y-12">
      <DatePicker>
        <Label>Event date</Label>
        <Description>Please enter the event date</Description>
        <DatePickerInput></DatePickerInput>
      </DatePicker>

      <DatePicker>
        <Label>Event date</Label>
        <DatePickerInput></DatePickerInput>
        <Description>Please enter the event date</Description>
      </DatePicker>
    </div>
  );
};

export const WithDisabledState = () => {
  return (
    <DatePicker isDisabled>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput></DatePickerInput>
    </DatePicker>
  );
};

export const WithMinimumAndMaximumValues = () => {
  return (
    <DatePicker
      minValue={today(getLocalTimeZone())}
      defaultValue={parseDate(
        today(getLocalTimeZone()).subtract({ days: 1 }).toString(),
      )}
    >
      <Label>Stay duration</Label>
      <DatePickerInput />
    </DatePicker>
  );
};

export const WithUnavailableDates = () => {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();
  const isDateUnavailable = (date: any) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    );

  return (
    <DatePicker
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
      validationBehavior="native"
    >
      <Label>Stay duration</Label>
      <DatePickerInput />
    </DatePicker>
  );
};

export const WithReadOnlyState = () => {
  return (
    <DatePicker isReadOnly>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput></DatePickerInput>
    </DatePicker>
  );
};

export const WithValidation = () => (
  <Form className='space-y-4'>
    <DatePicker isRequired>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput></DatePickerInput>
      <FieldError />
    </DatePicker>
    <Button type="submit" variant="outline">
      Submit
    </Button>
  </Form>
);

export const WithPickerButtons = () => {
  return (
    <DatePicker defaultValue={today(getLocalTimeZone())}>
      <Label>Event date</Label>
      <Description>Please pick the event date</Description>
      <DatePickerButton>Select date</DatePickerButton>
      <FieldError />
    </DatePicker>
  );
};
