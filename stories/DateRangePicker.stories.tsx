import { Form } from '../src/form';
import { Button } from '../src/button';
import {
  DateRangePickerInput,
  DateRangePicker,
  DateRangePickerButton,
} from '../src/date-range-picker';
import { Description, FieldError, Label } from '../src/field';
import { docs } from '../.storybook/docs';
import {
  isWeekend,
  today,
  getLocalTimeZone,
  parseDate,
} from '@internationalized/date';
import { useLocale } from 'react-aria-components';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <DateRangePicker>
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
};

export const DateRangePickerDescription = () => {
  return (
    <div className="space-y-12">
      <DateRangePicker>
        <Label>Stay duration</Label>
        <Description>Please enter your stay duration</Description>
        <DateRangePickerInput />
      </DateRangePicker>

      <DateRangePicker>
        <Label>Stay duration</Label>
        <DateRangePickerInput />
        <Description>Please enter your stay duration</Description>
      </DateRangePicker>
    </div>
  );
};

export const MinimumAndMaximumValues = () => {
  return (
    <DateRangePicker
      minValue={today(getLocalTimeZone())}
      defaultValue={{
        start: parseDate(
          today(getLocalTimeZone()).subtract({ days: 3 }).toString(),
        ),
        end: parseDate(
          today(getLocalTimeZone()).subtract({ days: 1 }).toString(),
        ),
      }}
    >
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
};

export const UnavailableDates = () => {
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
    <DateRangePicker
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
      validationBehavior="native"
    >
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
};

export const NonContiguousRange = () => {
  const { locale } = useLocale();
  return (
    <DateRangePicker
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    >
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
};

export const DisabledState = () => {
  return (
    <DateRangePicker isDisabled>
      <Label>Stay duration</Label>
      <Description>Please enter your stay duration</Description>
      <DateRangePickerInput />
    </DateRangePicker>
  );
};

export const ReadOnlyState = () => {
  return (
    <DateRangePicker isReadOnly>
      <Label>Stay duration</Label>
      <Description>Please enter your stay duration</Description>
      <DateRangePickerInput />
    </DateRangePicker>
  );
};

export const ValidationErrors = () => {
  return (
    <Form className="flex flex-col items-start space-y-4">
      <DateRangePicker isRequired>
        <Label>Stay duration</Label>
        <Description>Please enter your stay duration</Description>
        <DateRangePickerInput />
        <FieldError />
      </DateRangePicker>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const PickerButtons = () => {
  return (
    <Form className="flex flex-col items-start space-y-4">
      <DateRangePicker isRequired>
        <Label>Stay duration</Label>
        <Description>Please select your stay duration</Description>
        <DateRangePickerButton>Select date range</DateRangePickerButton>
        <FieldError />
      </DateRangePicker>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
