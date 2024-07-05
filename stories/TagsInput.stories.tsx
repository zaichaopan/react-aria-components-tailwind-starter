import React from 'react';
import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { TagsInputField, TagsInput } from '../src/TagsInput';
import { Description, FieldError, Label } from '../src/Field';
import { useListData } from 'react-stately';
import { Form } from '../src/Form';
import { Button } from '../src/Button';

const meta: Meta = {
  title: 'TagInput',
  parameters: {
    layout: 'centered',
    docs: {
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
  const list = useListData({
    initialItems: [{ id: 1, name: 'React' }],
  });

  const [isInvalid, setIsInvalid] = React.useState(false);

  return (
    <Form
      onSubmit={(e) => {
        if (list.items.length === 0) {
          setIsInvalid(true);

          e.preventDefault();
          return;
        }

        setIsInvalid(false);
      }}
    >
      <TagsInputField
        list={list}
        onTagAdd={() => {
          setIsInvalid(false);
        }}
        isInvalid={isInvalid}
      >
        <Label>Tags</Label>
        <Description>Press enter to add new tag</Description>
        <TagsInput />
        <FieldError>Please enter a tag</FieldError>
      </TagsInputField>
      <Button className="self-start" type="submit">
        Save
      </Button>
    </Form>
  );
};
