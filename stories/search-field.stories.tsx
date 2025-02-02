import { Label, Description } from '../src/field';
import { SearchField, SearchInput } from '../src/search-field';
import { docs } from '../.storybook/docs';

const meta = {
  title: 'Search Field',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/SearchField.html#searchfield" target="_blank">**search field**</a> allows a user to enter and clear a search query..',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
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

export const SearchFieldWithDescription = () => {
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

export const SearchFieldWithPendingState = () => {
  return (
    <SearchField>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput isPending placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const SearchFieldWithDisabledState = () => {
  return (
    <SearchField isDisabled>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};

export const SearchFieldWithReadonlyState = () => {
  return (
    <SearchField isReadOnly>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
};
