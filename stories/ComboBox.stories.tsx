import React from 'react';
import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from '../src/Button';
import {
  ComboBox,
  ComboBoxListBox,
  ComboBoxPopover,
  ClearButton,
  TriggerButton,
  ComboBoxControl,
} from '../src/ComboBox';
import { DropdownItem, DropdownSection } from '../src/ListBox';
import { Description, FieldError, Input, Label } from '../src/Field';
import { docs } from '../.storybook/docs';
import { Text } from '../src/Text';
import { Search } from 'lucide-react';
import { Icon } from '../src/Icon';

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
    <ComboBox>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxControl>
        <Input />
        <TriggerButton />
      </ComboBoxControl>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem>Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const OpenOnInputFocus = () => {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxControl>
        <Input />
        <TriggerButton />
      </ComboBoxControl>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem>Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const AllowsEmptyCollection = () => {
  return (
    <ComboBox menuTrigger="focus" allowsEmptyCollection>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxControl>
        <Input />
        <TriggerButton />
      </ComboBoxControl>

      <ComboBoxPopover>
        <ComboBoxListBox
          renderEmptyState={() => {
            return <Text className="py-4 text-center">Not result found</Text>;
          }}
        >
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem>Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

AllowsEmptyCollection.parameters = {
  docs: {
    description: {
      story:
        'Whether the combo box allows the menu to be open when the collection is empty.',
    },
  },
};

export const DisabledItems = () => {
  return (
    <ComboBox disabledKeys={['snake']}>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxControl>
        <Input />
        <TriggerButton />
      </ComboBoxControl>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem id="snake">Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const DisabledComboBox = () => {
  return (
    <ComboBox isDisabled>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxControl>
        <Input />
        <TriggerButton />
      </ComboBoxControl>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem id="snake">Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const Sections = () => {
  return (
    <ComboBox>
      <Label>Preferred fruit or vegetable</Label>
      <ComboBoxControl>
        <Input />
        <TriggerButton />
      </ComboBoxControl>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownSection title="Fruit">
            <DropdownItem id="Apple">Apple</DropdownItem>
            <DropdownItem id="Banana">Banana</DropdownItem>
            <DropdownItem id="Orange">Orange</DropdownItem>
            <DropdownItem id="Honeydew">Honeydew</DropdownItem>
            <DropdownItem id="Grapes">Grapes</DropdownItem>
            <DropdownItem id="Watermelon">Watermelon</DropdownItem>
            <DropdownItem id="Cantaloupe">Cantaloupe</DropdownItem>
            <DropdownItem id="Pear">Pear</DropdownItem>
          </DropdownSection>
          <DropdownSection title="Vegetable">
            <DropdownItem id="Cabbage">Cabbage</DropdownItem>
            <DropdownItem id="Broccoli">Broccoli</DropdownItem>
            <DropdownItem id="Carrots">Carrots</DropdownItem>
            <DropdownItem id="Lettuce">Lettuce</DropdownItem>
            <DropdownItem id="Spinach">Spinach</DropdownItem>
            <DropdownItem id="Bok Choy">Bok Choy</DropdownItem>
            <DropdownItem id="Cauliflower">Cauliflower</DropdownItem>
            <DropdownItem id="Potatoes">Potatoes</DropdownItem>
          </DropdownSection>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const Validation = () => {
  return (
    <Form className="flex flex-col items-start gap-2">
      <ComboBox isRequired>
        <Label>Favorite Animal</Label>
        <Description>Choose your favorite animal</Description>
        <ComboBoxControl>
          <Input />
          <TriggerButton />
        </ComboBoxControl>
        <ComboBoxPopover>
          <ComboBoxListBox>
            <DropdownItem>Aardvark</DropdownItem>
            <DropdownItem>Cat</DropdownItem>
            <DropdownItem>Dog</DropdownItem>
            <DropdownItem>Kangaroo</DropdownItem>
            <DropdownItem>Panda</DropdownItem>
            <DropdownItem id="snake">Snake</DropdownItem>
          </ComboBoxListBox>
        </ComboBoxPopover>
        <FieldError />
      </ComboBox>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export function ClearButtons() {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxControl>
        <Input />
        <ClearButton />
      </ComboBoxControl>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem id="snake">Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
      <FieldError />
    </ComboBox>
  );
}

export function SearchBox() {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();

        if (ref.current) {
          ref.current.focus();
        }
      }
    };
    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <ComboBox menuTrigger="focus" aria-label="Search">
      <Description>Open the combobox using ⌘K</Description>
      <ComboBoxControl>
        <Icon>
          <Search className="absolute left-2 top-1/2 w-4 -translate-y-1/2 text-muted" />
        </Icon>

        <Input placeholder="Search&hellip;" ref={ref} className="px-7" />

        <ClearButton />
      </ComboBoxControl>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <DropdownItem>Aardvark</DropdownItem>
          <DropdownItem>Cat</DropdownItem>
          <DropdownItem>Dog</DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Panda</DropdownItem>
          <DropdownItem id="snake">Snake</DropdownItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
      <FieldError />
    </ComboBox>
  );
}
