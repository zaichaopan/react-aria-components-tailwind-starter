import { Label, Description } from '../src/field';
import { SearchField, SearchInput } from '../src/search-field';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <SearchField>
      <Label>Search</Label>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const WithDescription = () => {
  return (
    <div className="space-y-12">
      <SearchField>
        <Label>Search</Label>
        <Description>Input search. Beep boop.</Description>
        <SearchInput placeholder="Search&hellip;" />
      </SearchField>

      <SearchField>
        <Label>Search</Label>
        <SearchInput placeholder="Search&hellip;" />
        <Description>Input search. Beep boop.</Description>
      </SearchField>
    </div>
  );
};

export const WithDisabledState = () => {
  return (
    <SearchField isDisabled>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const WithReadOnlyState = () => {
  return (
    <SearchField isReadOnly>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const WithPendingState = () => {
  return (
    <SearchField>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput isPending placeholder="Search&hellip;" />
    </SearchField>
  );
};
