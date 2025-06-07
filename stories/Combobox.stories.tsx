import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { Form } from '../src/form';
import { Button } from '../src/button';
import {
  ComboBox,
  ComboBoxListBox,
  ComboBoxPopover,
  ComboBoxClearButton,
  ComboBoxButton,
  ComboBoxListItem,
  ComboBoxSection,
  ComboBoxGroup,
  ComboBoxInput,
  ComboBoxListItemLabel,
  ComboBoxListItemDescription,
} from '../src/combobox';
import { Description, FieldError, Label } from '../src/field';
import { docs } from '../.storybook/docs';
import { Text } from '../src/text';
import { users } from './users';
import { Avatar } from '../src/avatar';
import { SearchIcon } from '../src/icons/outline/search';
import { SpinnerIcon } from '../src/icons/outline/spinner';
import { useAsyncList } from 'react-stately';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateTitle,
} from '../src/empty-state';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxClearButton />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const InputWithSearchIcon = () => {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <SearchIcon />
        <ComboBoxInput />
        <ComboBoxClearButton />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const ComboboxDescription = () => {
  return (
    <div className="space-y-12">
      <ComboBox>
        <Label>Favorite Animal</Label>
        <Description>Choose your favorite animal</Description>

        <ComboBoxGroup>
          <ComboBoxInput />
          <ComboBoxButton />
        </ComboBoxGroup>

        <ComboBoxPopover>
          <ComboBoxListBox>
            <ComboBoxListItem>Aardvark</ComboBoxListItem>
            <ComboBoxListItem>Cat</ComboBoxListItem>
            <ComboBoxListItem>Dog</ComboBoxListItem>
            <ComboBoxListItem>Kangaroo</ComboBoxListItem>
            <ComboBoxListItem>Panda</ComboBoxListItem>
            <ComboBoxListItem>Snake</ComboBoxListItem>
          </ComboBoxListBox>
        </ComboBoxPopover>
      </ComboBox>

      <ComboBox>
        <Label>Favorite Animal</Label>

        <ComboBoxGroup>
          <ComboBoxInput />
          <ComboBoxButton />
        </ComboBoxGroup>
        <Description>Choose your favorite animal</Description>

        <ComboBoxPopover>
          <ComboBoxListBox>
            <ComboBoxListItem>Aardvark</ComboBoxListItem>
            <ComboBoxListItem>Cat</ComboBoxListItem>
            <ComboBoxListItem>Dog</ComboBoxListItem>
            <ComboBoxListItem>Kangaroo</ComboBoxListItem>
            <ComboBoxListItem>Panda</ComboBoxListItem>
            <ComboBoxListItem>Snake</ComboBoxListItem>
          </ComboBoxListBox>
        </ComboBoxPopover>
      </ComboBox>
    </div>
  );
};

export const OpenOnInputFocus = () => {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
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

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox
          renderEmptyState={() => {
            return <Text className="py-4 text-center">Not result found</Text>;
          }}
        >
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const DisabledItems = () => {
  return (
    <ComboBox disabledKeys={['snake']}>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const DisabledCombobox = () => {
  return (
    <ComboBox isDisabled>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const ReadonlyState = () => {
  return (
    <ComboBox isReadOnly>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const Sections = () => {
  return (
    <ComboBox>
      <Label>Preferred fruit or vegetable</Label>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxSection title="Fruit">
            <ComboBoxListItem id="Apple">Apple</ComboBoxListItem>
            <ComboBoxListItem id="Banana">Banana</ComboBoxListItem>
            <ComboBoxListItem id="Orange">Orange</ComboBoxListItem>
            <ComboBoxListItem id="Honeydew">Honeydew</ComboBoxListItem>
            <ComboBoxListItem id="Grapes">Grapes</ComboBoxListItem>
            <ComboBoxListItem id="Watermelon">Watermelon</ComboBoxListItem>
            <ComboBoxListItem id="Cantaloupe">Cantaloupe</ComboBoxListItem>
            <ComboBoxListItem id="Pear">Pear</ComboBoxListItem>
          </ComboBoxSection>
          <ComboBoxSection title="Vegetable">
            <ComboBoxListItem id="Cabbage">Cabbage</ComboBoxListItem>
            <ComboBoxListItem id="Broccoli">Broccoli</ComboBoxListItem>
            <ComboBoxListItem id="Carrots">Carrots</ComboBoxListItem>
            <ComboBoxListItem id="Lettuce">Lettuce</ComboBoxListItem>
            <ComboBoxListItem id="Spinach">Spinach</ComboBoxListItem>
            <ComboBoxListItem id="Bok Choy">Bok Choy</ComboBoxListItem>
            <ComboBoxListItem id="Cauliflower">Cauliflower</ComboBoxListItem>
            <ComboBoxListItem id="Potatoes">Potatoes</ComboBoxListItem>
          </ComboBoxSection>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const ItemWithDescription = () => {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Select action</Label>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem textValue="Add to queue">
            <ComboBoxListItemLabel>Add to queue</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Add to current watch queue.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
          <ComboBoxListItem textValue="Add review">
            <ComboBoxListItemLabel>Add review</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Post a review for the episode.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
          <ComboBoxListItem textValue="Subscribe to series">
            <ComboBoxListItemLabel>Subscribe to series</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Add series to your subscription list and be notified when a new
              episode airs.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
          <ComboBoxListItem textValue="Report">
            <ComboBoxListItemLabel>Report</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Report an issue/violation.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const CheckIconPlacement = () => {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxClearButton />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox checkIconPlacement="start">
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const ItemWithAvatar = () => {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Assign to</Label>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox items={users}>
          {(user) => {
            return (
              <ComboBoxListItem textValue={user.name}>
                <Avatar
                  className="rounded-full"
                  src={user.avatar}
                  alt={user.name}
                />
                <ComboBoxListItemLabel>{user.name}</ComboBoxListItemLabel>
              </ComboBoxListItem>
            );
          }}
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};

export const ValidationErrors = () => {
  return (
    <Form className="flex flex-col items-start space-y-4">
      <ComboBox isRequired>
        <Label>Favorite Animal</Label>
        <Description>Choose your favorite animal</Description>
        <ComboBoxGroup>
          <ComboBoxInput />
          <ComboBoxButton />
        </ComboBoxGroup>
        <ComboBoxPopover>
          <ComboBoxListBox>
            <ComboBoxListItem>Aardvark</ComboBoxListItem>
            <ComboBoxListItem>Cat</ComboBoxListItem>
            <ComboBoxListItem>Dog</ComboBoxListItem>
            <ComboBoxListItem>Kangaroo</ComboBoxListItem>
            <ComboBoxListItem>Panda</ComboBoxListItem>
            <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
          </ComboBoxListBox>
        </ComboBoxPopover>
        <FieldError />
      </ComboBox>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const AsyncQuery = () => {
  const [selectedItem, setSelectedItem] = React.useState<{
    id: string;
    name: string;
  } | null>(null);

  const list = useAsyncList<{
    id: string;
    name: string;
  }>({
    initialFilterText: '',
    async load({ signal, filterText }) {
      if (!filterText) {
        return { items: [] };
      }

      if (filterText === selectedItem?.name) {
        return { items: [selectedItem] };
      }

      const res = await fetch(
        `https://api.github.com/search/repositories?q=topic:${filterText}`,
        { signal },
      );
      const json = await res.json();
      return { items: json.items };
    },
  });

  return (
    <ComboBox
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      allowsEmptyCollection
      items={list.items}
      allowsCustomValue
      onSelectionChange={(key) => {
        setSelectedItem(list.items.find((item) => item.id === key) ?? null);
      }}
    >
      <Label>Search Repositories</Label>
      <Description>Search for repositories by topic</Description>
      <ComboBoxGroup>
        {list.isLoading ? <SpinnerIcon /> : <SearchIcon />}
        <ComboBoxInput placeholder="Search repositories…" />
        <ComboBoxClearButton
          isDisabled={list.isLoading}
          onPress={() => {
            list.setFilterText('');
            setSelectedItem(null);
          }}
        />
      </ComboBoxGroup>
      <ComboBoxPopover
        className={list.isLoading && list.items.length === 0 ? 'hidden' : ''}
      >
        <ComboBoxListBox<{ id: string; name: string }>
          renderEmptyState={() => {
            return (
              <EmptyState>
                <EmptyStateTitle elementType="div" displayLevel={2}>
                  No results found
                </EmptyStateTitle>
                <EmptyStateDescription>
                  Try searching for something else
                </EmptyStateDescription>
              </EmptyState>
            );
          }}
        >
          {(item) => (
            <ComboBoxListItem textValue={item.name}>
              <ComboBoxListItemLabel>{item.name}</ComboBoxListItemLabel>
            </ComboBoxListItem>
          )}
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
};
