import React from 'react';
import type { Meta } from '@storybook/react';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  Checkboxes,
} from '../src/checkbox';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { Label, Description, FieldError, LabeledGroup } from '../src/field';
import { docs } from '../.storybook/docs';
import { Group } from 'react-aria-components';
import { Text, TextLink } from '../src/text';
import { Icon } from '../src/icon';
import { twMerge } from 'tailwind-merge';

const meta: Meta = {
  title: 'Checkbox',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Checkbox.html#checkbox" target="_blank">**checkbox**</a> allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return <Checkbox>I accept to the terms and conditions</Checkbox>;
};

export const CheckboxDescription = () => {
  return (
    <CheckboxField className="max-w-sm">
      <Checkbox>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

CheckboxDescription.parameters = {
  docs: {
    description: {
      story:
        'Use the **CheckboxField** and **Description** component to add checkbox description.',
    },
  },
};

export const CheckboxWithDisabledState = () => {
  return (
    <CheckboxField className="max-w-sm">
      <Checkbox isDisabled>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

export const CheckboxWithReadonlyState = () => {
  return (
    <CheckboxField className="max-w-sm">
      <Checkbox isReadOnly>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

export const CheckboxGroups = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

CheckboxGroups.parameters = {
  docs: {
    description: {
      story:
        'Use the **CheckboxGroup** and **Label** component to create a checkbox group.',
    },
  },
};

export const CheckboxGroupWithDescription = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const CheckboxGroupWithCheckboxDescription = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <CheckboxField>
          <Checkbox value="email">Notify via email</Checkbox>
          <Description>We'll send you a confirmation email</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="sms">Notify via SMS</Checkbox>
          <Description>We'll send you a confirmation SMS</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="telegram">Notify via telegram</Checkbox>
          <Description>We'll send you a confirmation telegram</Description>
        </CheckboxField>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const CheckboxGroupWithHorizontalLayout = () => {
  return (
    <CheckboxGroup orientation="horizontal">
      <Label>Notifications</Label>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const CheckboxLabelPlacement = () => {
  return (
    <Checkbox labelPlacement="start">
      I accept the terms and conditions
    </Checkbox>
  );
};

export const CheckboxGroupLabelPlacement = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <CheckboxField>
          <Checkbox value="email" labelPlacement="start">
            Notify via email
          </Checkbox>
          <Description>We'll send you a confirmation email</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="sms" labelPlacement="start">
            Notify via SMS
          </Checkbox>
          <Description>We'll send you a confirmation SMS</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="telegram" labelPlacement="start">
            Notify via telegram
          </Checkbox>
          <Description>We'll send you a confirmation telegram</Description>
        </CheckboxField>
      </Checkboxes>
    </CheckboxGroup>
  );
};

const options = ['Notify via email', 'Notify via SMS', 'Notify via Telegram'];

export const CheckboxWithIndeterminateState = () => {
  const [selected, setSelected] = React.useState<Array<string>>([]);

  return (
    <LabeledGroup>
      <Label className="mb-3">Notifications</Label>

      <Group className="space-y-3">
        <Checkbox
          isSelected={selected.length > 0}
          isIndeterminate={
            selected.length > 0 && selected.length !== options.length
          }
          onChange={(checked) => setSelected(checked ? options : [])}
        >
          Select all
        </Checkbox>

        {options.map((option) => (
          <Checkbox
            key={option}
            name={option}
            isSelected={selected.includes(option)}
            onChange={(checked) => {
              return setSelected((pending) => {
                return checked
                  ? [...pending, option]
                  : pending.filter((item) => item !== option);
              });
            }}
          >
            {option}
          </Checkbox>
        ))}
      </Group>
    </LabeledGroup>
  );
};

export const CheckboxWithValidation = () => {
  return (
    <Form>
      <CheckboxGroup isRequired>
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <CheckboxField>
            <Checkbox value="email">Notify via email</Checkbox>
            <Description>We'll send you a confirmation email</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="sms">Notify via SMS</Checkbox>
            <Description>We'll send you a confirmation SMS</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="telegram">Notify via telegram</Checkbox>
            <Description>We'll send you a confirmation telegram</Description>
          </CheckboxField>
        </Checkboxes>
        <FieldError />
      </CheckboxGroup>
      <Button type="submit">Save</Button>
    </Form>
  );
};

CheckboxWithValidation.parameters = {
  docs: {
    description: {
      story:
        'Use the **Form**, **FieldError** and **CheckboxGroup** components to add validation when submitting form.',
    },
  },
};

const daysOfWeek = [
  {
    label: 'Mo',
    value: 'Monday',
  },
  {
    label: ' Tu',
    value: 'Tuesday',
  },
  {
    label: 'We',
    value: 'Wednesday',
  },
  {
    label: 'Th',
    value: 'Thursday',
  },
  {
    label: 'Fr',
    value: 'Friday',
  },
  {
    label: 'Sa',
    value: 'Saturday',
  },
  {
    label: 'Su',
    value: 'Sunday',
  },
];

export const CheckboxWithCustomization = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Checkbox>
        I agree to the &nbsp;
        <TextLink
          href="https://github.com/zaichaopan/react-aria-components-tailwind-starter"
          target="_blank"
        >
          terms of service
        </TextLink>
      </Checkbox>

      <CheckboxField>
        <Checkbox>
          Label&nbsp;<Text elementType="span">(Sublabel)</Text>
        </Checkbox>
        <Description>
          You can use this checkbox with a label and a description.
        </Description>
      </CheckboxField>

      <CheckboxField className="rounded-lg border p-3">
        <Checkbox labelPlacement="start" className="items-start">
          <div className="flex gap-x-3">
            <Icon className="mt-1">
              <MasterCardIcon />
            </Icon>

            <div>
              <div>
                Label <Text elementType="span">(Sublabel)</Text>
              </div>
              <Text>A short description goes here.</Text>
            </div>
          </div>
        </Checkbox>
      </CheckboxField>

      <CheckboxGroup
        orientation="horizontal"
        defaultValue={['Monday', 'Tuesday', 'Thursday', 'Friday']}
      >
        <Label>Day of week</Label>
        <Checkboxes className="gap-x-1.5">
          {daysOfWeek.map((day) => {
            return (
              <Checkbox
                value={day.value}
                key={day.label}
                aria-label={day.value}
                render={({ isSelected, isFocusVisible }) => (
                  <div
                    className={twMerge(
                      'grid',
                      'place-items-center',
                      'rounded-full',
                      'size-10',
                      'border',
                      isSelected && 'border-accent bg-accent text-white',
                      isFocusVisible &&
                        'outline outline-2 outline-offset-2 outline-ring',
                    )}
                  >
                    {day.label}
                  </div>
                )}
              />
            );
          })}
        </Checkboxes>
      </CheckboxGroup>
    </div>
  );
};

CheckboxWithCustomization.parameters = {
  docs: {
    description: {
      story:
        'Checkbox support fully customization.',
    },
  },
};

function MasterCardIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="24" rx="4" fill="#252525"></rect>
      <path
        d="M19.0537 6.49742H12.9282V17.5026H19.0537V6.49742Z"
        fill="#FF5A00"
      ></path>
      <path
        d="M13.3359 12C13.3359 9.76408 14.3871 7.77961 16 6.49741C14.8129 5.56408 13.3155 5 11.6822 5C7.81295 5 4.68221 8.13074 4.68221 12C4.68221 15.8693 7.81295 19 11.6822 19C13.3155 19 14.8129 18.4359 16 17.5026C14.3848 16.2385 13.3359 14.2359 13.3359 12Z"
        fill="#EB001B"
      ></path>
      <path
        d="M27.3178 12C27.3178 15.8693 24.1871 19 20.3178 19C18.6845 19 17.1871 18.4359 16 17.5026C17.6333 16.2181 18.6641 14.2359 18.6641 12C18.6641 9.76408 17.6129 7.77961 16 6.49741C17.1848 5.56408 18.6822 5 20.3155 5C24.1871 5 27.3178 8.15113 27.3178 12Z"
        fill="#F79E1B"
      ></path>
    </svg>
  );
}
