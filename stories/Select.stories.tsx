import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import { SelectField, Select, SelectItem, SelectSection } from '../src/Select';
import { Avatar } from '../src/Avatar';
import { Description, FieldError, Label } from '../src/Field';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Select.html#select" target="_blank">**select**</a> displays a collapsible list of options and allows a user to select one of them..',
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
    <SelectField className="w-full" placeholder="Pick sound">
      <Label>Notification sound</Label>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
    </SelectField>
  );
};

export const SectionDescription = () => {
  return (
    <SelectField placeholder="Pick sound">
      <Label>Notification sound</Label>
      <Description>Select a sound for incoming notifications</Description>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
    </SelectField>
  );
};

export const ControlledSection = () => {
  return (
    <SelectField placeholder="Pick sound">
      <Label>Notification sound</Label>
      <Description>Select a sound for incoming notifications</Description>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
    </SelectField>
  );
};

export const DisabledSelection = () => {
  return (
    <SelectField
      placeholder="Pick sound"
      selectedKey="ding"
      disabledKeys={['boring']}
    >
      <Label>Notification sound</Label>
      <Description>Select a sound for incoming notifications</Description>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
    </SelectField>
  );
};

export const DisabledWholeSelect = () => {
  return (
    <SelectField isDisabled placeholder="Pick sound" selectedKey="ding">
      <Label>Notification sound</Label>
      <Description>Select a sound for incoming notifications</Description>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
    </SelectField>
  );
};

export const Sections = () => {
  return (
    <SelectField>
      <Label>Preferred fruit or vegetable</Label>

      <Select>
        <SelectSection title="Fruit">
          <SelectItem id="Apple">Apple</SelectItem>
          <SelectItem id="Banana">Banana</SelectItem>
          <SelectItem id="Orange">Orange</SelectItem>
          <SelectItem id="Honeydew">Honeydew</SelectItem>
          <SelectItem id="Grapes">Grapes</SelectItem>
          <SelectItem id="Watermelon">Watermelon</SelectItem>
          <SelectItem id="Cantaloupe">Cantaloupe</SelectItem>
          <SelectItem id="Pear">Pear</SelectItem>
        </SelectSection>
        <SelectSection title="Vegetable">
          <SelectItem id="Cabbage">Cabbage</SelectItem>
          <SelectItem id="Broccoli">Broccoli</SelectItem>
          <SelectItem id="Carrots">Carrots</SelectItem>
          <SelectItem id="Lettuce">Lettuce</SelectItem>
          <SelectItem id="Spinach">Spinach</SelectItem>
          <SelectItem id="Bok Choy">Bok Choy</SelectItem>
          <SelectItem id="Cauliflower">Cauliflower</SelectItem>
          <SelectItem id="Potatoes">Potatoes</SelectItem>
        </SelectSection>
      </Select>
    </SelectField>
  );
};

export const CustomWidth = () => {
  return (
    <SelectField className="min-w-[250px]" placeholder="Pick sound">
      <Label>Notification sound</Label>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
    </SelectField>
  );
};

CustomWidth.parameters = {
  docs: {
    description: {
      story: 'Use **min-w-\\*** to set **SelectField** width:',
    },
  },
};

export const CustomSelectionItem = () => {
  return (
    <SelectField
      placeholder="Assign to"
      defaultSelectedKey="1"
      className="min-w-[250px]"
    >
      <Label>Assignee</Label>
      <Select>
        <SelectItem id="1" textValue="Lesly Juarez">
          <Avatar
            className="size-5 rounded-full"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=facearea&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lesly Juarez"
          />
          Lesly Juarez
        </SelectItem>
        <SelectItem id="2" textValue="Christopher Campbell">
          <Avatar
            className="size-5 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Christopher Campbell"
          />
          Christopher Campbell
        </SelectItem>
        <SelectItem id="3" textValue="Jake Nackos">
          <Avatar className="size-5 rounded-full" alt=" Jake Nackos" />
          Jake Nackos
        </SelectItem>
        <SelectItem id="4" textValue="Aiony Haust">
          <Avatar className="size-5 rounded-full" alt="Aiony Haust" />
          Aiony Haust
        </SelectItem>
      </Select>
    </SelectField>
  );
};

export const Validation = () => (
  <Form className="flex flex-col items-start gap-2">
    <SelectField isRequired placeholder="Pick sound">
      <Label>Notification sound</Label>
      <Description>Select a sound for incoming notifications</Description>
      <Select>
        <SelectItem id="none">None</SelectItem>
        <SelectItem id="ding">Ding</SelectItem>
        <SelectItem id="boring">Boring</SelectItem>
        <SelectItem>Drop</SelectItem>
        <SelectItem>Ta-da</SelectItem>
        <SelectItem>Plink</SelectItem>
        <SelectItem>Wow</SelectItem>
        <SelectItem>Here you go</SelectItem>
        <SelectItem>Hi</SelectItem>
      </Select>
      <FieldError></FieldError>
    </SelectField>
    <Button type="submit">Submit</Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};

export const CustomLayout = () => {
  return (
    <Form className="flex flex-col items-start gap-2">
      <SelectField className=" gap-2" placeholder="Pick sound" isRequired>
        <div className="flex items-center gap-2">
          <Label className="text-nowrap pt-1">Favorite sounds</Label>
          <Select>
            <SelectItem id="none">None</SelectItem>
            <SelectItem id="ding">Ding</SelectItem>
            <SelectItem id="boring">Boring</SelectItem>
            <SelectItem>Drop</SelectItem>
            <SelectItem>Ta-da</SelectItem>
            <SelectItem>Plink</SelectItem>
            <SelectItem>Wow</SelectItem>
            <SelectItem>Here you go</SelectItem>
            <SelectItem>Hi</SelectItem>
          </Select>
        </div>

        <FieldError></FieldError>
      </SelectField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
