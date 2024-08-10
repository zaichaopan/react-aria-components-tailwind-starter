import type { Meta } from '@storybook/react';
import { Checkbox, CheckboxField, CheckboxGroup } from '../src/checkbox';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { Strong, Text } from '../src/text';
import { Label, Description, FieldError } from '../src/field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Checkbox.html#checkbox" target="_blank">**checkbox**</a> allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.',
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
  return <Checkbox>I accept the terms and conditions</Checkbox>;
};

export const CheckboxDescription = () => {
  return (
    <CheckboxField>
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
        'Use **CheckboxField** and **Description** component to add checkbox description.',
    },
  },
};

export const CheckboxDisabled = () => {
  return (
    <CheckboxField>
      <Checkbox isDisabled>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

CheckboxDisabled.parameters = {
  docs: {
    description: {
      story:
        'Use the **isDisabled** prop of **Checkbox** component to disable checkbox.',
    },
  },
};

export const CheckboxGroups = () => {
  return (
    <CheckboxGroup>
      <Label>Email settings</Label>
      <Text className="pb-4">
        Personalize your email experience according to your preferences and
        needs
      </Text>
      <Checkbox value="newsletter">Newsletter</Checkbox>
      <Checkbox value="deals">Deals</Checkbox>
      <Checkbox value="notification">Notifications</Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroups.parameters = {
  docs: {
    description: {
      story: 'Use **CheckboxGroup** and **Label** component to build your checkbox group.',
    },
  },
};

export const CheckboxGroupsWithDescription = () => {
  return (
    <CheckboxGroup>
      <Label>Email settings</Label>
      <Text className="pb-4">
        Personalize your email experience according to your preferences and
        needs
      </Text>
      <CheckboxField>
        <Checkbox value="newsletter">Newsletter</Checkbox>
        <Description>Receive our newsletter once per week</Description>
      </CheckboxField>

      <CheckboxField>
        <Checkbox value="deals">Deals</Checkbox>
        <Description>The best deals and sales for members</Description>
      </CheckboxField>

      <CheckboxField>
        <Checkbox value="notification">Notifications</Checkbox>
        <Description>Notifications about your orders</Description>
      </CheckboxField>
    </CheckboxGroup>
  );
};

export const CheckboxGroupHorizontal = () => {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <div className="flex gap-3 ">
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </div>
    </CheckboxGroup>
  );
};

export const CheckboxLabelPosition = () => {
  return (
    <CheckboxGroup>
      <Label>Email settings</Label>
      <Text className="pb-4">
        Personalize your email experience according to your preferences and
        needs
      </Text>
      <CheckboxField>
        <Checkbox value="newsletter" labelPosition="left">
          Newsletter
        </Checkbox>
        <Description>Receive our newsletter once per week</Description>
      </CheckboxField>

      <CheckboxField>
        <Checkbox value="deals" labelPosition="left">
          Deals
        </Checkbox>
        <Description>The best deals and sales for members</Description>
      </CheckboxField>

      <CheckboxField>
        <Checkbox value="notification" labelPosition="left">
          Notifications
        </Checkbox>
        <Description>Notifications about your orders</Description>
      </CheckboxField>
    </CheckboxGroup>
  );
};

CheckboxLabelPosition.parameters = {
  docs: {
    description: {
      story:
        'Use **labelPosition="left"** to position label to the left size of the checkbox.',
    },
  },
};

export const CheckboxGroupValidation = () => {
  return (
    <Form>
      <CheckboxGroup isRequired>
        <Label>Email settings</Label>
        <Text className="pb-4">
          Personalize your email experience according to your preferences and
          needs
        </Text>
        <CheckboxField>
          <Checkbox value="newsletter">Newsletter</Checkbox>
          <Description>Receive our newsletter once per week</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="deals">Deals</Checkbox>
          <Description>The best deals and sales for members</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="notification">Notifications</Checkbox>
          <Description>Notifications about your orders</Description>
        </CheckboxField>
        <FieldError />
      </CheckboxGroup>
      <Button className="self-start" type="submit">
        Save
      </Button>
    </Form>
  );
};

CheckboxGroupValidation.parameters = {
  docs: {
    description: {
      story:
        'Combine **Form**, **FieldError** with **CheckboxGroup** component to add validation when submitting form.',
    },
  },
};

export const CheckboxCards = () => {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Checkbox
        labelPosition="left"
        className="w-56 justify-between rounded-md border px-4 py-2"
        value="A1 keyboard"
      >
        <div>
          <Strong>A1 keyboard</Strong>
          <Text>US Layout</Text>
        </div>
      </Checkbox>

      <Checkbox
        labelPosition="left"
        value="Pro mouse"
        className="w-56 justify-between rounded-md border px-4 py-2"
      >
        <div>
          <Strong>Pro mouse</Strong>
          <Text>Zero-lag wireless</Text>
        </div>
      </Checkbox>

      <Checkbox
        labelPosition="left"
        value="lightning mat"
        className="w-56 justify-between  rounded-md border px-4 py-2"
      >
        <div>
          <Strong>Lightning Mat</Strong>
          <Text>Wireless charging</Text>
        </div>
      </Checkbox>
    </div>
  );
};
