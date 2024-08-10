import React from 'react';
import type { Meta } from '@storybook/react';
import {
  DatePicker,
  DatePickerButton,
} from '../src/date-picker';
import { docs } from '../.storybook/docs';
import { FieldError, Group, Label } from '../src/field';
import {
  today,
  getLocalTimeZone,
  now,
  toCalendarDate,
  toCalendarDateTime,
  Time,
  toTime,
} from '@internationalized/date';
import { getRoundMinute, useTimePicker } from '../src/time-picker';
import { Select, SelectField, SelectItem } from '../src/select';

const t = now(getLocalTimeZone());

toCalendarDateTime(t);

const meta: Meta = {
  title: 'TimePicker',
  parameters: {
    layout: 'centered',
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


export const TimePickerButtons = () => {
  const options = useTimePicker({
    intervalInMinute: 15,
  });

  const startTime = options.find(({ hour, minute }) => {
    return new Time(hour, minute).compare(toTime(now(getLocalTimeZone()))) > 0;
  })?.id;

  return (
    <SelectField
      aria-label="meeting start time"
      className="min-w-[110px]"
      defaultSelectedKey={startTime}
    >
      <Select items={options}>
        {(item) => {
          return <SelectItem>{item.value}</SelectItem>;
        }}
      </Select>
    </SelectField>
  );
};

export const DateAndTimerPicker = () => {
  const options = useTimePicker({
    intervalInMinute: 15,
  });

  const [startDateTime, setStartDateTime] = React.useState(() => {
    const dateTime = toCalendarDateTime(now(getLocalTimeZone()))
      .add({
        minutes: 10,
      })
      .set({
        millisecond: 0,
        second: 0,
      });

    return dateTime.add({
      minutes: getRoundMinute({
        intervalInMinute: 15,
        minute: dateTime.minute,
      }),
    });
  });

  const startDate = toCalendarDate(startDateTime);

  const startTime = options.find(({ hour, minute }) => {
    return hour === startDateTime.hour && minute === startDateTime.minute;
  })?.id;

  const disabledStartTimeOptions = options
    .filter((option) => {
      return (
        toCalendarDateTime(
          startDate,
          new Time(option.hour, option.minute),
        ).compare(toCalendarDateTime(now(getLocalTimeZone()))) <= 0
      );
    })
    .map((option) => option.id);

  const [endDateTime, setEndDateTime] = React.useState(() => {
    const dateTime = toCalendarDateTime(now(getLocalTimeZone()))
      .add({
        minutes: 40,
      })
      .set({
        millisecond: 0,
        second: 0,
      });

    return dateTime.add({
      minutes: getRoundMinute({
        intervalInMinute: 15,
        minute: dateTime.minute,
      }),
    });
  });

  const endDate = toCalendarDate(endDateTime);

  const endTime = options.find(({ hour, minute }) => {
    return hour === endDateTime.hour && minute === endDateTime.minute;
  })?.id;

  const disabledEndTimeOptions = options
    .filter((option) => {
      return (
        toCalendarDateTime(
          endDate,
          new Time(option.hour, option.minute),
        ).compare(startDateTime) <= 0
      );
    })
    .map((option) => option.id);

  return (
    <Group className="flex flex-col">
      <Label>Date and time</Label>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <DatePicker
            aria-label="meeting start date"
            value={startDate}
            minValue={today(getLocalTimeZone())}
            onChange={(value) => {
              const newCalendarTime = toCalendarDateTime(
                value,
                toTime(startDateTime),
              );

              setStartDateTime(newCalendarTime);

              if (newCalendarTime.compare(endDateTime) >= 0) {
                setEndDateTime(
                  newCalendarTime.add({
                    minutes: 30,
                  }),
                );
              }
            }}
          >
            <DatePickerButton />
            <FieldError />
          </DatePicker>
          <SelectField
            aria-label="meeting start time"
            className="min-w-[110px]"
            selectedKey={startTime}
            disabledKeys={disabledStartTimeOptions}
            onSelectionChange={(value) => {
              const option = options.find((option) => option.id === value);
              if (option) {
                const newCalendarTime = toCalendarDateTime(
                  startDate,
                  new Time(option.hour, option.minute, 0, 0),
                );

                setStartDateTime(newCalendarTime);

                if (newCalendarTime.compare(endDateTime) >= 0) {
                  setEndDateTime(
                    newCalendarTime.add({
                      minutes: 30,
                    }),
                  );
                }
              }
            }}
          >
            <Select items={options}>
              {(item) => {
                return <SelectItem>{item.value}</SelectItem>;
              }}
            </Select>
          </SelectField>
        </div>

        <div className="flex gap-1">
          <DatePicker
            aria-label="Meeting end date"
            value={endDate}
            minValue={startDate}
            onChange={(value) => {
              setEndDateTime(toCalendarDateTime(value, toTime(endDateTime)));
            }}
          >
            <DatePickerButton />
            <FieldError />
          </DatePicker>
          <SelectField
            aria-label="Meeting end time"
            className="min-w-[110px]"
            selectedKey={endTime}
            disabledKeys={disabledEndTimeOptions}
            onSelectionChange={(value) => {
              const option = options.find((option) => option.id === value);

              if (option) {
                setEndDateTime(
                  toCalendarDateTime(
                    endDate,
                    new Time(option.hour, option.minute, 0, 0),
                  ),
                );
              }
            }}
          >
            <Select items={options}>
              {(item) => {
                return <SelectItem>{item.value}</SelectItem>;
              }}
            </Select>
          </SelectField>
        </div>
      </div>
    </Group>
  );
};
