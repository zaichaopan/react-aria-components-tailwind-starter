import type { Meta } from '@storybook/react';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  CheckboxGroupContent,
} from '../src/Checkbox';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import { Strong, Text } from '../src/Text';
import { Label, Description, FieldError } from '../src/Field';
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
        'Use **CheckboxField** and **Description** component to add checkbox description:',
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
        'Use **isDisabled** prop of **Checkbox** component to disable checkbox:',
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
      <CheckboxGroupContent>
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
      </CheckboxGroupContent>
    </CheckboxGroup>
  );
};

CheckboxGroups.parameters = {
  docs: {
    description: {
      story:
        'Use **CheckboxGroup**, **Label**, **CheckboxGroupContent** to build your checkbox group:',
    },
  },
};

export const CheckboxGroupHorizontal = () => {
  return (
    <CheckboxGroup orientation="horizontal">
      <Label>Favorite sports</Label>
      <CheckboxGroupContent>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroupContent>
    </CheckboxGroup>
  );
};

CheckboxGroupHorizontal.parameters = {
  docs: {
    description: {
      story:
        'Use **orientation="horizontal"** to build horizontal checkbox group:',
    },
  },
};

export const CheckboxLabelPlacement = () => {
  return (
    <CheckboxGroup>
      <Label>Email settings</Label>
      <Text className="pb-4">
        Personalize your email experience according to your preferences and
        needs
      </Text>
      <CheckboxGroupContent>
        <CheckboxField>
          <Checkbox value="newsletter" labelPlacement="left">
            Newsletter
          </Checkbox>
          <Description>Receive our newsletter once per week</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="deals" labelPlacement="left">
            Deals
          </Checkbox>
          <Description>The best deals and sales for members</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="notification" labelPlacement="left">
            Notifications
          </Checkbox>
          <Description>Notifications about your orders</Description>
        </CheckboxField>
      </CheckboxGroupContent>
    </CheckboxGroup>
  );
};

CheckboxLabelPlacement.parameters = {
  docs: {
    description: {
      story:
        'Use **labelPlacement="left"** to position label to the left size of the checkbox:',
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
        <CheckboxGroupContent>
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
        </CheckboxGroupContent>

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
        'Combine **Form**, **FieldError** with **CheckboxGroup** to add validation when submitting form:',
    },
  },
};

export const CheckboxCards = () => {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Checkbox
        labelPlacement="left"
        className="w-56 justify-between rounded-md border px-4 py-2"
        value="A1 keyboard"
      >
        <div>
          <Strong>A1 keyboard</Strong>
          <Text>US Layout</Text>
        </div>
      </Checkbox>

      <Checkbox
        labelPlacement="left"
        value="Pro mouse"
        className="w-56 justify-between rounded-md border px-4 py-2"
      >
        <div>
          <Strong>Pro mouse</Strong>
          <Text>Zero-lag wireless</Text>
        </div>
      </Checkbox>

      <Checkbox
        labelPlacement="left"
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
