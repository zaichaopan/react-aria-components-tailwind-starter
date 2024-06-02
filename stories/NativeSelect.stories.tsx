import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/Field';
import { NativeSelect, NativeSelectField } from '../src/NativeSelect';

const meta = {
  title: 'NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Native select** renders <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" target="_blank">**\\<select\\>**</a> HTML element represents a control that provides a menu of options.',
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
    <NativeSelectField className='sm:w-80'>
      <Label>Choose a pet</Label>
      <Description>Please choose an option</Description>
      <NativeSelect name="pet">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
};

export const DisabledSelect = () => {
  return (
    <NativeSelectField className='sm:w-80'>
      <Label>Choose a pet</Label>
      <Description>Please choose an option</Description>
      <NativeSelect name="pet" disabled>
        <option value="dog">Dog</option>
        <option value="cat" disabled>
          Cat
        </option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
};



export const DisabledOptions = () => {
  return (
    <NativeSelectField className='sm:w-80'>
      <Label>Choose a pet</Label>
      <Description>Please choose an option</Description>
      <NativeSelect name="pet">
        <option value="dog">Dog</option>
        <option value="cat" disabled>
          Cat
        </option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
};

