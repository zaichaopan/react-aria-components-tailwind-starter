import React from 'react';
import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import { useListData } from 'react-stately';
import { Avatar } from '../src/Avatar';
import { Strong, Text } from '../src/Text';
import {
  MultiSelectField,
  MultiSelect,
  MultiSelectItem,
  SelectionTag,
} from '../src/MultiSelect';
import { Description, FieldError, Label } from '../src/Field';

const meta: Meta<typeof MultiSelect> = {
  title: 'MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Use the **MultiSelectField**, **MultiSelect**, **SelectionTag**, **MultiSelectItem** to build multi select components.
          `,
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

type User = {
  id: number;
  src: string;
  userName: string;
  textValue: string;
};
export const Example = () => {
  const selectedList = useListData<User>({
    initialItems: [],
  });

  const [isInvalid, setIsInvalid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined,
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        if (selectedList.items.length === 0) {
          setIsInvalid(true);
          setErrorMessage('Please select at least one item.');
          return;
        }

        alert('submitting');
      }}
    >
      <MultiSelectField<User>
        isInvalid={isInvalid}
        selectedList={selectedList}
        name="member"
        onItemAdd={(key) => {
          console.log('item add', key);
          setIsInvalid(false);
          setErrorMessage(undefined);
        }}
        onItemRemove={(key) => {
          console.log('item remove', key);
        }}
        items={[
          {
            id: 1,
            textValue: 'Cameron',
            userName: 'Cameron',
            src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            id: 2,
            textValue: 'Jane Cooper',
            userName: 'Jane Cooper',
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            id: 3,
            textValue: 'Kristin Watson',
            userName: 'Kristin Watson',
            src: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            id: 4,
            textValue: 'Courtney Henry',
            userName: 'Courtney Henry',
            src: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            id: 5,
            textValue: 'Theresa Webb',
            userName: 'Theresa Webb',
            src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            id: 6,
            textValue: 'Jenny Wilson',
            userName: 'Jenny Wilson',
            src: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
        ]}
      >
        <Label>Assignee</Label>
        <Description>The assignee will be notified once assigned.</Description>
        <MultiSelect<User>
          renderEmptyState={(inputValue) => {
            return (
              <Text className="p-2">
                {inputValue ? (
                  <>
                    No results found for: <Strong>{inputValue}</Strong>
                  </>
                ) : (
                  `No options`
                )}
              </Text>
            );
          }}
          tag={(item) => {
            return (
              <SelectionTag textValue={item.textValue}>
                <Avatar src={item.src} alt={item.userName} className="size-6" />
                {item.textValue}
              </SelectionTag>
            );
          }}
        >
          {(item) => {
            return (
              <MultiSelectItem
                className="gap-2 px-4"
                textValue={item.textValue}
              >
                <Avatar alt={item.userName} src={item.src} className="size-6" />
                <span>{item.userName}</span>
              </MultiSelectItem>
            );
          }}
        </MultiSelect>
        <FieldError>{errorMessage}</FieldError>
      </MultiSelectField>
      <Button type="submit" className="self-start">
        Submit
      </Button>
    </Form>
  );
};

export const ExampleOne = () => {
  const selectedList = useListData<{ id: string; textValue: string }>({
    initialItems: [],
  });

  return (
    <MultiSelectField<{ id: string; textValue: string }>
      isDisabled
      isRequired
      selectedList={selectedList}
      items={[
        {
          id: 'react',
          textValue: 'React',
        },
        {
          id: 'vue',
          textValue: 'Vue',
        },
        {
          id: 'solid',
          textValue: 'Solid',
        },
        {
          id: 'svelte',
          textValue: 'Svelte',
        },
        {
          id: 'qwik',
          textValue: 'Qwik',
        },
      ]}
    >
      <Label>Your favorite libraries</Label>
      <MultiSelect<{ id: string; textValue: string }>
        renderEmptyState={(inputValue) => {
          return (
            <Text className="p-2">
              {inputValue ? (
                <>
                  No results found for: <Strong>{inputValue}</Strong>
                </>
              ) : (
                `No options`
              )}
            </Text>
          );
        }}
        tag={(item) => {
          return (
            <SelectionTag textValue={item.textValue} className="pl-3">
              {item.textValue}
            </SelectionTag>
          );
        }}
      >
        {(item) => {
          return (
            <MultiSelectItem className="gap-2 px-4" textValue={item.textValue}>
              {item.textValue}
            </MultiSelectItem>
          );
        }}
      </MultiSelect>
      <FieldError></FieldError>
    </MultiSelectField>
  );
};
