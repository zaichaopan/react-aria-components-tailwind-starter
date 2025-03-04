import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/field';
import { NativeSelect, NativeSelectField } from '../src/native-select';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <NativeSelectField className="sm:w-80">
      <Label>Choose a pet</Label>
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

export const WithDescription = () => {
  return (
    <div className="space-y-12">
      <NativeSelectField className="sm:w-80">
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
      <NativeSelectField className="sm:w-80">
        <Label>Choose a pet</Label>
        <NativeSelect name="pet">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </NativeSelect>
        <Description>Please choose an option</Description>
      </NativeSelectField>
    </div>
  );
};

export const WithDisabledState = () => {
  return (
    <NativeSelectField className="sm:w-80">
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

export const WithDisabledOptions = () => {
  return (
    <NativeSelectField className="sm:w-80">
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
