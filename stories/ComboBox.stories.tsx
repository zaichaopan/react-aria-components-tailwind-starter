import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import {
  ComboBoxFiled,
  ComboBox,
  ComboBoxItem,
  ComboBoxSection,
} from '../src/ComboBox';
import { Description, FieldError, Label } from '../src/Field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof ComboBox> = {
  title: 'ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/ComboBox.html#combobox" target="_blank">**combo box**</a> combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
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
    <ComboBoxFiled>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBox>
        <ComboBoxItem>Aardvark</ComboBoxItem>
        <ComboBoxItem>Cat</ComboBoxItem>
        <ComboBoxItem>Dog</ComboBoxItem>
        <ComboBoxItem>Kangaroo</ComboBoxItem>
        <ComboBoxItem>Panda</ComboBoxItem>
        <ComboBoxItem>Snake</ComboBoxItem>
      </ComboBox>
    </ComboBoxFiled>
  );
};

export const DisabledItems = () => {
  return (
    <ComboBoxFiled disabledKeys={['snake']}>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBox>
        <ComboBoxItem>Aardvark</ComboBoxItem>
        <ComboBoxItem>Cat</ComboBoxItem>
        <ComboBoxItem>Dog</ComboBoxItem>
        <ComboBoxItem>Kangaroo</ComboBoxItem>
        <ComboBoxItem>Panda</ComboBoxItem>
        <ComboBoxItem id="snake">Snake</ComboBoxItem>
      </ComboBox>
    </ComboBoxFiled>
  );
};

export const Sections = () => (
  <ComboBoxFiled>
    <Label>Preferred fruit or vegetable</Label>
    <ComboBox>
      <ComboBoxSection title="Fruit">
        <ComboBoxItem id="Apple">Apple</ComboBoxItem>
        <ComboBoxItem id="Banana">Banana</ComboBoxItem>
        <ComboBoxItem id="Orange">Orange</ComboBoxItem>
        <ComboBoxItem id="Honeydew">Honeydew</ComboBoxItem>
        <ComboBoxItem id="Grapes">Grapes</ComboBoxItem>
        <ComboBoxItem id="Watermelon">Watermelon</ComboBoxItem>
        <ComboBoxItem id="Cantaloupe">Cantaloupe</ComboBoxItem>
        <ComboBoxItem id="Pear">Pear</ComboBoxItem>
      </ComboBoxSection>
      <ComboBoxSection title="Vegetable">
        <ComboBoxItem id="Cabbage">Cabbage</ComboBoxItem>
        <ComboBoxItem id="Broccoli">Broccoli</ComboBoxItem>
        <ComboBoxItem id="Carrots">Carrots</ComboBoxItem>
        <ComboBoxItem id="Lettuce">Lettuce</ComboBoxItem>
        <ComboBoxItem id="Spinach">Spinach</ComboBoxItem>
        <ComboBoxItem id="Bok Choy">Bok Choy</ComboBoxItem>
        <ComboBoxItem id="Cauliflower">Cauliflower</ComboBoxItem>
        <ComboBoxItem id="Potatoes">Potatoes</ComboBoxItem>
      </ComboBoxSection>
    </ComboBox>
  </ComboBoxFiled>
);

export const Validation = () => (
  <Form className="flex flex-col items-start gap-2">
    <ComboBoxFiled isRequired>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBox>
        <ComboBoxItem>Aardvark</ComboBoxItem>
        <ComboBoxItem>Cat</ComboBoxItem>
        <ComboBoxItem>Dog</ComboBoxItem>
        <ComboBoxItem>Kangaroo</ComboBoxItem>
        <ComboBoxItem>Panda</ComboBoxItem>
        <ComboBoxItem id="snake">Snake</ComboBoxItem>
      </ComboBox>
      <FieldError />
    </ComboBoxFiled>
    <Button type="submit">Submit</Button>
  </Form>
);
