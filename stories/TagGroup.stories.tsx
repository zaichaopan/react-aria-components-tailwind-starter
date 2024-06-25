import type { Meta } from '@storybook/react';
import { Tag, TagGroup, TagList } from '../src/TagGroup';
import { Label } from '../src/Field';

const meta: Meta<typeof Example> = {
  component: TagGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => {
  return (
    <TagGroup
      {...args}
      selectionMode="single"
      onRemove={() => {
        //
      }}
    >
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag isDisabled>Chocolate</Tag>
        <Tag id="Mint">Mint</Tag>
        <Tag>Strawberry</Tag>
        <Tag>Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
};


