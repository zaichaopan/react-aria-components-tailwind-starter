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
